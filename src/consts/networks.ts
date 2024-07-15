export const XVERSE_NETWORK: "Mainnet" | "Testnet" = "Mainnet";

export const UNISAT_MAINNET = "livenet";
export const UNISAT_TESTNET = "testnet";

export const XVERSE_MAINNET = "Mainnet";
export const XVERSE_TESTNET = "Testnet";

export const LEATHER_MAINNET = "mainnet";
export const LEATHER_TESTNET = "testnet";
export const MAINNET = "mainnet";
export const TESTNET = "testnet";
export const REGTEST = "regtest";

export const getXverseNetwork = (network: string) => {
  if (network === MAINNET) return XVERSE_MAINNET;
  if (network === TESTNET) return XVERSE_TESTNET;
  return XVERSE_MAINNET;
};

export const getLeatherNetwork = (network: string) => {
  if (network === MAINNET) return LEATHER_MAINNET;
  if (network === TESTNET) return LEATHER_TESTNET;
  return LEATHER_MAINNET;
};

export const getUnisatNetwork = (network: string) => {
  if (network === MAINNET) return UNISAT_MAINNET;
  if (network === TESTNET) return UNISAT_TESTNET;
  return UNISAT_MAINNET;
};

export const getNetworkForUnisat = (network: string) => {
  if (network === UNISAT_MAINNET) return MAINNET;
  if (network === UNISAT_TESTNET) return TESTNET;
  return MAINNET;
};

export const getNetworkForXverse = (network: string) => {
  if (network === XVERSE_MAINNET) return MAINNET;
  if (network === XVERSE_TESTNET) return TESTNET;
  return MAINNET;
};

export const getNetworkForLeather = (network: string) => {
  if (network === LEATHER_MAINNET) return MAINNET;
  if (network === LEATHER_TESTNET) return TESTNET;
  return MAINNET;
};

export const MEMPOOL_SPACE_URL = "https://mempool.space";
export const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";

export const getMempoolSpaceUrl = (network: string) =>
  network === TESTNET ? MEMPOOL_SPACE_TESTNET_URL : MEMPOOL_SPACE_URL;
