"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  LEATHER: () => LEATHER,
  LEATHER_MAINNET: () => LEATHER_MAINNET,
  LEATHER_TESTNET: () => LEATHER_TESTNET,
  LaserEyesProvider: () => LaserEyesProvider,
  MAINNET: () => MAINNET,
  MEMPOOL_SPACE_TESTNET_URL: () => MEMPOOL_SPACE_TESTNET_URL,
  MEMPOOL_SPACE_URL: () => MEMPOOL_SPACE_URL,
  OYL: () => OYL,
  P2PKH: () => P2PKH,
  P2SH: () => P2SH,
  P2TR: () => P2TR,
  P2WPKH: () => P2WPKH,
  P2WSH: () => P2WSH,
  PHANTOM: () => PHANTOM,
  REGTEST: () => REGTEST,
  TESTNET: () => TESTNET,
  UNISAT: () => UNISAT,
  UNISAT_MAINNET: () => UNISAT_MAINNET,
  UNISAT_TESTNET: () => UNISAT_TESTNET,
  WALLETS: () => WALLETS,
  XVERSE: () => XVERSE,
  XVERSE_MAINNET: () => XVERSE_MAINNET,
  XVERSE_NETWORK: () => XVERSE_NETWORK,
  XVERSE_TESTNET: () => XVERSE_TESTNET,
  createConfig: () => createConfig,
  findOrdinalsAddress: () => findOrdinalsAddress,
  findPaymentAddress: () => findPaymentAddress,
  getBTCBalance: () => getBTCBalance,
  getBitcoinNetwork: () => getBitcoinNetwork,
  getLeatherNetwork: () => getLeatherNetwork,
  getMempoolSpaceUrl: () => getMempoolSpaceUrl,
  getNetworkForLeather: () => getNetworkForLeather,
  getNetworkForUnisat: () => getNetworkForUnisat,
  getNetworkForXverse: () => getNetworkForXverse,
  getUnisatNetwork: () => getUnisatNetwork,
  getXverseNetwork: () => getXverseNetwork,
  isBase64: () => isBase64,
  isHex: () => isHex,
  satoshisToBTC: () => satoshisToBTC,
  useLaserEyes: () => useLaserEyes
});
module.exports = __toCommonJS(src_exports);

// src/consts/networks.ts
var XVERSE_NETWORK = "Mainnet";
var UNISAT_MAINNET = "livenet";
var UNISAT_TESTNET = "testnet";
var XVERSE_MAINNET = "Mainnet";
var XVERSE_TESTNET = "Testnet";
var LEATHER_MAINNET = "mainnet";
var LEATHER_TESTNET = "testnet";
var MAINNET = "mainnet";
var TESTNET = "testnet";
var REGTEST = "regtest";
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
var MEMPOOL_SPACE_URL = "https://mempool.space";
var MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
var getMempoolSpaceUrl = (network) => network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : MEMPOOL_SPACE_URL;

// src/consts/wallets.ts
var OYL = "oyl";
var UNISAT = "unisat";
var XVERSE = "xverse";
var PHANTOM = "phantom";
var LEATHER = "leather";
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
var import_react = require("react");
var bitcoin2 = __toESM(require("bitcoinjs-lib"));

// src/consts/settings.ts
var LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";
var initialWalletContext = {
  hasOyl: false,
  hasUnisat: false,
  hasXverse: false,
  hasLeather: false,
  connected: false,
  isConnecting: false,
  publicKey: "",
  address: "",
  paymentAddress: "",
  paymentPublicKey: "",
  balance: void 0,
  network: MAINNET,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async(void 0, null, function* () {
    return MAINNET;
  }),
  switchNetwork: (network) => __async(void 0, null, function* () {
  }),
  getPublicKey: () => __async(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async(void 0, null, function* () {
    return "";
  })
};

// src/providers/LaserEyesProvider.tsx
var import_usehooks_ts = require("usehooks-ts");

// src/lib/helpers.ts
var bitcoin = __toESM(require("bitcoinjs-lib"));
var import_axios = __toESM(require("axios"));
var getBitcoinNetwork = (network) => {
  if (network === TESTNET) {
    return bitcoin.networks.testnet;
  } else if (network === REGTEST) {
    return bitcoin.networks.regtest;
  } else {
    return bitcoin.networks.bitcoin;
  }
};
var findOrdinalsAddress = (addresses) => {
  return addresses.find(
    ({ purpose }) => purpose === "ordinals"
  );
};
var findPaymentAddress = (addresses) => {
  return addresses.find(
    ({ purpose }) => purpose === "payment"
  );
};
var getBTCBalance = (address) => __async(void 0, null, function* () {
  try {
    return yield import_axios.default.get(`https://blockchain.info/q/addressbalance/${address}`).then((response) => response.data);
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
    throw new Error("Failed to fetch BTC balance");
  }
});
var satoshisToBTC = (satoshis) => {
  if (Number.isNaN(satoshis) || satoshis === void 0)
    return "--";
  const btcValue = satoshis / 1e8;
  return btcValue.toFixed(8);
};
var isBase64 = (str) => {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return base64Regex.test(str);
};
var isHex = (str) => {
  const hexRegex = /^[a-fA-F0-9]+$/;
  return hexRegex.test(str);
};

// src/providers/LaserEyesProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var LaserEyesContext = (0, import_react.createContext)(initialWalletContext);
var useLaserEyes = () => {
  return (0, import_react.useContext)(LaserEyesContext);
};
var LaserEyesProvider = ({
  children,
  config
}) => {
  const selfRef = (0, import_react.useRef)({
    accounts: []
  });
  const self = selfRef.current;
  const [library, setLibrary] = (0, import_react.useState)(null);
  const [provider, setProvider] = (0, import_react.useState)();
  const [connected, setConnected] = (0, import_react.useState)(false);
  const [isConnecting, setIsConnecting] = (0, import_react.useState)(false);
  const [accounts, setAccounts] = (0, import_react.useState)([]);
  const [publicKey, setPublicKey] = (0, import_react.useState)("");
  const [paymentPublicKey, setPaymentPublicKey] = (0, import_react.useState)("");
  const [address, setAddress] = (0, import_react.useState)("");
  const [paymentAddress, setPaymentAddress] = (0, import_react.useState)("");
  const [balance, setBalance] = (0, import_react.useState)();
  const [hasUnisat, setHasUnisat] = (0, import_react.useState)(false);
  const [network, setNetwork] = (0, import_usehooks_ts.useLocalStorage)("network", MAINNET, {
    initializeWithValue: false
  });
  const defaultWallet = localStorage == null ? void 0 : localStorage.getItem(LOCAL_STORAGE_DEFAULT_WALLET);
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
    const unisatLib = window == null ? void 0 : window.unisat;
    setHasUnisat(!!unisatLib);
  }, []);
  (0, import_react.useEffect)(() => {
    setBalance(void 0);
  }, [network]);
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
    if (defaultWallet && !isConnecting) {
      setProvider(defaultWallet);
      connect(defaultWallet);
    }
  }, []);
  const connectUnisat = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, UNISAT);
      const lib = window.unisat;
      const unisatAccounts = yield lib.requestAccounts();
      if (!unisatAccounts)
        throw new Error("No accounts found");
      const unisatPubKey = yield lib.getPublicKey();
      if (!unisatPubKey)
        throw new Error("No public key found");
      setAccounts(unisatAccounts);
      setAddress(unisatAccounts[0]);
      setPaymentAddress(unisatAccounts[0]);
      setPublicKey(unisatPubKey);
      setPaymentPublicKey(unisatPubKey);
      setLibrary(lib);
      setProvider(UNISAT);
      setConnected(true);
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2 == null ? void 0 : balance2.total);
    } catch (error) {
      throw error;
    }
  });
  const handleAccountsChanged = (_accounts) => {
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
  const handleNetworkChanged = (network2) => {
    try {
      let foundNetwork = MAINNET;
      if (provider === UNISAT) {
        foundNetwork = getNetworkForUnisat(network2);
        setNetwork(foundNetwork);
        connect(provider);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  };
  const connect = (walletName) => __async(void 0, null, function* () {
    setIsConnecting(true);
    try {
      if (!walletName)
        throw new Error("No wallet provided");
      if (walletName === UNISAT) {
        yield connectUnisat();
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
  });
  const disconnect = () => {
    setAddress("");
    setPaymentAddress("");
    setPublicKey("");
    setPaymentPublicKey("");
    setAccounts([]);
    setProvider(void 0);
    setLibrary(null);
    setConnected(false);
    setBalance(void 0);
    localStorage == null ? void 0 : localStorage.removeItem(LOCAL_STORAGE_DEFAULT_WALLET);
  };
  const requestAccounts = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library.requestAccounts();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const getNetwork = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const unisatNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForUnisat(unisatNetwork);
        setNetwork(foundNetwork);
        return foundNetwork;
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const switchNetwork = (network2) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const getPublicKey = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const pub = yield library == null ? void 0 : library.getPublicKey();
        return yield library == null ? void 0 : library.getPublicKey();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const getBalance = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library.getBalance();
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const getInscriptions = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library.getInscriptions(0, 10);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const sendBTC = (to, amount) => __async(void 0, null, function* () {
    try {
      if (amount <= 0)
        throw new Error("Amount must be greater than 0");
      if (!Number.isInteger(amount))
        throw new Error("Amount must be an integer");
      if (!library)
        throw new Error("Library not found");
      if (provider === UNISAT) {
        const txId = yield library == null ? void 0 : library.sendBitcoin(to, amount);
        if (!txId)
          throw new Error("Transaction failed");
        return txId;
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const signPsbt = (psbt, finalize = false, broadcast = false) => __async(void 0, null, function* () {
    try {
      let psbtHex, psbtBase64;
      if (!library)
        return;
      if (isHex(psbt)) {
        psbtBase64 = bitcoin2.Psbt.fromHex(psbt).toBase64();
        psbtHex = psbt;
      } else if (isBase64(psbt)) {
        psbtHex = bitcoin2.Psbt.fromBase64(psbt).toHex();
        psbtBase64 = psbt;
      } else {
        throw new Error("Invalid PSBT format");
      }
      if (provider === UNISAT) {
        const signedPsbt = yield library == null ? void 0 : library.signPsbt(psbtHex, {
          autoFinalized: finalize
        });
        const psbtSignedPsbt = bitcoin2.Psbt.fromHex(signedPsbt);
        if (finalize && broadcast) {
          const txId = yield pushPsbt(signedPsbt);
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId
          };
        }
        return {
          signedPsbtHex: psbtSignedPsbt.toHex(),
          signedPsbtBase64: psbtSignedPsbt.toBase64(),
          txId: void 0
        };
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  const pushPsbt = (psbt) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else {
        throw new Error("Unsupported wallet");
      }
    } catch (error) {
      throw error;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    LaserEyesContext.Provider,
    {
      value: {
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
        signMessage
      },
      children
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LEATHER,
  LEATHER_MAINNET,
  LEATHER_TESTNET,
  LaserEyesProvider,
  MAINNET,
  MEMPOOL_SPACE_TESTNET_URL,
  MEMPOOL_SPACE_URL,
  OYL,
  P2PKH,
  P2SH,
  P2TR,
  P2WPKH,
  P2WSH,
  PHANTOM,
  REGTEST,
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
  findOrdinalsAddress,
  findPaymentAddress,
  getBTCBalance,
  getBitcoinNetwork,
  getLeatherNetwork,
  getMempoolSpaceUrl,
  getNetworkForLeather,
  getNetworkForUnisat,
  getNetworkForXverse,
  getUnisatNetwork,
  getXverseNetwork,
  isBase64,
  isHex,
  satoshisToBTC,
  useLaserEyes
});
