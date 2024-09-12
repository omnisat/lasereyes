var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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
var UNISAT_MAINNET = "BITCOIN_MAINNET";
var UNISAT_TESTNET = "BITCOIN_TESTNET";
var UNISAT_TESTNET4 = "BITCOIN_TESTNET4";
var UNISAT_SIGNET = "BITCOIN_SIGNET";
var UNISAT_FRACTAL_MAINNET = "FRACTAL_BITCOIN_MAINNET";
var UNISAT_FRACTAL_TESTNET = "FRACTAL_BITCOIN_TESTNET";
var OP_WALLET_MAINNET = "livenet";
var OP_WALLET_TESTNET = "testnet";
var XVERSE_MAINNET = "Mainnet";
var XVERSE_TESTNET = "Testnet";
var XVERSE_SIGNET = "Signet";
var OKX_MAINNET = "livenet";
var OKX_TESTNET = "testnet";
var WIZZ_MAINNET = "livenet";
var WIZZ_TESTNET = "testnet";
var WIZZ_TESTNET4 = "testnet4";
var WIZZ_SIGNET = "signet";
var LEATHER_MAINNET = "mainnet";
var LEATHER_TESTNET = "testnet";
var MAINNET = "mainnet";
var SIGNET = "signet";
var TESTNET = "testnet";
var TESTNET4 = "testnet4";
var FRACTAL_MAINNET = "fractal mainnet";
var FRACTAL_TESTNET = "fractal testnet";
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
  if (network === TESTNET4)
    return UNISAT_TESTNET4;
  if (network === SIGNET)
    return UNISAT_SIGNET;
  if (network === FRACTAL_MAINNET)
    return UNISAT_FRACTAL_MAINNET;
  if (network === FRACTAL_TESTNET)
    return UNISAT_FRACTAL_TESTNET;
  return UNISAT_MAINNET;
};
var getWizzNetwork = (network) => {
  if (network === MAINNET)
    return WIZZ_MAINNET;
  if (network === TESTNET)
    return WIZZ_TESTNET;
  if (network === TESTNET4)
    return WIZZ_TESTNET4;
  if (network === SIGNET)
    return WIZZ_SIGNET;
  if (network === FRACTAL_TESTNET)
    return WIZZ_TESTNET;
  if (network === FRACTAL_MAINNET)
    return WIZZ_MAINNET;
  return WIZZ_MAINNET;
};
var getNetworkForUnisat = (network) => {
  if (network === UNISAT_MAINNET)
    return MAINNET;
  if (network === UNISAT_TESTNET)
    return TESTNET;
  if (network === UNISAT_TESTNET4)
    return TESTNET4;
  if (network === UNISAT_SIGNET)
    return SIGNET;
  if (network === UNISAT_FRACTAL_MAINNET)
    return FRACTAL_MAINNET;
  if (network === UNISAT_FRACTAL_TESTNET)
    return FRACTAL_TESTNET;
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
  if (network === WIZZ_TESTNET4)
    return TESTNET4;
  if (network === WIZZ_SIGNET)
    return SIGNET;
  if (network === FRACTAL_TESTNET)
    return TESTNET;
  if (network === FRACTAL_MAINNET)
    return MAINNET;
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
var MEMPOOL_SPACE_TESTNET4_URL = "https://mempool.space/testnet4";
var MEMPOOL_SPACE_SIGNET_URL2 = "https://mempool.space/signet";
var MEMPOOL_SPACE_FRACTAL_MAINNET_URL = "https://mempool.fractalbitcoin.io";
var MEMPOOL_SPACE_FRACTAL_TESTNET_URL = "https://mempool-testnet.fractalbitcoin.io";
var getMempoolSpaceUrl2 = (network) => network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL2 : network === TESTNET4 ? MEMPOOL_SPACE_TESTNET4_URL : network === SIGNET ? MEMPOOL_SPACE_SIGNET_URL2 : network === FRACTAL_MAINNET ? MEMPOOL_SPACE_FRACTAL_MAINNET_URL : network === FRACTAL_TESTNET ? MEMPOOL_SPACE_FRACTAL_TESTNET_URL : MEMPOOL_SPACE_URL2;

// src/lib/helpers.ts
import * as ecc from "@bitcoinerlab/secp256k1";
bitcoin.initEccLib(ecc);
var getBitcoinNetwork = (network) => {
  if (network === TESTNET || network === TESTNET4 || network === SIGNET) {
    return bitcoin.networks.testnet;
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
var getBTCBalance = (address2, network) => __async(void 0, null, function* () {
  try {
    const utxos = yield getAddressUtxos(
      address2,
      network
    );
    if (!utxos)
      return 0;
    return utxos.reduce((acc, utxo) => acc + utxo.value, 0);
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
function getAddressUtxos(address2, network) {
  return __async(this, null, function* () {
    if (address2.startsWith("t")) {
      if (network === MAINNET) {
        return [];
      }
      if (network === FRACTAL_MAINNET) {
        return [];
      }
      if (network === FRACTAL_TESTNET) {
        return [];
      }
    }
    return yield axios.get(`${getMempoolSpaceUrl2(network)}/api/address/${address2}/utxo`).then((response) => response.data);
  });
}
function createSendBtcPsbt(address2, paymentAddress, recipientAddress, amount, paymentPublicKey, network, feeRate = 7) {
  return __async(this, null, function* () {
    const isTaprootOnly = address2 === paymentAddress;
    const utxos = yield getAddressUtxos(
      paymentAddress,
      network
    );
    if (!utxos) {
      throw new Error("No UTXOs found");
    }
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
  MessageSigningProtocols,
  request,
  RpcErrorCode,
  sendBtcTransaction,
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
  const [library, setLibrary] = useLocalStorage("library", {});
  const [provider, setProvider] = useLocalStorage("provider", void 0);
  const [isInitializing, setIsInitializing] = useState(true);
  const [connected, setConnected] = useLocalStorage("connected", false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [publicKey, setPublicKey] = useLocalStorage("publicKey", "");
  const [paymentPublicKey, setPaymentPublicKey] = useLocalStorage(
    "paymentPublicKey",
    ""
  );
  const [address2, setAddress] = useLocalStorage("address", "");
  const [paymentAddress, setPaymentAddress] = useLocalStorage(
    "paymentAddress",
    ""
  );
  const [balance, setBalance] = useState();
  const [hasUnisat, setHasUnisat] = useState(false);
  const [hasXverse, setHasXverse] = useState(false);
  const [hasOyl, setHasOyl] = useState(false);
  const [hasMagicEden, setHasMagicEden] = useState(false);
  const [hasOkx, setHasOkx] = useState(false);
  const [hasLeather, setHasLeather] = useState(false);
  const [hasPhantom, setHasPhantom] = useState(false);
  const [hasWizz, setHasWizz] = useState(false);
  const [network, setNetwork] = useLocalStorage("network", (config == null ? void 0 : config.network) || MAINNET);
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
      if (network === TESTNET || network === TESTNET4 || network === SIGNET || network === FRACTAL_TESTNET) {
        foundOkx = (_a = window == null ? void 0 : window.okxwallet) == null ? void 0 : _a.bitcoinTestnet;
      } else if (network === MAINNET || network === FRACTAL_MAINNET) {
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
      if (defaultWallet && !address2) {
        setProvider(defaultWallet);
        connect(defaultWallet);
      }
    }
  }, [isInitializing, address2]);
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
      yield getNetwork().then((network2) => {
        if (config.network !== network2) {
          switchNetwork(network2);
        }
      });
      getBTCBalance(unisatAccounts[0], network).then((totalBalance) => {
        setBalance(totalBalance);
      });
      setProvider(UNISAT);
      setConnected(true);
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2 == null ? void 0 : balance2.total);
    } catch (error) {
      throw error;
    }
  }), [hasUnisat, network]);
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
          getBTCBalance(foundPaymentAddress.address, network).then(
            (totalBalance) => {
              setBalance(totalBalance);
            }
          );
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
      getBTCBalance(result[1], network).then((totalBalance) => {
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
          getBTCBalance(foundPaymentAddress.address, network).then(
            (totalBalance) => {
              setBalance(totalBalance);
            }
          );
        },
        onCancel: () => {
          throw new Error(`User canceled lasereyes to ${MAGIC_EDEN} wallet`);
        },
        onError: (error) => {
          throw new Error(`Can't lasereyes to ${MAGIC_EDEN} wallet`);
        }
      };
      yield getAddress(getAddressOptions);
      setConnected(true);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
  const connectOkx = useCallback(() => __async(void 0, null, function* () {
    var _a;
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OKX);
      console.log("connecting", network);
      const lib = network === TESTNET || network === TESTNET4 || network === FRACTAL_TESTNET ? window.okxwallet.bitcoinTestnet : network === SIGNET ? window.okxwallet.bitcoinSignet : window.okxwallet.bitcoin;
      const okxAccounts = yield lib.connect();
      if (!okxAccounts)
        throw new Error("No accounts found");
      setAccounts([okxAccounts]);
      setAddress(okxAccounts.address);
      if (((_a = String(okxAccounts.address)) == null ? void 0 : _a.startsWith("tb")) && network !== TESTNET && network !== TESTNET4 && network !== SIGNET) {
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
      const balance2 = yield lib == null ? void 0 : lib.getBalance();
      setBalance(balance2 == null ? void 0 : balance2.total);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }), [hasOkx, network]);
  const connectLeather = useCallback(() => __async(void 0, null, function* () {
    var _a;
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
      if (((_a = String(taprootAddress == null ? void 0 : taprootAddress.address)) == null ? void 0 : _a.startsWith("tb")) && network !== TESTNET && network !== TESTNET4 && network !== SIGNET) {
        throw new Error(
          `Please switch networks to ${network} in the wallet settings.`
        );
      }
      setAccounts(leatherAccountsParsed);
      setAddress(String(taprootAddress == null ? void 0 : taprootAddress.address));
      setPublicKey(String(taprootAddress == null ? void 0 : taprootAddress.publicKey));
      setPaymentAddress(String(segwitAddress == null ? void 0 : segwitAddress.address));
      setPaymentPublicKey(String(segwitAddress == null ? void 0 : segwitAddress.publicKey));
      setLibrary(lib);
      setProvider(LEATHER);
      const balance2 = yield getBTCBalance(
        String(segwitAddress == null ? void 0 : segwitAddress.address),
        network
      );
      setBalance(balance2);
      handleAccountsChanged(leatherAccountsParsed);
      setConnected(true);
      yield getNetwork().then((network2) => {
      });
      setConnected(true);
    } catch (error) {
      throw error;
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
      const balance2 = yield getBTCBalance(
        String(paymentAccount == null ? void 0 : paymentAccount.address),
        network
      );
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
      yield getNetwork().then((network2) => {
        if (config.network !== network2) {
          switchNetwork(network2);
        }
      });
      const balance2 = yield getBTCBalance(String(wizzAccounts[0]), network);
      setBalance(balance2);
      setConnected(true);
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
      } else if (walletName === OYL) {
        yield connectOyl();
      } else if (walletName === MAGIC_EDEN) {
        yield connectMagicEden();
      } else if (walletName === OKX) {
        yield connectOkx();
      } else if (walletName === LEATHER) {
        yield connectLeather();
      } else if (walletName === PHANTOM) {
        yield connectPhantom();
      } else if (walletName === WIZZ) {
        yield connectWizz();
      } else {
        throw new Error("Unsupported wallet..");
      }
      setConnected(true);
    } catch (error) {
      setIsConnecting(false);
      disconnect();
      console.log("e", error == null ? void 0 : error.message);
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
    setLibrary({});
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
      let foundNetwork;
      if (provider === UNISAT) {
        foundNetwork = getNetworkForUnisat(network2);
        setNetwork(foundNetwork);
        connect(provider);
      } else if (provider === XVERSE) {
        throw new Error("Not implemented");
      } else if (provider === WIZZ) {
        foundNetwork = getNetworkForWizz(network2);
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
  const requestAccounts = () => __async(void 0, null, function* () {
    try {
      if (!library)
        throw new Error("No wallet connected");
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
        if (network === TESTNET || network === TESTNET4 || network === FRACTAL_TESTNET) {
          return yield library.connect();
        }
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
        const balance2 = yield getBTCBalance(
          String(segwitAddress == null ? void 0 : segwitAddress.address),
          network
        );
        setBalance(balance2);
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
  const getNetwork = useCallback(() => __async(void 0, null, function* () {
    var _a, _b;
    try {
      if (provider === UNISAT) {
        const unisatNetwork = yield library == null ? void 0 : library.getChain();
        if (!unisatNetwork) {
          return (_a = config == null ? void 0 : config.network) != null ? _a : MAINNET;
        }
        return getNetworkForUnisat(unisatNetwork.enum);
      } else if (provider === XVERSE) {
        if (address2.slice(0, 1) === "t") {
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
        if (address2.slice(0, 1) === "t") {
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
        const okxNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForOkx(okxNetwork);
        setNetwork(foundNetwork);
      } else if (provider === LEATHER) {
        if (address2.slice(0, 1) === "t") {
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
        if (address2.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === WIZZ) {
        const wizzNetwork = yield library == null ? void 0 : library.getNetwork();
        return getNetworkForWizz(wizzNetwork);
      }
      return (_b = config == null ? void 0 : config.network) != null ? _b : MAINNET;
    } catch (error) {
      throw error;
    }
  }), [address2, provider, library]);
  const switchNetwork = (network2) => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network2);
        console.log("wantedNetwork", wantedNetwork);
        yield library == null ? void 0 : library.switchChain(wantedNetwork);
        setNetwork(network2);
        yield getBalance();
      } else if (provider === WIZZ) {
        if (network2 === FRACTAL_TESTNET || network2 === FRACTAL_MAINNET) {
          return yield library.switchNetwork(WIZZ_MAINNET);
        }
        const wantedNetwork = getNetworkForWizz(network2);
        yield library == null ? void 0 : library.switchNetwork(wantedNetwork);
        setNetwork(network2);
        yield getBalance();
      } else {
        disconnect();
        throw new Error(
          "The connected wallet doesn't support programmatic network changes.."
        );
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
  const getBalance = useCallback(() => __async(void 0, null, function* () {
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        const bal = yield library.getBalance();
        setBalance(bal.total);
        return bal.total;
      } else if (provider === XVERSE) {
        const bal = yield getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === OYL) {
        const balanceResponse = yield library.getBalance();
        const bal = balanceResponse.btc.total * 1e8;
        setBalance(bal);
        return bal;
      } else if (provider === MAGIC_EDEN) {
        const bal = yield getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === OKX) {
        const bal = yield getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === LEATHER) {
        const bal = yield getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === PHANTOM) {
        const bal = yield getBTCBalance(paymentAddress, network);
        setBalance(bal);
        return bal;
      } else if (provider === WIZZ) {
        const balanceResponse = yield library.getBalance();
        const bal = balanceResponse.total;
        setBalance(bal);
        return bal;
      }
    } catch (error) {
      throw error;
    }
  }), [provider, library, paymentAddress, network]);
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
        let sendResponse;
        yield sendBtcTransaction({
          getProvider: () => __async(void 0, null, function* () {
            return library;
          }),
          payload: {
            network: {
              type: getXverseNetwork(network)
            },
            recipients: [
              {
                address: to,
                amountSats: BigInt(amount)
              }
            ],
            senderAddress: paymentAddress
          },
          onFinish: (response) => {
            sendResponse = response;
          },
          onCancel: () => alert("Canceled")
        });
        if (!sendResponse)
          throw new Error("Error sending BTC");
        return sendResponse.txid;
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
  const signMessage = (message, toSignAddress) => __async(void 0, null, function* () {
    var _a;
    try {
      if (!library)
        return;
      if (provider === UNISAT) {
        return yield library == null ? void 0 : library.signMessage(message);
      } else if (provider === XVERSE) {
        const tempAddy = toSignAddress || paymentAddress;
        const response = yield request("signMessage", {
          address: tempAddy,
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
      } else if (provider === OYL) {
        const tempAddy = toSignAddress || paymentAddress;
        return yield library == null ? void 0 : library.signMessage(message, "bip322", tempAddy);
      } else if (provider === MAGIC_EDEN) {
        const tempAddy = toSignAddress || paymentAddress;
        let signedMessage;
        yield signMessageSatsConnect({
          getProvider: () => __async(void 0, null, function* () {
            return window.magicEden.bitcoin;
          }),
          payload: {
            network: {
              type: BitcoinNetworkType.Mainnet
            },
            address: tempAddy,
            message,
            protocol: MessageSigningProtocols.BIP322
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
        const paymentType = toSignAddress === address2 ? P2TR : P2WPKH;
        if (toSignAddress !== address2 && toSignAddress !== paymentAddress) {
          throw new Error("Invalid address to sign message");
        }
        const signed = yield library == null ? void 0 : library.request("signMessage", {
          message,
          paymentType
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
            if (input.witnessUtxo === void 0) {
              paymentsAddressData.signingIndexes.push(Number(counter));
            } else {
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
        const magicEdenNetwork = getXverseNetwork(network);
        const signPsbtOptions = {
          getProvider: () => __async(void 0, null, function* () {
            return library;
          }),
          payload: {
            network: {
              type: magicEdenNetwork
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
          broadcast: false,
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
          const txId = yield pushPsbt(finalized.toHex());
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
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, psbt).then((res) => res.data);
      } else if (provider === OYL) {
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, psbt).then((res) => res.data);
      } else if (provider === OKX) {
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, psbt).then((res) => res.data);
      } else if (provider === MAGIC_EDEN) {
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, psbt).then((res) => res.data);
      } else if (provider === LEATHER) {
        const decoded = bitcoin2.Psbt.fromHex(psbt);
        const extracted = decoded.extractTransaction();
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, extracted.toHex()).then((res) => res.data);
      } else if (provider === WIZZ) {
        return yield axios2.post(`${getMempoolSpaceUrl2(network)}/api/tx`, psbt).then((res) => res.data);
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

// src/icons/oyl.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var OylLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  if (variant === "first") {
    return /* @__PURE__ */ jsxs(
      "svg",
      __spreadProps(__spreadValues({
        className,
        width: size,
        height: size,
        viewBox: "0 0 42 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), {
        children: [
          /* @__PURE__ */ jsx2(
            "rect",
            {
              width: "42",
              height: "42",
              rx: "10",
              fill: "#090A0C",
              style: { fill: "#090A0C", fillOpacity: 1 }
            }
          ),
          /* @__PURE__ */ jsx2(
            "path",
            {
              d: "M21 14C29.222 14 38 15.9676 38 20.9054C38 25.8622 29.222 28 21 28C12.778 28 4 26.0324 4 21.0946C4 16.1378 12.778 14 21 14ZM21.0397 25.3135C24.6939 25.3135 30.1752 24.3297 30.1752 21C30.1752 17.6703 24.6939 16.6865 21.0397 16.6865H20.9603C17.3061 16.6865 11.8248 17.6703 11.8248 21C11.8248 24.3297 17.3061 25.3135 20.9603 25.3135H21.0397Z",
              fill: "white",
              style: { fill: "white", fillOpacity: 1 }
            }
          )
        ]
      })
    );
  }
  return /* @__PURE__ */ jsxs(
    "svg",
    __spreadProps(__spreadValues({
      className,
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx2(
          "rect",
          {
            width: "42",
            height: "42",
            rx: "10",
            fill: "white",
            style: { fill: "white", fillOpacity: 1 }
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M21 14C29.222 14 38 15.9676 38 20.9054C38 25.8622 29.222 28 21 28C12.778 28 4 26.0324 4 21.0946C4 16.1378 12.778 14 21 14ZM21.0397 25.3135C24.6939 25.3135 30.1752 24.3297 30.1752 21C30.1752 17.6703 24.6939 16.6865 21.0397 16.6865H20.9603C17.3061 16.6865 11.8248 17.6703 11.8248 21C11.8248 24.3297 17.3061 25.3135 20.9603 25.3135H21.0397Z",
            fill: "#090A0C",
            style: { fill: "#090A0C", fillOpacity: 1 }
          }
        )
      ]
    })
  );
};

// src/icons/leather.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var LeatherLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  if (variant === "first") {
    return /* @__PURE__ */ jsxs2(
      "svg",
      __spreadProps(__spreadValues({
        className,
        width: size,
        height: size,
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), {
        children: [
          /* @__PURE__ */ jsx3("rect", { width: "128", height: "128", rx: "26.8387", fill: "#12100F" }),
          /* @__PURE__ */ jsx3(
            "path",
            {
              d: "M74.9171 52.7114C82.4766 51.5408 93.4087 43.5804 93.4087 37.3761C93.4087 35.5031 91.8968 34.2154 89.6871 34.2154C85.5004 34.2154 78.4061 40.5368 74.9171 52.7114ZM39.911 83.4991C30.0256 83.4991 29.2115 93.3324 39.0969 93.3324C43.5163 93.3324 48.8661 91.5764 51.6573 88.4157C47.5868 84.9038 44.2141 83.4991 39.911 83.4991ZM102.829 79.2848C103.41 95.7907 95.0369 105.039 80.8484 105.039C72.4748 105.039 68.2881 101.878 59.333 96.0249C54.681 101.176 45.8423 105.039 38.5154 105.039C13.2785 105.039 14.3252 72.8463 40.0273 72.8463C45.3771 72.8463 49.9128 74.2511 55.7277 77.88L59.5656 64.4177C43.7489 60.0864 35.8405 47.9118 43.6326 30.4693H56.1929C49.215 42.0586 53.9832 51.6578 62.822 52.7114C67.5903 35.7372 77.8246 22.509 91.4316 22.509C99.1074 22.509 105.155 27.5428 105.155 36.6737C105.155 51.3066 86.0819 63.2471 71.6607 64.4177L65.7295 85.3721C72.4748 93.2153 91.199 100.824 91.199 79.2848H102.829Z",
              fill: "#F5F1ED"
            }
          )
        ]
      })
    );
  }
  return /* @__PURE__ */ jsxs2(
    "svg",
    __spreadProps(__spreadValues({
      className,
      width: size,
      height: size,
      viewBox: "0 0 128 128",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx3("rect", { width: "128", height: "128", rx: "26.8387", fill: "#F5F1ED" }),
        /* @__PURE__ */ jsx3(
          "path",
          {
            d: "M74.9171 52.7115C82.4766 51.5409 93.4087 43.5806 93.4087 37.3762C93.4087 35.5032 91.8968 34.2155 89.6871 34.2155C85.5004 34.2155 78.4061 40.5369 74.9171 52.7115ZM39.911 83.4992C30.0256 83.4992 29.2115 93.3325 39.0969 93.3325C43.5163 93.3325 48.8661 91.5766 51.6573 88.4159C47.5868 84.904 44.2141 83.4992 39.911 83.4992ZM102.829 79.2849C103.41 95.7908 95.0369 105.039 80.8484 105.039C72.4748 105.039 68.2881 101.878 59.333 96.025C54.681 101.176 45.8423 105.039 38.5154 105.039C13.2785 105.039 14.3252 72.8464 40.0273 72.8464C45.3771 72.8464 49.9128 74.2512 55.7277 77.8801L59.5656 64.4179C43.7489 60.0865 35.8405 47.9119 43.6326 30.4695H56.1929C49.215 42.0587 53.9832 51.6579 62.822 52.7115C67.5903 35.7373 77.8246 22.5092 91.4316 22.5092C99.1074 22.5092 105.155 27.5429 105.155 36.6738C105.155 51.3068 86.0819 63.2472 71.6607 64.4179L65.7295 85.3722C72.4748 93.2155 91.199 100.825 91.199 79.2849H102.829Z",
            fill: "#12100F"
          }
        )
      ]
    })
  );
};

// src/icons/phantom.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var PhantomLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  if (variant === "first") {
    return /* @__PURE__ */ jsxs3(
      "svg",
      __spreadProps(__spreadValues({
        className,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 42 42",
        fill: "none"
      }, props), {
        children: [
          /* @__PURE__ */ jsxs3("g", { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsx4(
              "path",
              {
                fill: "#AB9FF2",
                d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
              }
            ),
            /* @__PURE__ */ jsx4(
              "path",
              {
                fill: "#FFFDF8",
                fillRule: "evenodd",
                d: "M17.686 27.567c-1.676 2.569-4.484 5.819-8.22 5.819-1.767 0-3.466-.728-3.466-3.887C6 21.454 16.984 9 27.176 9c5.798 0 8.108 4.023 8.108 8.59 0 5.864-3.805 12.568-7.587 12.568-1.2 0-1.79-.659-1.79-1.704 0-.273.046-.568.137-.887-1.291 2.205-3.783 4.25-6.116 4.25-1.698 0-2.559-1.068-2.559-2.568 0-.545.114-1.113.317-1.681Zm8.78-10.135c0 1.331-.786 1.997-1.664 1.997-.892 0-1.664-.666-1.664-1.997s.772-1.996 1.664-1.996c.878 0 1.663.665 1.663 1.996Zm4.99 0c0 1.331-.785 1.997-1.663 1.997-.892 0-1.664-.666-1.664-1.997 0-1.33.772-1.996 1.664-1.996.878 0 1.664.665 1.664 1.996Z",
                clipRule: "evenodd"
              }
            )
          ] }),
          /* @__PURE__ */ jsx4("defs", { children: /* @__PURE__ */ jsx4("clipPath", { id: "a", children: /* @__PURE__ */ jsx4("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }) })
        ]
      })
    );
  }
  return /* @__PURE__ */ jsxs3(
    "svg",
    __spreadProps(__spreadValues({
      className,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs3("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx4(
            "path",
            {
              fill: "#FFFDF8",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx4(
            "path",
            {
              fill: "#AB9FF2",
              fillRule: "evenodd",
              d: "M17.686 27.567c-1.676 2.569-4.484 5.819-8.22 5.819-1.767 0-3.466-.728-3.466-3.887C6 21.454 16.984 9 27.176 9c5.798 0 8.108 4.023 8.108 8.59 0 5.864-3.805 12.568-7.587 12.568-1.2 0-1.79-.659-1.79-1.704 0-.273.046-.568.137-.887-1.291 2.205-3.783 4.25-6.116 4.25-1.698 0-2.559-1.068-2.559-2.568 0-.545.114-1.113.317-1.681Zm8.78-10.135c0 1.331-.786 1.997-1.664 1.997-.892 0-1.664-.666-1.664-1.997s.772-1.996 1.664-1.996c.878 0 1.663.665 1.663 1.996Zm4.99 0c0 1.331-.785 1.997-1.663 1.997-.892 0-1.664-.666-1.664-1.997 0-1.33.772-1.996 1.664-1.996.878 0 1.664.665 1.664 1.996Z",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsx4("defs", { children: /* @__PURE__ */ jsx4("clipPath", { id: "a", children: /* @__PURE__ */ jsx4("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }) })
      ]
    })
  );
};

// src/icons/xverse.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var XverseLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ jsxs4(
    "svg",
    __spreadProps(__spreadValues({
      className,
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs4("g", { clipPath: "url(#clip0_3_53)", children: [
          /* @__PURE__ */ jsx5(
            "path",
            {
              d: "M32 0H10C4.47715 0 0 4.47715 0 10V32C0 37.5228 4.47715 42 10 42H32C37.5228 42 42 37.5228 42 32V10C42 4.47715 37.5228 0 32 0Z",
              fill: "#181818"
            }
          ),
          /* @__PURE__ */ jsx5(
            "path",
            {
              d: "M32 31.6745V27.6829C32 27.5233 31.9203 27.3636 31.8406 27.2438L14.8225 10.1597C14.7029 10.0399 14.5435 10 14.3841 10H10.3986C10.1993 10 10.0399 10.1597 10.0399 10.3592V14.0715C10.0399 14.2311 10.1196 14.3908 10.1993 14.5105L16.2971 20.6177C16.4565 20.7774 16.4565 20.977 16.2971 21.1366L10.1196 27.3237C10.0399 27.4035 10 27.4834 10 27.5632V31.6346C10 31.8342 10.1594 31.9939 10.3587 31.9939H17.0544C17.2536 31.9939 17.413 31.8342 17.413 31.6346V29.2396C17.413 29.1598 17.4529 29.0401 17.5326 29.0002L20.8406 25.6871C21 25.5275 21.1993 25.5275 21.3587 25.6871L27.4964 31.8342C27.6159 31.954 27.7753 31.9939 27.9348 31.9939H31.6413C31.8406 32.0337 32 31.8741 32 31.6745Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ jsx5(
            "path",
            {
              d: "M23.3406 15.0793H26.5592C26.7507 15.0793 26.9039 15.2333 26.9039 15.4257V18.658C26.9039 18.9658 27.2871 19.1197 27.4788 18.8888L31.8851 14.4637C31.9617 14.3867 32 14.3097 32 14.2328V10.3463C32 10.1539 31.8468 10 31.6552 10H27.7469C27.6703 10 27.5554 10.0385 27.5171 10.1154L23.1107 14.5021C22.8808 14.6945 23.0341 15.0793 23.3406 15.0793Z",
              fill: "#EE7A30"
            }
          )
        ] }),
        /* @__PURE__ */ jsx5("defs", { children: /* @__PURE__ */ jsx5("clipPath", { id: "clip0_3_53", children: /* @__PURE__ */ jsx5("rect", { width: "42", height: "42", fill: "white" }) }) })
      ]
    })
  );
};

// src/icons/unisat.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var UnisatLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ jsxs5(
    "svg",
    __spreadProps(__spreadValues({
      className,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs5("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx6(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx6(
            "path",
            {
              fill: "url(#b)",
              d: "m25.517 9.483 5.759 5.611c.49.477.731.959.724 1.445-.008.486-.219.929-.631 1.33-.431.421-.897.634-1.395.644-.497.007-.992-.228-1.482-.705l-5.89-5.738c-.669-.652-1.315-1.114-1.936-1.385a2.873 2.873 0 0 0-1.96-.127c-.685.185-1.42.662-2.21 1.428-1.086 1.06-1.605 2.054-1.552 2.983.053.929.593 1.893 1.617 2.89l5.938 5.786c.496.482.74.964.732 1.443-.008.48-.22.923-.64 1.332-.419.408-.88.62-1.382.638-.502.016-1.001-.217-1.495-.7l-5.76-5.61c-.936-.912-1.613-1.776-2.029-2.59-.416-.815-.572-1.737-.464-2.765.097-.88.384-1.732.863-2.558.477-.827 1.161-1.671 2.048-2.537C15.43 9.268 16.438 8.48 17.4 7.93c.96-.55 1.889-.854 2.786-.917.899-.064 1.784.112 2.66.527.876.415 1.765 1.061 2.67 1.943h.002Z"
            }
          ),
          /* @__PURE__ */ jsx6(
            "path",
            {
              fill: "url(#c)",
              d: "m16.482 32.123-5.758-5.611c-.49-.479-.731-.959-.724-1.445.008-.486.219-.929.631-1.33.431-.421.897-.634 1.395-.644.498-.007.992.227 1.482.705l5.888 5.738c.671.652 1.315 1.114 1.936 1.385.622.27 1.276.312 1.962.127.685-.185 1.42-.662 2.21-1.43 1.086-1.06 1.605-2.054 1.552-2.983-.053-.929-.593-1.893-1.617-2.891l-3.164-3.056c-.496-.482-.74-.964-.732-1.443.008-.48.22-.923.64-1.332.419-.408.88-.62 1.382-.638.502-.016 1.002.217 1.496.7l2.983 2.88c.936.912 1.613 1.775 2.03 2.59.415.815.571 1.736.463 2.764a6.477 6.477 0 0 1-.863 2.559c-.477.826-1.16 1.67-2.048 2.536-1.057 1.03-2.066 1.819-3.027 2.368-.962.55-1.89.856-2.79.92-.898.063-1.784-.113-2.66-.527-.876-.415-1.765-1.062-2.67-1.944l.003.002Z"
            }
          ),
          /* @__PURE__ */ jsx6(
            "path",
            {
              fill: "url(#d)",
              d: "M20.073 17.645c1.168 0 2.115-.93 2.115-2.08 0-1.149-.947-2.08-2.115-2.08-1.168 0-2.115.931-2.115 2.08 0 1.15.947 2.08 2.115 2.08Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs5("defs", { children: [
          /* @__PURE__ */ jsxs5(
            "linearGradient",
            {
              id: "b",
              x1: 30.329,
              x2: 12.579,
              y1: 12.752,
              y2: 20.772,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx6("stop", { stopColor: "#201C1B" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.36, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.67, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx6("stop", { offset: 1, stopColor: "#F4B852" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs5(
            "linearGradient",
            {
              id: "c",
              x1: 12.163,
              x2: 32.789,
              y1: 29.085,
              y2: 22.844,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx6("stop", { stopColor: "#1F1D1C" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.37, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.67, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx6("stop", { offset: 1, stopColor: "#F4FB52" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs5(
            "radialGradient",
            {
              id: "d",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(2.11484 0 0 2.08019 20.073 15.567)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx6("stop", { stopColor: "#F4B852" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.33, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx6("stop", { offset: 0.64, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx6("stop", { offset: 1, stopColor: "#211C1D" })
              ]
            }
          ),
          /* @__PURE__ */ jsx6("clipPath", { id: "a", children: /* @__PURE__ */ jsx6("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/wizz.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var WizzLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ jsxs6(
    "svg",
    __spreadProps(__spreadValues({
      className,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs6("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx7(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsxs6("g", { fillRule: "evenodd", clipPath: "url(#b)", clipRule: "evenodd", children: [
            /* @__PURE__ */ jsx7(
              "path",
              {
                fill: "#FFD815",
                d: "m26.507 17.74-1.623-1.623-1.624 1.623 1.623 1.623 1.624 1.624 1.623-1.624-1.623-1.623Z"
              }
            ),
            /* @__PURE__ */ jsx7(
              "path",
              {
                fill: "#FF9813",
                d: "m26.507 8-1.624 1.623 1.624 1.624 1.623-1.624L26.507 8ZM33 14.493l-1.623-1.623-1.624 1.623 1.624 1.623L33 14.493ZM23.26 27.48l1.623 1.623 1.624-1.623-1.623-1.624-1.624 1.624ZM11.897 16.117l1.623 1.623 1.623-1.623-1.623-1.624-1.623 1.624ZM20.014 8 18.39 9.623l1.624 1.624 1.623-1.624L20.014 8ZM13.52 11.247l1.624 1.623 1.623-1.623-1.623-1.624-1.624 1.624ZM31.377 19.363l-1.624 1.623 1.624 1.624L33 20.987l-1.623-1.624ZM28.13 25.856l1.623 1.624 1.624-1.624-1.624-1.623-1.623 1.623Z"
              }
            ),
            /* @__PURE__ */ jsx7(
              "path",
              {
                fill: "#5B5B72",
                d: "m26.507 20.986-1.624-1.623-1.623 1.623-1.623-1.623-1.623-1.623 1.623-1.624-1.623-1.623-1.624-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623 1.623-.812-.811-1.623 1.623 1.623 1.623-1.623 1.624-1.543 1.542-1.542 1.543-1.624 1.623L8 31.377 9.623 33l1.624-1.623 1.623-1.624 1.543-1.542.08-.08 1.462-1.463.08-.08 1.544-1.543 1.623 1.623 1.623-1.623-.811-.812 1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
              }
            ),
            /* @__PURE__ */ jsx7(
              "path",
              {
                fill: "#FF9813",
                d: "m26.507 14.493-1.624-1.623-1.623 1.623-1.623-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623 1.623 1.623 1.623-1.623-1.623-1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("defs", { children: [
          /* @__PURE__ */ jsx7("clipPath", { id: "a", children: /* @__PURE__ */ jsx7("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }),
          /* @__PURE__ */ jsx7("clipPath", { id: "b", children: /* @__PURE__ */ jsx7("path", { fill: "#fff", d: "M8 8h25v25H8z" }) })
        ] })
      ]
    })
  );
};

// src/icons/okx.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var OkxLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ jsxs7(
    "svg",
    __spreadProps(__spreadValues({
      className,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 42 42",
      fill: "none"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs7("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx8(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx8("g", { fill: "#fff", clipPath: "url(#b)", children: /* @__PURE__ */ jsx8("path", { d: "M24.578 17.052h-6.787a.523.523 0 0 0-.52.52v6.788c0 .286.235.52.52.52h6.787c.286 0 .521-.234.521-.52v-6.787a.523.523 0 0 0-.52-.521ZM16.733 9.223H9.946a.523.523 0 0 0-.521.521v6.787c0 .286.235.521.52.521h6.788c.285 0 .52-.235.52-.52V9.743a.523.523 0 0 0-.52-.52ZM32.424 9.223h-6.787a.523.523 0 0 0-.521.521v6.787c0 .286.235.521.52.521h6.788c.286 0 .52-.235.52-.52V9.743a.523.523 0 0 0-.52-.52ZM16.733 24.898H9.946a.523.523 0 0 0-.521.52v6.788c0 .285.235.52.52.52h6.788c.285 0 .52-.235.52-.52v-6.788a.523.523 0 0 0-.52-.52ZM32.424 24.898h-6.787a.523.523 0 0 0-.521.52v6.788c0 .285.235.52.52.52h6.788c.286 0 .52-.235.52-.52v-6.788a.523.523 0 0 0-.52-.52Z" }) })
        ] }),
        /* @__PURE__ */ jsxs7("defs", { children: [
          /* @__PURE__ */ jsx8("clipPath", { id: "a", children: /* @__PURE__ */ jsx8("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }),
          /* @__PURE__ */ jsx8("clipPath", { id: "b", children: /* @__PURE__ */ jsx8("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/magiceden.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var MagicEdenLogo = (_a) => {
  var _b = _a, {
    size = 42,
    variant = "first",
    className
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "className"
  ]);
  return /* @__PURE__ */ jsxs8(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      className,
      viewBox: "0 0 42 42",
      fill: "none"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs8("g", { clipPath: "url(#clip0_17_93)", children: [
          /* @__PURE__ */ jsx9(
            "path",
            {
              fill: "#070C34",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx9(
            "path",
            {
              fill: "url(#paint0_linear_17_93)",
              d: "m27.666 16.837 1.874 2.177c.215.245.404.446.483.562.56.55.874 1.293.874 2.07-.053.915-.657 1.54-1.213 2.205l-1.311 1.521-.685.79a.184.184 0 0 0 .046.281c.033.02.07.028.107.026h6.835c1.045 0 2.36.868 2.283 2.184 0 .597-.247 1.171-.68 1.595a2.36 2.36 0 0 1-1.637.664H23.936c-.704 0-2.598.076-3.128-1.521a1.841 1.841 0 0 1-.043-1.035 4.5 4.5 0 0 1 .72-1.404 65.543 65.543 0 0 1 1.695-2.343c.741-1.002 1.503-1.971 2.251-2.992a.19.19 0 0 0 .04-.116.19.19 0 0 0-.04-.116l-2.72-3.156a.192.192 0 0 0-.153-.073.192.192 0 0 0-.152.073c-.728.96-3.917 5.203-4.598 6.063-.68.86-2.355.907-3.283 0l-4.255-4.161a.197.197 0 0 0-.1-.053.195.195 0 0 0-.2.082.192.192 0 0 0-.032.106v8a2.678 2.678 0 0 1-.494 1.594c-.33.466-.804.823-1.352 1.014a2.375 2.375 0 0 1-2.111-.293 2.271 2.271 0 0 1-.72-.805A2.22 2.22 0 0 1 5 28.736V14.349a2.416 2.416 0 0 1 .548-1.422c.33-.406.785-.7 1.298-.841a2.632 2.632 0 0 1 2.502.664l6.54 6.381c.019.02.043.034.07.043a.197.197 0 0 0 .161-.013.188.188 0 0 0 .061-.054l4.646-6.27c.215-.254.485-.46.79-.601.304-.142.636-.217.976-.221H34.68c.33 0 .657.07.959.204a2.31 2.31 0 0 1 1.263 1.409c.096.309.122.633.079.952a2.288 2.288 0 0 1-.813 1.42c-.439.364-.996.56-1.572.551h-6.768a.188.188 0 0 0-.163.099.187.187 0 0 0-.022.095c0 .032.013.065.032.093h-.008Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs8("defs", { children: [
          /* @__PURE__ */ jsxs8(
            "linearGradient",
            {
              id: "paint0_linear_17_93",
              x1: "-0.315",
              x2: "35.366",
              y1: "9.343",
              y2: "30.176",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx9("stop", { offset: "0.23", stopColor: "#FF0074" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.26", stopColor: "#FF0068" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.32", stopColor: "#FF0048" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.39", stopColor: "#FF0015" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.41", stopColor: "#FF0009" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.43", stopColor: "#FF0908" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.54", stopColor: "#FF4003" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.62", stopColor: "#FF6201" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.66", stopColor: "#FF6F00" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.72", stopColor: "#FF8700" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.83", stopColor: "#FFAB00" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.92", stopColor: "#FFC100" }),
                /* @__PURE__ */ jsx9("stop", { offset: "0.98", stopColor: "#FFCA00" })
              ]
            }
          ),
          /* @__PURE__ */ jsx9("clipPath", { id: "clip0_17_93", children: /* @__PURE__ */ jsx9("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/walletIcon.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var WalletIcon = ({
  size,
  className,
  variant,
  walletName
}) => {
  if (walletName === XVERSE) {
    return /* @__PURE__ */ jsx10(XverseLogo, { size, className, variant });
  } else if (walletName === WIZZ) {
    return /* @__PURE__ */ jsx10(WizzLogo, { size, className, variant });
  } else if (walletName === LEATHER) {
    return /* @__PURE__ */ jsx10(LeatherLogo, { size, className, variant });
  } else if (walletName === MAGIC_EDEN) {
    return /* @__PURE__ */ jsx10(MagicEdenLogo, { size, className, variant });
  } else if (walletName === OKX) {
    return /* @__PURE__ */ jsx10(OkxLogo, { size, className, variant });
  } else if (walletName === PHANTOM) {
    return /* @__PURE__ */ jsx10(PhantomLogo, { size, className, variant });
  } else if (walletName === UNISAT) {
    return /* @__PURE__ */ jsx10(UnisatLogo, { size, className, variant });
  } else if (walletName === OYL) {
    return /* @__PURE__ */ jsx10(OylLogo, { size, className, variant });
  } else {
    return /* @__PURE__ */ jsx10(LeatherLogo, { size, className, variant });
  }
};
export {
  FRACTAL_MAINNET,
  FRACTAL_TESTNET,
  LEATHER,
  LEATHER_MAINNET,
  LEATHER_TESTNET,
  LaserEyesProvider,
  LeatherLogo,
  MAGIC_EDEN,
  MAINNET,
  MEMPOOL_SPACE_SIGNET_URL,
  MEMPOOL_SPACE_TESTNET_URL,
  MEMPOOL_SPACE_URL,
  MagicEdenLogo,
  OKX,
  OKX_MAINNET,
  OKX_TESTNET,
  OP_WALLET_MAINNET,
  OP_WALLET_TESTNET,
  OYL,
  OkxLogo,
  OylLogo,
  P2PKH,
  P2PSH,
  P2SH,
  P2TR,
  P2WPKH,
  P2WSH,
  PHANTOM,
  PhantomLogo,
  REGTEST,
  SIGNET,
  TESTNET,
  TESTNET4,
  UNISAT,
  UNISAT_FRACTAL_MAINNET,
  UNISAT_FRACTAL_TESTNET,
  UNISAT_MAINNET,
  UNISAT_SIGNET,
  UNISAT_TESTNET,
  UNISAT_TESTNET4,
  UnisatLogo,
  WALLETS,
  WIZZ,
  WIZZ_MAINNET,
  WIZZ_SIGNET,
  WIZZ_TESTNET,
  WIZZ_TESTNET4,
  WalletIcon,
  WizzLogo,
  XVERSE,
  XVERSE_MAINNET,
  XVERSE_NETWORK,
  XVERSE_SIGNET,
  XVERSE_TESTNET,
  XverseLogo,
  createConfig,
  createSendBtcPsbt,
  delay,
  estimateTxSize,
  findOrdinalsAddress,
  findPaymentAddress,
  getAddressUtxos,
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
  useLaserEyes
};
