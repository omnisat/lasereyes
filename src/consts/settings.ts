import { LEATHER, MAGIC_EDEN, OYL, UNISAT, XVERSE } from "./wallets";
import {
  FRACTAL_MAINNET,
  FRACTAL_TESTNET,
  MAINNET,
  REGTEST,
  SIGNET,
  TESTNET,
  TESTNET4,
} from "./networks";

export const LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";

export const initialWalletContext = {
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
  balance: undefined,
  network: MAINNET as
    | typeof MAINNET
    | typeof TESTNET
    | typeof TESTNET4
    | typeof SIGNET
    | typeof FRACTAL_MAINNET
    | typeof FRACTAL_TESTNET,
  library: null,
  provider: null,
  accounts: [],
  connect: async (
    walletName:
      | typeof OYL
      | typeof UNISAT
      | typeof XVERSE
      | typeof LEATHER
      | typeof MAGIC_EDEN
  ) => {},
  disconnect: () => {},
  requestAccounts: async () => [],
  getNetwork: async () => MAINNET,
  switchNetwork: async (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof TESTNET4
      | typeof SIGNET
      | typeof FRACTAL_MAINNET
      | typeof FRACTAL_TESTNET
  ) => {},
  getPublicKey: async () => "",
  getBalance: async () => "",
  getInscriptions: async () => [],
  sendBTC: async (to: string, amount: number) => "",
  signMessage: async (message: string) => "",
  signPsbt: async (tx: string) => {
    return {
      signedPsbtHex: "",
      signedPsbtBase64: "",
      txId: "",
    };
  },
  pushPsbt: async (tx: string) => {
    return "";
  },
  inscribe: async (content: any) => "",
  isCreatingCommit: false,
  isInscribing: false,
};
