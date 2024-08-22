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
  P2PKH,
  P2TR,
  P2WPKH,
  PHANTOM,
  UNISAT,
  WIZZ,
  XVERSE,
} from "../consts/wallets";
import {
  FRACTAL_TESTNET,
  getNetworkForOkx,
  getNetworkForUnisat,
  getNetworkForWizz,
  getWizzNetwork,
  getXverseNetwork,
  MAINNET,
  REGTEST,
  SIGNET,
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
  BitcoinNetworkType,
  getAddress,
  GetAddressOptions,
  request,
  RpcErrorCode,
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
    typeof MAINNET | typeof TESTNET | typeof SIGNET | typeof FRACTAL_TESTNET
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
      if (network === TESTNET) {
        foundOkx = (window as any)?.okxwallet?.bitcoinTestnet;
      } else if (network === MAINNET) {
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
      const foundNetwork = await getNetwork();
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
  }, [hasUnisat]);

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
      getBTCBalance(result[1]).then((totalBalance) => {
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

          getBTCBalance(foundPaymentAddress.address).then((totalBalance) => {
            setBalance(totalBalance);
          });
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${MAGIC_EDEN} wallet`);
        },
        onError: (error: any) => {
          throw new Error(`Can't lasereyes to ${MAGIC_EDEN} wallet`);
        },
      };
      console.log(JSON.stringify(getAddressOptions));
      await getAddress(getAddressOptions as GetAddressOptions);
      setConnected(true);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const connectOkx = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OKX);
      const lib =
        network === TESTNET || network === FRACTAL_TESTNET
          ? (window as any).okxwallet.bitcoinTestnet
          : (window as any).okxwallet.bitcoin;
      const okxAccounts = await lib.requestAccounts();
      if (!okxAccounts) throw new Error("No accounts found");
      const okxPubKey = await lib.getPublicKey();
      if (!okxPubKey) throw new Error("No public key found");
      setAccounts(okxAccounts);
      setAddress(okxAccounts[0]);
      setPaymentAddress(okxAccounts[0]);
      setPublicKey(okxPubKey);
      setPaymentPublicKey(okxPubKey);
      setLibrary(lib);
      setProvider(OKX);
      setConnected(true);
      const balance = await lib?.getBalance();
      setBalance(balance?.total);
    } catch (error) {
      throw error;
    }
  };

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

      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress?.address));
      setPublicKey(String(taprootAddress?.publicKey));
      setPaymentAddress(String(segwitAddress?.address));
      setPaymentPublicKey(String(segwitAddress?.publicKey));
      setLibrary(lib);
      setProvider(LEATHER);
      const balance = await getBTCBalance(String(segwitAddress?.address));
      setBalance(balance);
      handleAccountsChanged(leatherAccountsParsed);
      setConnected(true);
      await getNetwork().then((network) => {
        if (!network) {
          setNetwork(MAINNET);
        } else {
          setNetwork(network);
        }
      });
      setConnected(true);
    } catch (error) {
      new Error(`Can't lasereyes to ${LEATHER} wallet`);
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
      const balance = await getBTCBalance(String(paymentAccount?.address!));
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
      setConnected(true);
      const balance = await lib?.getBalance();
      setBalance(balance?.total);
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
        // } else if (walletName === MAGIC_EDEN) {
        //   await connectMagicEden();
        // } else if (walletName === OKX) {
        //   await connectOkx();
      } else if (walletName === LEATHER) {
        await connectLeather();
        // }else if (walletName === PHANTOM) {
        //   await connectPhantom();
        // } else if (walletName === WIZZ) {
        //   await connectWizz();
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
      let foundNetwork:
        | typeof MAINNET
        | typeof TESTNET
        | typeof REGTEST
        | typeof FRACTAL_TESTNET = MAINNET;
      if (provider === UNISAT) {
        foundNetwork = getNetworkForUnisat(network);
        setNetwork(foundNetwork);
        connect(provider);
      } else if (provider === XVERSE) {
        throw new Error("Not implemented");
      } else if (provider === WIZZ) {
        foundNetwork = getNetworkForWizz(network);
        setNetwork(foundNetwork);
        connect(provider);
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
      } else if (provider === OKX) {
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

  const getNetwork = async () => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const unisatNetwork = await library?.getNetwork();
        const foundNetwork = getNetworkForUnisat(unisatNetwork) as
          | typeof MAINNET
          | typeof TESTNET
          | typeof SIGNET;
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
      } else if (provider === MAGIC_EDEN) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OKX) {
        const okxNetwork = await library?.getNetwork();
        const foundNetwork = getNetworkForOkx(okxNetwork) as
          | typeof MAINNET
          | typeof TESTNET;
        setNetwork(foundNetwork);
      } else if (provider === LEATHER) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === PHANTOM) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === WIZZ) {
        const wizzNetwork = await library?.getNetwork();
        const foundNetwork = getNetworkForWizz(wizzNetwork) as
          | typeof MAINNET
          | typeof TESTNET;
        setNetwork(foundNetwork);
      }
      return config?.network ?? MAINNET;
    } catch (error) {
      throw error;
    }
  };

  const switchNetwork = async (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof SIGNET
      | typeof FRACTAL_TESTNET
  ) => {
    try {
      if (!library) return;
      if (provider === UNISAT) {
        const wantedNetwork = getWizzNetwork(network);
        await library?.switchNetwork(wantedNetwork);
        setNetwork(network);
      } else if (provider === WIZZ) {
        const wantedNetwork = getNetworkForWizz(network);
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
      } else if (provider === MAGIC_EDEN) {
        return await getBTCBalance(paymentAddress);
      } else if (provider === OKX) {
        return await getBTCBalance(paymentAddress);
      } else if (provider === LEATHER) {
        return await getBTCBalance(paymentAddress);
      } else if (provider === PHANTOM) {
        return await getBTCBalance(paymentAddress);
      } else if (provider === WIZZ) {
        const balanceResponse: WizzBalanceResponse = await library.getBalance();
        return balanceResponse.total * 100000000;
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
      } else if (provider === MAGIC_EDEN) {
        let signedMessage;
        await signMessageSatsConnect({
          getProvider: async () => (window as any).magicEden.bitcoin,
          payload: {
            network: {
              type: BitcoinNetworkType.Mainnet,
            },
            address: paymentAddress,
            message: message,
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
        const signed = await library?.request("signMessage", {
          message: message,
          paymentType: P2WPKH,
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

        const xverseNetwork = getXverseNetwork(network);

        const signPsbtOptions = {
          getProvider: async () => (window as any).magicEden.bitcoin,
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
        return await library?.pushPsbt(psbt);
      } else if (provider === OYL) {
        return (await library?.pushPsbt(psbt)) as string;
      } else if (provider === OKX) {
        return await library?.pushPsbt(psbt);
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
        return await library?.pushPsbt(psbt);
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

export interface DeScribeCreateResponse {
  inscriberAddress: string;
  psbtHex: string;
  psbtBase64: string;
  feeRate: number;
  totalFees: number;
}

export { LaserEyesProvider, useLaserEyes };
