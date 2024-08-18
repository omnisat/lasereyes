import { MAINNET, SIGNET, TESTNET } from '@omnisat/lasereyes'
export const MEMPOOL_SPACE_URL = 'https://mempool.space'
export const MEMPOOL_SPACE_TESTNET_URL = 'https://mempool.space/testnet'
export const MEMPOOL_SPACE_SIGNET_URL = 'https://mempool.space/signet'

export const getMempoolSpaceUrl = (
  network: typeof MAINNET | typeof TESTNET | typeof SIGNET
) =>
  network === TESTNET
    ? MEMPOOL_SPACE_TESTNET_URL
    : network === SIGNET
      ? MEMPOOL_SPACE_SIGNET_URL
      : MEMPOOL_SPACE_URL

export const ORDPOOL_SPACE_URL = 'https://ordpool.space'
export const ORDPOOL_SPACE_TESTNET_URL = 'https://ordpool.space/testnet'

export const getOrdpoolSpaceUrl = (network: typeof MAINNET | typeof TESTNET) =>
  network === TESTNET ? ORDPOOL_SPACE_TESTNET_URL : ORDPOOL_SPACE_URL
