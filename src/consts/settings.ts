import { LEATHER, OYL, UNISAT, XVERSE } from "./wallets";
import { MAINNET, REGTEST, TESTNET } from "./networks";

export const LOCAL_STORAGE_DEFAULT_WALLET = "defaultWallet";

export const initialWalletContext = {
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
  balance: undefined,
  network: MAINNET as typeof MAINNET | typeof TESTNET | typeof REGTEST,
  library: null,
  provider: null,
  accounts: [],
  connect: async (
    walletName: typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER
  ) => {},
  disconnect: () => {},
  requestAccounts: async () => [],
  getNetwork: async () => MAINNET,
  switchNetwork: async (
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST
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
};
