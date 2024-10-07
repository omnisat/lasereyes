import { BitcoinNetworkType } from '@orangecrypto/orange-connect';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ReactNode } from 'react';
import * as bitcoin from 'bitcoinjs-lib';

declare const XVERSE_NETWORK: "Mainnet" | "Testnet";
declare const UNISAT_MAINNET = "BITCOIN_MAINNET";
declare const UNISAT_TESTNET = "BITCOIN_TESTNET";
declare const UNISAT_TESTNET4 = "BITCOIN_TESTNET4";
declare const UNISAT_SIGNET = "BITCOIN_SIGNET";
declare const UNISAT_FRACTAL_MAINNET = "FRACTAL_BITCOIN_MAINNET";
declare const UNISAT_FRACTAL_TESTNET = "FRACTAL_BITCOIN_TESTNET";
declare const OP_WALLET_MAINNET = "livenet";
declare const OP_WALLET_TESTNET = "testnet";
declare const XVERSE_MAINNET = "Mainnet";
declare const XVERSE_TESTNET = "Testnet";
declare const XVERSE_SIGNET = "Signet";
declare const OKX_MAINNET = "livenet";
declare const OKX_TESTNET = "testnet";
declare const WIZZ_MAINNET = "livenet";
declare const WIZZ_TESTNET = "testnet";
declare const WIZZ_TESTNET4 = "testnet4";
declare const WIZZ_SIGNET = "signet";
declare const ORANGE_MAINNET = "Mainnet";
declare const ORANGE_TESTNET = "Testnet";
declare const LEATHER_MAINNET = "mainnet";
declare const LEATHER_TESTNET = "testnet";
declare const MAINNET = "mainnet";
declare const SIGNET = "signet";
declare const TESTNET = "testnet";
declare const TESTNET4 = "testnet4";
declare const FRACTAL_MAINNET = "fractal mainnet";
declare const FRACTAL_TESTNET = "fractal testnet";
declare const REGTEST = "regtest";
declare const getXverseNetwork: (network: string) => "Mainnet" | "Testnet" | "Signet";
declare const getOrangeNetwork: (network: string) => BitcoinNetworkType;
declare const getLeatherNetwork: (network: string) => "testnet" | "mainnet";
declare const getUnisatNetwork: (network: string) => "BITCOIN_MAINNET" | "BITCOIN_TESTNET" | "BITCOIN_TESTNET4" | "BITCOIN_SIGNET" | "FRACTAL_BITCOIN_MAINNET" | "FRACTAL_BITCOIN_TESTNET";
declare const getWizzNetwork: (network: string) => "livenet" | "testnet" | "testnet4" | "signet";
declare const getNetworkForUnisat: (network: string) => "testnet" | "testnet4" | "signet" | "mainnet" | "fractal mainnet" | "fractal testnet";
declare const getNetworkForXverse: (network: string) => "testnet" | "mainnet";
declare const getNetworkForLeather: (network: string) => "testnet" | "mainnet";
declare const getNetworkForOkx: (network: string) => "testnet" | "mainnet";
declare const getNetworkForWizz: (network: string) => "testnet" | "testnet4" | "signet" | "mainnet";
declare const MEMPOOL_SPACE_URL = "https://mempool.space";
declare const MEMPOOL_SPACE_TESTNET_URL = "https://mempool.space/testnet";
declare const MEMPOOL_SPACE_SIGNET_URL = "https://mempool.space/signet";
declare const getMempoolSpaceUrl: (network: typeof MAINNET | typeof TESTNET | typeof SIGNET | typeof REGTEST) => "https://mempool.space" | "https://mempool.space/testnet" | "https://mempool.space/signet";

declare const OYL = "oyl";
declare const UNISAT = "unisat";
declare const XVERSE = "xverse";
declare const PHANTOM = "phantom";
declare const LEATHER = "leather";
declare const MAGIC_EDEN = "magic-eden";
declare const OKX = "okx";
declare const WIZZ = "wizz";
declare const ORANGE = "orange";
declare const ASIGNA = "asigna";
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
    isInitializing: boolean;
    connected: boolean;
    isConnecting: boolean;
    publicKey: string;
    address: string;
    paymentAddress: string;
    paymentPublicKey: string;
    balance: number | undefined;
    network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET;
    library: any;
    provider: any;
    accounts: string[];
    hasUnisat: boolean;
    hasXverse: boolean;
    hasOyl: boolean;
    hasMagicEden: boolean;
    hasOkx: boolean;
    hasLeather: boolean;
    hasPhantom: boolean;
    hasWizz: boolean;
    hasOrange: boolean;
    hasAsigna: boolean;
    connect: (walletName: typeof UNISAT | typeof XVERSE | typeof MAGIC_EDEN | typeof LEATHER | typeof PHANTOM | typeof OKX | typeof MAGIC_EDEN | typeof OYL | typeof ORANGE | typeof WIZZ | typeof ASIGNA) => Promise<void>;
    disconnect: () => void;
    requestAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<string | undefined>;
    switchNetwork: (network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET) => Promise<void>;
    getPublicKey: () => Promise<string>;
    getBalance: () => Promise<string>;
    getInscriptions: () => Promise<any[]>;
    sendBTC: (to: string, amount: number) => Promise<string>;
    signMessage: (message: string, toSignAddress?: string) => Promise<string>;
    signPsbt: (tx: string, finalize?: boolean, broadcast?: boolean) => Promise<{
        signedPsbtHex: string | undefined;
        signedPsbtBase64: string | undefined;
        txId?: string;
    } | undefined>;
    pushPsbt: (tx: string) => Promise<string | undefined>;
};
type Config = {
    network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET;
};
interface MempoolUtxo {
    txid: string;
    vout: number;
    status: {
        confirmed: boolean;
        block_height: number;
        block_hash: string;
        block_time: number;
    };
    value: number;
}

declare const createConfig: (config: Config) => Config;

declare const useLaserEyes: () => LaserEyesContextType;
declare const LaserEyesProvider: ({ children, config, }: {
    children: ReactNode;
    config?: Config | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const getBitcoinNetwork: (network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET) => bitcoin.networks.Network;
declare const findOrdinalsAddress: (addresses: any) => any;
declare const findPaymentAddress: (addresses: any) => any;
declare const getBTCBalance: (address: string, network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET) => Promise<number>;
declare const satoshisToBTC: (satoshis: number) => string;
declare const isBase64: (str: string) => boolean;
declare const isHex: (str: string) => boolean;
declare function estimateTxSize(taprootInputCount: number, nonTaprootInputCount: number, outputCount: number): number;
declare function getAddressUtxos(address: string, network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET): Promise<MempoolUtxo[]>;
declare function createSendBtcPsbt(address: string, paymentAddress: string, recipientAddress: string, amount: number, paymentPublicKey: string, network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET, feeRate?: number): Promise<{
    psbtBase64: string;
    psbtHex: string;
}>;
declare function getRedeemScript(paymentPublicKey: string, network: typeof MAINNET | typeof TESTNET | typeof TESTNET4 | typeof SIGNET | typeof FRACTAL_MAINNET | typeof FRACTAL_TESTNET): Buffer | undefined;
declare function delay(ms: number): Promise<unknown>;

interface OylLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const OylLogo: React.FC<OylLogoProps>;

interface LeatherLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const LeatherLogo: React.FC<LeatherLogoProps>;

interface PhantomLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const PhantomLogo: React.FC<PhantomLogoProps>;

interface XverseLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const XverseLogo: React.FC<XverseLogoProps>;

interface UnisatLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const UnisatLogo: React.FC<UnisatLogoProps>;

interface WizzLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const WizzLogo: React.FC<WizzLogoProps>;

interface OkxLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const OkxLogo: React.FC<OkxLogoProps>;

interface MagicedenLogoProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    variant?: "first" | "second";
}
declare const MagicEdenLogo: React.FC<MagicedenLogoProps>;

declare const WalletIcon: ({ size, className, variant, walletName, }: {
    size: number;
    className?: string | undefined;
    variant?: "first" | "second" | undefined;
    walletName: typeof UNISAT | typeof XVERSE | typeof MAGIC_EDEN | typeof LEATHER | typeof PHANTOM | typeof OKX | typeof MAGIC_EDEN | typeof OYL | typeof ORANGE | typeof WIZZ | typeof ASIGNA;
}) => react_jsx_runtime.JSX.Element;

export { ASIGNA, FRACTAL_MAINNET, FRACTAL_TESTNET, LEATHER, LEATHER_MAINNET, LEATHER_TESTNET, LaserEyesProvider, LeatherLogo, MAGIC_EDEN, MAINNET, MEMPOOL_SPACE_SIGNET_URL, MEMPOOL_SPACE_TESTNET_URL, MEMPOOL_SPACE_URL, MagicEdenLogo, OKX, OKX_MAINNET, OKX_TESTNET, OP_WALLET_MAINNET, OP_WALLET_TESTNET, ORANGE, ORANGE_MAINNET, ORANGE_TESTNET, OYL, OkxLogo, OylLogo, P2PKH, P2PSH, P2SH, P2TR, P2WPKH, P2WSH, PHANTOM, PhantomLogo, REGTEST, SIGNET, TESTNET, TESTNET4, UNISAT, UNISAT_FRACTAL_MAINNET, UNISAT_FRACTAL_TESTNET, UNISAT_MAINNET, UNISAT_SIGNET, UNISAT_TESTNET, UNISAT_TESTNET4, UnisatLogo, WALLETS, WIZZ, WIZZ_MAINNET, WIZZ_SIGNET, WIZZ_TESTNET, WIZZ_TESTNET4, WalletIcon, WizzLogo, XVERSE, XVERSE_MAINNET, XVERSE_NETWORK, XVERSE_SIGNET, XVERSE_TESTNET, XverseLogo, createConfig, createSendBtcPsbt, delay, estimateTxSize, findOrdinalsAddress, findPaymentAddress, getAddressUtxos, getBTCBalance, getBitcoinNetwork, getLeatherNetwork, getMempoolSpaceUrl, getNetworkForLeather, getNetworkForOkx, getNetworkForUnisat, getNetworkForWizz, getNetworkForXverse, getOrangeNetwork, getRedeemScript, getUnisatNetwork, getWizzNetwork, getXverseNetwork, isBase64, isHex, satoshisToBTC, useLaserEyes };
