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
import { Config, LaserEyesContextType, OYLBalanceResponse } from "../types";
import { OYL, UNISAT, XVERSE } from "../consts/wallets";
import {
  getNetworkForUnisat,
  getUnisatNetwork,
  getXverseNetwork,
  MAINNET,
  REGTEST,
  TESTNET,
  XVERSE_NETWORK,
} from "../consts/networks";
import {
  createSendBtcPsbt,
  findOrdinalsAddress,
  findPaymentAddress,
  getBitcoinNetwork,
  getBTCBalance,
  isBase64,
  isHex,
} from "../lib/helpers";
import {
  getAddress,
  GetAddressOptions,
  request,
  RpcErrorCode,
  signTransaction,
} from "sats-connect";
import { fromOutputScript } from "bitcoinjs-lib/src/address";

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
  const [provider, setProvider] = useState<
    typeof UNISAT | typeof XVERSE | typeof OYL | undefined
  >();
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [publicKey, setPublicKey] = useState<string>("");
  const [paymentPublicKey, setPaymentPublicKey] = useState<string>("");
  const [address, setAddress] = useState("");
  const [paymentAddress, setPaymentAddress] = useState("");
  const [balance, setBalance] = useState<number | undefined>();

  const [hasUnisat, setHasUnisat] = useState<boolean>(false);
  const [hasXverse, setHasXverse] = useState<boolean>(false);
  const [hasOyl, setHasOyl] = useState<boolean>(false);

  const [network, setNetwork] = useLocalStorage<
    typeof MAINNET | typeof TESTNET | typeof REGTEST
  >("network", MAINNET, {
    initializeWithValue: false,
  });

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
    const xverseLib = (window as any)?.XverseProviders?.BitcoinProvider;
    setHasXverse(!!xverseLib);
  }, []);

  useEffect(() => {
    const oylLib = (window as any)?.oyl;
    setHasOyl(!!oylLib);
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
    const defaultWallet = localStorage?.getItem(
      LOCAL_STORAGE_DEFAULT_WALLET
    ) as typeof UNISAT | typeof XVERSE | typeof OYL | undefined;
    if (defaultWallet) {
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

  const connectXverse = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE);
      let xverseNetwork = getXverseNetwork(config?.network || MAINNET);
      const getAddressOptions = {
        payload: {
          purposes: ["ordinals", "payment"],
          message: "Address for receiving Ordinals and payments",
          network: {
            type: xverseNetwork,
          },
        },
        onFinish: (response: any) => {
          setPublicKey(String(response.addresses[0].publicKey));
          setPaymentPublicKey(String(response.addresses[1].publicKey));
          const foundAddress = findOrdinalsAddress(response.addresses);
          const foundPaymentAddress = findPaymentAddress(response.addresses);
          if (foundAddress && foundPaymentAddress) {
            setAddress(foundAddress.address);
            setPaymentAddress(foundPaymentAddress.address);
            setProvider(XVERSE);
            setLibrary((window as any).BitcoinProvider);
          }

          getBTCBalance(foundPaymentAddress.address).then((totalBalance) => {
            setBalance(totalBalance);
          });
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${XVERSE} wallet`);
        },
        onError: (error: any) => {
          throw new Error(`Can't lasereyes to ${XVERSE} wallet`);
        },
      };
      await getAddress(getAddressOptions as GetAddressOptions);
      setConnected(true);
    } catch (error) {
      throw error;
    }
  };

  const connectOyl = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OYL);
      const lib = (window as any).oyl;
      const result = await lib.requestAccounts();
      const oylPubKey = await lib.getPublicKey();

      setPaymentPublicKey(oylPubKey);

      setAccounts(result);
      setAddress(result[0]);
      setPaymentAddress(result[1]);
      setLibrary(lib);
      setProvider(OYL);
      handleAccountsChanged(result);
      setConnected(true);
    } catch (error) {
      throw new Error(`Can't lasereyes to ${OYL} wallet`);
    }
  };

  const connect = async (
    walletName: typeof UNISAT | typeof XVERSE | typeof OYL
  ) => {
    setIsConnecting(true);
    try {
      if (!walletName) throw new Error("No wallet provided");
      if (walletName === UNISAT) {
        console.log("connectin unisat");
        await connectUnisat();
      } else if (walletName === XVERSE) {
        await connectXverse();
      } else if (walletName === OYL) {
        console.log("connectin oyl");
        await connectOyl();
      } else {
        throw new Error("Unsupported wallet..");
      }
      setConnected(true);
    } catch (error) {
      setIsConnecting(false);
      disconnect();
      throw error;
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

  const handleAccountsChanged = (_accounts: string[]) => {
    if (provider !== UNISAT) return;
    if (!_accounts.length) {
      disconnect();
      return;
    }

    if (self.accounts[0] === _accounts[0]) {
      return;
    }

    console.log("acct changed", _accounts[0]);

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
      } else if (provider === XVERSE) {
        throw new Error("Not implemented");
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  };

  const requestAccounts = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library.requestAccounts();
      } else if (provider === XVERSE) {
        const getAddressOptions = {
          payload: {
            // @ts-ignore
            purposes: ["ordinals", "payment"],
            message: "Address for receiving Ordinals and payments",
            network: {
              type: XVERSE_NETWORK,
            },
          },
          onFinish: async (response: any) => {
            const foundAddress = findOrdinalsAddress(response.addresses);
            setAddress(foundAddress.address);
            const foundPaymentAddress = findPaymentAddress(response.addresses);
            setPaymentAddress(foundPaymentAddress);
            setPublicKey(String(response.addresses[0].publicKey));
            setPaymentPublicKey(String(response.addresses[1].publicKey));
          },
          onCancel: () => {
            console.log("CANCELLED");
          },
        };
        return [address];
      } else if (provider === OYL) {
        return await library.requestAccounts();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      } else if (provider === XVERSE) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OYL) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      }
      return config?.network ?? MAINNET;
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
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  };

  const getPublicKey = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library?.getPublicKey();
      } else if (provider === OYL) {
        return await library?.getPublicKey();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      } else if (provider === XVERSE) {
        return await getBTCBalance(paymentAddress);
      } else if (provider === OYL) {
        const balanceResponse: OYLBalanceResponse = await library.getBalance();
        return balanceResponse.btc.total * 100000000;
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
      } else if (provider === OYL) {
        return await library.getInscriptions(0, 10);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      } else if (provider === XVERSE) {
        const response = await request("sendTransfer", {
          recipients: [
            {
              address: to,
              amount: amount,
            },
          ],
        });
        if (response.status === "success") {
          return response.result.txid;
        } else {
          if (response.error.code === RpcErrorCode.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error sending BTC: " + response.error.message);
          }
        }
      } else if (provider === OYL) {
        const { psbtHex, psbtBase64 } = await createSendBtcPsbt(
          address,
          paymentAddress,
          to,
          amount,
          paymentPublicKey,
          //@ts-ignore
          network,
          7
        );
        const psbt = await signPsbt(psbtBase64, true, true);
        if (!psbt) throw new Error("Error sending BTC");
        // @ts-ignore
        return psbt.txId;
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
      } else if (provider === XVERSE) {
        const response = await request("signMessage", {
          address,
          message,
        });

        if (response.status === "success") {
          return response.result.signature as string;
        } else {
          if (response.error.code === RpcErrorCode.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error signing message: " + response.error.message);
          }
        }
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
      } else if (provider === XVERSE) {
        const toSignPsbt = bitcoin.Psbt.fromBase64(String(psbtBase64), {
          network: getBitcoinNetwork(network),
        });

        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address: address,
          signingIndexes: [] as number[],
        };
        const paymentsAddressData = {
          address: paymentAddress,
          signingIndexes: [] as number[],
        };

        let counter = 0;
        for await (let input of inputs) {
          const { script } = input.witnessUtxo!;
          const addressFromScript = fromOutputScript(
            script,
            getBitcoinNetwork(network)
          );

          if (addressFromScript === paymentAddress) {
            paymentsAddressData.signingIndexes.push(Number(counter));
          } else if (addressFromScript === address) {
            ordinalAddressData.signingIndexes.push(Number(counter));
          }
          counter++;
        }

        if (ordinalAddressData.signingIndexes.length > 0) {
          inputsToSign.push(ordinalAddressData);
        }

        if (paymentsAddressData.signingIndexes.length > 0) {
          inputsToSign.push(paymentsAddressData);
        }

        let txId, signedPsbtHex, signedPsbtBase64;

        const xverseNetwork = getXverseNetwork(network);

        const signPsbtOptions = {
          payload: {
            network: {
              type: xverseNetwork,
            },
            message: "Sign Transaction",
            psbtBase64: toSignPsbt.toBase64(),
            broadcast: broadcast,
            inputsToSign: inputsToSign,
          },
          onFinish: (response: { psbtBase64: string; txId: string }) => {
            if (response.txId) {
              txId = response.txId;
            } else if (response.psbtBase64) {
              const signedPsbt = bitcoin.Psbt.fromBase64(
                String(response.psbtBase64),
                {
                  network: getBitcoinNetwork(network),
                }
              );

              signedPsbtHex = signedPsbt.toHex();
              signedPsbtBase64 = signedPsbt.toBase64();
            }
          },
          onCancel: () => console.log("Canceled"),
        };

        // @ts-ignore
        await signTransaction(signPsbtOptions);
        return {
          signedPsbtHex,
          signedPsbtBase64,
          txId,
        };
      } else if (provider === OYL) {
        const signedPsbt = await library?.signPsbt(psbtHex, true, true);
        console.log({ signedPsbt });
        const psbtSignedPsbt = bitcoin.Psbt.fromHex(signedPsbt);

        console.log("psbtSignedPsbt", psbtSignedPsbt.toBase64());

        if (broadcast) {
          console.log("broadcastin");
          const txId = await pushPsbt(psbtSignedPsbt.toHex());
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId,
          };
        } else {
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId: undefined,
          };
        }
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      } else if (provider === OYL) {
        return (await library?.pushPsbt(psbt)) as string;
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
        hasXverse,
        hasOyl,

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
