export declare const OYL = "oyl";
export declare const UNISAT = "unisat";
export declare const XVERSE = "xverse";
export declare const PHANTOM = "phantom";
export declare const LEATHER = "leather";
export declare const XVERSE_NETWORK: 'Mainnet' | 'Testnet';
export declare const UNISAT_MAINNET = "livenet";
export declare const UNISAT_TESTNET = "testnet";
export declare const XVERSE_MAINNET = "Mainnet";
export declare const XVERSE_TESTNET = "Testnet";
export declare const LEATHER_MAINNET = "mainnet";
export declare const LEATHER_TESTNET = "testnet";
export declare const MAINNET = "mainnet";
export declare const TESTNET = "testnet";
export declare const getXverseNetwork: (network: string) => "Mainnet" | "Testnet";
export declare const getLeatherNetwork: (network: string) => "testnet" | "mainnet";
export declare const getUnisatNetwork: (network: string) => "livenet" | "testnet";
export declare const getNetworkForUnisat: (network: string) => "testnet" | "mainnet";
export declare const getNetworkForXverse: (network: string) => "testnet" | "mainnet";
export declare const getNetworkForLeather: (network: string) => "testnet" | "mainnet";
export declare const P2TR = "p2tr";
export declare const P2PKH = "p2pkh";
export declare const P2WPKH = "p2wpkh";
export declare const P2WSH = "p2wsh";
export declare const P2SH = "p2sh";
export declare const WALLETS: {
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
//# sourceMappingURL=wallets.d.ts.map