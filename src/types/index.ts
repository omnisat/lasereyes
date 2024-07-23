import { UNISAT } from "../consts/wallets";
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

  connect: (walletName: typeof UNISAT) => Promise<void>;
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

export interface Balance {
  confirmed: number;
  unconfirmed: number;
  total: number;
}
