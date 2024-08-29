import { FRACTAL_TESTNET, MAINNET, SIGNET, TESTNET } from "../consts/networks";
export const MEMPOOL_SPACE_URL = "https://mempool.space";
export const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
export const MEMPOOL_SPACE_SIGNET_URL = "https://mempool.space/signet/";

export const getMempoolSpaceUrl = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
): string => {
  switch (network) {
    case MAINNET:
      return MEMPOOL_SPACE_URL;
    case TESTNET:
      return MEMPOOL_SPACE_TESTNET_URL;
    case SIGNET:
      return MEMPOOL_SPACE_SIGNET_URL;
    default:
      return MEMPOOL_SPACE_URL;
  }
};

export const getMempoolApiAddressUrl = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET,
  address: string
): string => {
  const baseUrl = getMempoolSpaceUrl(network);
  return `${baseUrl}/api/address/${address}`;
};
