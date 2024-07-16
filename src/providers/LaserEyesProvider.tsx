import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as bitcoin from "bitcoinjs-lib";
import {
  initialWalletContext,
  LOCAL_STORAGE_DEFAULT_WALLET,
} from "../consts/settings";
import { useLocalStorage } from "usehooks-ts";
import { Config, LaserEyesContextType } from "../types";
import { UNISAT } from "../consts/wallets";
import {
  getNetworkForUnisat,
  getUnisatNetwork,
  MAINNET,
  REGTEST,
  TESTNET,
} from "../consts/networks";
import { isBase64, isHex } from "../lib/helpers";

const LaserEyesContext =
  createContext<LaserEyesContextType>(initialWalletContext);

const useLaserEyes = (): LaserEyesContextType => {
  return useContext(LaserEyesContext);
};

const LaserEyesProvider = ({
  children,
  config,
}: {
  children: ReactNode;
  config?: Config;
}) => {
  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  });
  const self = selfRef.current;

  const [library, setLibrary] = useState<any>(null);
  const [provider, setProvider] = useState<typeof UNISAT | undefined>();
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [publicKey, setPublicKey] = useState<string>("");
  const [paymentPublicKey, setPaymentPublicKey] = useState<string>("");
  const [address, setAddress] = useState("");
  const [paymentAddress, setPaymentAddress] = useState("");
  const [balance, setBalance] = useState<number | undefined>();
  const [hasUnisat, setHasUnisat] = useState(false);

  const [network, setNetwork] = useLocalStorage<
    typeof MAINNET | typeof TESTNET | typeof REGTEST
  >("network", MAINNET, {
    initializeWithValue: false,
  });

  const defaultWallet = localStorage?.getItem(LOCAL_STORAGE_DEFAULT_WALLET) as
    | typeof UNISAT
    | undefined;

  useEffect(() => {
    if (config) {
      setNetwork(config.network);
      getNetwork().then((foundNetwork) => {
        if (config.network !== foundNetwork) {
          switchNetwork(network);
        } else if (network !== foundNetwork) {
          setNetwork(network);
        }
      });
    }
  }, [config, library]);

  useEffect(() => {
    const unisatLib = (window as any)?.unisat;
    setHasUnisat(!!unisatLib);
  }, []);

  useEffect(() => {
    setBalance(undefined);
  }, [network]);

  useEffect(() => {
    if (provider !== UNISAT) {
      return;
    }

    library.getAccounts().then((accounts: string[]) => {
      handleAccountsChanged(accounts);
    });
    library.on("accountsChanged", handleAccountsChanged);
    library.on("networkChanged", handleNetworkChanged);
    return () => {
      library.removeListener("accountsChanged", handleAccountsChanged);
      library.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [library]);

  useEffect(() => {
    if (defaultWallet && !isConnecting) {
      setProvider(defaultWallet);
      connect(defaultWallet);
    }
  }, []);

  const connectUnisat = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, UNISAT);
      const lib = (window as any).unisat;
      const unisatAccounts = await lib.requestAccounts();
      if (!unisatAccounts) throw new Error("No accounts found");
      const unisatPubKey = await lib.getPublicKey();
      if (!unisatPubKey) throw new Error("No public key found");
      setAccounts(unisatAccounts);
      setAddress(unisatAccounts[0]);
      setPaymentAddress(unisatAccounts[0]);
      setPublicKey(unisatPubKey);
      setPaymentPublicKey(unisatPubKey);
      setLibrary(lib);
      setProvider(UNISAT);
      setConnected(true);
      const balance = await lib?.getBalance();
      setBalance(balance?.total);
    } catch (error) {
      throw error;
    }
  };

  const handleAccountsChanged = (_accounts: string[]) => {
    if (!_accounts.length) {
      disconnect();
      return;
    }

    if (self.accounts[0] === _accounts[0]) {
      return;
    }

    self.accounts = _accounts;
    if (_accounts.length > 0) {
      connect(UNISAT);
    } else {
      setConnected(false);
    }
  };

  const handleNetworkChanged = (
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST
  ) => {
    try {
      let foundNetwork: typeof MAINNET | typeof TESTNET | typeof REGTEST =
        MAINNET;
      if (provider === UNISAT) {
        foundNetwork = getNetworkForUnisat(network);
        setNetwork(foundNetwork);
        connect(provider);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const connect = async (walletName: typeof UNISAT) => {
    setIsConnecting(true);
    try {
      if (!walletName) throw new Error("No wallet provided");
      if (walletName === UNISAT) {
        await connectUnisat();
      } else {
        throw new Error("Unsupported wallet!");
      }
      setConnected(true);
    } catch (error) {
      setIsConnecting(false);
      disconnect();
      throw new Error("Can't lasereyes to wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setAddress("");
    setPaymentAddress("");
    setPublicKey("");
    setPaymentPublicKey("");
    setAccounts([]);
    setProvider(undefined);
    setLibrary(null);
    setConnected(false);
    setBalance(undefined);
    localStorage?.removeItem(LOCAL_STORAGE_DEFAULT_WALLET);
  };

  const requestAccounts = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library.requestAccounts();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const getNetwork = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const unisatNetwork = await library?.getNetwork();
        const foundNetwork = getNetworkForUnisat(unisatNetwork) as
          | typeof MAINNET
          | typeof TESTNET;
        setNetwork(foundNetwork);
        return foundNetwork;
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const switchNetwork = async (
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST
  ) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network);
        await library?.switchNetwork(wantedNetwork);
        setNetwork(network);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const getPublicKey = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const pub = await library?.getPublicKey();
        return await library?.getPublicKey();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const getBalance = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library.getBalance();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const getInscriptions = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library.getInscriptions(0, 10);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const sendBTC = async (to: string, amount: number) => {
    try {
      if (amount <= 0) throw new Error("Amount must be greater than 0");
      if (!Number.isInteger(amount))
        throw new Error("Amount must be an integer");
      if (!library) throw new Error("Library not found");
      if (provider === UNISAT) {
        const txId = await library?.sendBitcoin(to, amount);
        if (!txId) throw new Error("Transaction failed");
        return txId;
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const signMessage = async (message: string) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library?.signMessage(message);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const signPsbt = async (
    psbt: string,
    finalize = false,
    broadcast = false
  ) => {
    try {
      let psbtHex, psbtBase64;
      if (!library) return;
      if (isHex(psbt)) {
        psbtBase64 = bitcoin.Psbt.fromHex(psbt).toBase64();
        psbtHex = psbt;
      } else if (isBase64(psbt)) {
        psbtHex = bitcoin.Psbt.fromBase64(psbt).toHex();
        psbtBase64 = psbt;
      } else {
        throw new Error("Invalid PSBT format");
      }

      if (provider === UNISAT) {
        const signedPsbt = await library?.signPsbt(psbtHex, {
          autoFinalized: finalize,
        });

        const psbtSignedPsbt = bitcoin.Psbt.fromHex(signedPsbt);

        if (finalize && broadcast) {
          const txId = await pushPsbt(signedPsbt);
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId,
          };
        }

        return {
          signedPsbtHex: psbtSignedPsbt.toHex(),
          signedPsbtBase64: psbtSignedPsbt.toBase64(),
          txId: undefined,
        };
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  const pushPsbt = async (psbt: string) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library?.pushPsbt(psbt);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <LaserEyesContext.Provider
      value={{
        library,
        accounts,
        publicKey,
        address,
        paymentAddress,
        paymentPublicKey,
        provider,
        balance,
        network,
        connected,
        isConnecting,
        hasUnisat,

        // functions
        connect,
        disconnect,
        requestAccounts,
        getNetwork,
        switchNetwork,
        getPublicKey,
        getBalance,
        getInscriptions,
        sendBTC,
        signPsbt,
        pushPsbt,
        signMessage,
      }}
    >
      {children}
    </LaserEyesContext.Provider>
  );
};

export { LaserEyesProvider, useLaserEyes };
