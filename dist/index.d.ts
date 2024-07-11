import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const OYL = "oyl";
declare const UNISAT = "unisat";
declare const XVERSE = "xverse";
declare const PHANTOM = "phantom";
declare const LEATHER = "leather";
declare const XVERSE_NETWORK: 'Mainnet' | 'Testnet';
declare const UNISAT_MAINNET = "livenet";
declare const UNISAT_TESTNET = "testnet";
declare const XVERSE_MAINNET = "Mainnet";
declare const XVERSE_TESTNET = "Testnet";
declare const LEATHER_MAINNET = "mainnet";
declare const LEATHER_TESTNET = "testnet";
declare const MAINNET = "mainnet";
declare const TESTNET = "testnet";
declare const getXverseNetwork: (network: string) => "Mainnet" | "Testnet";
declare const getLeatherNetwork: (network: string) => "testnet" | "mainnet";
declare const getUnisatNetwork: (network: string) => "livenet" | "testnet";
declare const getNetworkForUnisat: (network: string) => "testnet" | "mainnet";
declare const getNetworkForXverse: (network: string) => "testnet" | "mainnet";
declare const getNetworkForLeather: (network: string) => "testnet" | "mainnet";
declare const P2TR = "p2tr";
declare const P2PKH = "p2pkh";
declare const P2WPKH = "p2wpkh";
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
    hasOyl: boolean;
    hasUnisat: boolean;
    hasLeather: boolean;
    hasXverse: boolean;
    connected: boolean;
    isConnecting: boolean;
    publicKey: string;
    address: string;
    paymentAddress: string;
    paymentPublicKey: string;
    balance: {
        confirmed: number;
        unconfirmed: number;
        total: number;
    };
    network: string;
    library: any;
    provider: any;
    accounts: string[];
    connect: (walletName: typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER) => Promise<void>;
    disconnect: () => void;
    requestAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<string | undefined>;
    switchNetwork: (network: "mainnet" | "testnet") => Promise<string | undefined>;
    getPublicKey: () => Promise<string>;
    getBalance: () => Promise<string>;
    sendBTC: (to: string, amount: number) => Promise<string>;
    signMessage: (message: string) => Promise<string>;
    signPsbt: (tx: string, finalize?: boolean, broadcast?: boolean) => Promise<string | {
        signedPsbtHex: string;
        signedPsbtBase64: string;
    } | undefined>;
    pushPsbt: (tx: string) => Promise<string | undefined>;
};
type Config = {
    network: string;
};

declare const createConfig: (config: Config) => Config;

declare const useLaserEyes: () => LaserEyesContextType;
declare const LaserEyesProvider: ({ children, config, }: {
    children: ReactNode;
    config: Config;
}) => react_jsx_runtime.JSX.Element;
//# sourceMappingURL=LaserEyesProvider.d.ts.map

export { LEATHER, LEATHER_MAINNET, LEATHER_TESTNET, LaserEyesProvider, MAINNET, OYL, P2PKH, P2SH, P2TR, P2WPKH, P2WSH, PHANTOM, TESTNET, UNISAT, UNISAT_MAINNET, UNISAT_TESTNET, WALLETS, XVERSE, XVERSE_MAINNET, XVERSE_NETWORK, XVERSE_TESTNET, createConfig, getLeatherNetwork, getNetworkForLeather, getNetworkForUnisat, getNetworkForXverse, getUnisatNetwork, getXverseNetwork, useLaserEyes };
