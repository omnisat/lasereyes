import {
  MAINNET,
  OYL,
  REGTEST,
  TESTNET,
  UNISAT,
  XVERSE,
} from "../consts/wallets";

export type LaserEyesContextType = {
  hasOyl: boolean;
  hasUnisat: boolean;
  hasLeather: boolean;
  hasXverse: boolean;
  connected: boolean;
  isConnecting: boolean;
  publicKey: string;
  address: string;
  paymentAddress: string;
  paymentPublicKey: string;
  balance: {
    confirmed: number;
    unconfirmed: number;
    total: number;
  };
  network: typeof MAINNET | typeof TESTNET | typeof REGTEST;
  library: any;
  provider: any;
  accounts: string[];

  connect: (
    walletName: typeof OYL | typeof UNISAT | typeof XVERSE
  ) => Promise<void>;
  disconnect: () => void;
  requestAccounts: () => Promise<string[]>;
  getNetwork: () => Promise<string | undefined>;
  switchNetwork: (
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST
  ) => Promise<void>;
  getPublicKey: () => Promise<string>;
  getBalance: () => Promise<string>;
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
