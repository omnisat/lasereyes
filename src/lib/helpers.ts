import * as bitcoin from "bitcoinjs-lib";

export const getBitcoinNetwork = (network: string) => {
  if (network === "testnet") {
    return bitcoin.networks.testnet;
  } else if (network === "regtest") {
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
