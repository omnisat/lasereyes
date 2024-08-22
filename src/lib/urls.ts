import { FRACTAL_TESTNET, MAINNET, SIGNET, TESTNET } from "../consts/networks";
export const MEMPOOL_SPACE_URL = "https://mempool.space";
export const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";

export const getMempoolSpaceUrl = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
) => (network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : MEMPOOL_SPACE_URL);
