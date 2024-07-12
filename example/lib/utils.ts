import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { MAINNET, REGTEST, TESTNET } from '../../src'
import {
  MEMPOOL_SPACE_TESTNET_URL,
  MEMPOOL_SPACE_URL,
} from '../../src/consts/settings'

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

export const satoshisToBTC = (satoshis: number): string => {
  if (Number.isNaN(satoshis) || satoshis === undefined) return '--'
  const btcValue = satoshis / 100000000
  return btcValue.toFixed(8)
}

export const getMempoolSpaceUrl = (
  network: typeof MAINNET | typeof TESTNET | typeof REGTEST
) => (network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : MEMPOOL_SPACE_URL)
