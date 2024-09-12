import {
  createContext,
  ReactNode,
  useCallback,
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
import {
  Config,
  LaserEyesContextType,
  LeatherAddress,
  LeatherRequestAddressResponse,
  LeatherRequestSignResponse,
  LeatherRPCResponse,
  OYLBalanceResponse,
  PhantomBtcAccount,
  WizzBalanceResponse,
} from "../types";
import {
  LEATHER,
  MAGIC_EDEN,
  OKX,
  OYL,
  P2TR,
  P2WPKH,
  PHANTOM,
  UNISAT,
  WIZZ,
  XVERSE,
} from "../consts/wallets";
import {
  FRACTAL_MAINNET,
  FRACTAL_TESTNET,
  getNetworkForOkx,
  getNetworkForUnisat,
  getNetworkForWizz,
  getUnisatNetwork,
  getXverseNetwork,
  MAINNET,
  SIGNET,
  TESTNET,
  TESTNET4,
  WIZZ_MAINNET,
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
  BitcoinNetworkType,
  getAddress,
  GetAddressOptions,
  MessageSigningProtocols,
  request,
  RpcErrorCode,
  sendBtcTransaction,
  signMessage as signMessageSatsConnect,
  signTransaction,
} from "sats-connect";

import { fromOutputScript } from "bitcoinjs-lib/src/address";
import axios from "axios";
import { getMempoolSpaceUrl } from "../lib/urls";

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
    | typeof UNISAT
    | typeof XVERSE
    | typeof OYL
    | typeof MAGIC_EDEN
    | typeof OKX
    | typeof LEATHER
    | typeof PHANTOM
    | typeof WIZZ
    | undefined
  >();
  const [isInitializing, setIsInitializing] = useState(true);
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
  const [hasMagicEden, setHasMagicEden] = useState<boolean>(false);
  const [hasOkx, setHasOkx] = useState<boolean>(false);
  const [hasLeather, setHasLeather] = useState<boolean>(false);
  const [hasPhantom, setHasPhantom] = useState<boolean>(false);
  const [hasWizz, setHasWizz] = useState<boolean>(false);

  const [network, setNetwork] = useLocalStorage<
    | typeof MAINNET
    | typeof TESTNET
    | typeof TESTNET4
    | typeof SIGNET
    | typeof FRACTAL_MAINNET
    | typeof FRACTAL_TESTNET
  >("network", config?.network || MAINNET);

  useEffect(() => {
    if (config && config.network) {
      setNetwork(config.network);
      getNetwork().then((foundNetwork) => {
        try {
          if (config.network !== foundNetwork) {
            switchNetwork(network);
          }
        } catch (e) {
          disconnect();
        }
      });
    }
  }, [config]);

  const checkInitializationComplete = () => {
    if (
      hasUnisat !== undefined &&
      hasXverse !== undefined &&
      hasOyl !== undefined &&
      hasMagicEden !== undefined &&
      hasOkx !== undefined &&
      hasLeather !== undefined &&
      hasPhantom !== undefined &&
      hasWizz !== undefined
    ) {
      setIsInitializing(false);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const unisatLib = (window as any)?.unisat;
      if (unisatLib) {
        setHasUnisat(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const xverseLib = (window as any)?.XverseProviders?.BitcoinProvider;
      if (xverseLib) {
        setHasXverse(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const oylLib = (window as any)?.oyl;
      if (oylLib) {
        setHasOyl(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const magicEdenLib = (window as any)?.magicEden;
      if (magicEdenLib) {
        setHasMagicEden(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      let foundOkx;
      if (
        network === TESTNET ||
        network === TESTNET4 ||
        network === SIGNET ||
        network === FRACTAL_TESTNET
      ) {
        foundOkx = (window as any)?.okxwallet?.bitcoinTestnet;
      } else if (network === MAINNET || network === FRACTAL_MAINNET) {
        foundOkx = (window as any)?.okxwallet?.bitcoin;
      }
      if (foundOkx) {
        setHasOkx(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [network]); // note that `network` is still a dependency here

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const leatherLib = (window as any)?.LeatherProvider;
      if (leatherLib) {
        setHasLeather(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const phantomLib = (window as any)?.phantom?.bitcoin;
      if (phantomLib && phantomLib.isPhantom) {
        setHasPhantom(true);
        observer.disconnect();
      } else {
        setHasPhantom(false);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const wizzLib = (window as any)?.wizz;
      if (wizzLib) {
        setHasWizz(true);
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    checkInitializationComplete();
  }, [
    hasUnisat,
    hasXverse,
    hasOyl,
    hasMagicEden,
    hasOkx,
    hasLeather,
    hasPhantom,
    hasWizz,
  ]);

  useEffect(() => {
    setBalance(undefined);
  }, [network]);

  useEffect(() => {
    if (provider !== UNISAT && provider !== WIZZ) {
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
    if (!isInitializing) {
      const defaultWallet = localStorage?.getItem(
        LOCAL_STORAGE_DEFAULT_WALLET
      ) as
        | typeof UNISAT
        | typeof XVERSE
        | typeof OYL
        | typeof MAGIC_EDEN
        | typeof OKX
        | typeof LEATHER
        | typeof PHANTOM
        | typeof WIZZ
        | undefined;
      if (defaultWallet) {
        setProvider(defaultWallet);
        connect(defaultWallet);
      }
    }
  }, [isInitializing]);

  const connectUnisat = useCallback(async () => {
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
      await getNetwork().then((network) => {
        if (config!.network !== network) {
          switchNetwork(network);
        }
        // else if (network !== network) {
        //   setNetwork(network);
        // }
      });
      getBTCBalance(unisatAccounts[0], network).then((totalBalance) => {
        setBalance(totalBalance);
      });
      setProvider(UNISAT);
      setConnected(true);
      const balance = await lib?.getBalance();
      setBalance(balance?.total);
    } catch (error) {
      throw error;
    }
  }, [hasUnisat, network]);

  const connectXverse = useCallback(async () => {
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

          getBTCBalance(foundPaymentAddress.address, network).then(
            (totalBalance) => {
              setBalance(totalBalance);
            }
          );
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
  }, [hasXverse]);

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
      getBTCBalance(result[1], network).then((totalBalance) => {
        setBalance(totalBalance);
      });
    } catch (error) {
      throw new Error(`Can't lasereyes to ${OYL} wallet`);
    }
  };

  const connectMagicEden = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, MAGIC_EDEN);
      let xverseNetwork = getXverseNetwork(config?.network || MAINNET);

      const getAddressOptions = {
        getProvider: async () => (window as any).magicEden.bitcoin,
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
            setProvider(MAGIC_EDEN);
            setLibrary((window as any).magicEden.bitcoin);
          }

          getBTCBalance(foundPaymentAddress.address, network).then(
            (totalBalance) => {
              setBalance(totalBalance);
            }
          );
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${MAGIC_EDEN} wallet`);
        },
        onError: (error: any) => {
          throw new Error(`Can't lasereyes to ${MAGIC_EDEN} wallet`);
        },
      };
      await getAddress(getAddressOptions as GetAddressOptions);
      setConnected(true);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const connectOkx = useCallback(async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OKX);
      console.log("connecting", network);
      const lib =
        network === TESTNET ||
        network === TESTNET4 ||
        network === FRACTAL_TESTNET
          ? (window as any).okxwallet.bitcoinTestnet
          : network === SIGNET
          ? (window as any).okxwallet.bitcoinSignet
          : (window as any).okxwallet.bitcoin;

      const okxAccounts = await lib.connect();
      if (!okxAccounts) throw new Error("No accounts found");
      setAccounts([okxAccounts]);
      setAddress(okxAccounts.address);
      if (
        String(okxAccounts.address)?.startsWith("tb") &&
        network !== TESTNET &&
        network !== TESTNET4 &&
        network !== SIGNET
      ) {
        console.log("err");
        throw new Error(
          `Please switch networks to ${network} in the wallet settings.`
        );
      }

      setPaymentAddress(okxAccounts.address);
      setPublicKey(okxAccounts.publicKey);
      setPaymentPublicKey(okxAccounts.publicKey);
      setLibrary(lib);
      setProvider(OKX);
      setConnected(true);
      const balance = await lib?.getBalance();
      setBalance(balance?.total);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }, [hasOkx, network]);

  const connectLeather = useCallback(async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
      const lib = (window as any).LeatherProvider;
      // @ts-ignore
      const getAddressesResponse: LeatherRPCResponse = await lib.request(
        "getAddresses"
      );
      const addressesResponse =
        getAddressesResponse.result as LeatherRequestAddressResponse;

      const addresses: LeatherAddress[] = addressesResponse.addresses;

      const leatherAccountsParsed = addresses.map(
        (address: LeatherAddress) => address.address
      );

      const taprootAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2TR
      );

      const segwitAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2WPKH
      );

      if (
        String(taprootAddress?.address)?.startsWith("tb") &&
        network !== TESTNET &&
        network !== TESTNET4 &&
        network !== SIGNET
      ) {
        throw new Error(
          `Please switch networks to ${network} in the wallet settings.`
        );
      }

      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress?.address));
      setPublicKey(String(taprootAddress?.publicKey));
      setPaymentAddress(String(segwitAddress?.address));
      setPaymentPublicKey(String(segwitAddress?.publicKey));
      setLibrary(lib);
      setProvider(LEATHER);
      const balance = await getBTCBalance(
        String(segwitAddress?.address),
        network
      );
      setBalance(balance);
      handleAccountsChanged(leatherAccountsParsed);
      setConnected(true);
      await getNetwork().then((network) => {
        // if (!network) {
        //   setNetwork(network);
        // } else {
        //   setNetwork(network);
        // }
      });
      setConnected(true);
    } catch (error) {
      throw error;
    }
  }, [hasLeather]);

  const connectPhantom = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, PHANTOM);
      const lib = (window as any).phantom.bitcoin;
      const phantomAccounts =
        (await lib.requestAccounts()) as PhantomBtcAccount[];
      const phantomAccountsParsed = phantomAccounts.map(
        (account: PhantomBtcAccount) => account.address
      );
      setAccounts(phantomAccountsParsed);

      const ordinalsAccount = phantomAccounts.find(
        (account: PhantomBtcAccount) => account.purpose === "ordinals"
      );

      const paymentAccount = phantomAccounts.find(
        (account: PhantomBtcAccount) => account.purpose === "payment"
      );

      setAddress(ordinalsAccount?.address!);
      setPublicKey(ordinalsAccount?.publicKey!);
      setPaymentAddress(paymentAccount?.address!);
      setPaymentPublicKey(paymentAccount?.publicKey!);
      setLibrary(lib);
      setProvider(PHANTOM);
      const balance = await getBTCBalance(
        String(paymentAccount?.address!),
        network
      );
      setBalance(balance);
      setConnected(true);
    } catch (error) {
      throw new Error(`Can't lasereyes to ${PHANTOM} wallet`);
    }
  };

  const connectWizz = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, WIZZ);
      const lib = (window as any).wizz;
      const wizzAccounts = await lib.requestAccounts();
      if (!wizzAccounts) throw new Error("No accounts found");
      const wizzPubKey = await lib.getPublicKey();
      if (!wizzPubKey) throw new Error("No public key found");
      setAccounts(wizzAccounts);
      setAddress(wizzAccounts[0]);
      setPaymentAddress(wizzAccounts[0]);
      setPublicKey(wizzPubKey);
      setPaymentPublicKey(wizzPubKey);
      setLibrary(lib);
      setProvider(WIZZ);
      await getNetwork().then((network) => {
        if (config!.network !== network) {
          switchNetwork(network);
        }
        // else if (network !== network) {
        //   setNetwork(network);
        // }
      });
      const balance = await getBTCBalance(String(wizzAccounts[0]), network);
      setBalance(balance);
      setConnected(true);
    } catch (error) {
      throw error;
    }
  };

  const connect = async (
    walletName:
      | typeof UNISAT
      | typeof XVERSE
      | typeof OYL
      | typeof MAGIC_EDEN
      | typeof OKX
      | typeof LEATHER
      | typeof PHANTOM
      | typeof WIZZ
  ) => {
    setIsConnecting(true);
    try {
      if (!walletName) throw new Error("No wallet provided");
      if (walletName === UNISAT) {
        await connectUnisat();
      } else if (walletName === XVERSE) {
        await connectXverse();
      } else if (walletName === OYL) {
        await connectOyl();
      } else if (walletName === MAGIC_EDEN) {
        await connectMagicEden();
      } else if (walletName === OKX) {
        await connectOkx();
      } else if (walletName === LEATHER) {
        await connectLeather();
      } else if (walletName === PHANTOM) {
        await connectPhantom();
      } else if (walletName === WIZZ) {
        await connectWizz();
      } else {
        throw new Error("Unsupported wallet..");
      }
      setConnected(true);
    } catch (error) {
      setIsConnecting(false);
      disconnect();
      // @ts-ignore
      console.log("e", error?.message);
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

    self.accounts = _accounts;
    if (_accounts.length > 0) {
      connect(UNISAT);
    } else {
      setConnected(false);
    }
  };

  const handleNetworkChanged = (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof TESTNET4
      | typeof SIGNET
      | typeof FRACTAL_MAINNET
      | typeof FRACTAL_TESTNET
  ) => {
    try {
      let foundNetwork:
        | typeof MAINNET
        | typeof TESTNET
        | typeof TESTNET4
        | typeof SIGNET
        | typeof FRACTAL_MAINNET
        | typeof FRACTAL_TESTNET;
      if (provider === UNISAT) {
        foundNetwork = getNetworkForUnisat(network);
        setNetwork(foundNetwork);
        connect(provider);
      } else if (provider === XVERSE) {
        throw new Error("Not implemented");
      } else if (provider === WIZZ) {
        foundNetwork = getNetworkForWizz(network);
        // setNetwork(foundNetwork);
        connect(provider);
      } else {
        disconnect();
        throw new Error(
          "The connected wallet doesn't support programmatic network changes.."
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const requestAccounts = async () => {
    try {
      if (!library) throw new Error("No wallet connected");
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
      } else if (provider === OKX) {
        if (
          network === TESTNET ||
          network === TESTNET4 ||
          network === FRACTAL_TESTNET
        ) {
          return await library.connect();
        }
        return await library.requestAccounts();
      } else if (provider === LEATHER) {
        localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
        const lib = (window as any).LeatherProvider;
        // @ts-ignore
        const getAddressesResponse: LeatherRPCResponse = await lib.request(
          "getAddresses"
        );

        const addressesResponse =
          getAddressesResponse.result as LeatherRequestAddressResponse;

        const addresses: LeatherAddress[] = addressesResponse.addresses;
        const leatherAccountsParsed = addresses.map(
          (address: LeatherAddress) => address.address
        );
        const taprootAddress = addresses.find(
          (address: LeatherAddress) => address.type === P2TR
        );
        const segwitAddress = addresses.find(
          (address: LeatherAddress) => address.type === P2WPKH
        );

        setAccounts(leatherAccountsParsed);
        setAddress(String(taprootAddress?.address));
        setPaymentAddress(String(segwitAddress?.address));
        setLibrary(lib);
        setProvider(LEATHER);
        handleAccountsChanged(leatherAccountsParsed);
        setConnected(true);
        const balance = await getBTCBalance(
          String(segwitAddress?.address),
          network
        );
        setBalance(balance);
        await getNetwork().then((network) => {
          // const foundNetwork = getNe(String(network))
          if (!network) {
            setNetwork(MAINNET);
          } else {
            setNetwork(network);
          }
        });
        setConnected(true);
      } else if (provider === PHANTOM) {
        const phantomAccounts =
          (await library.requestAccounts()) as PhantomBtcAccount[];
        const phantomAccountsParsed = phantomAccounts.map(
          (account: PhantomBtcAccount) => account.address
        );
        return phantomAccountsParsed;
      } else if (provider === WIZZ) {
        return await library.requestAccounts();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  };

  const getNetwork = useCallback(async () => {
    try {
      if (provider === UNISAT) {
        const unisatNetwork = (await library?.getChain()) as {
          enum: string;
          name: string;
          network: string;
        };
        if (!unisatNetwork) {
          return config?.network ?? MAINNET;
        }
        return getNetworkForUnisat(unisatNetwork.enum) as
          | typeof MAINNET
          | typeof TESTNET
          | typeof TESTNET4
          | typeof SIGNET
          | typeof FRACTAL_MAINNET
          | typeof FRACTAL_TESTNET;
      } else if (provider === XVERSE) {
        if (address.slice(0, 1) === "t") {
          if (network === TESTNET) {
            return TESTNET;
          } else if (network === TESTNET4) {
            return TESTNET4;
          } else if (network === SIGNET) {
            return SIGNET;
          } else if (network === FRACTAL_TESTNET) {
            return FRACTAL_TESTNET;
          }
        }
        return MAINNET;
      } else if (provider === OYL) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === MAGIC_EDEN) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OKX) {
        if (address.slice(0, 1) === "t") {
          if (network === TESTNET) {
            return TESTNET;
          } else if (network === TESTNET4) {
            return TESTNET4;
          } else if (network === SIGNET) {
            return SIGNET;
          } else if (network === FRACTAL_TESTNET) {
            return FRACTAL_TESTNET;
          }
          return TESTNET;
        }

        const okxNetwork = await library?.getNetwork();
        const foundNetwork = getNetworkForOkx(okxNetwork) as
          | typeof MAINNET
          | typeof TESTNET;
        setNetwork(foundNetwork);
      } else if (provider === LEATHER) {
        if (address.slice(0, 1) === "t") {
          if (network === TESTNET) {
            return TESTNET;
          } else if (network === TESTNET4) {
            return TESTNET4;
          } else if (network === SIGNET) {
            return SIGNET;
          } else if (network === FRACTAL_TESTNET) {
            return FRACTAL_TESTNET;
          }
        }
        return MAINNET;
      } else if (provider === PHANTOM) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === WIZZ) {
        const wizzNetwork = await library?.getNetwork();
        return getNetworkForWizz(wizzNetwork) as
          | typeof MAINNET
          | typeof TESTNET;
        // setNetwork(foundNetwork);
      }
      return config?.network ?? MAINNET;
    } catch (error) {
      throw error;
    }
  }, [address, provider, library]);

  const switchNetwork = async (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof TESTNET4
      | typeof SIGNET
      | typeof FRACTAL_MAINNET
      | typeof FRACTAL_TESTNET
  ) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network);
        console.log("wantedNetwork", wantedNetwork);
        await library?.switchChain(wantedNetwork);
        setNetwork(network);
        await getBalance();
      } else if (provider === WIZZ) {
        if (network === FRACTAL_TESTNET || network === FRACTAL_MAINNET) {
          return await library.switchNetwork(WIZZ_MAINNET);
        }

        const wantedNetwork = getNetworkForWizz(network);
        await library?.switchNetwork(wantedNetwork);
        setNetwork(network);
        await getBalance();
      } else {
        disconnect();
        throw new Error(
          "The connected wallet doesn't support programmatic network changes.."
        );
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
      } else if (provider === OKX) {
        return await library?.getPublicKey();
      } else if (provider === WIZZ) {
        return await library?.getPublicKey();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  };

  const getBalance = useCallback(async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const bal = await library.getBalance();
        setBalance(bal.total);
        return bal.total;
      } else if (provider === XVERSE) {
        const bal = await getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === OYL) {
        const balanceResponse: OYLBalanceResponse = await library.getBalance();
        const bal = balanceResponse.btc.total * 100000000;
        setBalance(bal);
        return bal;
      } else if (provider === MAGIC_EDEN) {
        const bal = await getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === OKX) {
        const bal = await getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === LEATHER) {
        const bal = await getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === PHANTOM) {
        const bal = await getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === WIZZ) {
        const balanceResponse: WizzBalanceResponse = await library.getBalance();
        const bal = balanceResponse.total;
        setBalance(bal);
        return bal;
      }
    } catch (error) {
      throw error;
    }
  }, [provider, library, paymentAddress, network]);

  const getInscriptions = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library.getInscriptions(0, 10);
      } else if (provider === OYL) {
        return await library.getInscriptions(0, 10);
      } else if (provider === OKX) {
        return await library.getInscriptions(0, 10);
      } else if (provider === WIZZ) {
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
        const psbt = await signPsbt(psbtHex, true, true);
        if (!psbt) throw new Error("Error sending BTC");
        // @ts-ignore
        return psbt.txId;
      } else if (provider === MAGIC_EDEN) {
        let sendResponse: { txid: string };
        await sendBtcTransaction({
          getProvider: async () => library,
          payload: {
            network: {
              type: getXverseNetwork(network) as BitcoinNetworkType,
            },
            recipients: [
              {
                address: to,
                amountSats: BigInt(amount),
              },
            ],
            senderAddress: paymentAddress!,
          },
          onFinish: (response) => {
            // @ts-ignore
            sendResponse = response;
          },
          onCancel: () => alert("Canceled"),
        });
        // @ts-ignore
        if (!sendResponse) throw new Error("Error sending BTC");
        // @ts-ignore
        return sendResponse.txid;
      } else if (provider === OKX) {
        const txId = await library?.sendBitcoin(to, amount);
        if (!txId) throw new Error("Transaction failed");
        return txId;
      } else if (provider === LEATHER) {
        const response = await library?.request("sendTransfer", {
          recipients: [
            {
              address: to,
              amount: amount,
            },
          ],
        });
        if (response?.result?.txid) {
          return response.result.txid;
        } else {
          if (response.error.code === RpcErrorCode.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error sending BTC: " + response.error.message);
          }
        }
      } else if (provider === WIZZ) {
        const txId = await library?.sendBitcoin(to, amount);
        if (txId) {
          return txId;
        } else {
          throw new Error("Error sending BTC");
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const signMessage = async (message: string, toSignAddress?: string) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        return await library?.signMessage(message);
      } else if (provider === XVERSE) {
        const tempAddy = toSignAddress || paymentAddress;
        const response = await request("signMessage", {
          address: tempAddy,
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
      } else if (provider === OYL) {
        const tempAddy = toSignAddress || paymentAddress;
        return await library?.signMessage(message, "bip322", tempAddy);
      } else if (provider === MAGIC_EDEN) {
        const tempAddy = toSignAddress || paymentAddress;
        let signedMessage;
        await signMessageSatsConnect({
          getProvider: async () => (window as any).magicEden.bitcoin,
          payload: {
            network: {
              type: BitcoinNetworkType.Mainnet,
            },
            address: tempAddy,
            message: message,
            protocol: MessageSigningProtocols.BIP322,
          },
          onFinish: (response) => {
            signedMessage = response;
          },
          onCancel: () => {
            alert("Request canceled");
          },
        });
        return signedMessage;
      } else if (provider === OKX) {
        return await library?.signMessage(message);
      } else if (provider === LEATHER) {
        const paymentType = toSignAddress === address ? P2TR : P2WPKH;
        if (toSignAddress !== address && toSignAddress !== paymentAddress) {
          throw new Error("Invalid address to sign message");
        }

        const signed = await library?.request("signMessage", {
          message: message,
          paymentType,
        });
        return signed?.result?.signature;
      } else if (provider === PHANTOM) {
        const utf8Bytes = new TextEncoder().encode(message);
        const uintArray = new Uint8Array(utf8Bytes);
        const response = await library?.signMessage(address, uintArray);
        const binaryString = String.fromCharCode(...response.signature);
        return btoa(binaryString);
      } else if (provider === WIZZ) {
        return await library?.signMessage(message);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      if (!psbt) throw new Error("No PSBT provided");
      if (isHex(psbt)) {
        psbtBase64 = bitcoin.Psbt.fromHex(psbt).toBase64();
        psbtHex = psbt;
      } else if (isBase64(psbt)) {
        psbtBase64 = psbt;
        psbtHex = bitcoin.Psbt.fromBase64(psbt).toHex();
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
          if (input.witnessUtxo === undefined) {
            paymentsAddressData.signingIndexes.push(Number(counter));
          } else {
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
        const psbtSignedPsbt = bitcoin.Psbt.fromHex(signedPsbt);

        if (broadcast) {
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
      } else if (provider === MAGIC_EDEN) {
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
        const magicEdenNetwork = getXverseNetwork(network);

        const signPsbtOptions = {
          getProvider: async () => library,
          payload: {
            network: {
              type: magicEdenNetwork,
            },
            message: "Sign Transaction",
            psbtBase64: toSignPsbt.toBase64(),
            broadcast: broadcast,
            inputsToSign: inputsToSign,
          },
          onFinish: (response: { psbtBase64: string; txId: string }) => {
            if (response.psbtBase64) {
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
          onCancel: () => {
            console.log("Canceled");
            throw new Error("User canceled the request");
          },
          onError: (error: any) => {
            console.log("error", error);
            throw error;
          },
        };

        // @ts-ignore
        await signTransaction(signPsbtOptions);
        if (broadcast) {
          const signed = bitcoin.Psbt.fromBase64(String(signedPsbtBase64));
          const finalized = signed.finalizeAllInputs();
          const extracted = finalized.extractTransaction();
          const txId = await pushPsbt(extracted.toHex());
          return {
            signedPsbtHex: extracted.toHex(),
            signedPsbtBase64: "test",
            txId,
          };
        } else {
          return {
            signedPsbtHex,
            signedPsbtBase64,
            txId,
          };
        }
      } else if (provider === OKX) {
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
      } else if (provider === LEATHER) {
        interface SignPsbtRequestParams {
          hex: string;
          signAtIndex?: number | number[];
          broadcast?: boolean;
          network: string;
        }

        const requestParams: SignPsbtRequestParams = {
          hex: psbtHex,
          broadcast: false,
          network,
        };

        const response: LeatherRPCResponse = await library?.request(
          "signPsbt",
          requestParams
        );
        const leatherHexResult = response.result as LeatherRequestSignResponse;
        const signedTx = leatherHexResult.hex;
        const signed = bitcoin.Psbt.fromHex(String(signedTx));

        if (finalize && broadcast) {
          const finalized = signed.finalizeAllInputs();
          const txId = await pushPsbt(finalized.toHex());
          return {
            signedPsbtHex: signed.toHex(),
            signedPsbtBase64: signed.toBase64(),
            txId,
          };
        } else if (finalize) {
          const finalized = signed.finalizeAllInputs();
          return {
            signedPsbtHex: finalized.toHex(),
            signedPsbtBase64: finalized.toBase64(),
            txId: undefined,
          };
        } else {
          return {
            signedPsbtHex: signed.toHex(),
            signedPsbtBase64: signed.toBase64(),
            txId: undefined,
          };
        }
      } else if (provider === WIZZ) {
        const signedPsbt = await library?.signPsbt(psbtHex, {
          autoFinalized: finalize,
          broadcast: false,
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
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, psbt)
          .then((res) => res.data);
      } else if (provider === OYL) {
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, psbt)
          .then((res) => res.data);
      } else if (provider === OKX) {
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, psbt)
          .then((res) => res.data);
      } else if (provider === MAGIC_EDEN) {
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, psbt)
          .then((res) => res.data);
      } else if (provider === LEATHER) {
        const decoded = bitcoin.Psbt.fromHex(psbt);
        const extracted = decoded.extractTransaction();
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, extracted.toHex())
          .then((res) => res.data);
      } else if (provider === WIZZ) {
        return await axios
          .post(`${getMempoolSpaceUrl(network)}/api/tx`, psbt)
          .then((res) => res.data);
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
        isInitializing,
        connected,
        isConnecting,
        hasUnisat,
        hasXverse,
        hasOyl,
        hasMagicEden,
        hasOkx,
        hasLeather,
        hasPhantom,
        hasWizz,

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
