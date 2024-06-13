import { LEATHER, OYL, UNISAT, XVERSE } from '../consts/wallets'

export type LaserEyesContextType = {
  hasOyl: boolean
  hasUnisat: boolean
  hasLeather: boolean
  hasXverse: boolean
  connected: boolean
  isConnecting: boolean
  publicKey: string
  address: string
  paymentAddress: string
  paymentPublicKey: string
  balance: {
    confirmed: number
    unconfirmed: number
    total: number
  }
  network: string
  library: any
  provider: any
  accounts: string[]

  connect: (
    walletName: typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER
  ) => Promise<void>
  disconnect: () => void
  requestAccounts: () => Promise<string[]>
  getNetwork: () => Promise<string | undefined>
  switchNetwork: (network: 'mainnet' | 'testnet') => Promise<string | undefined>
  getPublicKey: () => Promise<string>
  getBalance: () => Promise<string>
  getInscriptions: () => Promise<any>
  getAllBRC20Tokens: () => Promise<any>
  sendBTC: (to: string, amount: number) => Promise<string>
  payInscribe: () => Promise<void>
  deploy: () => Promise<void>
  mint: () => Promise<void>
  signMessage: (message: string) => Promise<string>
  signPsbt: (
    tx: string,
    finalize?: boolean,
    broadcast?: boolean
  ) => Promise<
    string | { signedPsbtHex: string; signedPsbtBase64: string } | undefined
  >
  pushPsbt: (tx: string) => Promise<string | undefined>
}

export type Config = {
  network: string
  provider: string
  chainId: number
}

export interface LeatherRPCResponse {
  jsonrpc: string
  id: string
  result: LeatherRequestAddressResponse | LeatherRequestSignResponse
}

export interface LeatherRequestAddressResponse {
  addresses: LeatherAddress[]
}

export interface LeatherRequestSignResponse {
  hex: string
}

export interface LeatherAddress {
  symbol: string
  type?: string
  address: string
  publicKey?: string
  derivationPath?: string
  tweakedPublicKey?: string
}
