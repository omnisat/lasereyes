import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import * as bitcoin from 'bitcoinjs-lib';

declare const XVERSE_NETWORK: "Mainnet" | "Testnet";
declare const UNISAT_MAINNET = "livenet";
declare const UNISAT_TESTNET = "testnet";
declare const XVERSE_MAINNET = "Mainnet";
declare const XVERSE_TESTNET = "Testnet";
declare const LEATHER_MAINNET = "mainnet";
declare const LEATHER_TESTNET = "testnet";
declare const MAINNET = "mainnet";
declare const TESTNET = "testnet";
declare const REGTEST = "regtest";
declare const getXverseNetwork: (network: string) => "Mainnet" | "Testnet";
declare const getLeatherNetwork: (network: string) => "testnet" | "mainnet";
declare const getUnisatNetwork: (network: string) => "livenet" | "testnet";
declare const getNetworkForUnisat: (network: string) => "testnet" | "mainnet";
declare const getNetworkForXverse: (network: string) => "testnet" | "mainnet";
declare const getNetworkForLeather: (network: string) => "testnet" | "mainnet";
declare const MEMPOOL_SPACE_URL = "https://mempool.space";
declare const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
declare const getMempoolSpaceUrl: (network: string) => "https://mempool.space" | "https://mempool.space/testnet";

declare const OYL = "oyl";
declare const UNISAT = "unisat";
declare const XVERSE = "xverse";
declare const PHANTOM = "phantom";
declare const LEATHER = "leather";
declare const P2TR = "p2tr";
declare const P2PKH = "p2pkh";
declare const P2WPKH = "p2wpkh";
declare const P2PSH = "p2psh";
declare const P2WSH = "p2wsh";
declare const P2SH = "p2sh";
declare const WALLETS: {
    oyl: {
        name: string;
        icon: string;
        site: string;
        disabled: boolean;
    };
    unisat: {
        name: string;
        icon: string;
        site: string;
        disabled: boolean;
    };
    xverse: {
        name: string;
        icon: string;
        site: string;
        config: () => void;
        disabled: boolean;
    };
    leather: {
        name: string;
        icon: string;
        site: string;
        config: () => void;
        disabled: boolean;
    };
};

type LaserEyesContextType = {
    connected: boolean;
    isConnecting: boolean;
    publicKey: string;
    address: string;
    paymentAddress: string;
    paymentPublicKey: string;
    balance: number | undefined;
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST;
    library: any;
    provider: any;
    accounts: string[];
    hasUnisat: boolean;
    hasXverse: boolean;
    connect: (walletName: typeof UNISAT | typeof XVERSE) => Promise<void>;
    disconnect: () => void;
    requestAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<string | undefined>;
    switchNetwork: (network: typeof MAINNET | typeof TESTNET | typeof REGTEST) => Promise<void>;
    getPublicKey: () => Promise<string>;
    getBalance: () => Promise<string>;
    getInscriptions: () => Promise<any[]>;
    sendBTC: (to: string, amount: number) => Promise<string>;
    signMessage: (message: string) => Promise<string>;
    signPsbt: (tx: string, finalize?: boolean, broadcast?: boolean) => Promise<{
        signedPsbtHex: string | undefined;
        signedPsbtBase64: string | undefined;
        txId?: string;
    } | undefined>;
    pushPsbt: (tx: string) => Promise<string | undefined>;
};
type Config = {
    network: typeof MAINNET | typeof TESTNET | typeof REGTEST;
};

declare const createConfig: (config: Config) => Config;

declare const useLaserEyes: () => LaserEyesContextType;
declare const LaserEyesProvider: ({ children, config, }: {
    children: ReactNode;
    config?: Config | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const getBitcoinNetwork: (network: typeof MAINNET | typeof TESTNET | typeof REGTEST) => bitcoin.networks.Network;
declare const findOrdinalsAddress: (addresses: any) => any;
declare const findPaymentAddress: (addresses: any) => any;
declare const getBTCBalance: (address: string) => Promise<number>;
declare const satoshisToBTC: (satoshis: number) => string;
declare const isBase64: (str: string) => boolean;
declare const isHex: (str: string) => boolean;
declare function getAddressType(address: string): "p2tr" | "p2pkh" | "p2wpkh" | "p2psh" | "p2wsh";

export { LEATHER, LEATHER_MAINNET, LEATHER_TESTNET, LaserEyesProvider, MAINNET, MEMPOOL_SPACE_TESTNET_URL, MEMPOOL_SPACE_URL, OYL, P2PKH, P2PSH, P2SH, P2TR, P2WPKH, P2WSH, PHANTOM, REGTEST, TESTNET, UNISAT, UNISAT_MAINNET, UNISAT_TESTNET, WALLETS, XVERSE, XVERSE_MAINNET, XVERSE_NETWORK, XVERSE_TESTNET, createConfig, findOrdinalsAddress, findPaymentAddress, getAddressType, getBTCBalance, getBitcoinNetwork, getLeatherNetwork, getMempoolSpaceUrl, getNetworkForLeather, getNetworkForUnisat, getNetworkForXverse, getUnisatNetwork, getXverseNetwork, isBase64, isHex, satoshisToBTC, useLaserEyes };
