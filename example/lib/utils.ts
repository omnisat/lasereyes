import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// import { MAINNET, TESTNET } from '@omnisat/lasereyes'
// import { Psbt, networks } from 'bitcoinjs-lib'
// import { IMempoolUtxo } from '@/types/btc'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(str: string, maxLength: number): string {
  if (str?.length <= maxLength) {
    return str
  } else {
    const leftHalf = str?.slice(0, Math.ceil((maxLength - 3) / 2))
    const rightHalf = str?.slice(-Math.floor((maxLength - 3) / 2))
    return leftHalf + '...' + rightHalf
  }
}

// export const getMempoolSpaceUrl = (network: typeof MAINNET | typeof TESTNET) =>
//   network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : MEMPOOL_SPACE_URL
