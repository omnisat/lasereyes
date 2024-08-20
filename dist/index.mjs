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
var UNISAT_MAINNET = "livenet";
var UNISAT_TESTNET = "testnet";
var OP_WALLET_MAINNET = "livenet";
var OP_WALLET_TESTNET = "testnet";
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
  createContext as createContext30,
  useCallback as useCallback59,
  useContext as useContext30,
  useEffect as useEffect59,
  useRef as useRef30,
  useState as useState59
} from "react";
import * as bitcoin33 from "bitcoinjs-lib";

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
import { useLocalStorage as useLocalStorage30 } from "usehooks-ts";

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
var getBTCBalance = (address3) => __async(void 0, null, function* () {
  try {
    return yield axios.get(`https://blockchain.info/q/addressbalance/${address3}`).then((response) => response.data);
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
function createSendBtcPsbt(address3, paymentAddress, recipientAddress, amount, paymentPublicKey, network, feeRate = 7) {
  return __async(this, null, function* () {
    const isTaprootOnly = address3 === paymentAddress;
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
  BitcoinNetworkType as BitcoinNetworkType30,
  getAddress as getAddress30,
  request as request30,
  RpcErrorCode as RpcErrorCode30,
  signMessage as signMessageSatsConnect30,
  signTransaction as signTransaction30
} from "sats-connect";
import { fromOutputScript as fromOutputScript30 } from "bitcoinjs-lib/src/address";
import axios61 from "axios";

// dist/index.mjs
import {
  createContext as createContext29,
  useCallback as useCallback57,
  useContext as useContext29,
  useEffect as useEffect57,
  useRef as useRef29,
  useState as useState57
} from "react";
import * as bitcoin32 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage29 } from "usehooks-ts";
import * as bitcoin2 from "bitcoinjs-lib";
import axios2 from "axios";
import * as ecc2 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType29,
  getAddress as getAddress29,
  request as request29,
  RpcErrorCode as RpcErrorCode29,
  signMessage as signMessageSatsConnect29,
  signTransaction as signTransaction29
} from "sats-connect";
import { fromOutputScript as fromOutputScript29 } from "bitcoinjs-lib/src/address";
import axios59 from "axios";
import {
  createContext as createContext28,
  useCallback as useCallback55,
  useContext as useContext28,
  useEffect as useEffect55,
  useRef as useRef28,
  useState as useState55
} from "react";
import * as bitcoin31 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage28 } from "usehooks-ts";
import * as bitcoin22 from "bitcoinjs-lib";
import axios22 from "axios";
import * as ecc22 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType28,
  getAddress as getAddress28,
  request as request28,
  RpcErrorCode as RpcErrorCode28,
  signMessage as signMessageSatsConnect28,
  signTransaction as signTransaction28
} from "sats-connect";
import { fromOutputScript as fromOutputScript28 } from "bitcoinjs-lib/src/address";
import axios57 from "axios";
import {
  createContext as createContext27,
  useCallback as useCallback53,
  useContext as useContext27,
  useEffect as useEffect53,
  useRef as useRef27,
  useState as useState53
} from "react";
import * as bitcoin30 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage27 } from "usehooks-ts";
import * as bitcoin222 from "bitcoinjs-lib";
import axios222 from "axios";
import * as ecc222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType27,
  getAddress as getAddress27,
  request as request27,
  RpcErrorCode as RpcErrorCode27,
  signMessage as signMessageSatsConnect27,
  signTransaction as signTransaction27
} from "sats-connect";
import { fromOutputScript as fromOutputScript27 } from "bitcoinjs-lib/src/address";
import axios55 from "axios";
import {
  createContext as createContext26,
  useCallback as useCallback51,
  useContext as useContext26,
  useEffect as useEffect51,
  useRef as useRef26,
  useState as useState51
} from "react";
import * as bitcoin29 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage26 } from "usehooks-ts";
import * as bitcoin2222 from "bitcoinjs-lib";
import axios2222 from "axios";
import * as ecc2222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType26,
  getAddress as getAddress26,
  request as request26,
  RpcErrorCode as RpcErrorCode26,
  signMessage as signMessageSatsConnect26,
  signTransaction as signTransaction26
} from "sats-connect";
import { fromOutputScript as fromOutputScript26 } from "bitcoinjs-lib/src/address";
import axios53 from "axios";
import {
  createContext as createContext25,
  useCallback as useCallback49,
  useContext as useContext25,
  useEffect as useEffect49,
  useRef as useRef25,
  useState as useState49
} from "react";
import * as bitcoin28 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage25 } from "usehooks-ts";
import * as bitcoin22222 from "bitcoinjs-lib";
import axios22222 from "axios";
import * as ecc22222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType25,
  getAddress as getAddress25,
  request as request25,
  RpcErrorCode as RpcErrorCode25,
  signMessage as signMessageSatsConnect25,
  signTransaction as signTransaction25
} from "sats-connect";
import { fromOutputScript as fromOutputScript25 } from "bitcoinjs-lib/src/address";
import axios51 from "axios";
import {
  createContext as createContext24,
  useCallback as useCallback47,
  useContext as useContext24,
  useEffect as useEffect47,
  useRef as useRef24,
  useState as useState47
} from "react";
import * as bitcoin27 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage24 } from "usehooks-ts";
import * as bitcoin222222 from "bitcoinjs-lib";
import axios222222 from "axios";
import * as ecc222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType24,
  getAddress as getAddress24,
  request as request24,
  RpcErrorCode as RpcErrorCode24,
  signMessage as signMessageSatsConnect24,
  signTransaction as signTransaction24
} from "sats-connect";
import { fromOutputScript as fromOutputScript24 } from "bitcoinjs-lib/src/address";
import axios49 from "axios";
import {
  createContext as createContext23,
  useCallback as useCallback45,
  useContext as useContext23,
  useEffect as useEffect45,
  useRef as useRef23,
  useState as useState45
} from "react";
import * as bitcoin26 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage23 } from "usehooks-ts";
import * as bitcoin2222222 from "bitcoinjs-lib";
import axios2222222 from "axios";
import * as ecc2222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType23,
  getAddress as getAddress23,
  request as request23,
  RpcErrorCode as RpcErrorCode23,
  signMessage as signMessageSatsConnect23,
  signTransaction as signTransaction23
} from "sats-connect";
import { fromOutputScript as fromOutputScript23 } from "bitcoinjs-lib/src/address";
import axios47 from "axios";
import {
  createContext as createContext22,
  useCallback as useCallback43,
  useContext as useContext22,
  useEffect as useEffect43,
  useRef as useRef22,
  useState as useState43
} from "react";
import * as bitcoin25 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage22 } from "usehooks-ts";
import * as bitcoin22222222 from "bitcoinjs-lib";
import axios22222222 from "axios";
import * as ecc22222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType22,
  getAddress as getAddress22,
  request as request22,
  RpcErrorCode as RpcErrorCode22,
  signMessage as signMessageSatsConnect22,
  signTransaction as signTransaction22
} from "sats-connect";
import { fromOutputScript as fromOutputScript22 } from "bitcoinjs-lib/src/address";
import axios45 from "axios";
import {
  createContext as createContext21,
  useCallback as useCallback41,
  useContext as useContext21,
  useEffect as useEffect41,
  useRef as useRef21,
  useState as useState41
} from "react";
import * as bitcoin24 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage21 } from "usehooks-ts";
import * as bitcoin222222222 from "bitcoinjs-lib";
import axios222222222 from "axios";
import * as ecc222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType21,
  getAddress as getAddress21,
  request as request21,
  RpcErrorCode as RpcErrorCode21,
  signMessage as signMessageSatsConnect21,
  signTransaction as signTransaction21
} from "sats-connect";
import { fromOutputScript as fromOutputScript21 } from "bitcoinjs-lib/src/address";
import axios43 from "axios";
import {
  createContext as createContext20,
  useCallback as useCallback39,
  useContext as useContext20,
  useEffect as useEffect39,
  useRef as useRef20,
  useState as useState39
} from "react";
import * as bitcoin23 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage20 } from "usehooks-ts";
import * as bitcoin2222222222 from "bitcoinjs-lib";
import axios2222222222 from "axios";
import * as ecc2222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType20,
  getAddress as getAddress20,
  request as request20,
  RpcErrorCode as RpcErrorCode20,
  signMessage as signMessageSatsConnect20,
  signTransaction as signTransaction20
} from "sats-connect";
import { fromOutputScript as fromOutputScript20 } from "bitcoinjs-lib/src/address";
import axios41 from "axios";
import {
  createContext as createContext19,
  useCallback as useCallback37,
  useContext as useContext19,
  useEffect as useEffect37,
  useRef as useRef19,
  useState as useState37
} from "react";
import * as bitcoin21 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage19 } from "usehooks-ts";
import * as bitcoin22222222222 from "bitcoinjs-lib";
import axios22222222222 from "axios";
import * as ecc22222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType19,
  getAddress as getAddress19,
  request as request19,
  RpcErrorCode as RpcErrorCode19,
  signMessage as signMessageSatsConnect19,
  signTransaction as signTransaction19
} from "sats-connect";
import { fromOutputScript as fromOutputScript19 } from "bitcoinjs-lib/src/address";
import axios39 from "axios";
import {
  createContext as createContext18,
  useCallback as useCallback35,
  useContext as useContext18,
  useEffect as useEffect35,
  useRef as useRef18,
  useState as useState35
} from "react";
import * as bitcoin20 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage18 } from "usehooks-ts";
import * as bitcoin222222222222 from "bitcoinjs-lib";
import axios222222222222 from "axios";
import * as ecc222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType18,
  getAddress as getAddress18,
  request as request18,
  RpcErrorCode as RpcErrorCode18,
  signMessage as signMessageSatsConnect18,
  signTransaction as signTransaction18
} from "sats-connect";
import { fromOutputScript as fromOutputScript18 } from "bitcoinjs-lib/src/address";
import axios37 from "axios";
import {
  createContext as createContext17,
  useCallback as useCallback33,
  useContext as useContext17,
  useEffect as useEffect33,
  useRef as useRef17,
  useState as useState33
} from "react";
import * as bitcoin19 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage17 } from "usehooks-ts";
import * as bitcoin2222222222222 from "bitcoinjs-lib";
import axios2222222222222 from "axios";
import * as ecc2222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType17,
  getAddress as getAddress17,
  request as request17,
  RpcErrorCode as RpcErrorCode17,
  signMessage as signMessageSatsConnect17,
  signTransaction as signTransaction17
} from "sats-connect";
import { fromOutputScript as fromOutputScript17 } from "bitcoinjs-lib/src/address";
import axios35 from "axios";
import {
  createContext as createContext16,
  useCallback as useCallback31,
  useContext as useContext16,
  useEffect as useEffect31,
  useRef as useRef16,
  useState as useState31
} from "react";
import * as bitcoin18 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage16 } from "usehooks-ts";
import * as bitcoin22222222222222 from "bitcoinjs-lib";
import axios22222222222222 from "axios";
import * as ecc22222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType16,
  getAddress as getAddress16,
  request as request16,
  RpcErrorCode as RpcErrorCode16,
  signMessage as signMessageSatsConnect16,
  signTransaction as signTransaction16
} from "sats-connect";
import { fromOutputScript as fromOutputScript16 } from "bitcoinjs-lib/src/address";
import axios33 from "axios";
import {
  createContext as createContext15,
  useCallback as useCallback29,
  useContext as useContext15,
  useEffect as useEffect29,
  useRef as useRef15,
  useState as useState29
} from "react";
import * as bitcoin17 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage15 } from "usehooks-ts";
import * as bitcoin222222222222222 from "bitcoinjs-lib";
import axios222222222222222 from "axios";
import * as ecc222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType15,
  getAddress as getAddress15,
  request as request15,
  RpcErrorCode as RpcErrorCode15,
  signMessage as signMessageSatsConnect15,
  signTransaction as signTransaction15
} from "sats-connect";
import { fromOutputScript as fromOutputScript15 } from "bitcoinjs-lib/src/address";
import axios31 from "axios";
import {
  createContext as createContext14,
  useCallback as useCallback27,
  useContext as useContext14,
  useEffect as useEffect27,
  useRef as useRef14,
  useState as useState27
} from "react";
import * as bitcoin16 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage14 } from "usehooks-ts";
import * as bitcoin2222222222222222 from "bitcoinjs-lib";
import axios2222222222222222 from "axios";
import * as ecc2222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType14,
  getAddress as getAddress14,
  request as request14,
  RpcErrorCode as RpcErrorCode14,
  signMessage as signMessageSatsConnect14,
  signTransaction as signTransaction14
} from "sats-connect";
import { fromOutputScript as fromOutputScript14 } from "bitcoinjs-lib/src/address";
import axios29 from "axios";
import {
  createContext as createContext13,
  useCallback as useCallback25,
  useContext as useContext13,
  useEffect as useEffect25,
  useRef as useRef13,
  useState as useState25
} from "react";
import * as bitcoin15 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage13 } from "usehooks-ts";
import * as bitcoin22222222222222222 from "bitcoinjs-lib";
import axios22222222222222222 from "axios";
import * as ecc22222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType13,
  getAddress as getAddress13,
  request as request13,
  RpcErrorCode as RpcErrorCode13,
  signMessage as signMessageSatsConnect13,
  signTransaction as signTransaction13
} from "sats-connect";
import { fromOutputScript as fromOutputScript13 } from "bitcoinjs-lib/src/address";
import axios27 from "axios";
import {
  createContext as createContext12,
  useCallback as useCallback23,
  useContext as useContext12,
  useEffect as useEffect23,
  useRef as useRef12,
  useState as useState23
} from "react";
import * as bitcoin14 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage12 } from "usehooks-ts";
import * as bitcoin222222222222222222 from "bitcoinjs-lib";
import axios222222222222222222 from "axios";
import * as ecc222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType12,
  getAddress as getAddress12,
  request as request12,
  RpcErrorCode as RpcErrorCode12,
  signMessage as signMessageSatsConnect12,
  signTransaction as signTransaction12
} from "sats-connect";
import { fromOutputScript as fromOutputScript12 } from "bitcoinjs-lib/src/address";
import axios25 from "axios";
import {
  createContext as createContext11,
  useCallback as useCallback21,
  useContext as useContext11,
  useEffect as useEffect21,
  useRef as useRef11,
  useState as useState21
} from "react";
import * as bitcoin13 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage11 } from "usehooks-ts";
import * as bitcoin2222222222222222222 from "bitcoinjs-lib";
import axios2222222222222222222 from "axios";
import * as ecc2222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType11,
  getAddress as getAddress11,
  request as request11,
  RpcErrorCode as RpcErrorCode11,
  signMessage as signMessageSatsConnect11,
  signTransaction as signTransaction11
} from "sats-connect";
import { fromOutputScript as fromOutputScript11 } from "bitcoinjs-lib/src/address";
import axios23 from "axios";
import {
  createContext as createContext10,
  useCallback as useCallback19,
  useContext as useContext10,
  useEffect as useEffect19,
  useRef as useRef10,
  useState as useState19
} from "react";
import * as bitcoin12 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage10 } from "usehooks-ts";
import * as bitcoin22222222222222222222 from "bitcoinjs-lib";
import axios22222222222222222222 from "axios";
import * as ecc22222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType10,
  getAddress as getAddress10,
  request as request10,
  RpcErrorCode as RpcErrorCode10,
  signMessage as signMessageSatsConnect10,
  signTransaction as signTransaction10
} from "sats-connect";
import { fromOutputScript as fromOutputScript10 } from "bitcoinjs-lib/src/address";
import axios20 from "axios";
import {
  createContext as createContext9,
  useCallback as useCallback17,
  useContext as useContext9,
  useEffect as useEffect17,
  useRef as useRef9,
  useState as useState17
} from "react";
import * as bitcoin11 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage9 } from "usehooks-ts";
import * as bitcoin222222222222222222222 from "bitcoinjs-lib";
import axios222222222222222222222 from "axios";
import * as ecc222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType9,
  getAddress as getAddress9,
  request as request9,
  RpcErrorCode as RpcErrorCode9,
  signMessage as signMessageSatsConnect9,
  signTransaction as signTransaction9
} from "sats-connect";
import { fromOutputScript as fromOutputScript9 } from "bitcoinjs-lib/src/address";
import axios18 from "axios";
import {
  createContext as createContext8,
  useCallback as useCallback15,
  useContext as useContext8,
  useEffect as useEffect15,
  useRef as useRef8,
  useState as useState15
} from "react";
import * as bitcoin10 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage8 } from "usehooks-ts";
import * as bitcoin2222222222222222222222 from "bitcoinjs-lib";
import axios2222222222222222222222 from "axios";
import * as ecc2222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType8,
  getAddress as getAddress8,
  request as request8,
  RpcErrorCode as RpcErrorCode8,
  signMessage as signMessageSatsConnect8,
  signTransaction as signTransaction8
} from "sats-connect";
import { fromOutputScript as fromOutputScript8 } from "bitcoinjs-lib/src/address";
import axios16 from "axios";
import {
  createContext as createContext7,
  useCallback as useCallback13,
  useContext as useContext7,
  useEffect as useEffect13,
  useRef as useRef7,
  useState as useState13
} from "react";
import * as bitcoin9 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage7 } from "usehooks-ts";
import * as bitcoin22222222222222222222222 from "bitcoinjs-lib";
import axios22222222222222222222222 from "axios";
import * as ecc22222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType7,
  getAddress as getAddress7,
  request as request7,
  RpcErrorCode as RpcErrorCode7,
  signMessage as signMessageSatsConnect7,
  signTransaction as signTransaction7
} from "sats-connect";
import { fromOutputScript as fromOutputScript7 } from "bitcoinjs-lib/src/address";
import axios14 from "axios";
import {
  createContext as createContext6,
  useCallback as useCallback11,
  useContext as useContext6,
  useEffect as useEffect11,
  useRef as useRef6,
  useState as useState11
} from "react";
import * as bitcoin8 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage6 } from "usehooks-ts";
import * as bitcoin222222222222222222222222 from "bitcoinjs-lib";
import axios222222222222222222222222 from "axios";
import * as ecc222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType6,
  getAddress as getAddress6,
  request as request6,
  RpcErrorCode as RpcErrorCode6,
  signMessage as signMessageSatsConnect6,
  signTransaction as signTransaction6
} from "sats-connect";
import { fromOutputScript as fromOutputScript6 } from "bitcoinjs-lib/src/address";
import axios12 from "axios";
import {
  createContext as createContext5,
  useCallback as useCallback9,
  useContext as useContext5,
  useEffect as useEffect9,
  useRef as useRef5,
  useState as useState9
} from "react";
import * as bitcoin7 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage5 } from "usehooks-ts";
import * as bitcoin2222222222222222222222222 from "bitcoinjs-lib";
import axios2222222222222222222222222 from "axios";
import * as ecc2222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType5,
  getAddress as getAddress5,
  request as request5,
  RpcErrorCode as RpcErrorCode5,
  signMessage as signMessageSatsConnect5,
  signTransaction as signTransaction5
} from "sats-connect";
import { fromOutputScript as fromOutputScript5 } from "bitcoinjs-lib/src/address";
import axios10 from "axios";
import {
  createContext as createContext4,
  useCallback as useCallback7,
  useContext as useContext4,
  useEffect as useEffect7,
  useRef as useRef4,
  useState as useState7
} from "react";
import * as bitcoin6 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage4 } from "usehooks-ts";
import * as bitcoin22222222222222222222222222 from "bitcoinjs-lib";
import axios22222222222222222222222222 from "axios";
import * as ecc22222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType4,
  getAddress as getAddress4,
  request as request4,
  RpcErrorCode as RpcErrorCode4,
  signMessage as signMessageSatsConnect4,
  signTransaction as signTransaction4
} from "sats-connect";
import { fromOutputScript as fromOutputScript4 } from "bitcoinjs-lib/src/address";
import axios8 from "axios";
import {
  createContext as createContext3,
  useCallback as useCallback5,
  useContext as useContext3,
  useEffect as useEffect5,
  useRef as useRef3,
  useState as useState5
} from "react";
import * as bitcoin5 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage3 } from "usehooks-ts";
import * as bitcoin222222222222222222222222222 from "bitcoinjs-lib";
import axios222222222222222222222222222 from "axios";
import * as ecc222222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType3,
  getAddress as getAddress3,
  request as request3,
  RpcErrorCode as RpcErrorCode3,
  signMessage as signMessageSatsConnect3,
  signTransaction as signTransaction3
} from "sats-connect";
import { fromOutputScript as fromOutputScript3 } from "bitcoinjs-lib/src/address";
import axios6 from "axios";
import {
  createContext as createContext2,
  useCallback as useCallback3,
  useContext as useContext2,
  useEffect as useEffect3,
  useRef as useRef2,
  useState as useState3
} from "react";
import * as bitcoin4 from "bitcoinjs-lib";
import { useLocalStorage as useLocalStorage2 } from "usehooks-ts";
import * as bitcoin2222222222222222222222222222 from "bitcoinjs-lib";
import axios2222222222222222222222222222 from "axios";
import * as ecc2222222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType as BitcoinNetworkType2,
  getAddress as getAddress2,
  request as request2,
  RpcErrorCode as RpcErrorCode2,
  signMessage as signMessageSatsConnect2,
  signTransaction as signTransaction2
} from "sats-connect";
import { fromOutputScript as fromOutputScript2 } from "bitcoinjs-lib/src/address";
import axios4 from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import * as bitcoin22222222222222222222222222222 from "bitcoinjs-lib";
import { useLocalStorage } from "usehooks-ts";
import * as bitcoin3 from "bitcoinjs-lib";
import axios22222222222222222222222222222 from "axios";
import * as ecc22222222222222222222222222222 from "@bitcoinerlab/secp256k1";
import {
  BitcoinNetworkType,
  getAddress,
  request,
  RpcErrorCode,
  signMessage as signMessageSatsConnect,
  signTransaction
} from "sats-connect";
import { fromOutputScript } from "bitcoinjs-lib/src/address";
import axios222222222222222222222222222222 from "axios";
import { jsx } from "react/jsx-runtime";
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState2 } from "react";
import axios3 from "axios";
import { jsx as jsx2 } from "react/jsx-runtime";
import { useCallback as useCallback4, useEffect as useEffect4, useState as useState4 } from "react";
import axios5 from "axios";
import { jsx as jsx3 } from "react/jsx-runtime";
import { useCallback as useCallback6, useEffect as useEffect6, useState as useState6 } from "react";
import axios7 from "axios";
import { jsx as jsx4 } from "react/jsx-runtime";
import { useCallback as useCallback8, useEffect as useEffect8, useState as useState8 } from "react";
import axios9 from "axios";
import { jsx as jsx5 } from "react/jsx-runtime";
import { useCallback as useCallback10, useEffect as useEffect10, useState as useState10 } from "react";
import axios11 from "axios";
import { jsx as jsx6 } from "react/jsx-runtime";
import { useCallback as useCallback12, useEffect as useEffect12, useState as useState12 } from "react";
import axios13 from "axios";
import { jsx as jsx7 } from "react/jsx-runtime";
import { useCallback as useCallback14, useEffect as useEffect14, useState as useState14 } from "react";
import axios15 from "axios";
import { jsx as jsx8 } from "react/jsx-runtime";
import { useCallback as useCallback16, useEffect as useEffect16, useState as useState16 } from "react";
import axios17 from "axios";
import { jsx as jsx9 } from "react/jsx-runtime";
import { useCallback as useCallback18, useEffect as useEffect18, useState as useState18 } from "react";
import axios19 from "axios";
import { jsx as jsx10 } from "react/jsx-runtime";
import { useCallback as useCallback20, useEffect as useEffect20, useState as useState20 } from "react";
import axios21 from "axios";
import { jsx as jsx11 } from "react/jsx-runtime";
import { useCallback as useCallback22, useEffect as useEffect22, useState as useState22 } from "react";
import axios24 from "axios";
import { jsx as jsx12 } from "react/jsx-runtime";
import { useCallback as useCallback24, useEffect as useEffect24, useState as useState24 } from "react";
import axios26 from "axios";
import { jsx as jsx13 } from "react/jsx-runtime";
import { useCallback as useCallback26, useEffect as useEffect26, useState as useState26 } from "react";
import axios28 from "axios";
import { jsx as jsx14 } from "react/jsx-runtime";
import { useCallback as useCallback28, useEffect as useEffect28, useState as useState28 } from "react";
import axios30 from "axios";
import { jsx as jsx15 } from "react/jsx-runtime";
import { useCallback as useCallback30, useEffect as useEffect30, useState as useState30 } from "react";
import axios32 from "axios";
import { jsx as jsx16 } from "react/jsx-runtime";
import { useCallback as useCallback32, useEffect as useEffect32, useState as useState32 } from "react";
import axios34 from "axios";
import { jsx as jsx17 } from "react/jsx-runtime";
import { useCallback as useCallback34, useEffect as useEffect34, useState as useState34 } from "react";
import axios36 from "axios";
import { jsx as jsx18 } from "react/jsx-runtime";
import { useCallback as useCallback36, useEffect as useEffect36, useState as useState36 } from "react";
import axios38 from "axios";
import { jsx as jsx19, jsxs } from "react/jsx-runtime";
import { jsx as jsx20, jsxs as jsxs2 } from "react/jsx-runtime";
import { jsx as jsx21, jsxs as jsxs3 } from "react/jsx-runtime";
import { jsx as jsx22, jsxs as jsxs4 } from "react/jsx-runtime";
import { jsx as jsx23, jsxs as jsxs5 } from "react/jsx-runtime";
import { jsx as jsx24, jsxs as jsxs6 } from "react/jsx-runtime";
import { jsx as jsx25, jsxs as jsxs7 } from "react/jsx-runtime";
import { jsx as jsx26, jsxs as jsxs8 } from "react/jsx-runtime";
import { jsx as jsx27 } from "react/jsx-runtime";
import { jsx as jsx28 } from "react/jsx-runtime";
import { useCallback as useCallback38, useEffect as useEffect38, useState as useState38 } from "react";
import axios40 from "axios";
import { jsx as jsx29, jsxs as jsxs9 } from "react/jsx-runtime";
import { jsx as jsx30, jsxs as jsxs10 } from "react/jsx-runtime";
import { jsx as jsx31, jsxs as jsxs11 } from "react/jsx-runtime";
import { jsx as jsx32, jsxs as jsxs12 } from "react/jsx-runtime";
import { jsx as jsx33, jsxs as jsxs13 } from "react/jsx-runtime";
import { jsx as jsx34, jsxs as jsxs14 } from "react/jsx-runtime";
import { jsx as jsx35, jsxs as jsxs15 } from "react/jsx-runtime";
import { jsx as jsx36, jsxs as jsxs16 } from "react/jsx-runtime";
import { jsx as jsx37 } from "react/jsx-runtime";
import { jsx as jsx38 } from "react/jsx-runtime";
import { useCallback as useCallback40, useEffect as useEffect40, useState as useState40 } from "react";
import axios42 from "axios";
import { jsx as jsx39, jsxs as jsxs17 } from "react/jsx-runtime";
import { jsx as jsx40, jsxs as jsxs18 } from "react/jsx-runtime";
import { jsx as jsx41, jsxs as jsxs19 } from "react/jsx-runtime";
import { jsx as jsx42, jsxs as jsxs20 } from "react/jsx-runtime";
import { jsx as jsx43, jsxs as jsxs21 } from "react/jsx-runtime";
import { jsx as jsx44, jsxs as jsxs22 } from "react/jsx-runtime";
import { jsx as jsx45, jsxs as jsxs23 } from "react/jsx-runtime";
import { jsx as jsx46, jsxs as jsxs24 } from "react/jsx-runtime";
import { jsx as jsx47 } from "react/jsx-runtime";
import { jsx as jsx48 } from "react/jsx-runtime";
import { useCallback as useCallback42, useEffect as useEffect42, useState as useState42 } from "react";
import axios44 from "axios";
import { jsx as jsx49, jsxs as jsxs25 } from "react/jsx-runtime";
import { jsx as jsx50, jsxs as jsxs26 } from "react/jsx-runtime";
import { jsx as jsx51, jsxs as jsxs27 } from "react/jsx-runtime";
import { jsx as jsx52, jsxs as jsxs28 } from "react/jsx-runtime";
import { jsx as jsx53, jsxs as jsxs29 } from "react/jsx-runtime";
import { jsx as jsx54, jsxs as jsxs30 } from "react/jsx-runtime";
import { jsx as jsx55, jsxs as jsxs31 } from "react/jsx-runtime";
import { jsx as jsx56, jsxs as jsxs32 } from "react/jsx-runtime";
import { jsx as jsx57 } from "react/jsx-runtime";
import { jsx as jsx58 } from "react/jsx-runtime";
import { useCallback as useCallback44, useEffect as useEffect44, useState as useState44 } from "react";
import axios46 from "axios";
import { jsx as jsx59, jsxs as jsxs33 } from "react/jsx-runtime";
import { jsx as jsx60, jsxs as jsxs34 } from "react/jsx-runtime";
import { jsx as jsx61, jsxs as jsxs35 } from "react/jsx-runtime";
import { jsx as jsx62, jsxs as jsxs36 } from "react/jsx-runtime";
import { jsx as jsx63, jsxs as jsxs37 } from "react/jsx-runtime";
import { jsx as jsx64, jsxs as jsxs38 } from "react/jsx-runtime";
import { jsx as jsx65, jsxs as jsxs39 } from "react/jsx-runtime";
import { jsx as jsx66, jsxs as jsxs40 } from "react/jsx-runtime";
import { jsx as jsx67 } from "react/jsx-runtime";
import { jsx as jsx68 } from "react/jsx-runtime";
import { useCallback as useCallback46, useEffect as useEffect46, useState as useState46 } from "react";
import axios48 from "axios";
import { jsx as jsx69, jsxs as jsxs41 } from "react/jsx-runtime";
import { jsx as jsx70, jsxs as jsxs42 } from "react/jsx-runtime";
import { jsx as jsx71, jsxs as jsxs43 } from "react/jsx-runtime";
import { jsx as jsx72, jsxs as jsxs44 } from "react/jsx-runtime";
import { jsx as jsx73, jsxs as jsxs45 } from "react/jsx-runtime";
import { jsx as jsx74, jsxs as jsxs46 } from "react/jsx-runtime";
import { jsx as jsx75, jsxs as jsxs47 } from "react/jsx-runtime";
import { jsx as jsx76, jsxs as jsxs48 } from "react/jsx-runtime";
import { jsx as jsx77 } from "react/jsx-runtime";
import { jsx as jsx78 } from "react/jsx-runtime";
import { useCallback as useCallback48, useEffect as useEffect48, useState as useState48 } from "react";
import axios50 from "axios";
import { jsx as jsx79, jsxs as jsxs49 } from "react/jsx-runtime";
import { jsx as jsx80, jsxs as jsxs50 } from "react/jsx-runtime";
import { jsx as jsx81, jsxs as jsxs51 } from "react/jsx-runtime";
import { jsx as jsx82, jsxs as jsxs52 } from "react/jsx-runtime";
import { jsx as jsx83, jsxs as jsxs53 } from "react/jsx-runtime";
import { jsx as jsx84, jsxs as jsxs54 } from "react/jsx-runtime";
import { jsx as jsx85, jsxs as jsxs55 } from "react/jsx-runtime";
import { jsx as jsx86, jsxs as jsxs56 } from "react/jsx-runtime";
import { jsx as jsx87 } from "react/jsx-runtime";
import { jsx as jsx88 } from "react/jsx-runtime";
import { useCallback as useCallback50, useEffect as useEffect50, useState as useState50 } from "react";
import axios52 from "axios";
import { jsx as jsx89, jsxs as jsxs57 } from "react/jsx-runtime";
import { jsx as jsx90, jsxs as jsxs58 } from "react/jsx-runtime";
import { jsx as jsx91, jsxs as jsxs59 } from "react/jsx-runtime";
import { jsx as jsx92, jsxs as jsxs60 } from "react/jsx-runtime";
import { jsx as jsx93, jsxs as jsxs61 } from "react/jsx-runtime";
import { jsx as jsx94, jsxs as jsxs62 } from "react/jsx-runtime";
import { jsx as jsx95, jsxs as jsxs63 } from "react/jsx-runtime";
import { jsx as jsx96, jsxs as jsxs64 } from "react/jsx-runtime";
import { jsx as jsx97 } from "react/jsx-runtime";
import { jsx as jsx98 } from "react/jsx-runtime";
import { useCallback as useCallback52, useEffect as useEffect52, useState as useState52 } from "react";
import axios54 from "axios";
import { jsx as jsx99, jsxs as jsxs65 } from "react/jsx-runtime";
import { jsx as jsx100, jsxs as jsxs66 } from "react/jsx-runtime";
import { jsx as jsx101, jsxs as jsxs67 } from "react/jsx-runtime";
import { jsx as jsx102, jsxs as jsxs68 } from "react/jsx-runtime";
import { jsx as jsx103, jsxs as jsxs69 } from "react/jsx-runtime";
import { jsx as jsx104, jsxs as jsxs70 } from "react/jsx-runtime";
import { jsx as jsx105, jsxs as jsxs71 } from "react/jsx-runtime";
import { jsx as jsx106, jsxs as jsxs72 } from "react/jsx-runtime";
import { jsx as jsx107 } from "react/jsx-runtime";
import { jsx as jsx108 } from "react/jsx-runtime";
import { useCallback as useCallback54, useEffect as useEffect54, useState as useState54 } from "react";
import axios56 from "axios";
import { jsx as jsx109, jsxs as jsxs73 } from "react/jsx-runtime";
import { jsx as jsx110, jsxs as jsxs74 } from "react/jsx-runtime";
import { jsx as jsx111, jsxs as jsxs75 } from "react/jsx-runtime";
import { jsx as jsx112, jsxs as jsxs76 } from "react/jsx-runtime";
import { jsx as jsx113, jsxs as jsxs77 } from "react/jsx-runtime";
import { jsx as jsx114, jsxs as jsxs78 } from "react/jsx-runtime";
import { jsx as jsx115, jsxs as jsxs79 } from "react/jsx-runtime";
import { jsx as jsx116, jsxs as jsxs80 } from "react/jsx-runtime";
import { jsx as jsx117 } from "react/jsx-runtime";
import { jsx as jsx118 } from "react/jsx-runtime";
import { useCallback as useCallback56, useEffect as useEffect56, useState as useState56 } from "react";
import axios58 from "axios";
import { jsx as jsx119, jsxs as jsxs81 } from "react/jsx-runtime";
import { jsx as jsx120, jsxs as jsxs82 } from "react/jsx-runtime";
import { jsx as jsx121, jsxs as jsxs83 } from "react/jsx-runtime";
import { jsx as jsx122, jsxs as jsxs84 } from "react/jsx-runtime";
import { jsx as jsx123, jsxs as jsxs85 } from "react/jsx-runtime";
import { jsx as jsx124, jsxs as jsxs86 } from "react/jsx-runtime";
import { jsx as jsx125, jsxs as jsxs87 } from "react/jsx-runtime";
import { jsx as jsx126, jsxs as jsxs88 } from "react/jsx-runtime";
import { jsx as jsx127 } from "react/jsx-runtime";
import { jsx as jsx128 } from "react/jsx-runtime";
import { useCallback as useCallback58, useEffect as useEffect58, useState as useState58 } from "react";
import axios60 from "axios";
import { jsx as jsx129, jsxs as jsxs89 } from "react/jsx-runtime";
import { jsx as jsx130, jsxs as jsxs90 } from "react/jsx-runtime";
import { jsx as jsx131, jsxs as jsxs91 } from "react/jsx-runtime";
import { jsx as jsx132, jsxs as jsxs92 } from "react/jsx-runtime";
import { jsx as jsx133, jsxs as jsxs93 } from "react/jsx-runtime";
import { jsx as jsx134, jsxs as jsxs94 } from "react/jsx-runtime";
import { jsx as jsx135, jsxs as jsxs95 } from "react/jsx-runtime";
import { jsx as jsx136, jsxs as jsxs96 } from "react/jsx-runtime";
import { jsx as jsx137 } from "react/jsx-runtime";
var __async2 = (__this, __arguments, generator) => {
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
var MAINNET4 = "mainnet";
var SIGNET3 = "signet";
var TESTNET3 = "testnet";
var initialWalletContext2 = {
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
  network: MAINNET4,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2(void 0, null, function* () {
    return MAINNET4;
  }),
  switchNetwork: (network) => __async2(void 0, null, function* () {
  }),
  getPublicKey: () => __async2(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2.initEccLib(ecc2);
var __async22 = (__this, __arguments, generator) => {
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
var MAINNET42 = "mainnet";
var initialWalletContext22 = {
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
  network: MAINNET42,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22(void 0, null, function* () {
    return MAINNET42;
  }),
  switchNetwork: (network) => __async22(void 0, null, function* () {
  }),
  getPublicKey: () => __async22(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22.initEccLib(ecc22);
var __async222 = (__this, __arguments, generator) => {
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
var MAINNET422 = "mainnet";
var initialWalletContext222 = {
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
  network: MAINNET422,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222(void 0, null, function* () {
    return MAINNET422;
  }),
  switchNetwork: (network) => __async222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222.initEccLib(ecc222);
var __async2222 = (__this, __arguments, generator) => {
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
var MAINNET4222 = "mainnet";
var initialWalletContext2222 = {
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
  network: MAINNET4222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222(void 0, null, function* () {
    return MAINNET4222;
  }),
  switchNetwork: (network) => __async2222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222.initEccLib(ecc2222);
var __async22222 = (__this, __arguments, generator) => {
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
var MAINNET42222 = "mainnet";
var initialWalletContext22222 = {
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
  network: MAINNET42222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222(void 0, null, function* () {
    return MAINNET42222;
  }),
  switchNetwork: (network) => __async22222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222.initEccLib(ecc22222);
var __async222222 = (__this, __arguments, generator) => {
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
var MAINNET422222 = "mainnet";
var initialWalletContext222222 = {
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
  network: MAINNET422222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222(void 0, null, function* () {
    return MAINNET422222;
  }),
  switchNetwork: (network) => __async222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222.initEccLib(ecc222222);
var __async2222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222 = "mainnet";
var initialWalletContext2222222 = {
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
  network: MAINNET4222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222(void 0, null, function* () {
    return MAINNET4222222;
  }),
  switchNetwork: (network) => __async2222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222.initEccLib(ecc2222222);
var __async22222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222 = "mainnet";
var initialWalletContext22222222 = {
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
  network: MAINNET42222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222(void 0, null, function* () {
    return MAINNET42222222;
  }),
  switchNetwork: (network) => __async22222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222.initEccLib(ecc22222222);
var __async222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222 = "mainnet";
var initialWalletContext222222222 = {
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
  network: MAINNET422222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222(void 0, null, function* () {
    return MAINNET422222222;
  }),
  switchNetwork: (network) => __async222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222.initEccLib(ecc222222222);
var __async2222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222 = "mainnet";
var initialWalletContext2222222222 = {
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
  network: MAINNET4222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222(void 0, null, function* () {
    return MAINNET4222222222;
  }),
  switchNetwork: (network) => __async2222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222.initEccLib(ecc2222222222);
var __async22222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222 = "mainnet";
var initialWalletContext22222222222 = {
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
  network: MAINNET42222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222(void 0, null, function* () {
    return MAINNET42222222222;
  }),
  switchNetwork: (network) => __async22222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222.initEccLib(ecc22222222222);
var __async222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222 = "mainnet";
var initialWalletContext222222222222 = {
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
  network: MAINNET422222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222(void 0, null, function* () {
    return MAINNET422222222222;
  }),
  switchNetwork: (network) => __async222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222.initEccLib(ecc222222222222);
var __async2222222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222222 = "mainnet";
var initialWalletContext2222222222222 = {
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
  network: MAINNET4222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222(void 0, null, function* () {
    return MAINNET4222222222222;
  }),
  switchNetwork: (network) => __async2222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222.initEccLib(ecc2222222222222);
var __async22222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222 = "mainnet";
var initialWalletContext22222222222222 = {
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
  network: MAINNET42222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222222(void 0, null, function* () {
    return MAINNET42222222222222;
  }),
  switchNetwork: (network) => __async22222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222222.initEccLib(ecc22222222222222);
var __async222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222222 = "mainnet";
var initialWalletContext222222222222222 = {
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
  network: MAINNET422222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222(void 0, null, function* () {
    return MAINNET422222222222222;
  }),
  switchNetwork: (network) => __async222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222222.initEccLib(ecc222222222222222);
var MAINNET4222222222222222 = "mainnet";
var initialWalletContext2222222222222222 = {
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
  network: MAINNET4222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222(void 0, null, function* () {
    return MAINNET4222222222222222;
  }),
  switchNetwork: (network) => __async222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222222.initEccLib(ecc2222222222222222);
var __async2222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222222 = "mainnet";
var initialWalletContext22222222222222222 = {
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
  network: MAINNET42222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222222(void 0, null, function* () {
    return MAINNET42222222222222222;
  }),
  switchNetwork: (network) => __async2222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222222222.initEccLib(ecc22222222222222222);
var __async22222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222222222 = "mainnet";
var initialWalletContext222222222222222222 = {
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
  network: MAINNET422222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222222222(void 0, null, function* () {
    return MAINNET422222222222222222;
  }),
  switchNetwork: (network) => __async22222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222222222.initEccLib(ecc222222222222222222);
var __async222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222222222222 = "mainnet";
var initialWalletContext2222222222222222222 = {
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
  network: MAINNET4222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222222(void 0, null, function* () {
    return MAINNET4222222222222222222;
  }),
  switchNetwork: (network) => __async222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222222222.initEccLib(ecc2222222222222222222);
var __async2222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222222222 = "mainnet";
var initialWalletContext22222222222222222222 = {
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
  network: MAINNET42222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222222222(void 0, null, function* () {
    return MAINNET42222222222222222222;
  }),
  switchNetwork: (network) => __async2222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222222222222.initEccLib(ecc22222222222222222222);
var __async22222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222222222222 = "mainnet";
var initialWalletContext222222222222222222222 = {
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
  network: MAINNET422222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222222222222(void 0, null, function* () {
    return MAINNET422222222222222222222;
  }),
  switchNetwork: (network) => __async22222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222222222222.initEccLib(ecc222222222222222222222);
var __async222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222222222222222 = "mainnet";
var initialWalletContext2222222222222222222222 = {
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
  network: MAINNET4222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222222222(void 0, null, function* () {
    return MAINNET4222222222222222222222;
  }),
  switchNetwork: (network) => __async222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222222222222.initEccLib(ecc2222222222222222222222);
var __async2222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222222222222 = "mainnet";
var initialWalletContext22222222222222222222222 = {
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
  network: MAINNET42222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222222222222(void 0, null, function* () {
    return MAINNET42222222222222222222222;
  }),
  switchNetwork: (network) => __async2222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222222222222222.initEccLib(ecc22222222222222222222222);
var __async22222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222222222222222 = "mainnet";
var initialWalletContext222222222222222222222222 = {
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
  network: MAINNET422222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222222222222222(void 0, null, function* () {
    return MAINNET422222222222222222222222;
  }),
  switchNetwork: (network) => __async22222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222222222222222.initEccLib(ecc222222222222222222222222);
var __async222222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222222222222222222 = "mainnet";
var initialWalletContext2222222222222222222222222 = {
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
  network: MAINNET4222222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222222222222(void 0, null, function* () {
    return MAINNET4222222222222222222222222;
  }),
  switchNetwork: (network) => __async222222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222222222222222.initEccLib(ecc2222222222222222222222222);
var __async2222222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222222222222222 = "mainnet";
var initialWalletContext22222222222222222222222222 = {
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
  network: MAINNET42222222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222222222222222(void 0, null, function* () {
    return MAINNET42222222222222222222222222;
  }),
  switchNetwork: (network) => __async2222222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin22222222222222222222222222.initEccLib(ecc22222222222222222222222222);
var __async22222222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET422222222222222222222222222 = "mainnet";
var initialWalletContext222222222222222222222222222 = {
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
  network: MAINNET422222222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async22222222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async22222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async22222222222222222222222222(void 0, null, function* () {
    return MAINNET422222222222222222222222222;
  }),
  switchNetwork: (network) => __async22222222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async22222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async22222222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async22222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin222222222222222222222222222.initEccLib(ecc222222222222222222222222222);
var __async222222222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET4222222222222222222222222222 = "mainnet";
var initialWalletContext2222222222222222222222222222 = {
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
  network: MAINNET4222222222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async222222222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async222222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async222222222222222222222222222(void 0, null, function* () {
    return MAINNET4222222222222222222222222222;
  }),
  switchNetwork: (network) => __async222222222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async222222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async222222222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin2222222222222222222222222222.initEccLib(ecc2222222222222222222222222222);
var __async2222222222222222222222222222 = (__this, __arguments, generator) => {
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
var MAINNET42222222222222222222222222222 = "mainnet";
var initialWalletContext22222222222222222222222222222 = {
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
  network: MAINNET42222222222222222222222222222,
  library: null,
  provider: null,
  accounts: [],
  connect: (walletName) => __async2222222222222222222222222222(void 0, null, function* () {
  }),
  disconnect: () => {
  },
  requestAccounts: () => __async2222222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  getNetwork: () => __async2222222222222222222222222222(void 0, null, function* () {
    return MAINNET42222222222222222222222222222;
  }),
  switchNetwork: (network) => __async2222222222222222222222222222(void 0, null, function* () {
  }),
  getPublicKey: () => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getBalance: () => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  getInscriptions: () => __async2222222222222222222222222222(void 0, null, function* () {
    return [];
  }),
  sendBTC: (to, amount) => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signMessage: (message) => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  signPsbt: (tx) => __async2222222222222222222222222222(void 0, null, function* () {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: ""
    };
  }),
  pushPsbt: (tx) => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  inscribe: (content) => __async2222222222222222222222222222(void 0, null, function* () {
    return "";
  }),
  isCreatingCommit: false,
  isInscribing: false
};
bitcoin3.initEccLib(ecc22222222222222222222222222222);
var LaserEyesContext = createContext(initialWalletContext22222222222222222222222222222);
var LaserEyesContext2 = createContext2(initialWalletContext2222222222222222222222222222);
var LaserEyesContext3 = createContext3(initialWalletContext222222222222222222222222222);
var LaserEyesContext4 = createContext4(initialWalletContext22222222222222222222222222);
var LaserEyesContext5 = createContext5(initialWalletContext2222222222222222222222222);
var LaserEyesContext6 = createContext6(initialWalletContext222222222222222222222222);
var LaserEyesContext7 = createContext7(initialWalletContext22222222222222222222222);
var LaserEyesContext8 = createContext8(initialWalletContext2222222222222222222222);
var LaserEyesContext9 = createContext9(initialWalletContext222222222222222222222);
var LaserEyesContext10 = createContext10(initialWalletContext22222222222222222222);
var LaserEyesContext11 = createContext11(initialWalletContext2222222222222222222);
var LaserEyesContext12 = createContext12(initialWalletContext222222222222222222);
var LaserEyesContext13 = createContext13(initialWalletContext22222222222222222);
var LaserEyesContext14 = createContext14(initialWalletContext2222222222222222);
var LaserEyesContext15 = createContext15(initialWalletContext222222222222222);
var LaserEyesContext16 = createContext16(initialWalletContext22222222222222);
var LaserEyesContext17 = createContext17(initialWalletContext2222222222222);
var LaserEyesContext18 = createContext18(initialWalletContext222222222222);
var LaserEyesContext19 = createContext19(initialWalletContext22222222222);
var LaserEyesContext20 = createContext20(initialWalletContext2222222222);
var LaserEyesContext21 = createContext21(initialWalletContext222222222);
var LaserEyesContext22 = createContext22(initialWalletContext22222222);
var LaserEyesContext23 = createContext23(initialWalletContext2222222);
var LaserEyesContext24 = createContext24(initialWalletContext222222);
var LaserEyesContext25 = createContext25(initialWalletContext22222);
var LaserEyesContext26 = createContext26(initialWalletContext2222);
var LaserEyesContext27 = createContext27(initialWalletContext222);
var LaserEyesContext28 = createContext28(initialWalletContext22);
var LaserEyesContext29 = createContext29(initialWalletContext2);

// example/lib/urls.ts
var MEMPOOL_SPACE_URL3 = "https://mempool.space";
var MEMPOOL_SPACE_TESTNET_URL3 = "https://mempool.space/testnet";
var MEMPOOL_SPACE_SIGNET_URL2 = "https://mempool.space/signet";
var getMempoolSpaceUrl3 = (network) => network === TESTNET3 ? MEMPOOL_SPACE_TESTNET_URL3 : network === SIGNET3 ? MEMPOOL_SPACE_SIGNET_URL2 : MEMPOOL_SPACE_URL3;

// src/providers/LaserEyesProvider.tsx
import { jsx as jsx138 } from "react/jsx-runtime";
var LaserEyesContext30 = createContext30(initialWalletContext);
var useLaserEyes = () => {
  return useContext30(LaserEyesContext30);
};
var LaserEyesProvider = ({
  children,
  config
}) => {
  const selfRef = useRef30({
    accounts: []
  });
  const self = selfRef.current;
  const [library, setLibrary] = useState59(null);
  const [provider, setProvider] = useState59();
  const [isInitializing, setIsInitializing] = useState59(true);
  const [connected, setConnected] = useState59(false);
  const [isConnecting, setIsConnecting] = useState59(false);
  const [accounts, setAccounts] = useState59([]);
  const [publicKey, setPublicKey] = useState59("");
  const [paymentPublicKey, setPaymentPublicKey] = useState59("");
  const [address3, setAddress] = useState59("");
  const [paymentAddress, setPaymentAddress] = useState59("");
  const [balance, setBalance] = useState59();
  const [hasUnisat, setHasUnisat] = useState59(false);
  const [hasXverse, setHasXverse] = useState59(false);
  const [hasOyl, setHasOyl] = useState59(false);
  const [hasMagicEden, setHasMagicEden] = useState59(false);
  const [hasOkx, setHasOkx] = useState59(false);
  const [hasLeather, setHasLeather] = useState59(false);
  const [hasPhantom, setHasPhantom] = useState59(false);
  const [hasWizz, setHasWizz] = useState59(false);
  const [network, setNetwork] = useLocalStorage30("network", MAINNET, {
    initializeWithValue: false
  });
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
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
  useEffect59(() => {
    setBalance(void 0);
  }, [network]);
  useEffect59(() => {
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
  useEffect59(() => {
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
  const connectUnisat = useCallback59(() => __async(void 0, null, function* () {
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
  const connectXverse = useCallback59(() => __async(void 0, null, function* () {
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
      yield getAddress30(getAddressOptions);
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
      yield getAddress30(getAddressOptions);
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
  const connectLeather = useCallback59(() => __async(void 0, null, function* () {
    try {
      localStorage == null ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
      const lib = window.LeatherProvider;
      const getAddressesResponse = yield lib.request(
        "getAddresses"
      );
      const addressesResponse = getAddressesResponse.result;
      const addresses = addressesResponse.addresses;
      const leatherAccountsParsed = addresses.map(
        (address4) => address4.address
      );
      const taprootAddress = addresses.find(
        (address4) => address4.type === P2TR
      );
      const segwitAddress = addresses.find(
        (address4) => address4.type === P2WPKH
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
        return [address3];
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
          (address4) => address4.address
        );
        const taprootAddress = addresses.find(
          (address4) => address4.type === P2TR
        );
        const segwitAddress = addresses.find(
          (address4) => address4.type === P2WPKH
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
        if (address3.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OYL) {
        if (address3.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === MAGIC_EDEN) {
        if (address3.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === OKX) {
        const okxNetwork = yield library == null ? void 0 : library.getNetwork();
        const foundNetwork = getNetworkForOkx(okxNetwork);
        setNetwork(foundNetwork);
      } else if (provider === LEATHER) {
        if (address3.slice(0, 1) === "t") {
          return TESTNET;
        }
        return MAINNET;
      } else if (provider === PHANTOM) {
        if (address3.slice(0, 1) === "t") {
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
        const response = yield request30("sendTransfer", {
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
          if (response.error.code === RpcErrorCode30.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error sending BTC: " + response.error.message);
          }
        }
      } else if (provider === OYL) {
        const { psbtHex, psbtBase64 } = yield createSendBtcPsbt(
          address3,
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
          address3,
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
          if (response.error.code === RpcErrorCode30.USER_REJECTION) {
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
        const response = yield request30("signMessage", {
          address: address3,
          message
        });
        if (response.status === "success") {
          return response.result.signature;
        } else {
          if (response.error.code === RpcErrorCode30.USER_REJECTION) {
            throw new Error("User rejected the request");
          } else {
            throw new Error("Error signing message: " + response.error.message);
          }
        }
      } else if (provider === MAGIC_EDEN) {
        let signedMessage;
        yield signMessageSatsConnect30({
          getProvider: () => __async(void 0, null, function* () {
            return window.magicEden.bitcoin;
          }),
          payload: {
            network: {
              type: BitcoinNetworkType30.Mainnet
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
        const response = yield library == null ? void 0 : library.signMessage(address3, uintArray);
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
        psbtBase64 = bitcoin33.Psbt.fromHex(psbt).toBase64();
        psbtHex = psbt;
      } else if (isBase64(psbt)) {
        psbtBase64 = psbt;
        psbtHex = bitcoin33.Psbt.fromBase64(psbt).toHex();
      } else {
        throw new Error("Invalid PSBT format");
      }
      if (provider === UNISAT) {
        const signedPsbt = yield library == null ? void 0 : library.signPsbt(psbtHex, {
          autoFinalized: finalize
        });
        const psbtSignedPsbt = bitcoin33.Psbt.fromHex(signedPsbt);
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
        const toSignPsbt = bitcoin33.Psbt.fromBase64(String(psbtBase64), {
          network: getBitcoinNetwork(network)
        });
        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address: address3,
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
            const addressFromScript = fromOutputScript30(
              script,
              getBitcoinNetwork(network)
            );
            if (addressFromScript === paymentAddress) {
              paymentsAddressData.signingIndexes.push(Number(counter));
            } else if (addressFromScript === address3) {
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
              const signedPsbt = bitcoin33.Psbt.fromBase64(
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
        yield signTransaction30(signPsbtOptions);
        return {
          signedPsbtHex,
          signedPsbtBase64,
          txId
        };
      } else if (provider === OYL) {
        const signedPsbt = yield library == null ? void 0 : library.signPsbt(psbtHex, true, true);
        console.log({ signedPsbt });
        const psbtSignedPsbt = bitcoin33.Psbt.fromHex(signedPsbt);
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
        const toSignPsbt = bitcoin33.Psbt.fromBase64(String(psbtBase64), {
          network: getBitcoinNetwork(network)
        });
        const inputs = toSignPsbt.data.inputs;
        const inputsToSign = [];
        const ordinalAddressData = {
          address: address3,
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
            const addressFromScript = fromOutputScript30(
              script,
              getBitcoinNetwork(network)
            );
            if (addressFromScript === paymentAddress) {
              paymentsAddressData.signingIndexes.push(Number(counter));
            } else if (addressFromScript === address3) {
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
              const signedPsbt = bitcoin33.Psbt.fromBase64(
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
        yield signTransaction30(signPsbtOptions);
        if (broadcast) {
          const signed = bitcoin33.Psbt.fromBase64(String(signedPsbtBase64));
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
        const psbtSignedPsbt = bitcoin33.Psbt.fromHex(signedPsbt);
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
        const signed = bitcoin33.Psbt.fromHex(String(signedTx));
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
        const psbtSignedPsbt = bitcoin33.Psbt.fromHex(signedPsbt);
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
        return yield axios61.post(`${getMempoolSpaceUrl3(network)}/api/tx`, psbt).then((res) => res.data);
      } else if (provider === LEATHER) {
        const decoded = bitcoin33.Psbt.fromHex(psbt);
        const extracted = decoded.extractTransaction();
        return yield axios61.post(`${getMempoolSpaceUrl3(network)}/api/tx`, extracted.toHex()).then((res) => res.data);
      } else if (provider === WIZZ) {
        return yield library == null ? void 0 : library.pushPsbt(psbt);
      } else {
        throw new Error("The connected wallet doesn't support this method..");
      }
    } catch (error) {
      throw error;
    }
  });
  return /* @__PURE__ */ jsx138(
    LaserEyesContext30.Provider,
    {
      value: {
        library,
        accounts,
        publicKey,
        address: address3,
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
import { useCallback as useCallback60, useEffect as useEffect60, useState as useState60 } from "react";

// src/consts/inscribe.ts
var MIME_TYPE_TEXT = "text/plain;charset=utf-8";

// src/hooks/useInscriber.ts
import axios62 from "axios";
var DESCRIBE_API_URL = "http://localhost:3000/api";
var useInscriber = ({
  inscribeApiUrl = DESCRIBE_API_URL
}) => {
  const { address: address3, paymentAddress, paymentPublicKey, publicKey, signPsbt } = useLaserEyes();
  const [content, setContent] = useState60("");
  const [mimeType, setMimeType] = useState60(MIME_TYPE_TEXT);
  const [commitPsbtHex, setCommitPsbtHex] = useState60("");
  const [commitPsbtBase64, setCommitPsbtBase64] = useState60("");
  const [commitTxId, setCommitTxId] = useState60("");
  const [feeRate, setFeeRate] = useState60(10);
  const [totalFees, setTotalFees] = useState60(0);
  const [inscriberAddress, setInscriberAddress] = useState60("");
  const [inscriptionTxId, setInscriptionTxId] = useState60("");
  const [previewUrl, setPreviewUrl] = useState60("");
  const [isFetchingCommitPsbt, setIsFetchingCommitPsbt] = useState60(false);
  const [isInscribing, setIsInscribing] = useState60(false);
  useEffect60(() => {
    setCommitPsbtHex("");
    setCommitPsbtBase64("");
    setCommitTxId("");
  }, [content, address3, mimeType, feeRate]);
  const getCommitPsbt = useCallback60(() => __async(void 0, null, function* () {
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
      return yield axios62.post(`${inscribeApiUrl}/create-inscription`, {
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
  const inscribe = useCallback60(
    (_0) => __async(void 0, [_0], function* ({
      content: providedContent,
      mimeType: providedMimeType,
      ordinalAddress: providedAddress,
      commitTxId: providedCommitTxId
    }) {
      try {
        const inscribeContent = providedContent != null ? providedContent : content;
        const inscribeMimeType = providedMimeType != null ? providedMimeType : mimeType;
        const inscribeOutputAddress = providedAddress != null ? providedAddress : address3;
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
        return yield axios62.post(`${inscribeApiUrl}/inscribe`, {
          content,
          mimeType,
          ordinalAddress: address3,
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
    [address3, commitTxId, content, mimeType]
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

// src/icons/oyl.tsx
import { jsx as jsx139, jsxs as jsxs97 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs97(
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
          /* @__PURE__ */ jsx139(
            "rect",
            {
              width: "42",
              height: "42",
              rx: "10",
              fill: "#090A0C",
              style: { fill: "#090A0C", fillOpacity: 1 }
            }
          ),
          /* @__PURE__ */ jsx139(
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
  return /* @__PURE__ */ jsxs97(
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
        /* @__PURE__ */ jsx139(
          "rect",
          {
            width: "42",
            height: "42",
            rx: "10",
            fill: "white",
            style: { fill: "white", fillOpacity: 1 }
          }
        ),
        /* @__PURE__ */ jsx139(
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
import { jsx as jsx140, jsxs as jsxs98 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs98(
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
          /* @__PURE__ */ jsx140("rect", { width: "128", height: "128", rx: "26.8387", fill: "#12100F" }),
          /* @__PURE__ */ jsx140(
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
  return /* @__PURE__ */ jsxs98(
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
        /* @__PURE__ */ jsx140("rect", { width: "128", height: "128", rx: "26.8387", fill: "#F5F1ED" }),
        /* @__PURE__ */ jsx140(
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
import { jsx as jsx141, jsxs as jsxs99 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs99(
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
          /* @__PURE__ */ jsxs99("g", { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsx141(
              "path",
              {
                fill: "#AB9FF2",
                d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
              }
            ),
            /* @__PURE__ */ jsx141(
              "path",
              {
                fill: "#FFFDF8",
                fillRule: "evenodd",
                d: "M17.686 27.567c-1.676 2.569-4.484 5.819-8.22 5.819-1.767 0-3.466-.728-3.466-3.887C6 21.454 16.984 9 27.176 9c5.798 0 8.108 4.023 8.108 8.59 0 5.864-3.805 12.568-7.587 12.568-1.2 0-1.79-.659-1.79-1.704 0-.273.046-.568.137-.887-1.291 2.205-3.783 4.25-6.116 4.25-1.698 0-2.559-1.068-2.559-2.568 0-.545.114-1.113.317-1.681Zm8.78-10.135c0 1.331-.786 1.997-1.664 1.997-.892 0-1.664-.666-1.664-1.997s.772-1.996 1.664-1.996c.878 0 1.663.665 1.663 1.996Zm4.99 0c0 1.331-.785 1.997-1.663 1.997-.892 0-1.664-.666-1.664-1.997 0-1.33.772-1.996 1.664-1.996.878 0 1.664.665 1.664 1.996Z",
                clipRule: "evenodd"
              }
            )
          ] }),
          /* @__PURE__ */ jsx141("defs", { children: /* @__PURE__ */ jsx141("clipPath", { id: "a", children: /* @__PURE__ */ jsx141("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }) })
        ]
      })
    );
  }
  return /* @__PURE__ */ jsxs99(
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
        /* @__PURE__ */ jsxs99("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx141(
            "path",
            {
              fill: "#FFFDF8",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx141(
            "path",
            {
              fill: "#AB9FF2",
              fillRule: "evenodd",
              d: "M17.686 27.567c-1.676 2.569-4.484 5.819-8.22 5.819-1.767 0-3.466-.728-3.466-3.887C6 21.454 16.984 9 27.176 9c5.798 0 8.108 4.023 8.108 8.59 0 5.864-3.805 12.568-7.587 12.568-1.2 0-1.79-.659-1.79-1.704 0-.273.046-.568.137-.887-1.291 2.205-3.783 4.25-6.116 4.25-1.698 0-2.559-1.068-2.559-2.568 0-.545.114-1.113.317-1.681Zm8.78-10.135c0 1.331-.786 1.997-1.664 1.997-.892 0-1.664-.666-1.664-1.997s.772-1.996 1.664-1.996c.878 0 1.663.665 1.663 1.996Zm4.99 0c0 1.331-.785 1.997-1.663 1.997-.892 0-1.664-.666-1.664-1.997 0-1.33.772-1.996 1.664-1.996.878 0 1.664.665 1.664 1.996Z",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsx141("defs", { children: /* @__PURE__ */ jsx141("clipPath", { id: "a", children: /* @__PURE__ */ jsx141("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }) })
      ]
    })
  );
};

// src/icons/xverse.tsx
import { jsx as jsx142, jsxs as jsxs100 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs100(
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
        /* @__PURE__ */ jsxs100("g", { clipPath: "url(#clip0_3_53)", children: [
          /* @__PURE__ */ jsx142(
            "path",
            {
              d: "M32 0H10C4.47715 0 0 4.47715 0 10V32C0 37.5228 4.47715 42 10 42H32C37.5228 42 42 37.5228 42 32V10C42 4.47715 37.5228 0 32 0Z",
              fill: "#181818"
            }
          ),
          /* @__PURE__ */ jsx142(
            "path",
            {
              d: "M32 31.6745V27.6829C32 27.5233 31.9203 27.3636 31.8406 27.2438L14.8225 10.1597C14.7029 10.0399 14.5435 10 14.3841 10H10.3986C10.1993 10 10.0399 10.1597 10.0399 10.3592V14.0715C10.0399 14.2311 10.1196 14.3908 10.1993 14.5105L16.2971 20.6177C16.4565 20.7774 16.4565 20.977 16.2971 21.1366L10.1196 27.3237C10.0399 27.4035 10 27.4834 10 27.5632V31.6346C10 31.8342 10.1594 31.9939 10.3587 31.9939H17.0544C17.2536 31.9939 17.413 31.8342 17.413 31.6346V29.2396C17.413 29.1598 17.4529 29.0401 17.5326 29.0002L20.8406 25.6871C21 25.5275 21.1993 25.5275 21.3587 25.6871L27.4964 31.8342C27.6159 31.954 27.7753 31.9939 27.9348 31.9939H31.6413C31.8406 32.0337 32 31.8741 32 31.6745Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ jsx142(
            "path",
            {
              d: "M23.3406 15.0793H26.5592C26.7507 15.0793 26.9039 15.2333 26.9039 15.4257V18.658C26.9039 18.9658 27.2871 19.1197 27.4788 18.8888L31.8851 14.4637C31.9617 14.3867 32 14.3097 32 14.2328V10.3463C32 10.1539 31.8468 10 31.6552 10H27.7469C27.6703 10 27.5554 10.0385 27.5171 10.1154L23.1107 14.5021C22.8808 14.6945 23.0341 15.0793 23.3406 15.0793Z",
              fill: "#EE7A30"
            }
          )
        ] }),
        /* @__PURE__ */ jsx142("defs", { children: /* @__PURE__ */ jsx142("clipPath", { id: "clip0_3_53", children: /* @__PURE__ */ jsx142("rect", { width: "42", height: "42", fill: "white" }) }) })
      ]
    })
  );
};

// src/icons/unisat.tsx
import { jsx as jsx143, jsxs as jsxs101 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs101(
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
        /* @__PURE__ */ jsxs101("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx143(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx143(
            "path",
            {
              fill: "url(#b)",
              d: "m25.517 9.483 5.759 5.611c.49.477.731.959.724 1.445-.008.486-.219.929-.631 1.33-.431.421-.897.634-1.395.644-.497.007-.992-.228-1.482-.705l-5.89-5.738c-.669-.652-1.315-1.114-1.936-1.385a2.873 2.873 0 0 0-1.96-.127c-.685.185-1.42.662-2.21 1.428-1.086 1.06-1.605 2.054-1.552 2.983.053.929.593 1.893 1.617 2.89l5.938 5.786c.496.482.74.964.732 1.443-.008.48-.22.923-.64 1.332-.419.408-.88.62-1.382.638-.502.016-1.001-.217-1.495-.7l-5.76-5.61c-.936-.912-1.613-1.776-2.029-2.59-.416-.815-.572-1.737-.464-2.765.097-.88.384-1.732.863-2.558.477-.827 1.161-1.671 2.048-2.537C15.43 9.268 16.438 8.48 17.4 7.93c.96-.55 1.889-.854 2.786-.917.899-.064 1.784.112 2.66.527.876.415 1.765 1.061 2.67 1.943h.002Z"
            }
          ),
          /* @__PURE__ */ jsx143(
            "path",
            {
              fill: "url(#c)",
              d: "m16.482 32.123-5.758-5.611c-.49-.479-.731-.959-.724-1.445.008-.486.219-.929.631-1.33.431-.421.897-.634 1.395-.644.498-.007.992.227 1.482.705l5.888 5.738c.671.652 1.315 1.114 1.936 1.385.622.27 1.276.312 1.962.127.685-.185 1.42-.662 2.21-1.43 1.086-1.06 1.605-2.054 1.552-2.983-.053-.929-.593-1.893-1.617-2.891l-3.164-3.056c-.496-.482-.74-.964-.732-1.443.008-.48.22-.923.64-1.332.419-.408.88-.62 1.382-.638.502-.016 1.002.217 1.496.7l2.983 2.88c.936.912 1.613 1.775 2.03 2.59.415.815.571 1.736.463 2.764a6.477 6.477 0 0 1-.863 2.559c-.477.826-1.16 1.67-2.048 2.536-1.057 1.03-2.066 1.819-3.027 2.368-.962.55-1.89.856-2.79.92-.898.063-1.784-.113-2.66-.527-.876-.415-1.765-1.062-2.67-1.944l.003.002Z"
            }
          ),
          /* @__PURE__ */ jsx143(
            "path",
            {
              fill: "url(#d)",
              d: "M20.073 17.645c1.168 0 2.115-.93 2.115-2.08 0-1.149-.947-2.08-2.115-2.08-1.168 0-2.115.931-2.115 2.08 0 1.15.947 2.08 2.115 2.08Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs101("defs", { children: [
          /* @__PURE__ */ jsxs101(
            "linearGradient",
            {
              id: "b",
              x1: 30.329,
              x2: 12.579,
              y1: 12.752,
              y2: 20.772,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx143("stop", { stopColor: "#201C1B" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.36, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.67, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx143("stop", { offset: 1, stopColor: "#F4B852" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs101(
            "linearGradient",
            {
              id: "c",
              x1: 12.163,
              x2: 32.789,
              y1: 29.085,
              y2: 22.844,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx143("stop", { stopColor: "#1F1D1C" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.37, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.67, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx143("stop", { offset: 1, stopColor: "#F4FB52" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs101(
            "radialGradient",
            {
              id: "d",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(2.11484 0 0 2.08019 20.073 15.567)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx143("stop", { stopColor: "#F4B852" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.33, stopColor: "#EA8101" }),
                /* @__PURE__ */ jsx143("stop", { offset: 0.64, stopColor: "#77390D" }),
                /* @__PURE__ */ jsx143("stop", { offset: 1, stopColor: "#211C1D" })
              ]
            }
          ),
          /* @__PURE__ */ jsx143("clipPath", { id: "a", children: /* @__PURE__ */ jsx143("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/wizz.tsx
import { jsx as jsx144, jsxs as jsxs102 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs102(
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
        /* @__PURE__ */ jsxs102("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx144(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsxs102("g", { fillRule: "evenodd", clipPath: "url(#b)", clipRule: "evenodd", children: [
            /* @__PURE__ */ jsx144(
              "path",
              {
                fill: "#FFD815",
                d: "m26.507 17.74-1.623-1.623-1.624 1.623 1.623 1.623 1.624 1.624 1.623-1.624-1.623-1.623Z"
              }
            ),
            /* @__PURE__ */ jsx144(
              "path",
              {
                fill: "#FF9813",
                d: "m26.507 8-1.624 1.623 1.624 1.624 1.623-1.624L26.507 8ZM33 14.493l-1.623-1.623-1.624 1.623 1.624 1.623L33 14.493ZM23.26 27.48l1.623 1.623 1.624-1.623-1.623-1.624-1.624 1.624ZM11.897 16.117l1.623 1.623 1.623-1.623-1.623-1.624-1.623 1.624ZM20.014 8 18.39 9.623l1.624 1.624 1.623-1.624L20.014 8ZM13.52 11.247l1.624 1.623 1.623-1.623-1.623-1.624-1.624 1.624ZM31.377 19.363l-1.624 1.623 1.624 1.624L33 20.987l-1.623-1.624ZM28.13 25.856l1.623 1.624 1.624-1.624-1.624-1.623-1.623 1.623Z"
              }
            ),
            /* @__PURE__ */ jsx144(
              "path",
              {
                fill: "#5B5B72",
                d: "m26.507 20.986-1.624-1.623-1.623 1.623-1.623-1.623-1.623-1.623 1.623-1.624-1.623-1.623-1.624-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623 1.623-.812-.811-1.623 1.623 1.623 1.623-1.623 1.624-1.543 1.542-1.542 1.543-1.624 1.623L8 31.377 9.623 33l1.624-1.623 1.623-1.624 1.543-1.542.08-.08 1.462-1.463.08-.08 1.544-1.543 1.623 1.623 1.623-1.623-.811-.812 1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
              }
            ),
            /* @__PURE__ */ jsx144(
              "path",
              {
                fill: "#FF9813",
                d: "m26.507 14.493-1.624-1.623-1.623 1.623-1.623-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623 1.623 1.623 1.623-1.623-1.623-1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs102("defs", { children: [
          /* @__PURE__ */ jsx144("clipPath", { id: "a", children: /* @__PURE__ */ jsx144("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }),
          /* @__PURE__ */ jsx144("clipPath", { id: "b", children: /* @__PURE__ */ jsx144("path", { fill: "#fff", d: "M8 8h25v25H8z" }) })
        ] })
      ]
    })
  );
};

// src/icons/okx.tsx
import { jsx as jsx145, jsxs as jsxs103 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs103(
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
        /* @__PURE__ */ jsxs103("g", { clipPath: "url(#a)", children: [
          /* @__PURE__ */ jsx145(
            "path",
            {
              fill: "#000",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx145("g", { fill: "#fff", clipPath: "url(#b)", children: /* @__PURE__ */ jsx145("path", { d: "M24.578 17.052h-6.787a.523.523 0 0 0-.52.52v6.788c0 .286.235.52.52.52h6.787c.286 0 .521-.234.521-.52v-6.787a.523.523 0 0 0-.52-.521ZM16.733 9.223H9.946a.523.523 0 0 0-.521.521v6.787c0 .286.235.521.52.521h6.788c.285 0 .52-.235.52-.52V9.743a.523.523 0 0 0-.52-.52ZM32.424 9.223h-6.787a.523.523 0 0 0-.521.521v6.787c0 .286.235.521.52.521h6.788c.286 0 .52-.235.52-.52V9.743a.523.523 0 0 0-.52-.52ZM16.733 24.898H9.946a.523.523 0 0 0-.521.52v6.788c0 .285.235.52.52.52h6.788c.285 0 .52-.235.52-.52v-6.788a.523.523 0 0 0-.52-.52ZM32.424 24.898h-6.787a.523.523 0 0 0-.521.52v6.788c0 .285.235.52.52.52h6.788c.286 0 .52-.235.52-.52v-6.788a.523.523 0 0 0-.52-.52Z" }) })
        ] }),
        /* @__PURE__ */ jsxs103("defs", { children: [
          /* @__PURE__ */ jsx145("clipPath", { id: "a", children: /* @__PURE__ */ jsx145("path", { fill: "#fff", d: "M0 0h42v42H0z" }) }),
          /* @__PURE__ */ jsx145("clipPath", { id: "b", children: /* @__PURE__ */ jsx145("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/magiceden.tsx
import { jsx as jsx146, jsxs as jsxs104 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs104(
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
        /* @__PURE__ */ jsxs104("g", { clipPath: "url(#clip0_17_93)", children: [
          /* @__PURE__ */ jsx146(
            "path",
            {
              fill: "#070C34",
              d: "M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
            }
          ),
          /* @__PURE__ */ jsx146(
            "path",
            {
              fill: "url(#paint0_linear_17_93)",
              d: "m27.666 16.837 1.874 2.177c.215.245.404.446.483.562.56.55.874 1.293.874 2.07-.053.915-.657 1.54-1.213 2.205l-1.311 1.521-.685.79a.184.184 0 0 0 .046.281c.033.02.07.028.107.026h6.835c1.045 0 2.36.868 2.283 2.184 0 .597-.247 1.171-.68 1.595a2.36 2.36 0 0 1-1.637.664H23.936c-.704 0-2.598.076-3.128-1.521a1.841 1.841 0 0 1-.043-1.035 4.5 4.5 0 0 1 .72-1.404 65.543 65.543 0 0 1 1.695-2.343c.741-1.002 1.503-1.971 2.251-2.992a.19.19 0 0 0 .04-.116.19.19 0 0 0-.04-.116l-2.72-3.156a.192.192 0 0 0-.153-.073.192.192 0 0 0-.152.073c-.728.96-3.917 5.203-4.598 6.063-.68.86-2.355.907-3.283 0l-4.255-4.161a.197.197 0 0 0-.1-.053.195.195 0 0 0-.2.082.192.192 0 0 0-.032.106v8a2.678 2.678 0 0 1-.494 1.594c-.33.466-.804.823-1.352 1.014a2.375 2.375 0 0 1-2.111-.293 2.271 2.271 0 0 1-.72-.805A2.22 2.22 0 0 1 5 28.736V14.349a2.416 2.416 0 0 1 .548-1.422c.33-.406.785-.7 1.298-.841a2.632 2.632 0 0 1 2.502.664l6.54 6.381c.019.02.043.034.07.043a.197.197 0 0 0 .161-.013.188.188 0 0 0 .061-.054l4.646-6.27c.215-.254.485-.46.79-.601.304-.142.636-.217.976-.221H34.68c.33 0 .657.07.959.204a2.31 2.31 0 0 1 1.263 1.409c.096.309.122.633.079.952a2.288 2.288 0 0 1-.813 1.42c-.439.364-.996.56-1.572.551h-6.768a.188.188 0 0 0-.163.099.187.187 0 0 0-.022.095c0 .032.013.065.032.093h-.008Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs104("defs", { children: [
          /* @__PURE__ */ jsxs104(
            "linearGradient",
            {
              id: "paint0_linear_17_93",
              x1: "-0.315",
              x2: "35.366",
              y1: "9.343",
              y2: "30.176",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx146("stop", { offset: "0.23", stopColor: "#FF0074" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.26", stopColor: "#FF0068" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.32", stopColor: "#FF0048" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.39", stopColor: "#FF0015" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.41", stopColor: "#FF0009" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.43", stopColor: "#FF0908" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.54", stopColor: "#FF4003" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.62", stopColor: "#FF6201" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.66", stopColor: "#FF6F00" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.72", stopColor: "#FF8700" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.83", stopColor: "#FFAB00" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.92", stopColor: "#FFC100" }),
                /* @__PURE__ */ jsx146("stop", { offset: "0.98", stopColor: "#FFCA00" })
              ]
            }
          ),
          /* @__PURE__ */ jsx146("clipPath", { id: "clip0_17_93", children: /* @__PURE__ */ jsx146("path", { fill: "#fff", d: "M0 0h42v42H0z" }) })
        ] })
      ]
    })
  );
};

// src/icons/walletIcon.tsx
import { jsx as jsx147 } from "react/jsx-runtime";
var WalletIcon = ({
  size,
  className,
  variant,
  walletName
}) => {
  if (walletName === XVERSE) {
    return /* @__PURE__ */ jsx147(XverseLogo, { size, className, variant });
  } else if (walletName === WIZZ) {
    return /* @__PURE__ */ jsx147(WizzLogo, { size, className, variant });
  } else if (walletName === LEATHER) {
    return /* @__PURE__ */ jsx147(LeatherLogo, { size, className, variant });
  } else if (walletName === MAGIC_EDEN) {
    return /* @__PURE__ */ jsx147(MagicEdenLogo, { size, className, variant });
  } else if (walletName === OKX) {
    return /* @__PURE__ */ jsx147(OkxLogo, { size, className, variant });
  } else if (walletName === PHANTOM) {
    return /* @__PURE__ */ jsx147(PhantomLogo, { size, className, variant });
  } else if (walletName === UNISAT) {
    return /* @__PURE__ */ jsx147(UnisatLogo, { size, className, variant });
  } else if (walletName === OYL) {
    return /* @__PURE__ */ jsx147(OylLogo, { size, className, variant });
  } else {
    return /* @__PURE__ */ jsx147(LeatherLogo, { size, className, variant });
  }
};
export {
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
  UNISAT,
  UNISAT_MAINNET,
  UNISAT_TESTNET,
  UnisatLogo,
  WALLETS,
  WIZZ,
  WIZZ_MAINNET,
  WIZZ_TESTNET,
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
