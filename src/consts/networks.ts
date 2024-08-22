export const XVERSE_NETWORK: "Mainnet" | "Testnet" = "Mainnet";

export const UNISAT_MAINNET = "livenet";
export const UNISAT_TESTNET = "testnet";
export const UNISAT_FRACTAL_TESTNET = "unknown";

export const OP_WALLET_MAINNET = "livenet";
export const OP_WALLET_TESTNET = "testnet";

export const XVERSE_MAINNET = "Mainnet";
export const XVERSE_TESTNET = "Testnet";
export const XVERSE_SIGNET = "Signet";

export const OKX_MAINNET = "livenet";
export const OKX_TESTNET = "testnet";

export const WIZZ_MAINNET = "livenet";
export const WIZZ_TESTNET = "testnet";

export const LEATHER_MAINNET = "mainnet";
export const LEATHER_TESTNET = "testnet";
export const MAINNET = "mainnet";
export const SIGNET = "signet";
export const TESTNET = "testnet";
export const FRACTAL_TESTNET = "fractal_testnet";
export const REGTEST = "regtest";

export const getXverseNetwork = (network: string) => {
  if (network === MAINNET) return XVERSE_MAINNET;
  if (network === TESTNET) return XVERSE_TESTNET;
  if (network === SIGNET) return XVERSE_SIGNET;
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
  if (network === FRACTAL_TESTNET) return UNISAT_FRACTAL_TESTNET;
  return UNISAT_MAINNET;
};

export const getWizzNetwork = (network: string) => {
  if (network === MAINNET) return WIZZ_MAINNET;
  if (network === TESTNET) return WIZZ_TESTNET;
  return WIZZ_MAINNET;
};

export const getNetworkForUnisat = (network: string) => {
  if (network === UNISAT_MAINNET) return MAINNET;
  if (network === UNISAT_TESTNET) return TESTNET;
  if (network === UNISAT_FRACTAL_TESTNET) return FRACTAL_TESTNET;
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

export const getNetworkForOkx = (network: string) => {
  if (network === OKX_MAINNET) return MAINNET;
  if (network === OKX_TESTNET) return TESTNET;
  return MAINNET;
};

export const getNetworkForWizz = (network: string) => {
  if (network === WIZZ_MAINNET) return MAINNET;
  if (network === WIZZ_TESTNET) return TESTNET;
  return MAINNET;
};

export const MEMPOOL_SPACE_URL = "https://mempool.space";
export const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
export const MEMPOOL_SPACE_SIGNET_URL = "https://mempool.space/signet";

export const getMempoolSpaceUrl = (
  network: typeof MAINNET | typeof TESTNET | typeof SIGNET | typeof REGTEST
) =>
  network === TESTNET
    ? MEMPOOL_SPACE_TESTNET_URL
    : network === SIGNET
    ? MEMPOOL_SPACE_SIGNET_URL
    : MEMPOOL_SPACE_URL;
