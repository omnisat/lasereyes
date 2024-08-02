import { MAGIC_EDEN, UNISAT, XVERSE } from "../consts/wallets";
import { MAINNET, REGTEST, TESTNET } from "../consts/networks";

export type LaserEyesContextType = {
  connected: boolean;
  isConnecting: boolean;
  publicKey: string;
  address: string;
  paymentAddress: string;
  paymentPublicKey: string;
  balance: number | undefined;
  network: typeof MAINNET | typeof TESTNET | typeof REGTEST;
  library: any;
  provider: any;
  accounts: string[];
  hasUnisat: boolean;
  hasXverse: boolean;
  hasOyl: boolean;
  hasMagicEden: boolean;
  hasOkx: boolean;
  hasLeather: boolean;
  hasPhantom: boolean;
  hasWizz: boolean;

  connect: (
    walletName: typeof UNISAT | typeof XVERSE | typeof MAGIC_EDEN
  ) => Promise<void>;
  disconnect: () => void;
  requestAccounts: () => Promise<string[]>;
  getNetwork: () => Promise<string | undefined>;
  switchNetwork: (
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST
  ) => Promise<void>;
  getPublicKey: () => Promise<string>;
  getBalance: () => Promise<string>;
  getInscriptions: () => Promise<any[]>;
  sendBTC: (to: string, amount: number) => Promise<string>;
  signMessage: (message: string) => Promise<string>;
  signPsbt: (
    tx: string,
    finalize?: boolean,
    broadcast?: boolean
  ) => Promise<
    | {
        signedPsbtHex: string | undefined;
        signedPsbtBase64: string | undefined;
        txId?: string;
      }
    | undefined
  >;
  pushPsbt: (tx: string) => Promise<string | undefined>;
};

export type Config = {
  network: typeof MAINNET | typeof TESTNET | typeof REGTEST;
};

export interface OYLBalanceResponse {
  brc20s: {
    total: number;
  };
  btc: {
    pending: number;
    confirmed: number;
    total: number;
  };
  overall: {
    pending: number;
    confirmed: number;
    total: number;
  };
}

export interface LeatherRPCResponse {
  jsonrpc: string;
  id: string;
  result: LeatherRequestAddressResponse | LeatherRequestSignResponse;
}

export interface LeatherRequestAddressResponse {
  addresses: LeatherAddress[];
}

export interface LeatherRequestSignResponse {
  hex: string;
}

export interface LeatherAddress {
  symbol: string;
  type?: string;
  address: string;
  publicKey?: string;
  derivationPath?: string;
  tweakedPublicKey?: string;
}

export interface BlockchainInfoResponse {
  notice: string;
  unspent_outputs: BlockchainInfoUTXO[];
}

export interface BlockchainInfoUTXO {
  tx_hash_big_endian: string;
  tx_hash: string;
  tx_output_n: number;
  script: string;
  value: number;
  value_hex: string;
  confirmations: number;
  tx_index: number;
}

export interface MempoolUtxo {
  txid: string;
  vout: number;
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
  value: number;
}

export type PhantomBtcAccount = {
  address: string;
  addressType: "p2tr" | "p2wpkh" | "p2sh" | "p2pkh";
  publicKey: string;
  purpose: "payment" | "ordinals";
};

export type WizzBalanceResponse = {
  unconfirmed: number;
  confirmed: number;
  total: number;
};
