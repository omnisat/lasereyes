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
import * as bitcoin2 from "bitcoinjs-lib";
import {
  getAddress,
  request,
  RpcErrorCode,
  signTransaction
} from "sats-connect";

// src/consts/settings.ts
var LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";
var NETWORK = MAINNET;

// src/providers/LaserEyesProvider.tsx
import { fromOutputScript } from "bitcoinjs-lib/src/address";
import { useLocalStorage } from "usehooks-ts";

// src/lib/helpers.ts
import * as bitcoin from "bitcoinjs-lib";
import axios from "axios";
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
    return yield axios.get(`https://blockchain.info/q/addressbalance/${address}`).then((response) => response.data);
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
    throw new Error("Failed to fetch BTC balance");
  }
});

// src/providers/LaserEyesProvider.tsx
import { jsx } from "react/jsx-runtime";
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
var LaserEyesContext = createContext(initialWalletContext);
var useLaserEyes = () => {
  return useContext(LaserEyesContext);
};
var LaserEyesProvider = ({
  children,
  config
}) => {
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [publicKey, setPublicKey] = useState("");
  const [paymentPublicKey, setPaymentPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [paymentAddress, setPaymentAddress] = useState("");
  const [balance, setBalance] = useState();
  const [network, setNetwork] = useLocalStorage("network", MAINNET, {
    initializeWithValue: false
  });
  const [library, setLibrary] = useState(null);
  const [provider, setProvider] = useState("");
  const [hasOyl, setHasOyl] = useState(false);
  const [hasUnisat, setHasUnisat] = useState(false);
  const [hasXverse, setHasXverse] = useState(false);
  const [hasLeather, setHasLeather] = useState(false);
  useEffect(() => {
    if (config) {
      setNetwork(config.network);
      getNetwork().then((foundNetwork) => {
        if (config.network !== foundNetwork) {
          switchNetwork(network);
        }
      });
    }
  }, [config]);
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
  useEffect(() => {
    if (provider && address && library && network) {
      getBalance().then((balance2) => {
        setBalance(balance2);
      });
      getPublicKey().then((publicKey2) => {
        setPublicKey(String(publicKey2));
      });
    }
  }, [provider, address, library, network]);
  useEffect(() => {
    setBalance(void 0);
  }, [network]);
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
      throw new Error(`Can't lasereyes to ${OYL} wallet`);
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
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2);
    } catch (error) {
      throw new Error(`Can't lasereyes to ${UNISAT} wallet`);
    }
  });
  const connectXverse = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE);
      let xverseNetwork = getXverseNetwork(network);
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
      throw new Error(`Can't lasereyes to ${XVERSE} wallet`);
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
      const foundNetwork = getNetworkForUnisat(String(network2));
      setNetwork(foundNetwork);
    }
  });
  const handleNetworkChanged = (network2) => {
    let foundNetwork = MAINNET;
    if (provider === UNISAT) {
      foundNetwork = getNetworkForUnisat(network2);
    }
    if (provider === XVERSE) {
      foundNetwork = getNetworkForXverse(network2);
    }
    setNetwork(foundNetwork);
    getBasicInfo();
  };
  const connect = (walletName) => __async(void 0, null, function* () {
    console.log("connecting");
    setIsConnecting(true);
    try {
      if (!walletName)
        throw new Error("No wallet provided");
      if (walletName === OYL) {
        yield connectOyl();
      } else if (walletName === UNISAT) {
        yield connectUnisat();
      } else if (walletName === XVERSE) {
        yield connectXverse();
      } else {
        throw new Error("Wallet not found!");
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
    setAccounts([]);
    setProvider("");
    setLibrary(null);
    setConnected(false);
    setBalance(void 0);
    localStorage == null ? void 0 : localStorage.removeItem(LOCAL_STORAGE_DEFAULT_WALLET);
  };
  const requestAccounts = () => __async(void 0, null, function* () {
    try {
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
            throw new Error("User cancelled");
          }
        };
        return [address];
      }
    } catch (error) {
      throw error;
    }
  });
  const getNetwork = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        throw new Error("Not implemented by provider");
      } else if (provider === UNISAT) {
        const unisatNetwork = yield library == null ? void 0 : library.getNetwork();
        console.log({ unisatNetwork });
        const foundNetwork = getNetworkForUnisat(unisatNetwork);
        setNetwork(foundNetwork);
        return foundNetwork;
      } else if (provider === XVERSE) {
        throw new Error("Not implemented by provider");
      } else if (provider === LEATHER) {
        throw new Error("Not implemented by provider");
      }
    } catch (error) {
      throw error;
    }
  });
  const switchNetwork = (network2) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        throw new Error("Not implemented by provider");
      } else if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
      } else if (provider === XVERSE) {
        throw new Error("Not implemented by provider");
      }
    } catch (error) {
      throw error;
    }
  });
  const getPublicKey = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === UNISAT) {
        const pub = yield library == null ? void 0 : library.getPublicKey();
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === XVERSE) {
        return publicKey;
      }
    } catch (error) {
      throw error;
    }
  });
  const getBalance = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        const balanceResponse = yield library.getBalance();
        return {
          confirmed: balanceResponse.btc.confirmed * 1e8,
          unconfirmed: balanceResponse.btc.pending * 1e8,
          total: balanceResponse.btc.total * 1e8
        };
      } else if (provider === UNISAT) {
        return yield library.getBalance();
      } else if (provider === XVERSE) {
        const totalBalance = yield getBTCBalance(paymentAddress);
        return {
          confirmed: totalBalance,
          unconfirmed: 0,
          total: totalBalance
        };
      }
    } catch (error) {
      throw error;
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
        throw new Error("Not implemented by provider");
      } else if (provider === LEATHER) {
        throw new Error("Not implemented by provider");
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
      if (provider === OYL) {
        throw new Error("Not implemented by provider");
      } else if (provider === UNISAT) {
        const txId = yield library == null ? void 0 : library.sendBitcoin(to, amount);
        if (!txId)
          throw new Error("Transaction failed");
        return txId;
      } else if (provider === XVERSE) {
        const response = yield request("sendTransfer", {
          recipients: [
            {
              address: to,
              amount: Number(amount)
            }
          ]
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
      }
    } catch (error) {
      throw error;
    }
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        throw new Error("Not implemented by provider");
      } else if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else if (provider === XVERSE) {
        const response = yield request("signMessage", {
          address,
          message
        });
        if (response.status === "success") {
          return response.result.signature;
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
  });
  const signPsbt = (psbt, finalize = false, broadcast = true) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === OYL) {
        return yield library == null ? void 0 : library.signPsbt(psbt);
      } else if (provider === UNISAT) {
        const txHex = yield library == null ? void 0 : library.signPsbt(psbt, {
          autoFinalized: finalize
        });
        const signedPsbt = bitcoin2.Psbt.fromHex(txHex);
        return {
          signedPsbtHex: signedPsbt.toHex(),
          signedPsbtBase64: signedPsbt.toBase64()
        };
      } else if (provider === XVERSE) {
        const toSignPsbt = bitcoin2.Psbt.fromBase64(String(psbt), {
          network: getBitcoinNetwork(network)
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
              getBitcoinNetwork(network)
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
        let signedPsbtHex, signedPsbtBase64;
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
              const signedPsbt = bitcoin2.Psbt.fromBase64(
                String(response.psbtBase64),
                {
                  network: getBitcoinNetwork(network)
                }
              );
              signedPsbtHex = signedPsbt.toHex();
              signedPsbtBase64 = signedPsbt.toBase64();
            }
          },
          onCancel: () => console.log("Canceled")
        };
        yield signTransaction(signPsbtOptions);
        return {
          signedPsbtHex,
          signedPsbtBase64,
          txId
        };
      }
    } catch (error2) {
      console.error("error", error2);
      throw error2;
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
  return /* @__PURE__ */ jsx(
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
        hasOyl,
        hasUnisat,
        hasXverse,
        hasLeather,
        // functions
        connect,
        disconnect,
        requestAccounts,
        getNetwork,
        switchNetwork,
        getPublicKey,
        getBalance,
        sendBTC,
        signPsbt,
        pushPsbt,
        signMessage
      },
      children
    }
  );
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
  getLeatherNetwork,
  getNetworkForLeather,
  getNetworkForUnisat,
  getNetworkForXverse,
  getUnisatNetwork,
  getXverseNetwork,
  useLaserEyes
};
