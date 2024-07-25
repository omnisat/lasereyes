import { UNISAT, XVERSE } from "../consts/wallets";
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

  connect: (walletName: typeof UNISAT | typeof XVERSE) => Promise<void>;
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
