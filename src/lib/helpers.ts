import * as bitcoin from "bitcoinjs-lib";

import {
  FRACTAL_TESTNET,
  MAINNET,
  REGTEST,
  SIGNET,
  TESTNET,
} from "../consts/networks";
import axios from "axios";
import { AddressStats, MempoolUtxo } from "../types";
import { getMempoolApiAddressUrl, getMempoolSpaceUrl } from "./urls";
import * as ecc from "@bitcoinerlab/secp256k1";

bitcoin.initEccLib(ecc);

export const getBitcoinNetwork = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof REGTEST
    | typeof FRACTAL_TESTNET
) => {
  if (network === TESTNET || network === FRACTAL_TESTNET) {
    return bitcoin.networks.testnet;
  } else if (network === SIGNET) {
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

export const getBTCBalance = async (
  address: string,
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
): Promise<number> => {
  try {
    const url = getMempoolApiAddressUrl(network, address);
    return await axios.get(url).then((response) => {
      const acct: AddressStats = response.data;
      return acct.chain_stats.funded_txo_sum - acct.chain_stats.spent_txo_sum;
    });
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

export function estimateTxSize(
  taprootInputCount: number,
  nonTaprootInputCount: number,
  outputCount: number
): number {
  const baseTxSize = 10;
  const taprootInputSize = 57;
  const nonTaprootInputSize = 41;
  const outputSize = 34;
  const totalInputSize =
    taprootInputCount * taprootInputSize +
    nonTaprootInputCount * nonTaprootInputSize;
  const totalOutputSize = outputCount * outputSize;
  return baseTxSize + totalInputSize + totalOutputSize;
}

export async function createSendBtcPsbt(
  address: string,
  paymentAddress: string,
  recipientAddress: string,
  amount: number,
  paymentPublicKey: string,
  network: typeof MAINNET | typeof TESTNET,
  feeRate: number = 7
) {
  const isTaprootOnly = address === paymentAddress;
  const mempoolUrl = `${getMempoolSpaceUrl(
    network
  )}/api/address/${paymentAddress}/utxo`;
  const utxos: MempoolUtxo[] = await axios
    .get(mempoolUrl)
    .then((response) => response.data);

  const sortedUtxos = utxos.sort(
    (a: { value: number }, b: { value: number }) => b.value - a.value
  );

  const psbt = new bitcoin.Psbt({ network: getBitcoinNetwork(network) });

  const estTxSize = estimateTxSize(1, 0, 2);
  const satsNeeded = Math.floor(estTxSize * feeRate) + amount;
  let amountGathered = 0;
  let counter = 0;
  for await (let utxo of sortedUtxos) {
    const { txid, vout, value } = utxo;
    const script = bitcoin.address.toOutputScript(
      paymentAddress,
      getBitcoinNetwork(network)
    );
    psbt.addInput({
      hash: txid,
      index: vout,
      witnessUtxo: {
        script,
        value,
      },
    });

    if (!isTaprootOnly) {
      const redeemScript = getRedeemScript(paymentPublicKey, network);
      psbt.updateInput(counter, { redeemScript });
    }

    amountGathered += value;
    if (amountGathered >= satsNeeded) {
      break;
    }
  }

  if (amountGathered < satsNeeded) {
    throw new Error("Insufficient funds");
  }

  psbt.addOutput({
    address: recipientAddress,
    value: amount,
  });

  if (amountGathered > satsNeeded) {
    psbt.addOutput({
      address: paymentAddress,
      value: amountGathered - satsNeeded - amount,
    });
  }

  return {
    psbtBase64: psbt.toBase64(),
    psbtHex: psbt.toHex(),
  };
}

export function getRedeemScript(
  paymentPublicKey: string,
  network: typeof MAINNET | typeof TESTNET
) {
  const p2wpkh = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(paymentPublicKey, "hex"),
    network: getBitcoinNetwork(network),
  });

  const p2sh = bitcoin.payments.p2sh({
    redeem: p2wpkh,
    network: getBitcoinNetwork(network),
  });
  return p2sh?.redeem?.output;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
