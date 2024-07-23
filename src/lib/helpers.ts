import * as bitcoin from "bitcoinjs-lib";
import { MAINNET, REGTEST, TESTNET } from "../consts/networks";
import axios from "axios";
import { P2PKH, P2PSH, P2TR, P2WPKH, P2WSH } from "../consts/wallets";

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

export function getAddressType(address: string) {
  try {
    bitcoin.address.fromBase58Check(address);
    return P2PKH;
  } catch (e) {}

  try {
    bitcoin.address.fromBase58Check(address);
    return P2PSH;
  } catch (e) {}

  try {
    const { version, data } = bitcoin.address.fromBech32(address);
    if (version === 0) {
      if (data.length === 20) {
        return P2WPKH;
      } else if (data.length === 32) {
        return P2WSH;
      }
    } else if (version === 1 && data.length === 32) {
      return P2TR;
    }
  } catch (e) {}

  throw new Error("Invalid address");
}
