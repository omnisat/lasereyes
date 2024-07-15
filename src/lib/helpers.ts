import * as bitcoin from "bitcoinjs-lib";
import { MAINNET, REGTEST, TESTNET } from "../consts/networks";
import axios from "axios";
export const getBitcoinNetwork = (
  network: typeof MAINNET | typeof TESTNET | typeof REGTEST
) => {
  if (network === TESTNET) {
    return bitcoin.networks.testnet;
  } else if (network === REGTEST) {
    return bitcoin.networks.regtest;
  } else {
    return bitcoin.networks.bitcoin;
  }
};

export const findOrdinalsAddress = (addresses: any) => {
  return addresses.find(
    ({ purpose }: { purpose: string }) => purpose === "ordinals"
  );
};

export const findPaymentAddress = (addresses: any) => {
  return addresses.find(
    ({ purpose }: { purpose: string }) => purpose === "payment"
  );
};

export const getBTCBalance = async (address: string): Promise<number> => {
  try {
    return await axios
      .get(`https://blockchain.info/q/addressbalance/${address}`)
      .then((response) => response.data);
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
    throw new Error("Failed to fetch BTC balance");
  }
};

export const satoshisToBTC = (satoshis: number): string => {
  if (Number.isNaN(satoshis) || satoshis === undefined) return "--";
  const btcValue = satoshis / 100000000;
  return btcValue.toFixed(8);
};

export const isBase64 = (str: string): boolean => {
  const base64Regex =
    /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return base64Regex.test(str);
};

export const isHex = (str: string): boolean => {
  const hexRegex = /^[a-fA-F0-9]+$/;
  return hexRegex.test(str);
};

const detectEncoding = (str: string): "base64" | "hex" | "unknown" => {
  if (isBase64(str)) {
    return "base64";
  }
  if (isHex(str)) {
    return "hex";
  }
  return "unknown";
};
