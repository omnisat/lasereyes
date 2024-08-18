import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ReactNode } from 'react';
import * as bitcoin from 'bitcoinjs-lib';

declare const XVERSE_NETWORK: "Mainnet" | "Testnet";
declare const UNISAT_MAINNET = "livenet";
declare const UNISAT_TESTNET = "testnet";
declare const OP_WALLET_MAINNET = "livenet";
declare const OP_WALLET_TESTNET = "testnet";
declare const XVERSE_MAINNET = "Mainnet";
declare const XVERSE_TESTNET = "Testnet";
declare const XVERSE_SIGNET = "Signet";
declare const OKX_MAINNET = "livenet";
declare const OKX_TESTNET = "testnet";
declare const WIZZ_MAINNET = "livenet";
declare const WIZZ_TESTNET = "testnet";
declare const LEATHER_MAINNET = "mainnet";
declare const LEATHER_TESTNET = "testnet";
declare const MAINNET = "mainnet";
declare const SIGNET = "signet";
declare const TESTNET = "testnet";
declare const REGTEST = "regtest";
declare const getXverseNetwork: (network: string) => "Mainnet" | "Testnet" | "Signet";
declare const getLeatherNetwork: (network: string) => "testnet" | "mainnet";
declare const getUnisatNetwork: (network: string) => "livenet" | "testnet";
declare const getWizzNetwork: (network: string) => "livenet" | "testnet";
declare const getNetworkForUnisat: (network: string) => "testnet" | "mainnet";
declare const getNetworkForXverse: (network: string) => "testnet" | "mainnet";
declare const getNetworkForLeather: (network: string) => "testnet" | "mainnet";
declare const getNetworkForOkx: (network: string) => "testnet" | "mainnet";
declare const getNetworkForWizz: (network: string) => "testnet" | "mainnet";
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
    network: typeof MAINNET | typeof TESTNET | typeof SIGNET;
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
    connect: (walletName: typeof UNISAT | typeof XVERSE | typeof MAGIC_EDEN) => Promise<void>;
    disconnect: () => void;
    requestAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<string | undefined>;
    switchNetwork: (network: typeof MAINNET | typeof TESTNET | typeof SIGNET) => Promise<void>;
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
    network: typeof MAINNET | typeof TESTNET | typeof SIGNET;
};
interface CommitPsbtResponse {
    inscriberAddress: string;
    psbtHex: string;
    psbtBase64: string;
    feeRate: number;
    totalFees: number;
}

declare const createConfig: (config: Config) => Config;

declare const useLaserEyes: () => LaserEyesContextType;
declare const LaserEyesProvider: ({ children, config, }: {
    children: ReactNode;
    config?: Config | undefined;
}) => react_jsx_runtime.JSX.Element;
interface DeScribeCreateResponse {
    inscriberAddress: string;
    psbtHex: string;
    psbtBase64: string;
    feeRate: number;
    totalFees: number;
}

declare const getBitcoinNetwork: (network: typeof MAINNET | typeof TESTNET | typeof SIGNET | typeof REGTEST) => bitcoin.networks.Network;
declare const findOrdinalsAddress: (addresses: any) => any;
declare const findPaymentAddress: (addresses: any) => any;
declare const getBTCBalance: (address: string) => Promise<number>;
declare const satoshisToBTC: (satoshis: number) => string;
declare const isBase64: (str: string) => boolean;
declare const isHex: (str: string) => boolean;
declare function estimateTxSize(taprootInputCount: number, nonTaprootInputCount: number, outputCount: number): number;
declare function createSendBtcPsbt(address: string, paymentAddress: string, recipientAddress: string, amount: number, paymentPublicKey: string, network: typeof MAINNET | typeof TESTNET, feeRate?: number): Promise<{
    psbtBase64: string;
    psbtHex: string;
}>;
declare function getRedeemScript(paymentPublicKey: string, network: typeof MAINNET | typeof TESTNET): Buffer | undefined;
declare function delay(ms: number): Promise<unknown>;

declare const useInscriber: ({ inscribeApiUrl, }: {
    inscribeApiUrl: string;
}) => {
    content: any;
    setContent: React.Dispatch<any>;
    setMimeType: React.Dispatch<React.SetStateAction<"text/plain;charset=utf-8">>;
    previewUrl: string;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
    getCommitPsbt: () => Promise<CommitPsbtResponse>;
    isFetchingCommitPsbt: boolean;
    commitPsbtHex: string;
    commitPsbtBase64: string;
    handleSignCommit: (tx?: string) => Promise<string | undefined>;
    commitTxId: string;
    setCommitTxId: React.Dispatch<React.SetStateAction<string>>;
    feeRate: number;
    setFeeRate: React.Dispatch<React.SetStateAction<number>>;
    totalFees: number;
    inscriberAddress: string;
    inscribe: ({ content: providedContent, mimeType: providedMimeType, ordinalAddress: providedAddress, commitTxId: providedCommitTxId, }: {
        content?: any;
        mimeType?: string | undefined;
        ordinalAddress?: string | undefined;
        commitTxId?: string | undefined;
    }) => Promise<string>;
    isInscribing: boolean;
    inscriptionTxId: string;
    reset: () => void;
};

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
    walletName: typeof XVERSE | typeof WIZZ | typeof LEATHER | typeof MAGIC_EDEN | typeof OKX | typeof PHANTOM | typeof UNISAT | typeof OYL;
}) => react_jsx_runtime.JSX.Element | undefined;

export { DeScribeCreateResponse, LEATHER, LEATHER_MAINNET, LEATHER_TESTNET, LaserEyesProvider, LeatherLogo, MAGIC_EDEN, MAINNET, MEMPOOL_SPACE_SIGNET_URL, MEMPOOL_SPACE_TESTNET_URL, MEMPOOL_SPACE_URL, MagicEdenLogo, OKX, OKX_MAINNET, OKX_TESTNET, OYL, OkxLogo, OylLogo, P2PKH, P2PSH, P2SH, P2TR, P2WPKH, P2WSH, PHANTOM, PhantomLogo, REGTEST, SIGNET, TESTNET, UNISAT, UNISAT_MAINNET, UNISAT_TESTNET, UnisatLogo, WALLETS, WIZZ, WIZZ_MAINNET, WIZZ_TESTNET, WalletIcon, WizzLogo, XVERSE, XVERSE_MAINNET, XVERSE_NETWORK, XVERSE_SIGNET, XVERSE_TESTNET, XverseLogo, createConfig, createSendBtcPsbt, delay, estimateTxSize, findOrdinalsAddress, findPaymentAddress, getBTCBalance, getBitcoinNetwork, getLeatherNetwork, getMempoolSpaceUrl, getNetworkForLeather, getNetworkForOkx, getNetworkForUnisat, getNetworkForWizz, getNetworkForXverse, getRedeemScript, getUnisatNetwork, getWizzNetwork, getXverseNetwork, isBase64, isHex, satoshisToBTC, useInscriber, useLaserEyes };
