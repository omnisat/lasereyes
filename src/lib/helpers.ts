import * as bitcoin from "bitcoinjs-lib";
import { MAINNET, REGTEST, TESTNET } from "../consts/wallets";
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
