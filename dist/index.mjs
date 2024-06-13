var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __forAwait = (obj, it, method) => {
  it = obj[Symbol.asyncIterator];
  method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((resolve, reject, done) => {
    arg = fn.call(obj, arg);
    done = arg.done;
    return Promise.resolve(arg.value).then((value) => resolve({ value, done }), reject);
  }));
  return it ? it.call(obj) : (obj = obj[Symbol.iterator](), it = {}, method("next"), method("return"), it);
};

// src/consts/wallets.ts
var OYL = "oyl";
var UNISAT = "unisat";
var XVERSE = "xverse";
var PHANTOM = "phantom";
var LEATHER = "leather";
var XVERSE_NETWORK = "Mainnet";
var UNISAT_MAINNET = "livenet";
var UNISAT_TESTNET = "testnet";
var XVERSE_MAINNET = "Mainnet";
var XVERSE_TESTNET = "Testnet";
var LEATHER_MAINNET = "mainnet";
var LEATHER_TESTNET = "testnet";
var MAINNET = "mainnet";
var TESTNET = "testnet";
var getXverseNetwork = (network) => {
  if (network === MAINNET)
    return XVERSE_MAINNET;
  if (network === TESTNET)
    return XVERSE_TESTNET;
  return XVERSE_MAINNET;
};
var getLeatherNetwork = (network) => {
  if (network === MAINNET)
    return LEATHER_MAINNET;
  if (network === TESTNET)
    return LEATHER_TESTNET;
  return LEATHER_MAINNET;
};
var getUnisatNetwork = (network) => {
  if (network === MAINNET)
    return UNISAT_MAINNET;
  if (network === TESTNET)
    return UNISAT_TESTNET;
  return UNISAT_MAINNET;
};
var getNetworkForUnisat = (network) => {
  if (network === UNISAT_MAINNET)
    return MAINNET;
  if (network === UNISAT_TESTNET)
    return TESTNET;
  return MAINNET;
};
var getNetworkForXverse = (network) => {
  if (network === XVERSE_MAINNET)
    return MAINNET;
  if (network === XVERSE_TESTNET)
    return TESTNET;
  return MAINNET;
};
var getNetworkForLeather = (network) => {
  if (network === LEATHER_MAINNET)
    return MAINNET;
  if (network === LEATHER_TESTNET)
    return TESTNET;
  return MAINNET;
};
var P2TR = "p2tr";
var P2PKH = "p2pkh";
var P2WPKH = "p2wpkh";
var P2WSH = "p2wsh";
var P2SH = "p2sh";
var WALLETS = {
  oyl: {
    name: OYL,
    icon: "data:image/svg+xml,%3Csvg%20width%3D%2296%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17.27.318c2.947%200%205.72.26%208.32.78%202.6.507%204.714%201.307%206.34%202.4%201.64%201.094%202.46%202.467%202.46%204.12%200%201.654-.82%203.047-2.46%204.18-1.64%201.12-3.766%201.954-6.38%202.5-2.6.547-5.36.82-8.28.82-2.946%200-5.72-.253-8.32-.76-2.6-.52-4.72-1.326-6.36-2.42C.964%2010.845.15%209.472.15%207.818c0-1.653.82-3.04%202.46-4.16%201.64-1.133%203.76-1.973%206.36-2.52%202.614-.546%205.38-.82%208.3-.82Zm.04%2011.96c1.4%200%202.8-.146%204.2-.44%201.414-.293%202.6-.78%203.56-1.46.96-.68%201.44-1.566%201.44-2.66%200-1.093-.48-1.98-1.44-2.66-.96-.68-2.146-1.166-3.56-1.46-1.4-.293-2.8-.44-4.2-.44h-.08c-1.4%200-2.806.147-4.22.44-1.4.294-2.58.78-3.54%201.46-.96.68-1.44%201.567-1.44%202.66%200%201.094.48%201.98%201.44%202.66.96.68%202.14%201.167%203.54%201.46%201.414.294%202.82.44%204.22.44h.08ZM61.293.758c.08-.026.14-.04.18-.04h8.24c.12%200%20.214.04.28.12.08.08.12.174.12.28%200%20.147-.066.26-.2.34l-14%207.7c-.133.067-.2.18-.2.34v4.82c0%20.107-.04.2-.12.28a.384.384%200%200%201-.28.12h-6.94c-.106%200-.2-.04-.28-.12a.384.384%200%200%201-.12-.28v-4.82c0-.16-.066-.273-.2-.34l-13.98-7.7a.376.376%200%200%201-.2-.34c0-.106.034-.2.1-.28.067-.08.16-.12.28-.12h8.24c.054%200%20.12.014.2.04l9.24%205.1c.08.027.147.04.2.04.04%200%20.1-.013.18-.04l9.26-5.1Zm11.232.36c0-.106.033-.2.1-.28.08-.08.173-.12.28-.12h6.84c.106%200%20.193.04.26.12.08.08.12.174.12.28v10.32c0%20.107.04.2.12.28.08.08.173.12.28.12h14.46c.106%200%20.193.04.26.12.08.08.12.174.12.28v2.08c0%20.107-.04.2-.12.28a.322.322%200%200%201-.26.12h-22.08c-.107%200-.2-.04-.28-.12a.424.424%200%200%201-.1-.28v-13.2Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E",
    site: "https://oyl.io/",
    disabled: false
  },
  unisat: {
    name: UNISAT,
    icon: "/wallet-logos/unisat_logo.png",
    site: "https://unisat.io/",
    disabled: false
  },
  xverse: {
    name: XVERSE,
    icon: "/wallet-logos/xverse_logo.png",
    site: "https://www.xverse.app/",
    config: () => {
    },
    disabled: false
  },
  leather: {
    name: LEATHER,
    icon: "/wallet-logos/leather_logo.png",
    site: "https://leather.io/",
    config: () => {
    },
    disabled: true
  }
};

// src/config/createConfig.ts
var createConfig = (config) => {
  return __spreadValues({}, config);
};

// src/providers/LaserEyesProvider.tsx
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import * as bitcoin from "bitcoinjs-lib";
import { getAddress, signTransaction } from "sats-connect";

// src/consts/settings.ts
var LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";
var NETWORK = TESTNET;

// src/providers/LaserEyesProvider.tsx
import { fromOutputScript } from "bitcoinjs-lib/src/address";
import { useLocalStorage } from "usehooks-ts";
import { jsx } from "react/jsx-runtime";
var initialWalletContext = {
  hasOyl: false,
  hasUnisat: false,
  hasXverse: false,
  hasLeather: false,
  connected: false,
  isConnecting: false,
  publicKey: "",
  // Empty string as the public key is unknown
  address: "",
  // Empty string as the address is unknown
  paymentAddress: "",
  // Empty string as the address is unknown
  paymentPublicKey: "",
  balance: {
    confirmed: 0,
    // Initial confirmed balance is zero
    unconfirmed: 0,
    // Initial unconfirmed balance is zero
    total: 0
    // Initial total balance is zero
  },
  network: "",
  // Empty string as the network is unknown
  library: null,
  // Initial library is null, assuming it will be an object once initialized
  provider: null,
  // Initial provider is null, assuming it will be an object once initialized
  accounts: [],
  // Initially, there are no accounts
  // Placeholder functions for wallet operations. These should be replaced with actual implementations.
  connect: (walletName) => __async(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async(void 0, null, function* () {
    return "";
  }),
  switchNetwork: (network) => __async(void 0, null, function* () {
    return "";
  }),
  getPublicKey: () => __async(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async(void 0, null, function* () {
  }),
  getAllBRC20Tokens: () => __async(void 0, null, function* () {
  }),
  sendBTC: (to, amount) => __async(void 0, null, function* () {
    return "";
  }),
  payInscribe: () => __async(void 0, null, function* () {
  }),
  deploy: () => __async(void 0, null, function* () {
  }),
  mint: () => __async(void 0, null, function* () {
  }),
  signMessage: (message) => __async(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async(void 0, null, function* () {
    return "";
  }),
  pushPsbt: (tx) => __async(void 0, null, function* () {
    return "";
  })
  // signPsbts: async () => { /* Implementation */ },
};
var LaserEyesContext = createContext(initialWalletContext);
var useLaserEyes = () => {
  return useContext(LaserEyesContext);
};
var LaserEyesProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [publicKey, setPublicKey] = useState("");
  const [paymentPublicKey, setPaymentPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [paymentAddress, setPaymentAddress] = useState("");
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0
  });
  const [network, setNetwork] = useLocalStorage("network", NETWORK);
  const [library, setLibrary] = useState(null);
  const [provider, setProvider] = useState("");
  const [hasOyl, setHasOyl] = useState(false);
  const [hasUnisat, setHasUnisat] = useState(false);
  const [hasXverse, setHasXverse] = useState(false);
  const [hasLeather, setHasLeather] = useState(false);
  useEffect(() => {
    const oylLib = window == null ? void 0 : window.oyl;
    setHasOyl(!!oylLib);
  }, []);
  useEffect(() => {
    const unisatLib = window == null ? void 0 : window.unisat;
    setHasUnisat(!!unisatLib);
  }, []);
  useEffect(() => {
    var _a;
    const xverseLib = (_a = window == null ? void 0 : window.XverseProviders) == null ? void 0 : _a.BitcoinProvider;
    setHasXverse(!!xverseLib);
  }, []);
  useEffect(() => {
    const leatherLib = window == null ? void 0 : window.LeatherProvider;
    setHasLeather(!!leatherLib);
  }, []);
  const selfRef = useRef({
    accounts: []
  });
  const self = selfRef.current;
  const connectOyl = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OYL);
      const lib = window.oyl;
      const result = yield lib.requestAccounts();
      setAccounts(result);
      setAddress(result[0]);
      setPaymentAddress(result[0]);
      setLibrary(lib);
      setProvider(OYL);
      handleAccountsChanged(result);
      setConnected(true);
    } catch (error) {
      new Error("Can't lasereyes to wallet");
    }
  });
  const connectUnisat = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, UNISAT);
      const lib = window.unisat;
      const result = yield lib.requestAccounts();
      setAccounts(result);
      setAddress(result[0]);
      setPaymentAddress(result[0]);
      setLibrary(lib);
      setProvider(UNISAT);
      handleAccountsChanged(result);
      setConnected(true);
      yield getNetwork().then((network2) => {
        const foundNetwork = getNetworkForUnisat(String(network2));
        setNetwork(foundNetwork);
      });
    } catch (error) {
      new Error("Can't lasereyes to wallet");
    }
  });
  const connectXverse = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE);
      let xverseNetwork = getXverseNetwork(NETWORK);
      const getAddressOptions = {
        payload: {
          purposes: ["ordinals", "payment"],
          message: "Address for receiving Ordinals and payments",
          network: {
            type: xverseNetwork
          }
        },
        onFinish: (response) => {
          setPublicKey(String(response.addresses[0].publicKey));
          setPaymentPublicKey(String(response.addresses[1].publicKey));
          const foundAddress = findOrdinalsAddress(response.addresses);
          const foundPaymentAddress = findPaymentAddress(response.addresses);
          if (foundAddress && foundPaymentAddress) {
            setAddress(foundAddress.address);
            setPaymentAddress(foundPaymentAddress.address);
            setProvider(XVERSE);
            setLibrary(window.BitcoinProvider);
          }
        }
      };
      yield getAddress(getAddressOptions);
      setConnected(true);
    } catch (error) {
      new Error(`Can't lasereyes to ${XVERSE} wallet`);
    }
  });
  const connectLeather = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
      const lib = window.LeatherProvider;
      const getAddressesResponse = yield lib.request(
        "getAddresses"
      );
      const addressesResponse = getAddressesResponse.result;
      const addresses = addressesResponse.addresses;
      const leatherAccountsParsed = addresses.map(
        (address2) => address2.address
      );
      const taprootAddress = addresses.find(
        (address2) => address2.type === P2TR
      );
      const segwitAddress = addresses.find(
        (address2) => address2.type === P2WPKH
      );
      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress == null ? void 0 : taprootAddress.address));
      setPaymentAddress(String(segwitAddress == null ? void 0 : segwitAddress.address));
      setLibrary(lib);
      setProvider(LEATHER);
      handleAccountsChanged(leatherAccountsParsed);
      setConnected(true);
      yield getNetwork().then((network2) => {
        if (!network2) {
          setNetwork(MAINNET);
        } else {
          setNetwork(network2);
        }
      });
      setConnected(true);
    } catch (error) {
      new Error(`Can't lasereyes to ${LEATHER} wallet`);
    }
  });
  const handleAccountsChanged = (_accounts) => {
    if (self.accounts[0] === _accounts[0]) {
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setAccounts(_accounts);
      setConnected(true);
      setAddress(_accounts[0]);
      setPaymentAddress(_accounts[0]);
      getBasicInfo();
    } else {
      setConnected(false);
    }
  };
  useEffect(() => {
    if (provider !== UNISAT) {
      return;
    }
    library.getAccounts().then((accounts2) => {
      handleAccountsChanged(accounts2);
    });
    library.on("accountsChanged", handleAccountsChanged);
    library.on("networkChanged", handleNetworkChanged);
    return () => {
      library.removeListener("accountsChanged", handleAccountsChanged);
      library.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [library]);
  useEffect(() => {
    const defaultWallet = localStorage == null ? void 0 : localStorage.getItem(
      LOCAL_STORAGE_DEFAULT_WALLET
    );
    if (defaultWallet) {
      setProvider(defaultWallet);
      connect(defaultWallet);
    }
  }, []);
  const getBasicInfo = () => __async(void 0, null, function* () {
    if (provider !== UNISAT)
      return;
    const publicKey2 = yield library == null ? void 0 : library.getPublicKey();
    setPublicKey(String(publicKey2));
    const balance2 = yield library == null ? void 0 : library.getBalance();
    setBalance(balance2);
    const network2 = yield library == null ? void 0 : library.getNetwork();
    if (network2) {
      setNetwork(network2);
    }
  });
  const handleNetworkChanged = (network2) => {
    let foundNetwork = "";
    if (provider === UNISAT) {
      foundNetwork = getNetworkForUnisat(network2);
    }
    if (provider === XVERSE) {
      foundNetwork = getXverseNetwork(network2);
    }
    if (provider === LEATHER) {
      foundNetwork = getLeatherNetwork(network2);
    }
    setNetwork(foundNetwork);
    getBasicInfo();
  };
  const findOrdinalsAddress = (addresses) => {
    return addresses.find(
      ({ purpose }) => purpose === "ordinals"
    );
  };
  const findPaymentAddress = (addresses) => {
    return addresses.find(
      ({ purpose }) => purpose === "payment"
    );
  };
  const connect = (walletName) => __async(void 0, null, function* () {
    setIsConnecting(true);
    try {
      if (!walletName)
        new Error("No wallet provided");
      if (walletName === OYL) {
        yield connectOyl();
      } else if (walletName === UNISAT) {
        yield connectUnisat();
      } else if (walletName === XVERSE) {
        yield connectXverse();
      } else if (walletName === LEATHER) {
        yield connectLeather();
      } else {
        new Error("Wallet not found!");
      }
      setConnected(true);
    } catch (error) {
      console.error("error", error);
      disconnect();
      new Error("Can't lasereyes to wallet");
    } finally {
      setIsConnecting(false);
    }
  });
  const disconnect = () => {
    setAddress("");
    setAccounts([]);
    setProvider("");
    setLibrary(null);
    setConnected(false);
    localStorage == null ? void 0 : localStorage.removeItem(LOCAL_STORAGE_DEFAULT_WALLET);
  };
  const requestAccounts = () => __async(void 0, null, function* () {
    if (!library)
      return;
    if (provider === OYL) {
      return yield library.requestAccounts();
    } else if (provider === UNISAT) {
      return yield library.requestAccounts();
    } else if (provider === XVERSE) {
      const getAddressOptions = {
        payload: {
          // @ts-ignore
          purposes: ["ordinals", "payment"],
          message: "Address for receiving Ordinals and payments",
          network: {
            type: XVERSE_NETWORK
          }
        },
        onFinish: (response) => __async(void 0, null, function* () {
          const foundAddress = findOrdinalsAddress(response.addresses);
          setAddress(foundAddress.address);
          const foundPaymentAddress = findPaymentAddress(response.addresses);
          setPaymentAddress(foundPaymentAddress);
          setPublicKey(String(response.addresses[0].publicKey));
          setPaymentPublicKey(String(response.addresses[1].publicKey));
        }),
        onCancel: () => {
          console.log("CANCELLED");
        }
      };
      return [address];
    } else if (provider === LEATHER) {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
      const lib = window.LeatherProvider;
      const getAddressesResponse = yield lib.request(
        "getAddresses"
      );
      const addressesResponse = getAddressesResponse.result;
      const addresses = addressesResponse.addresses;
      const leatherAccountsParsed = addresses.map(
        (address2) => address2.address
      );
      const taprootAddress = addresses.find(
        (address2) => address2.type === P2TR
      );
      const segwitAddress = addresses.find(
        (address2) => address2.type === P2WPKH
      );
      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress == null ? void 0 : taprootAddress.address));
      setPaymentAddress(String(segwitAddress == null ? void 0 : segwitAddress.address));
      setLibrary(lib);
      setProvider(LEATHER);
      handleAccountsChanged(leatherAccountsParsed);
      setConnected(true);
      yield getNetwork().then((network2) => {
        if (!network2) {
          setNetwork(MAINNET);
        } else {
          setNetwork(network2);
        }
      });
      setConnected(true);
    } else {
      console.log("NO WALLET CONNECTED");
    }
  });
  const getNetwork = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        const unisatNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForUnisat(unisatNetwork);
        setNetwork(foundNetwork);
        return foundNetwork;
      } else if (provider === XVERSE) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === LEATHER) {
        if (address.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const switchNetwork = (network2) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
      } else if (provider === XVERSE) {
        return NETWORK;
      } else if (provider === LEATHER) {
        return NETWORK;
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const getPublicKey = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const getBalance = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library.getBalance();
      } else if (provider === UNISAT) {
        return yield library.getBalance();
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const getInscriptions = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library.getInscriptions(0, 10);
      } else if (provider === UNISAT) {
        return yield library.getInscriptions(0, 10);
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const getAllBRC20Tokens = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        new Error("Not implemented");
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const sendBTC = (to, amount) => __async(void 0, null, function* () {
    try {
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.sendBitcoin(to, amount);
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        return yield library == null ? void 0 : library.request("sendTransfer", {
          address: to,
          amount: amount.toString()
        });
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const payInscribe = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        new Error("Not implemented");
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const deploy = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        new Error("Not implemented");
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const mint = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        new Error("Not implemented");
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        new Error("Not implemented");
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        new Error("Not implemented");
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else if (provider === XVERSE) {
        new Error("Not implemented");
      } else if (provider === LEATHER) {
        return yield library == null ? void 0 : library.request("signMessage", {
          message,
          paymentType: P2TR
        });
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const signPsbt = (psbt, finalize = false, broadcast = true) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        const response = yield library == null ? void 0 : library.signPsbt(psbt);
        return response;
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signPsbt(psbt, {
          autoFinalized: finalize
        });
      } else if (provider === XVERSE) {
        const toSignPsbt = bitcoin.Psbt.fromBase64(String(psbt), {
          network: bitcoin.networks.testnet
        });
        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address,
          signingIndexes: []
        };
        const paymentsAddressData = {
          address: paymentAddress,
          signingIndexes: []
        };
        let counter = 0;
        try {
          for (var iter = __forAwait(inputs), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
            let input = temp.value;
            const { script } = input.witnessUtxo;
            const addressFromScript = fromOutputScript(
              script,
              bitcoin.networks.testnet
            );
            if (addressFromScript === paymentAddress) {
              paymentsAddressData.signingIndexes.push(Number(counter));
            } else if (addressFromScript === address) {
              ordinalAddressData.signingIndexes.push(Number(counter));
            }
            counter++;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield temp.call(iter));
          } finally {
            if (error)
              throw error[0];
          }
        }
        if (ordinalAddressData.signingIndexes.length > 0) {
          inputsToSign.push(ordinalAddressData);
        }
        if (paymentsAddressData.signingIndexes.length > 0) {
          inputsToSign.push(paymentsAddressData);
        }
        let txId = "";
        const xverseNetwork = getXverseNetwork(network);
        const signPsbtOptions = {
          payload: {
            network: {
              type: xverseNetwork
            },
            message: "Sign Transaction",
            psbtBase64: toSignPsbt.toBase64(),
            broadcast,
            inputsToSign
          },
          onFinish: (response) => {
            if (response.txId) {
              txId = response.txId;
            } else if (response.psbtBase64) {
              const signedPsbt = bitcoin.Psbt.fromBase64(
                String(response.psbtBase64),
                {
                  network: bitcoin.networks.testnet
                }
              );
              txId = signedPsbt.toHex();
            }
          },
          onCancel: () => console.log("Canceled")
        };
        yield signTransaction(signPsbtOptions);
        return txId;
      } else if (provider === LEATHER) {
        const requestParams = { hex: psbt, broadcast };
        const response = yield library == null ? void 0 : library.request(
          "signPsbt",
          requestParams
        );
        const leatherHexResult = response.result;
        const signedTx = leatherHexResult.hex;
        if (!broadcast) {
          return signedTx;
        }
        const toSignPsbt = bitcoin.Psbt.fromHex(String(signedTx), {
          network: bitcoin.networks.testnet
        });
        toSignPsbt.finalizeAllInputs();
        const txId = toSignPsbt.extractTransaction().getId();
        return txId;
      }
    } catch (error2) {
      console.error("error", error2);
    }
  });
  const pushPsbt = (psbt, finalize = false) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else if (provider === XVERSE) {
        const signPsbtOptions = {
          payload: {
            network: {
              type: NETWORK
            },
            message: "Sign Transaction",
            psbtBase64: `cHNidP8BAJwCAmO+JvQJxhVDDpm3tV5PmPfzvJOSL4GOdjEOpAAAAAAnrAAA==`,
            broadcast: false,
            inputsToSign: [
              {
                address: "33TKH4kkiFPyTLDNmdNsLggyLeAYre57Qm",
                signingIndexes: [1]
              }
            ]
          },
          onFinish: (response) => {
          },
          onCancel: () => console.log("Canceled")
        };
        yield signTransaction(signPsbtOptions);
      }
    } catch (error) {
      console.error("error", error);
    }
  });
  const contextValue = {
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
    hasOyl,
    hasUnisat,
    hasXverse,
    hasLeather,
    //
    connect,
    disconnect,
    requestAccounts,
    getNetwork,
    switchNetwork,
    getPublicKey,
    getBalance,
    getInscriptions,
    getAllBRC20Tokens,
    sendBTC,
    signPsbt,
    pushPsbt,
    payInscribe,
    deploy,
    mint,
    signMessage
  };
  return /* @__PURE__ */ jsx(LaserEyesContext.Provider, { value: contextValue, children });
};
export {
  LEATHER,
  LEATHER_MAINNET,
  LEATHER_TESTNET,
  LaserEyesProvider,
  MAINNET,
  OYL,
  P2PKH,
  P2SH,
  P2TR,
  P2WPKH,
  P2WSH,
  PHANTOM,
  TESTNET,
  UNISAT,
  UNISAT_MAINNET,
  UNISAT_TESTNET,
  WALLETS,
  XVERSE,
  XVERSE_MAINNET,
  XVERSE_NETWORK,
  XVERSE_TESTNET,
  createConfig,
  getLeatherNetwork,
  getNetworkForLeather,
  getNetworkForUnisat,
  getNetworkForXverse,
  getUnisatNetwork,
  getXverseNetwork,
  useLaserEyes
};
