"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef, useState, } from "react";
import * as bitcoin from "bitcoinjs-lib";
import { getLeatherNetwork, getNetworkForUnisat, getUnisatNetwork, getXverseNetwork, LEATHER, MAINNET, OYL, P2TR, P2WPKH, TESTNET, UNISAT, XVERSE, XVERSE_NETWORK, } from "../consts/wallets";
import { getAddress, signTransaction } from "sats-connect";
import { LOCAL_STORAGE_DEFAULT_WALLET, NETWORK } from "../consts/settings";
import { fromOutputScript } from "bitcoinjs-lib/src/address";
import { useLocalStorage } from "usehooks-ts";
const initialWalletContext = {
    hasOyl: false,
    hasUnisat: false,
    hasXverse: false,
    hasLeather: false,
    connected: false,
    isConnecting: false,
    publicKey: "",
    address: "",
    paymentAddress: "",
    paymentPublicKey: "",
    balance: {
        confirmed: 0,
        unconfirmed: 0,
        total: 0,
    },
    network: "",
    library: null,
    provider: null,
    accounts: [],
    connect: (walletName) => __awaiter(void 0, void 0, void 0, function* () { }),
    disconnect: () => { },
    requestAccounts: () => __awaiter(void 0, void 0, void 0, function* () { return []; }),
    getNetwork: () => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    switchNetwork: (network) => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    getPublicKey: () => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    getBalance: () => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    sendBTC: (to, amount) => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    signMessage: (message) => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
    signPsbt: (tx) => __awaiter(void 0, void 0, void 0, function* () {
        return "";
    }),
    pushPsbt: (tx) => __awaiter(void 0, void 0, void 0, function* () {
        return "";
    }),
};
const LaserEyesContext = createContext(initialWalletContext);
const useLaserEyes = () => {
    return useContext(LaserEyesContext);
};
const LaserEyesProvider = ({ children, config, }) => {
    var _a;
    const [connected, setConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [publicKey, setPublicKey] = useState("");
    const [paymentPublicKey, setPaymentPublicKey] = useState("");
    const [address, setAddress] = useState("");
    const [paymentAddress, setPaymentAddress] = useState("");
    const [balance, setBalance] = useState({
        confirmed: 0,
        unconfirmed: 0,
        total: 0,
    });
    const [network, setNetwork] = useLocalStorage("network", (_a = config.network) !== null && _a !== void 0 ? _a : NETWORK);
    const [library, setLibrary] = useState(null);
    const [provider, setProvider] = useState("");
    const [hasOyl, setHasOyl] = useState(false);
    const [hasUnisat, setHasUnisat] = useState(false);
    const [hasXverse, setHasXverse] = useState(false);
    const [hasLeather, setHasLeather] = useState(false);
    useEffect(() => {
        if (config) {
            setNetwork(config.network);
        }
        else {
            setNetwork(MAINNET);
        }
    }, [config]);
    useEffect(() => {
        const oylLib = window === null || window === void 0 ? void 0 : window.oyl;
        setHasOyl(!!oylLib);
    }, []);
    useEffect(() => {
        const unisatLib = window === null || window === void 0 ? void 0 : window.unisat;
        setHasUnisat(!!unisatLib);
    }, []);
    useEffect(() => {
        var _a;
        const xverseLib = (_a = window === null || window === void 0 ? void 0 : window.XverseProviders) === null || _a === void 0 ? void 0 : _a.BitcoinProvider;
        setHasXverse(!!xverseLib);
    }, []);
    useEffect(() => {
        const leatherLib = window === null || window === void 0 ? void 0 : window.LeatherProvider;
        setHasLeather(!!leatherLib);
    }, []);
    const selfRef = useRef({
        accounts: [],
    });
    const self = selfRef.current;
    const connectOyl = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OYL);
            const lib = window.oyl;
            const result = yield lib.requestAccounts();
            setAccounts(result);
            setAddress(result[0]);
            setPaymentAddress(result[0]);
            setLibrary(lib);
            setProvider(OYL);
            handleAccountsChanged(result);
            setConnected(true);
        }
        catch (error) {
            new Error("Can't lasereyes to wallet");
        }
    });
    const connectUnisat = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, UNISAT);
            const lib = window.unisat;
            // @ts-ignore
            const result = yield lib.requestAccounts();
            setAccounts(result);
            setAddress(result[0]);
            setPaymentAddress(result[0]);
            setLibrary(lib);
            setProvider(UNISAT);
            handleAccountsChanged(result);
            setConnected(true);
            yield getNetwork().then((network) => {
                const foundNetwork = getNetworkForUnisat(String(network));
                setNetwork(foundNetwork);
            });
        }
        catch (error) {
            new Error("Can't lasereyes to wallet");
        }
    });
    const connectXverse = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE);
            let xverseNetwork = getXverseNetwork(NETWORK);
            const getAddressOptions = {
                payload: {
                    purposes: ["ordinals", "payment"],
                    message: "Address for receiving Ordinals and payments",
                    network: {
                        type: xverseNetwork,
                    },
                },
                onFinish: (response) => {
                    setPublicKey(String(response.addresses[0].publicKey));
                    setPaymentPublicKey(String(response.addresses[1].publicKey));
                    const foundAddress = findOrdinalsAddress(response.addresses);
                    const foundPaymentAddress = findPaymentAddress(response.addresses);
                    if (foundAddress && foundPaymentAddress) {
                        setAddress(foundAddress.address);
                        setPaymentAddress(foundPaymentAddress.address);
                        setProvider(XVERSE);
                        setLibrary(window.BitcoinProvider);
                    }
                },
            };
            yield getAddress(getAddressOptions);
            setConnected(true);
        }
        catch (error) {
            new Error(`Can't lasereyes to ${XVERSE} wallet`);
        }
    });
    const connectLeather = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
            const lib = window.LeatherProvider;
            // @ts-ignore
            const getAddressesResponse = yield lib.request("getAddresses");
            const addressesResponse = getAddressesResponse.result;
            const addresses = addressesResponse.addresses;
            const leatherAccountsParsed = addresses.map((address) => address.address);
            const taprootAddress = addresses.find((address) => address.type === P2TR);
            const segwitAddress = addresses.find((address) => address.type === P2WPKH);
            setAccounts(leatherAccountsParsed);
            setAddress(String(taprootAddress === null || taprootAddress === void 0 ? void 0 : taprootAddress.address));
            setPaymentAddress(String(segwitAddress === null || segwitAddress === void 0 ? void 0 : segwitAddress.address));
            setLibrary(lib);
            setProvider(LEATHER);
            handleAccountsChanged(leatherAccountsParsed);
            setConnected(true);
            yield getNetwork().then((network) => {
                // const foundNetwork = getNe(String(network))
                if (!network) {
                    setNetwork(MAINNET);
                }
                else {
                    setNetwork(network);
                }
            });
            setConnected(true);
        }
        catch (error) {
            new Error(`Can't lasereyes to ${LEATHER} wallet`);
        }
    });
    const handleAccountsChanged = (_accounts) => {
        // @ts-ignore
        if (self.accounts[0] === _accounts[0]) {
            return;
        }
        self.accounts = _accounts;
        // @ts-ignore
        if (_accounts.length > 0) {
            setAccounts(_accounts);
            setConnected(true);
            // @ts-ignore
            setAddress(_accounts[0]);
            setPaymentAddress(_accounts[0]);
            getBasicInfo();
        }
        else {
            setConnected(false);
        }
    };
    useEffect(() => {
        // TODO: do for OYL
        if (provider !== UNISAT) {
            return;
        }
        // @ts-ignore
        library.getAccounts().then((accounts) => {
            handleAccountsChanged(accounts);
        });
        // @ts-ignore
        library.on("accountsChanged", handleAccountsChanged);
        // @ts-ignore
        library.on("networkChanged", handleNetworkChanged);
        return () => {
            // @ts-ignore
            library.removeListener("accountsChanged", handleAccountsChanged);
            // @ts-ignore
            library.removeListener("networkChanged", handleNetworkChanged);
        };
    }, [library]);
    useEffect(() => {
        const defaultWallet = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(LOCAL_STORAGE_DEFAULT_WALLET);
        if (defaultWallet) {
            setProvider(defaultWallet);
            connect(defaultWallet);
        }
    }, []);
    // @ts-ignore
    const getBasicInfo = () => __awaiter(void 0, void 0, void 0, function* () {
        if (provider !== UNISAT)
            return;
        // @ts-ignore
        // const [address] = await library?.getAccounts()
        // setAddress(address)
        // @ts-ignore
        const publicKey = yield (library === null || library === void 0 ? void 0 : library.getPublicKey());
        setPublicKey(String(publicKey));
        // @ts-ignore
        const balance = yield (library === null || library === void 0 ? void 0 : library.getBalance());
        // @ts-ignore
        setBalance(balance);
        // @ts-ignore
        const network = yield (library === null || library === void 0 ? void 0 : library.getNetwork());
        if (network) {
            // @ts-ignore
            setNetwork(network);
        }
    });
    const handleNetworkChanged = (network) => {
        let foundNetwork = "";
        if (provider === UNISAT) {
            foundNetwork = getNetworkForUnisat(network);
        }
        if (provider === XVERSE) {
            foundNetwork = getXverseNetwork(network);
        }
        if (provider === LEATHER) {
            foundNetwork = getLeatherNetwork(network);
        }
        setNetwork(foundNetwork);
        getBasicInfo();
    };
    const findOrdinalsAddress = (addresses) => {
        return addresses.find(({ purpose }) => purpose === "ordinals");
    };
    const findPaymentAddress = (addresses) => {
        return addresses.find(({ purpose }) => purpose === "payment");
    };
    const connect = (walletName) => __awaiter(void 0, void 0, void 0, function* () {
        setIsConnecting(true);
        try {
            if (!walletName)
                new Error("No wallet provided");
            if (walletName === OYL) {
                yield connectOyl();
            }
            else if (walletName === UNISAT) {
                yield connectUnisat();
            }
            else if (walletName === XVERSE) {
                yield connectXverse();
            }
            else if (walletName === LEATHER) {
                yield connectLeather();
            }
            else {
                new Error("Wallet not found!");
            }
            setConnected(true);
        }
        catch (error) {
            console.error("error", error);
            disconnect();
            // @ts-ignore
            new Error("Can't lasereyes to wallet");
        }
        finally {
            setIsConnecting(false);
        }
    });
    const disconnect = () => {
        setAddress("");
        setAccounts([]);
        setProvider("");
        setLibrary(null);
        setConnected(false);
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem(LOCAL_STORAGE_DEFAULT_WALLET);
    };
    const requestAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!library)
            return;
        if (provider === OYL) {
            return yield library.requestAccounts();
        }
        else if (provider === UNISAT) {
            return yield library.requestAccounts();
        }
        else if (provider === XVERSE) {
            const getAddressOptions = {
                payload: {
                    // @ts-ignore
                    purposes: ["ordinals", "payment"],
                    message: "Address for receiving Ordinals and payments",
                    network: {
                        type: XVERSE_NETWORK,
                    },
                },
                onFinish: (response) => __awaiter(void 0, void 0, void 0, function* () {
                    const foundAddress = findOrdinalsAddress(response.addresses);
                    setAddress(foundAddress.address);
                    const foundPaymentAddress = findPaymentAddress(response.addresses);
                    setPaymentAddress(foundPaymentAddress);
                    setPublicKey(String(response.addresses[0].publicKey));
                    setPaymentPublicKey(String(response.addresses[1].publicKey));
                }),
                onCancel: () => {
                    console.log("CANCELLED");
                },
            };
            return [address];
        }
        else if (provider === LEATHER) {
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER);
            const lib = window.LeatherProvider;
            // @ts-ignore
            const getAddressesResponse = yield lib.request("getAddresses");
            const addressesResponse = getAddressesResponse.result;
            const addresses = addressesResponse.addresses;
            const leatherAccountsParsed = addresses.map((address) => address.address);
            const taprootAddress = addresses.find((address) => address.type === P2TR);
            const segwitAddress = addresses.find((address) => address.type === P2WPKH);
            setAccounts(leatherAccountsParsed);
            setAddress(String(taprootAddress === null || taprootAddress === void 0 ? void 0 : taprootAddress.address));
            setPaymentAddress(String(segwitAddress === null || segwitAddress === void 0 ? void 0 : segwitAddress.address));
            setLibrary(lib);
            setProvider(LEATHER);
            handleAccountsChanged(leatherAccountsParsed);
            setConnected(true);
            yield getNetwork().then((network) => {
                // const foundNetwork = getNe(String(network))
                if (!network) {
                    setNetwork(MAINNET);
                }
                else {
                    setNetwork(network);
                }
            });
            setConnected(true);
        }
        else {
            console.log("NO WALLET CONNECTED");
        }
    });
    const getNetwork = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                const unisatNetwork = yield (library === null || library === void 0 ? void 0 : library.getNetwork());
                const foundNetwork = getNetworkForUnisat(unisatNetwork);
                setNetwork(foundNetwork);
                return foundNetwork;
            }
            else if (provider === XVERSE) {
                if (address.slice(0, 1) === "t") {
                    return TESTNET;
                }
                return MAINNET;
            }
            else if (provider === LEATHER) {
                if (address.slice(0, 1) === "t") {
                    return TESTNET;
                }
                return MAINNET;
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const switchNetwork = (network) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                const wantedNetwork = getUnisatNetwork(network);
                yield (library === null || library === void 0 ? void 0 : library.switchNetwork(wantedNetwork));
                setNetwork(network);
            }
            else if (provider === XVERSE) {
                return NETWORK;
            }
            else if (provider === LEATHER) {
                return NETWORK;
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const getPublicKey = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                return yield (library === null || library === void 0 ? void 0 : library.getPublicKey());
            }
            else if (provider === UNISAT) {
                return yield (library === null || library === void 0 ? void 0 : library.getPublicKey());
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const getBalance = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                return yield library.getBalance();
            }
            else if (provider === UNISAT) {
                return yield library.getBalance();
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const getInscriptions = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                return yield library.getInscriptions(0, 10);
            }
            else if (provider === UNISAT) {
                return yield library.getInscriptions(0, 10);
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const getAllBRC20Tokens = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                new Error("Not implemented");
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const sendBTC = (to, amount) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // if (!library) return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                return yield (library === null || library === void 0 ? void 0 : library.sendBitcoin(to, amount));
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                return yield (library === null || library === void 0 ? void 0 : library.request("sendTransfer", {
                    address: to,
                    amount: amount.toString(),
                }));
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const payInscribe = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                new Error("Not implemented");
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const deploy = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                new Error("Not implemented");
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const mint = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                new Error("Not implemented");
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                new Error("Not implemented");
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const signMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                new Error("Not implemented");
            }
            else if (provider === UNISAT) {
                return yield (library === null || library === void 0 ? void 0 : library.signMessage(message));
            }
            else if (provider === XVERSE) {
                new Error("Not implemented");
            }
            else if (provider === LEATHER) {
                return yield (library === null || library === void 0 ? void 0 : library.request("signMessage", {
                    message: message,
                    paymentType: P2TR,
                }));
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const signPsbt = (psbt, finalize = false, broadcast = true) => __awaiter(void 0, void 0, void 0, function* () {
        var _b, e_1, _c, _d;
        try {
            if (!library)
                return;
            if (provider === OYL) {
                const response = (yield (library === null || library === void 0 ? void 0 : library.signPsbt(psbt)));
                return response;
            }
            else if (provider === UNISAT) {
                return (yield (library === null || library === void 0 ? void 0 : library.signPsbt(psbt, {
                    autoFinalized: finalize,
                })));
            }
            else if (provider === XVERSE) {
                const toSignPsbt = bitcoin.Psbt.fromBase64(String(psbt), {
                    network: bitcoin.networks.testnet,
                });
                const inputs = toSignPsbt.data.inputs;
                const inputsToSign = [];
                const ordinalAddressData = {
                    address: address,
                    signingIndexes: [],
                };
                const paymentsAddressData = {
                    address: paymentAddress,
                    signingIndexes: [],
                };
                let counter = 0;
                try {
                    for (var _e = true, inputs_1 = __asyncValues(inputs), inputs_1_1; inputs_1_1 = yield inputs_1.next(), _b = inputs_1_1.done, !_b;) {
                        _d = inputs_1_1.value;
                        _e = false;
                        try {
                            let input = _d;
                            const { script } = input.witnessUtxo;
                            const addressFromScript = fromOutputScript(script, bitcoin.networks.testnet);
                            if (addressFromScript === paymentAddress) {
                                paymentsAddressData.signingIndexes.push(Number(counter));
                            }
                            else if (addressFromScript === address) {
                                ordinalAddressData.signingIndexes.push(Number(counter));
                            }
                            counter++;
                        }
                        finally {
                            _e = true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_e && !_b && (_c = inputs_1.return)) yield _c.call(inputs_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (ordinalAddressData.signingIndexes.length > 0) {
                    inputsToSign.push(ordinalAddressData);
                }
                if (paymentsAddressData.signingIndexes.length > 0) {
                    inputsToSign.push(paymentsAddressData);
                }
                let txId = "";
                const xverseNetwork = getXverseNetwork(network);
                const signPsbtOptions = {
                    payload: {
                        network: {
                            type: xverseNetwork,
                        },
                        message: "Sign Transaction",
                        psbtBase64: toSignPsbt.toBase64(),
                        broadcast: broadcast,
                        inputsToSign: inputsToSign,
                    },
                    onFinish: (response) => {
                        if (response.txId) {
                            txId = response.txId;
                        }
                        else if (response.psbtBase64) {
                            const signedPsbt = bitcoin.Psbt.fromBase64(String(response.psbtBase64), {
                                network: bitcoin.networks.testnet,
                            });
                            txId = signedPsbt.toHex();
                        }
                    },
                    onCancel: () => console.log("Canceled"),
                };
                // @ts-ignore
                yield signTransaction(signPsbtOptions);
                return txId;
            }
            else if (provider === LEATHER) {
                const requestParams = { hex: psbt, broadcast };
                const response = yield (library === null || library === void 0 ? void 0 : library.request("signPsbt", requestParams));
                const leatherHexResult = response.result;
                const signedTx = leatherHexResult.hex;
                if (!broadcast) {
                    return signedTx;
                }
                const toSignPsbt = bitcoin.Psbt.fromHex(String(signedTx), {
                    network: bitcoin.networks.testnet,
                });
                toSignPsbt.finalizeAllInputs();
                const txId = toSignPsbt.extractTransaction().getId();
                return txId;
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    const pushPsbt = (psbt, finalize = false) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!library)
                return;
            if (provider === OYL) {
                return (yield (library === null || library === void 0 ? void 0 : library.pushPsbt(psbt)));
            }
            else if (provider === UNISAT) {
                return (yield (library === null || library === void 0 ? void 0 : library.pushPsbt(psbt)));
            }
            else if (provider === XVERSE) {
                const signPsbtOptions = {
                    payload: {
                        network: {
                            type: NETWORK,
                        },
                        message: "Sign Transaction",
                        psbtBase64: `cHNidP8BAJwCAmO+JvQJxhVDDpm3tV5PmPfzvJOSL4GOdjEOpAAAAAAnrAAA==`,
                        broadcast: false,
                        inputsToSign: [
                            {
                                address: "33TKH4kkiFPyTLDNmdNsLggyLeAYre57Qm",
                                signingIndexes: [1],
                            },
                        ],
                    },
                    onFinish: (response) => {
                        // alert(response.psbtBase64)
                    },
                    onCancel: () => console.log("Canceled"),
                };
                // @ts-ignore
                yield signTransaction(signPsbtOptions);
            }
        }
        catch (error) {
            console.error("error", error);
        }
    });
    return (_jsx(LaserEyesContext.Provider, Object.assign({ value: {
            library,
            accounts,
            publicKey,
            address,
            paymentAddress,
            paymentPublicKey,
            provider,
            balance,
            network,
            connected,
            isConnecting,
            hasOyl,
            hasUnisat,
            hasXverse,
            hasLeather,
            //
            connect,
            disconnect,
            requestAccounts,
            getNetwork,
            switchNetwork,
            getPublicKey,
            getBalance,
            sendBTC,
            signPsbt,
            pushPsbt,
            signMessage,
        } }, { children: children })));
};
export { LaserEyesProvider, useLaserEyes };
