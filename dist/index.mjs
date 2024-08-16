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

// src/consts/networks.ts
var XVERSE_NETWORK = "Mainnet";
var UNISAT_MAINNET = "livenet";
var UNISAT_TESTNET = "testnet";
var XVERSE_MAINNET = "Mainnet";
var XVERSE_TESTNET = "Testnet";
var XVERSE_SIGNET = "Signet";
var OKX_MAINNET = "livenet";
var OKX_TESTNET = "testnet";
var WIZZ_MAINNET = "livenet";
var WIZZ_TESTNET = "testnet";
var LEATHER_MAINNET = "mainnet";
var LEATHER_TESTNET = "testnet";
var MAINNET = "mainnet";
var SIGNET = "signet";
var TESTNET = "testnet";
var REGTEST = "regtest";
var getXverseNetwork = (network) => {
  if (network === MAINNET)
    return XVERSE_MAINNET;
  if (network === TESTNET)
    return XVERSE_TESTNET;
  if (network === SIGNET)
    return XVERSE_SIGNET;
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
var getWizzNetwork = (network) => {
  if (network === MAINNET)
    return WIZZ_MAINNET;
  if (network === TESTNET)
    return WIZZ_TESTNET;
  return WIZZ_MAINNET;
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
var getNetworkForOkx = (network) => {
  if (network === OKX_MAINNET)
    return MAINNET;
  if (network === OKX_TESTNET)
    return TESTNET;
  return MAINNET;
};
var getNetworkForWizz = (network) => {
  if (network === WIZZ_MAINNET)
    return MAINNET;
  if (network === WIZZ_TESTNET)
    return TESTNET;
  return MAINNET;
};
var MEMPOOL_SPACE_URL = "https://mempool.space";
var MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
var MEMPOOL_SPACE_SIGNET_URL = "https://mempool.space/signet";
var getMempoolSpaceUrl = (network) => network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : network === SIGNET ? MEMPOOL_SPACE_SIGNET_URL : MEMPOOL_SPACE_URL;

// src/consts/wallets.ts
var OYL = "oyl";
var UNISAT = "unisat";
var XVERSE = "xverse";
var PHANTOM = "phantom";
var LEATHER = "leather";
var MAGIC_EDEN = "magic-eden";
var OKX = "okx";
var WIZZ = "wizz";
var P2TR = "p2tr";
var P2PKH = "p2pkh";
var P2WPKH = "p2wpkh";
var P2PSH = "p2psh";
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
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import * as bitcoin2 from "bitcoinjs-lib";

// src/consts/settings.ts
var LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";
var initialWalletContext = {
  hasUnisat: false,
  hasXverse: false,
  hasOyl: false,
  hasMagicEden: false,
  hasOkx: false,
  hasLeather: false,
  hasPhantom: false,
  hasWizz: false,
  isInitializing: true,
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
  }),
  inscribe: (content) => __async(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};

// src/providers/LaserEyesProvider.tsx
import { useLocalStorage } from "usehooks-ts";

// src/lib/helpers.ts
import * as bitcoin from "bitcoinjs-lib";
import axios from "axios";

// src/lib/urls.ts
var MEMPOOL_SPACE_URL2 = "https://mempool.space";
var MEMPOOL_SPACE_TESTNET_URL2 = "https://mempool.space/testnet";
var getMempoolSpaceUrl2 = (network) => network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL2 : MEMPOOL_SPACE_URL2;

// src/lib/helpers.ts
import * as ecc from "@bitcoinerlab/secp256k1";
bitcoin.initEccLib(ecc);
var getBitcoinNetwork = (network) => {
  if (network === TESTNET) {
    return bitcoin.networks.testnet;
  } else if (network === SIGNET) {
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
var getBTCBalance = (address2) => __async(void 0, null, function* () {
  try {
    return yield axios.get(`https://blockchain.info/q/addressbalance/${address2}`).then((response) => response.data);
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
function estimateTxSize(taprootInputCount, nonTaprootInputCount, outputCount) {
  const baseTxSize = 10;
  const taprootInputSize = 57;
  const nonTaprootInputSize = 41;
  const outputSize = 34;
  const totalInputSize = taprootInputCount * taprootInputSize + nonTaprootInputCount * nonTaprootInputSize;
  const totalOutputSize = outputCount * outputSize;
  return baseTxSize + totalInputSize + totalOutputSize;
}
function createSendBtcPsbt(address2, paymentAddress, recipientAddress, amount, paymentPublicKey, network, feeRate = 7) {
  return __async(this, null, function* () {
    const isTaprootOnly = address2 === paymentAddress;
    const mempoolUrl = `${getMempoolSpaceUrl2(
      network
    )}/api/address/${paymentAddress}/utxo`;
    const utxos = yield axios.get(mempoolUrl).then((response) => response.data);
    const sortedUtxos = utxos.sort(
      (a, b) => b.value - a.value
    );
    const psbt = new bitcoin.Psbt({ network: getBitcoinNetwork(network) });
    const estTxSize = estimateTxSize(1, 0, 2);
    const satsNeeded = Math.floor(estTxSize * feeRate) + amount;
    let amountGathered = 0;
    let counter = 0;
    try {
      for (var iter = __forAwait(sortedUtxos), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        let utxo = temp.value;
        const { txid, vout, value } = utxo;
        const script = bitcoin.address.toOutputScript(
          paymentAddress,
          getBitcoinNetwork(network)
        );
        psbt.addInput({
          hash: txid,
          index: vout,
          witnessUtxo: {
            script,
            value
          }
        });
        if (!isTaprootOnly) {
          const redeemScript = getRedeemScript(paymentPublicKey, network);
          psbt.updateInput(counter, { redeemScript });
        }
        amountGathered += value;
        if (amountGathered >= satsNeeded) {
          break;
        }
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
    if (amountGathered < satsNeeded) {
      throw new Error("Insufficient funds");
    }
    psbt.addOutput({
      address: recipientAddress,
      value: amount
    });
    if (amountGathered > satsNeeded) {
      psbt.addOutput({
        address: paymentAddress,
        value: amountGathered - satsNeeded - amount
      });
    }
    return {
      psbtBase64: psbt.toBase64(),
      psbtHex: psbt.toHex()
    };
  });
}
function getRedeemScript(paymentPublicKey, network) {
  var _a;
  const p2wpkh = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(paymentPublicKey, "hex"),
    network: getBitcoinNetwork(network)
  });
  const p2sh = bitcoin.payments.p2sh({
    redeem: p2wpkh,
    network: getBitcoinNetwork(network)
  });
  return (_a = p2sh == null ? void 0 : p2sh.redeem) == null ? void 0 : _a.output;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/providers/LaserEyesProvider.tsx
import {
  BitcoinNetworkType,
  getAddress,
  request,
  RpcErrorCode,
  signMessage as signMessageSatsConnect,
  signTransaction
} from "sats-connect";
import { fromOutputScript } from "bitcoinjs-lib/src/address";
import axios2 from "axios";
import { jsx } from "react/jsx-runtime";
var LaserEyesContext = createContext(initialWalletContext);
var useLaserEyes = () => {
  return useContext(LaserEyesContext);
};
var LaserEyesProvider = ({
  children,
  config
}) => {
  const selfRef = useRef({
    accounts: []
  });
  const self = selfRef.current;
  const [library, setLibrary] = useState(null);
  const [provider, setProvider] = useState();
  const [isInitializing, setIsInitializing] = useState(true);
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [publicKey, setPublicKey] = useState("");
  const [paymentPublicKey, setPaymentPublicKey] = useState("");
  const [address2, setAddress] = useState("");
  const [paymentAddress, setPaymentAddress] = useState("");
  const [balance, setBalance] = useState();
  const [hasUnisat, setHasUnisat] = useState(false);
  const [hasXverse, setHasXverse] = useState(false);
  const [hasOyl, setHasOyl] = useState(false);
  const [hasMagicEden, setHasMagicEden] = useState(false);
  const [hasOkx, setHasOkx] = useState(false);
  const [hasLeather, setHasLeather] = useState(false);
  const [hasPhantom, setHasPhantom] = useState(false);
  const [hasWizz, setHasWizz] = useState(false);
  const [network, setNetwork] = useLocalStorage("network", MAINNET, {
    initializeWithValue: false
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
    if (hasUnisat !== void 0 && hasXverse !== void 0 && hasOyl !== void 0 && hasMagicEden !== void 0 && hasOkx !== void 0 && hasLeather !== void 0 && hasPhantom !== void 0 && hasWizz !== void 0) {
      setIsInitializing(false);
    }
  };
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const unisatLib = window == null ? void 0 : window.unisat;
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
      var _a;
      const xverseLib = (_a = window == null ? void 0 : window.XverseProviders) == null ? void 0 : _a.BitcoinProvider;
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
      const oylLib = window == null ? void 0 : window.oyl;
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
      const magicEdenLib = window == null ? void 0 : window.magicEden;
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
      var _a, _b;
      let foundOkx;
      if (network === TESTNET) {
        foundOkx = (_a = window == null ? void 0 : window.okxwallet) == null ? void 0 : _a.bitcoinTestnet;
      } else if (network === MAINNET) {
        foundOkx = (_b = window == null ? void 0 : window.okxwallet) == null ? void 0 : _b.bitcoin;
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
  }, [network]);
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const leatherLib = window == null ? void 0 : window.LeatherProvider;
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
      var _a;
      const phantomLib = (_a = window == null ? void 0 : window.phantom) == null ? void 0 : _a.bitcoin;
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
      const wizzLib = window == null ? void 0 : window.wizz;
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
    hasWizz
  ]);
  useEffect(() => {
    setBalance(void 0);
  }, [network]);
  useEffect(() => {
    if (provider !== UNISAT && provider !== WIZZ) {
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
    if (!isInitializing) {
      const defaultWallet = localStorage == null ? void 0 : localStorage.getItem(
        LOCAL_STORAGE_DEFAULT_WALLET
      );
      if (defaultWallet) {
        setProvider(defaultWallet);
        connect(defaultWallet);
      }
    }
  }, [isInitializing]);
  const connectUnisat = useCallback(() => __async(void 0, null, function* () {
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
  }), [hasUnisat]);
  const connectXverse = useCallback(() => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE);
      let xverseNetwork = getXverseNetwork((config == null ? void 0 : config.network) || MAINNET);
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
          getBTCBalance(foundPaymentAddress.address).then((totalBalance) => {
            setBalance(totalBalance);
          });
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${XVERSE} wallet`);
        },
        onError: (error) => {
          throw new Error(`Can't lasereyes to ${XVERSE} wallet`);
        }
      };
      yield getAddress(getAddressOptions);
      setConnected(true);
    } catch (error) {
      throw error;
    }
  }), [hasXverse]);
  const connectOyl = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OYL);
      const lib = window.oyl;
      const result = yield lib.requestAccounts();
      const oylPubKey = yield lib.getPublicKey();
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
  });
  const connectMagicEden = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, MAGIC_EDEN);
      let xverseNetwork = getXverseNetwork((config == null ? void 0 : config.network) || MAINNET);
      const getAddressOptions = {
        getProvider: () => __async(void 0, null, function* () {
          return window.magicEden.bitcoin;
        }),
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
            setProvider(MAGIC_EDEN);
            setLibrary(window.magicEden.bitcoin);
          }
          getBTCBalance(foundPaymentAddress.address).then((totalBalance) => {
            setBalance(totalBalance);
          });
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${MAGIC_EDEN} wallet`);
        },
        onError: (error) => {
          throw new Error(`Can't lasereyes to ${MAGIC_EDEN} wallet`);
        }
      };
      console.log(JSON.stringify(getAddressOptions));
      yield getAddress(getAddressOptions);
      setConnected(true);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
  const connectOkx = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OKX);
      const lib = network === TESTNET ? window.okxwallet.bitcoinTestnet : window.okxwallet.bitcoin;
      const okxAccounts = yield lib.requestAccounts();
      if (!okxAccounts)
        throw new Error("No accounts found");
      const okxPubKey = yield lib.getPublicKey();
      if (!okxPubKey)
        throw new Error("No public key found");
      setAccounts(okxAccounts);
      setAddress(okxAccounts[0]);
      setPaymentAddress(okxAccounts[0]);
      setPublicKey(okxPubKey);
      setPaymentPublicKey(okxPubKey);
      setLibrary(lib);
      setProvider(OKX);
      setConnected(true);
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2 == null ? void 0 : balance2.total);
    } catch (error) {
      throw error;
    }
  });
  const connectLeather = useCallback(() => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
      const lib = window.LeatherProvider;
      const getAddressesResponse = yield lib.request(
        "getAddresses"
      );
      const addressesResponse = getAddressesResponse.result;
      const addresses = addressesResponse.addresses;
      const leatherAccountsParsed = addresses.map(
        (address3) => address3.address
      );
      const taprootAddress = addresses.find(
        (address3) => address3.type === P2TR
      );
      const segwitAddress = addresses.find(
        (address3) => address3.type === P2WPKH
      );
      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress == null ? void 0 : taprootAddress.address));
      setPublicKey(String(taprootAddress == null ? void 0 : taprootAddress.publicKey));
      setPaymentAddress(String(segwitAddress == null ? void 0 : segwitAddress.address));
      setPaymentPublicKey(String(segwitAddress == null ? void 0 : segwitAddress.publicKey));
      setLibrary(lib);
      setProvider(LEATHER);
      const balance2 = yield getBTCBalance(String(segwitAddress == null ? void 0 : segwitAddress.address));
      setBalance(balance2);
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
  }), [hasLeather]);
  const connectPhantom = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, PHANTOM);
      const lib = window.phantom.bitcoin;
      const phantomAccounts = yield lib.requestAccounts();
      const phantomAccountsParsed = phantomAccounts.map(
        (account) => account.address
      );
      setAccounts(phantomAccountsParsed);
      const ordinalsAccount = phantomAccounts.find(
        (account) => account.purpose === "ordinals"
      );
      const paymentAccount = phantomAccounts.find(
        (account) => account.purpose === "payment"
      );
      setAddress(ordinalsAccount == null ? void 0 : ordinalsAccount.address);
      setPublicKey(ordinalsAccount == null ? void 0 : ordinalsAccount.publicKey);
      setPaymentAddress(paymentAccount == null ? void 0 : paymentAccount.address);
      setPaymentPublicKey(paymentAccount == null ? void 0 : paymentAccount.publicKey);
      setLibrary(lib);
      setProvider(PHANTOM);
      const balance2 = yield getBTCBalance(String(paymentAccount == null ? void 0 : paymentAccount.address));
      setBalance(balance2);
      setConnected(true);
    } catch (error) {
      throw new Error(`Can't lasereyes to ${PHANTOM} wallet`);
    }
  });
  const connectWizz = () => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, WIZZ);
      const lib = window.wizz;
      const wizzAccounts = yield lib.requestAccounts();
      if (!wizzAccounts)
        throw new Error("No accounts found");
      const wizzPubKey = yield lib.getPublicKey();
      if (!wizzPubKey)
        throw new Error("No public key found");
      setAccounts(wizzAccounts);
      setAddress(wizzAccounts[0]);
      setPaymentAddress(wizzAccounts[0]);
      setPublicKey(wizzPubKey);
      setPaymentPublicKey(wizzPubKey);
      setLibrary(lib);
      setProvider(WIZZ);
      setConnected(true);
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2 == null ? void 0 : balance2.total);
    } catch (error) {
      throw error;
    }
  });
  const connect = (walletName) => __async(void 0, null, function* () {
    setIsConnecting(true);
    try {
      if (!walletName)
        throw new Error("No wallet provided");
      if (walletName === UNISAT) {
        yield connectUnisat();
      } else if (walletName === XVERSE) {
        yield connectXverse();
      } else if (walletName === LEATHER) {
        yield connectLeather();
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
  const handleAccountsChanged = (_accounts) => {
    if (provider !== UNISAT)
      return;
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
      } else if (provider === XVERSE) {
        throw new Error("Not implemented");
      } else if (provider === WIZZ) {
        foundNetwork = getNetworkForWizz(network2);
        setNetwork(foundNetwork);
        connect(provider);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  };
  const requestAccounts = () => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
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
        return [address2];
      } else if (provider === OYL) {
        return yield library.requestAccounts();
      } else if (provider === OKX) {
        return yield library.requestAccounts();
      } else if (provider === LEATHER) {
        localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
        const lib = window.LeatherProvider;
        const getAddressesResponse = yield lib.request(
          "getAddresses"
        );
        const addressesResponse = getAddressesResponse.result;
        const addresses = addressesResponse.addresses;
        const leatherAccountsParsed = addresses.map(
          (address3) => address3.address
        );
        const taprootAddress = addresses.find(
          (address3) => address3.type === P2TR
        );
        const segwitAddress = addresses.find(
          (address3) => address3.type === P2WPKH
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
      } else if (provider === PHANTOM) {
        const phantomAccounts = yield library.requestAccounts();
        const phantomAccountsParsed = phantomAccounts.map(
          (account) => account.address
        );
        return phantomAccountsParsed;
      } else if (provider === WIZZ) {
        return yield library.requestAccounts();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  });
  const getNetwork = () => __async(void 0, null, function* () {
    var _a;
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const unisatNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForUnisat(unisatNetwork);
        setNetwork(foundNetwork);
        return foundNetwork;
      } else if (provider === XVERSE) {
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OYL) {
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === MAGIC_EDEN) {
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OKX) {
        const okxNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForOkx(okxNetwork);
        setNetwork(foundNetwork);
      } else if (provider === LEATHER) {
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === PHANTOM) {
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === WIZZ) {
        const wizzNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForWizz(wizzNetwork);
        setNetwork(foundNetwork);
      }
      return (_a = config == null ? void 0 : config.network) != null ? _a : MAINNET;
    } catch (error) {
      throw error;
    }
  });
  const switchNetwork = (network2) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const wantedNetwork = getWizzNetwork(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
      } else if (provider === WIZZ) {
        const wantedNetwork = getNetworkForWizz(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === OYL) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === OKX) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else if (provider === WIZZ) {
        return yield library == null ? void 0 : library.getPublicKey();
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      } else if (provider === XVERSE) {
        return yield getBTCBalance(paymentAddress);
      } else if (provider === OYL) {
        const balanceResponse = yield library.getBalance();
        return balanceResponse.btc.total * 1e8;
      } else if (provider === MAGIC_EDEN) {
        return yield getBTCBalance(paymentAddress);
      } else if (provider === OKX) {
        return yield getBTCBalance(paymentAddress);
      } else if (provider === LEATHER) {
        return yield getBTCBalance(paymentAddress);
      } else if (provider === PHANTOM) {
        return yield getBTCBalance(paymentAddress);
      } else if (provider === WIZZ) {
        const balanceResponse = yield library.getBalance();
        return balanceResponse.total * 1e8;
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
      } else if (provider === OYL) {
        return yield library.getInscriptions(0, 10);
      } else if (provider === OKX) {
        return yield library.getInscriptions(0, 10);
      } else if (provider === WIZZ) {
        return yield library.getInscriptions(0, 10);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  });
  const sendBTC = (to, amount) => __async(void 0, null, function* () {
    var _a;
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
      } else if (provider === XVERSE) {
        const response = yield request("sendTransfer", {
          recipients: [
            {
              address: to,
              amount
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
      } else if (provider === OYL) {
        const { psbtHex, psbtBase64 } = yield createSendBtcPsbt(
          address2,
          paymentAddress,
          to,
          amount,
          paymentPublicKey,
          //@ts-ignore
          network,
          7
        );
        const psbt = yield signPsbt(psbtHex, true, true);
        if (!psbt)
          throw new Error("Error sending BTC");
        return psbt.txId;
      } else if (provider === MAGIC_EDEN) {
        const { psbtHex, psbtBase64 } = yield createSendBtcPsbt(
          address2,
          paymentAddress,
          to,
          amount,
          paymentPublicKey,
          //@ts-ignore
          network,
          7
        );
        const psbt = yield signPsbt(psbtBase64, true, true);
        if (!psbt)
          throw new Error("Error sending BTC");
        return psbt.txId;
      } else if (provider === OKX) {
        const txId = yield library == null ? void 0 : library.sendBitcoin(to, amount);
        if (!txId)
          throw new Error("Transaction failed");
        return txId;
      } else if (provider === LEATHER) {
        const response = yield library == null ? void 0 : library.request("sendTransfer", {
          recipients: [
            {
              address: to,
              amount
            }
          ]
        });
        if ((_a = response == null ? void 0 : response.result) == null ? void 0 : _a.txid) {
          return response.result.txid;
        } else {
          if (response.error.code === RpcErrorCode.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error sending BTC: " + response.error.message);
          }
        }
      } else if (provider === WIZZ) {
        const txId = yield library == null ? void 0 : library.sendBitcoin(to, amount);
        if (txId) {
          return txId;
        } else {
          throw new Error("Error sending BTC");
        }
      }
    } catch (error) {
      throw error;
    }
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    var _a;
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else if (provider === XVERSE) {
        const response = yield request("signMessage", {
          address: address2,
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
      } else if (provider === MAGIC_EDEN) {
        let signedMessage;
        yield signMessageSatsConnect({
          getProvider: () => __async(void 0, null, function* () {
            return window.magicEden.bitcoin;
          }),
          payload: {
            network: {
              type: BitcoinNetworkType.Mainnet
            },
            address: paymentAddress,
            message
          },
          onFinish: (response) => {
            signedMessage = response;
          },
          onCancel: () => {
            alert("Request canceled");
          }
        });
        return signedMessage;
      } else if (provider === OKX) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else if (provider === LEATHER) {
        const signed = yield library == null ? void 0 : library.request("signMessage", {
          message,
          paymentType: P2WPKH
        });
        return (_a = signed == null ? void 0 : signed.result) == null ? void 0 : _a.signature;
      } else if (provider === PHANTOM) {
        const utf8Bytes = new TextEncoder().encode(message);
        const uintArray = new Uint8Array(utf8Bytes);
        const response = yield library == null ? void 0 : library.signMessage(address2, uintArray);
        const binaryString = String.fromCharCode(...response.signature);
        return btoa(binaryString);
      } else if (provider === WIZZ) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
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
      if (!psbt)
        throw new Error("No PSBT provided");
      if (isHex(psbt)) {
        psbtBase64 = bitcoin2.Psbt.fromHex(psbt).toBase64();
        psbtHex = psbt;
      } else if (isBase64(psbt)) {
        psbtBase64 = psbt;
        psbtHex = bitcoin2.Psbt.fromBase64(psbt).toHex();
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
      } else if (provider === XVERSE) {
        const toSignPsbt = bitcoin2.Psbt.fromBase64(String(psbtBase64), {
          network: getBitcoinNetwork(network)
        });
        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address: address2,
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
            } else if (addressFromScript === address2) {
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
        let txId, signedPsbtHex, signedPsbtBase64;
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
      } else if (provider === OYL) {
        const signedPsbt = yield library == null ? void 0 : library.signPsbt(psbtHex, true, true);
        console.log({ signedPsbt });
        const psbtSignedPsbt = bitcoin2.Psbt.fromHex(signedPsbt);
        if (broadcast) {
          const txId = yield pushPsbt(psbtSignedPsbt.toHex());
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId
          };
        } else {
          return {
            signedPsbtHex: psbtSignedPsbt.toHex(),
            signedPsbtBase64: psbtSignedPsbt.toBase64(),
            txId: void 0
          };
        }
      } else if (provider === MAGIC_EDEN) {
        const toSignPsbt = bitcoin2.Psbt.fromBase64(String(psbtBase64), {
          network: getBitcoinNetwork(network)
        });
        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address: address2,
          signingIndexes: []
        };
        const paymentsAddressData = {
          address: paymentAddress,
          signingIndexes: []
        };
        let counter = 0;
        try {
          for (var iter2 = __forAwait(inputs), more2, temp2, error2; more2 = !(temp2 = yield iter2.next()).done; more2 = false) {
            let input = temp2.value;
            const { script } = input.witnessUtxo;
            const addressFromScript = fromOutputScript(
              script,
              getBitcoinNetwork(network)
            );
            if (addressFromScript === paymentAddress) {
              paymentsAddressData.signingIndexes.push(Number(counter));
            } else if (addressFromScript === address2) {
              ordinalAddressData.signingIndexes.push(Number(counter));
            }
            counter++;
          }
        } catch (temp2) {
          error2 = [temp2];
        } finally {
          try {
            more2 && (temp2 = iter2.return) && (yield temp2.call(iter2));
          } finally {
            if (error2)
              throw error2[0];
          }
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
          getProvider: () => __async(void 0, null, function* () {
            return window.magicEden.bitcoin;
          }),
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
            if (response.psbtBase64) {
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
          onCancel: () => {
            console.log("Canceled");
            throw new Error("User canceled the request");
          },
          onError: (error3) => {
            console.log("error", error3);
            throw error3;
          }
        };
        yield signTransaction(signPsbtOptions);
        if (broadcast) {
          const signed = bitcoin2.Psbt.fromBase64(String(signedPsbtBase64));
          const finalized = signed.finalizeAllInputs();
          const extracted = finalized.extractTransaction();
          const txId2 = yield pushPsbt(extracted.toHex());
          return {
            signedPsbtHex: extracted.toHex(),
            signedPsbtBase64: "test",
            txId: txId2
          };
        } else {
          return {
            signedPsbtHex,
            signedPsbtBase64,
            txId
          };
        }
      } else if (provider === OKX) {
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
      } else if (provider === LEATHER) {
        const requestParams = {
          hex: psbtHex,
          broadcast,
          network
        };
        const response = yield library == null ? void 0 : library.request(
          "signPsbt",
          requestParams
        );
        const leatherHexResult = response.result;
        const signedTx = leatherHexResult.hex;
        const signed = bitcoin2.Psbt.fromHex(String(signedTx));
        if (finalize && broadcast) {
          const finalized = signed.finalizeAllInputs();
          const extracted = finalized.extractTransaction();
          const txId = yield pushPsbt(extracted.toHex());
          return {
            signedPsbtHex: signed.toHex(),
            signedPsbtBase64: signed.toBase64(),
            txId
          };
        } else if (finalize) {
          const finalized = signed.finalizeAllInputs();
          return {
            signedPsbtHex: finalized.toHex(),
            signedPsbtBase64: finalized.toBase64(),
            txId: void 0
          };
        } else {
          return {
            signedPsbtHex: signed.toHex(),
            signedPsbtBase64: signed.toBase64(),
            txId: void 0
          };
        }
      } else if (provider === WIZZ) {
        const signedPsbt = yield library == null ? void 0 : library.signPsbt(psbtHex, {
          autoFinalized: finalize,
          broadcast: false
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
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error3) {
      throw error3;
    }
  });
  const pushPsbt = (psbt) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else if (provider === OYL) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else if (provider === OKX) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else if (provider === MAGIC_EDEN) {
        return yield axios2.post("https://mempool.space/api/tx", psbt).then((res) => res.data);
      } else if (provider === LEATHER) {
        const decoded = bitcoin2.Psbt.fromHex(psbt);
        const extracted = decoded.extractTransaction();
        return yield axios2.post("https://mempool.space/api/tx", extracted.toHex()).then((res) => res.data);
      } else if (provider === WIZZ) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  });
  return /* @__PURE__ */ jsx(
    LaserEyesContext.Provider,
    {
      value: {
        library,
        accounts,
        publicKey,
        address: address2,
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
        signMessage
      },
      children
    }
  );
};

// src/hooks/useInscriber.ts
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState2 } from "react";

// src/consts/inscribe.ts
var MIME_TYPE_TEXT = "text/plain;charset=utf-8";

// src/hooks/useInscriber.ts
import axios3 from "axios";
var DESCRIBE_API_URL = "http://localhost:3000/api";
var useInscriber = ({
  inscribeApiUrl = DESCRIBE_API_URL
}) => {
  const { address: address2, paymentAddress, paymentPublicKey, publicKey, signPsbt } = useLaserEyes();
  const [content, setContent] = useState2("");
  const [mimeType, setMimeType] = useState2(MIME_TYPE_TEXT);
  const [commitPsbtHex, setCommitPsbtHex] = useState2("");
  const [commitPsbtBase64, setCommitPsbtBase64] = useState2("");
  const [commitTxId, setCommitTxId] = useState2("");
  const [feeRate, setFeeRate] = useState2(10);
  const [totalFees, setTotalFees] = useState2(0);
  const [inscriberAddress, setInscriberAddress] = useState2("");
  const [inscriptionTxId, setInscriptionTxId] = useState2("");
  const [previewUrl, setPreviewUrl] = useState2("");
  const [isFetchingCommitPsbt, setIsFetchingCommitPsbt] = useState2(false);
  const [isInscribing, setIsInscribing] = useState2(false);
  useEffect2(() => {
    setCommitPsbtHex("");
    setCommitPsbtBase64("");
    setCommitTxId("");
  }, [content, address2, mimeType, feeRate]);
  const getCommitPsbt = useCallback2(() => __async(void 0, null, function* () {
    try {
      if (!content)
        throw new Error("missing content");
      if (!paymentAddress)
        throw new Error("missing paymentAddress");
      if (!paymentPublicKey)
        throw new Error("missing paymentPublicKey");
      if (!feeRate)
        throw new Error("missing feeRate");
      if (!mimeType)
        throw new Error("missing mimeType");
      setIsFetchingCommitPsbt(true);
      return yield axios3.post(`${inscribeApiUrl}/create-inscription`, {
        content,
        paymentAddress,
        paymentPublicKey,
        feeRate,
        mimeType
      }).then((res) => res.data).then((data) => {
        setCommitPsbtHex(data.psbtHex);
        setCommitPsbtBase64(data.psbtBase64);
        setFeeRate(feeRate);
        setTotalFees(data.totalFees);
        setInscriberAddress(data.inscriberAddress);
        return data;
      });
    } catch (e) {
      console.error(e);
      throw new Error(e.response.data);
    } finally {
      setIsFetchingCommitPsbt(false);
    }
  }), [paymentAddress, paymentPublicKey, content, feeRate, mimeType, publicKey]);
  const handleSignCommit = (tx) => __async(void 0, null, function* () {
    try {
      const toBeSigned = tx != null ? tx : commitPsbtHex;
      if (!toBeSigned)
        throw new Error("missing tx");
      const signedResponse = yield signPsbt(toBeSigned, true, true);
      setCommitTxId(signedResponse == null ? void 0 : signedResponse.txId);
      return signedResponse == null ? void 0 : signedResponse.txId;
    } catch (e) {
      console.error(e);
      throw e;
    }
  });
  const inscribe = useCallback2(
    (_0) => __async(void 0, [_0], function* ({
      content: providedContent,
      mimeType: providedMimeType,
      ordinalAddress: providedAddress,
      commitTxId: providedCommitTxId
    }) {
      try {
        const inscribeContent = providedContent != null ? providedContent : content;
        const inscribeMimeType = providedMimeType != null ? providedMimeType : mimeType;
        const inscribeOutputAddress = providedAddress != null ? providedAddress : address2;
        let inscribeCommitTxId = providedCommitTxId != null ? providedCommitTxId : commitTxId;
        if (!inscribeContent)
          throw new Error("missing content");
        if (!inscribeMimeType)
          throw new Error("missing mimeType");
        if (!inscribeOutputAddress)
          throw new Error("missing address");
        setIsInscribing(true);
        if (!inscribeCommitTxId) {
          const signed = yield getCommitPsbt();
          inscribeCommitTxId = yield handleSignCommit(signed.psbtBase64);
          if (!inscribeCommitTxId)
            throw new Error("failed to broadcast commit");
          console.log("tempCommitTxId", inscribeCommitTxId);
        }
        yield delay(1e4);
        if (!inscribeCommitTxId)
          throw new Error("missing commitTxId");
        return yield axios3.post(`${inscribeApiUrl}/inscribe`, {
          content,
          mimeType,
          ordinalAddress: address2,
          commitTxId: inscribeCommitTxId
        }).then((res) => res.data).then((data) => {
          setInscriptionTxId(data);
          return data;
        });
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        setIsInscribing(false);
      }
    }),
    [address2, commitTxId, content, mimeType]
  );
  const reset = () => {
    setContent("");
    setMimeType(MIME_TYPE_TEXT);
    setCommitPsbtHex("");
    setCommitPsbtBase64("");
    setCommitTxId("");
    setFeeRate(10);
    setTotalFees(0);
    setInscriberAddress("");
    setInscriptionTxId("");
    setPreviewUrl("");
  };
  return {
    content,
    setContent,
    setMimeType,
    previewUrl,
    setPreviewUrl,
    getCommitPsbt,
    isFetchingCommitPsbt,
    commitPsbtHex,
    commitPsbtBase64,
    handleSignCommit,
    commitTxId,
    setCommitTxId,
    feeRate,
    setFeeRate,
    totalFees,
    inscriberAddress,
    inscribe,
    isInscribing,
    inscriptionTxId,
    reset
  };
};
export {
  LEATHER,
  LEATHER_MAINNET,
  LEATHER_TESTNET,
  LaserEyesProvider,
  MAGIC_EDEN,
  MAINNET,
  MEMPOOL_SPACE_SIGNET_URL,
  MEMPOOL_SPACE_TESTNET_URL,
  MEMPOOL_SPACE_URL,
  OKX,
  OKX_MAINNET,
  OKX_TESTNET,
  OYL,
  P2PKH,
  P2PSH,
  P2SH,
  P2TR,
  P2WPKH,
  P2WSH,
  PHANTOM,
  REGTEST,
  SIGNET,
  TESTNET,
  UNISAT,
  UNISAT_MAINNET,
  UNISAT_TESTNET,
  WALLETS,
  WIZZ,
  WIZZ_MAINNET,
  WIZZ_TESTNET,
  XVERSE,
  XVERSE_MAINNET,
  XVERSE_NETWORK,
  XVERSE_SIGNET,
  XVERSE_TESTNET,
  createConfig,
  createSendBtcPsbt,
  delay,
  estimateTxSize,
  findOrdinalsAddress,
  findPaymentAddress,
  getBTCBalance,
  getBitcoinNetwork,
  getLeatherNetwork,
  getMempoolSpaceUrl,
  getNetworkForLeather,
  getNetworkForOkx,
  getNetworkForUnisat,
  getNetworkForWizz,
  getNetworkForXverse,
  getRedeemScript,
  getUnisatNetwork,
  getWizzNetwork,
  getXverseNetwork,
  isBase64,
  isHex,
  satoshisToBTC,
  useInscriber,
  useLaserEyes
};
