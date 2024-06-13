'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as bitcoin from 'bitcoinjs-lib'
// import * as ecc2 from "@bitcoinerlab/secp256k1";
// import { ECPairFactory } from "ecpair";
// import { toXOnly } from "bitcoinjs-lib/src/psbt/bip371";
// bitcoin.initEccLib(ecc2);

// const ECPair = ECPairFactory(ecc2);

import {
  getLeatherNetwork,
  getNetworkForUnisat,
  getUnisatNetwork,
  getXverseNetwork,
  LEATHER,
  MAINNET,
  OYL,
  P2TR,
  P2WPKH,
  TESTNET,
  UNISAT,
  XVERSE,
  XVERSE_NETWORK,
} from '../consts/wallets'
import { getAddress, GetAddressOptions, signTransaction } from 'sats-connect'
import {
  LaserEyesContextType,
  LeatherAddress,
  LeatherRequestAddressResponse,
  LeatherRequestSignResponse,
  LeatherRPCResponse,
} from '../types'
import { LOCAL_STORAGE_DEFAULT_WALLET, NETWORK } from '../consts/settings'
import { fromOutputScript } from 'bitcoinjs-lib/src/address'
import { useLocalStorage } from 'usehooks-ts'

const initialWalletContext = {
  hasOyl: false,
  hasUnisat: false,
  hasXverse: false,
  hasLeather: false,
  connected: false,
  isConnecting: false,
  publicKey: '', // Empty string as the public key is unknown
  address: '', // Empty string as the address is unknown
  paymentAddress: '', // Empty string as the address is unknown
  paymentPublicKey: '',
  balance: {
    confirmed: 0, // Initial confirmed balance is zero
    unconfirmed: 0, // Initial unconfirmed balance is zero
    total: 0, // Initial total balance is zero
  },
  network: '', // Empty string as the network is unknown
  library: null, // Initial library is null, assuming it will be an object once initialized
  provider: null, // Initial provider is null, assuming it will be an object once initialized
  accounts: [], // Initially, there are no accounts

  // Placeholder functions for wallet operations. These should be replaced with actual implementations.
  connect: async (
    walletName: typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER
  ) => {
    /* Implementation */
  },
  disconnect: () => {
    /* Implementation */
  },
  requestAccounts: async () => [],
  getNetwork: async () => '',
  switchNetwork: async (network: 'mainnet' | 'testnet') => '',
  getPublicKey: async () => '',
  getBalance: async () => '',
  getInscriptions: async () => {
    /* Implementation */
  },
  getAllBRC20Tokens: async () => {
    /* Implementation */
  },
  sendBTC: async (to: string, amount: number) => '',
  payInscribe: async () => {
    /* Implementation */
  },
  deploy: async () => {
    /* Implementation */
  },
  mint: async () => {
    /* Implementation */
  },
  signMessage: async (message: string) => '',
  signPsbt: async (tx: string) => {
    /* Implementation */
    return ''
  },
  pushPsbt: async (tx: string) => {
    /* Implementation */
    return ''
  },
  // signPsbts: async () => { /* Implementation */ },
}

const LaserEyesContext =
  createContext<LaserEyesContextType>(initialWalletContext)

const useLaserEyes = (): LaserEyesContextType => {
  return useContext(LaserEyesContext)
}

const LaserEyesProvider = ({ children }: { children: ReactNode }) => {
  const [connected, setConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [accounts, setAccounts] = useState<string[]>([])
  const [publicKey, setPublicKey] = useState<string>('')
  // const [publicKey, setPublicKey] = useState<
  //   string | undefined
  // >();
  const [paymentPublicKey, setPaymentPublicKey] = useState<string>('')
  const [address, setAddress] = useState('')
  const [paymentAddress, setPaymentAddress] = useState('')
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0,
  })

  const [network, setNetwork] = useLocalStorage('network', NETWORK)
  const [library, setLibrary] = useState<any>(null)
  const [provider, setProvider] = useState<
    typeof OYL | typeof UNISAT | typeof XVERSE | string
  >('')

  const [hasOyl, setHasOyl] = useState(false)
  const [hasUnisat, setHasUnisat] = useState(false)
  const [hasXverse, setHasXverse] = useState(false)
  const [hasLeather, setHasLeather] = useState(false)

  useEffect(() => {
    const oylLib = (window as any)?.oyl
    setHasOyl(!!oylLib)
  }, [])

  useEffect(() => {
    const unisatLib = (window as any)?.unisat
    setHasUnisat(!!unisatLib)
  }, [])

  useEffect(() => {
    const xverseLib = (window as any)?.XverseProviders?.BitcoinProvider
    setHasXverse(!!xverseLib)
  }, [])

  useEffect(() => {
    const leatherLib = (window as any)?.LeatherProvider
    setHasLeather(!!leatherLib)
  }, [])

  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  })

  const self = selfRef.current

  const connectOyl = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, OYL)
      const lib = (window as any).oyl
      const result = await lib.requestAccounts()

      setAccounts(result)
      setAddress(result[0])
      setPaymentAddress(result[0])
      setLibrary(lib)
      setProvider(OYL)
      handleAccountsChanged(result)
      setConnected(true)
    } catch (error) {
      new Error("Can't lasereyes to wallet")
    }
  }

  const connectUnisat = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, UNISAT)
      const lib = (window as any).unisat
      // @ts-ignore
      const result = await lib.requestAccounts()
      setAccounts(result)
      setAddress(result[0])
      setPaymentAddress(result[0])
      setLibrary(lib)
      setProvider(UNISAT)
      handleAccountsChanged(result)
      setConnected(true)
      await getNetwork().then((network) => {
        const foundNetwork = getNetworkForUnisat(String(network))
        setNetwork(foundNetwork)
      })
    } catch (error) {
      new Error("Can't lasereyes to wallet")
    }
  }

  const connectXverse = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, XVERSE)
      let xverseNetwork = getXverseNetwork(NETWORK)
      const getAddressOptions = {
        payload: {
          purposes: ['ordinals', 'payment'],
          message: 'Address for receiving Ordinals and payments',
          network: {
            type: xverseNetwork,
          },
        },
        onFinish: (response: any) => {
          setPublicKey(String(response.addresses[0].publicKey))
          setPaymentPublicKey(String(response.addresses[1].publicKey))
          const foundAddress = findOrdinalsAddress(response.addresses)
          const foundPaymentAddress = findPaymentAddress(response.addresses)
          if (foundAddress && foundPaymentAddress) {
            setAddress(foundAddress.address)
            setPaymentAddress(foundPaymentAddress.address)
            setProvider(XVERSE)
            setLibrary((window as any).BitcoinProvider)
          }
        },
      }
      await getAddress(getAddressOptions as GetAddressOptions)
      setConnected(true)
    } catch (error) {
      new Error(`Can't lasereyes to ${XVERSE} wallet`)
    }
  }

  const connectLeather = async () => {
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER)

      const lib = (window as any).LeatherProvider
      // @ts-ignore
      const getAddressesResponse: LeatherRPCResponse = await lib.request(
        'getAddresses'
      )

      const addressesResponse =
        getAddressesResponse.result as LeatherRequestAddressResponse

      const addresses: LeatherAddress[] = addressesResponse.addresses

      const leatherAccountsParsed = addresses.map(
        (address: LeatherAddress) => address.address
      )

      const taprootAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2TR
      )

      const segwitAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2WPKH
      )

      setAccounts(leatherAccountsParsed)
      setAddress(String(taprootAddress?.address))
      setPaymentAddress(String(segwitAddress?.address))
      setLibrary(lib)
      setProvider(LEATHER)
      handleAccountsChanged(leatherAccountsParsed)
      setConnected(true)
      await getNetwork().then((network) => {
        // const foundNetwork = getNe(String(network))
        if (!network) {
          setNetwork(MAINNET)
        } else {
          setNetwork(network)
        }
      })
      setConnected(true)
    } catch (error) {
      new Error(`Can't lasereyes to ${LEATHER} wallet`)
    }
  }

  const handleAccountsChanged = (_accounts: string[]) => {
    // @ts-ignore
    if (self.accounts[0] === _accounts[0]) {
      return
    }

    self.accounts = _accounts
    // @ts-ignore
    if (_accounts.length > 0) {
      setAccounts(_accounts)
      setConnected(true)
      // @ts-ignore
      setAddress(_accounts[0])
      setPaymentAddress(_accounts[0])
      getBasicInfo()
    } else {
      setConnected(false)
    }
  }

  useEffect(() => {
    // TODO: do for OYL
    if (provider !== UNISAT) {
      return
    }

    // @ts-ignore
    library.getAccounts().then((accounts: string[]) => {
      handleAccountsChanged(accounts)
    })
    // @ts-ignore
    library.on('accountsChanged', handleAccountsChanged)
    // @ts-ignore
    library.on('networkChanged', handleNetworkChanged)
    return () => {
      // @ts-ignore
      library.removeListener('accountsChanged', handleAccountsChanged)
      // @ts-ignore
      library.removeListener('networkChanged', handleNetworkChanged)
    }
  }, [library])

  useEffect(() => {
    const defaultWallet = localStorage?.getItem(
      LOCAL_STORAGE_DEFAULT_WALLET
    ) as typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER | undefined
    if (defaultWallet) {
      setProvider(defaultWallet)
      connect(defaultWallet)
    }
  }, [])

  // @ts-ignore
  const getBasicInfo = async () => {
    if (provider !== UNISAT) return
    // @ts-ignore
    // const [address] = await library?.getAccounts()
    // setAddress(address)
    // @ts-ignore
    const publicKey = await library?.getPublicKey()
    setPublicKey(String(publicKey))
    // @ts-ignore
    const balance = await library?.getBalance()
    // @ts-ignore
    setBalance(balance)
    // @ts-ignore
    const network = await library?.getNetwork()
    if (network) {
      // @ts-ignore
      setNetwork(network)
    }
  }

  const handleNetworkChanged = (network: string) => {
    let foundNetwork = ''
    if (provider === UNISAT) {
      foundNetwork = getNetworkForUnisat(network)
    }
    if (provider === XVERSE) {
      foundNetwork = getXverseNetwork(network)
    }
    if (provider === LEATHER) {
      foundNetwork = getLeatherNetwork(network)
    }
    setNetwork(foundNetwork)
    getBasicInfo()
  }

  const findOrdinalsAddress = (addresses: any) => {
    return addresses.find(
      ({ purpose }: { purpose: string }) => purpose === 'ordinals'
    )
  }

  const findPaymentAddress = (addresses: any) => {
    return addresses.find(
      ({ purpose }: { purpose: string }) => purpose === 'payment'
    )
  }

  const connect = async (
    walletName: typeof OYL | typeof UNISAT | typeof XVERSE | typeof LEATHER
  ) => {
    setIsConnecting(true)
    try {
      if (!walletName) new Error('No wallet provided')
      if (walletName === OYL) {
        await connectOyl()
      } else if (walletName === UNISAT) {
        await connectUnisat()
      } else if (walletName === XVERSE) {
        await connectXverse()
      } else if (walletName === LEATHER) {
        await connectLeather()
      } else {
        new Error('Wallet not found!')
      }
      setConnected(true)
    } catch (error) {
      console.error('error', error)
      disconnect()
      // @ts-ignore
      new Error("Can't lasereyes to wallet")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = () => {
    setAddress('')
    setAccounts([])
    setProvider('')
    setLibrary(null)
    setConnected(false)
    localStorage?.removeItem(LOCAL_STORAGE_DEFAULT_WALLET)
  }

  const requestAccounts = async () => {
    if (!library) return
    if (provider === OYL) {
      return await library.requestAccounts()
    } else if (provider === UNISAT) {
      return await library.requestAccounts()
    } else if (provider === XVERSE) {
      const getAddressOptions = {
        payload: {
          // @ts-ignore
          purposes: ['ordinals', 'payment'],
          message: 'Address for receiving Ordinals and payments',
          network: {
            type: XVERSE_NETWORK,
          },
        },
        onFinish: async (response: any) => {
          const foundAddress = findOrdinalsAddress(response.addresses)
          setAddress(foundAddress.address)
          const foundPaymentAddress = findPaymentAddress(response.addresses)
          setPaymentAddress(foundPaymentAddress)
          setPublicKey(String(response.addresses[0].publicKey))
          setPaymentPublicKey(String(response.addresses[1].publicKey))
        },
        onCancel: () => {
          console.log('CANCELLED')
        },
      }
      return [address]
    } else if (provider === LEATHER) {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, LEATHER)
      const lib = (window as any).LeatherProvider
      // @ts-ignore
      const getAddressesResponse: LeatherRPCResponse = await lib.request(
        'getAddresses'
      )
      const addressesResponse =
        getAddressesResponse.result as LeatherRequestAddressResponse

      const addresses: LeatherAddress[] = addressesResponse.addresses
      const leatherAccountsParsed = addresses.map(
        (address: LeatherAddress) => address.address
      )
      const taprootAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2TR
      )
      const segwitAddress = addresses.find(
        (address: LeatherAddress) => address.type === P2WPKH
      )
      setAccounts(leatherAccountsParsed)
      setAddress(String(taprootAddress?.address))
      setPaymentAddress(String(segwitAddress?.address))
      setLibrary(lib)
      setProvider(LEATHER)
      handleAccountsChanged(leatherAccountsParsed)
      setConnected(true)
      await getNetwork().then((network) => {
        // const foundNetwork = getNe(String(network))
        if (!network) {
          setNetwork(MAINNET)
        } else {
          setNetwork(network)
        }
      })
      setConnected(true)
    } else {
      console.log('NO WALLET CONNECTED')
    }
  }

  const getNetwork = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        const unisatNetwork = await library?.getNetwork()
        const foundNetwork = getNetworkForUnisat(unisatNetwork)
        setNetwork(foundNetwork)
        return foundNetwork
      } else if (provider === XVERSE) {
        if (address.slice(0, 1) === 't') {
          return TESTNET
        }
        return MAINNET
      } else if (provider === LEATHER) {
        if (address.slice(0, 1) === 't') {
          return TESTNET
        }
        return MAINNET
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const switchNetwork = async (network: typeof MAINNET | typeof TESTNET) => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        const wantedNetwork = getUnisatNetwork(network)
        await library?.switchNetwork(wantedNetwork)
        setNetwork(network)
      } else if (provider === XVERSE) {
        return NETWORK
      } else if (provider === LEATHER) {
        return NETWORK
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const getPublicKey = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        return await library?.getPublicKey()
      } else if (provider === UNISAT) {
        return await library?.getPublicKey()
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const getBalance = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        return await library.getBalance()
      } else if (provider === UNISAT) {
        return await library.getBalance()
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const getInscriptions = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        return await library.getInscriptions(0, 10)
      } else if (provider === UNISAT) {
        return await library.getInscriptions(0, 10)
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const getAllBRC20Tokens = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        new Error('Not implemented')
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const sendBTC = async (to: string, amount: number) => {
    try {
      // if (!library) return;
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        return await library?.sendBitcoin(to, amount)
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        return await library?.request('sendTransfer', {
          address: to,
          amount: amount.toString(),
        })
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const payInscribe = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        new Error('Not implemented')
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const deploy = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        new Error('Not implemented')
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const mint = async () => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        new Error('Not implemented')
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        new Error('Not implemented')
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const signMessage = async (message: string) => {
    try {
      if (!library) return
      if (provider === OYL) {
        new Error('Not implemented')
      } else if (provider === UNISAT) {
        return await library?.signMessage(message)
      } else if (provider === XVERSE) {
        new Error('Not implemented')
      } else if (provider === LEATHER) {
        return await library?.request('signMessage', {
          message: message,
          paymentType: P2TR,
        })
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const signPsbt = async (psbt: string, finalize = false, broadcast = true) => {
    try {
      if (!library) return
      if (provider === OYL) {
        const response = (await library?.signPsbt(psbt)) as {
          signedPsbtHex: string
          signedPsbtBase64: string
        }
        return response
      } else if (provider === UNISAT) {
        return (await library?.signPsbt(psbt, {
          autoFinalized: finalize,
        })) as string
      } else if (provider === XVERSE) {
        const toSignPsbt = bitcoin.Psbt.fromBase64(String(psbt), {
          network: bitcoin.networks.testnet,
        })

        const inputs = toSignPsbt.data.inputs
        const inputsToSign = []
        const ordinalAddressData = {
          address: address,
          signingIndexes: [] as number[],
        }
        const paymentsAddressData = {
          address: paymentAddress,
          signingIndexes: [] as number[],
        }

        let counter = 0
        for await (let input of inputs) {
          const { script } = input.witnessUtxo!
          const addressFromScript = fromOutputScript(
            script,
            bitcoin.networks.testnet
          )

          if (addressFromScript === paymentAddress) {
            paymentsAddressData.signingIndexes.push(Number(counter))
          } else if (addressFromScript === address) {
            ordinalAddressData.signingIndexes.push(Number(counter))
          }
          counter++
        }

        if (ordinalAddressData.signingIndexes.length > 0) {
          inputsToSign.push(ordinalAddressData)
        }

        if (paymentsAddressData.signingIndexes.length > 0) {
          inputsToSign.push(paymentsAddressData)
        }

        let txId = ''

        const xverseNetwork = getXverseNetwork(network)

        const signPsbtOptions = {
          payload: {
            network: {
              type: xverseNetwork,
            },
            message: 'Sign Transaction',
            psbtBase64: toSignPsbt.toBase64(),
            broadcast: broadcast,
            inputsToSign: inputsToSign,
          },
          onFinish: (response: { psbtBase64: string; txId: string }) => {
            if (response.txId) {
              txId = response.txId
            } else if (response.psbtBase64) {
              const signedPsbt = bitcoin.Psbt.fromBase64(
                String(response.psbtBase64),
                {
                  network: bitcoin.networks.testnet,
                }
              )

              txId = signedPsbt.toHex()
            }
          },
          onCancel: () => console.log('Canceled'),
        }

        // @ts-ignore
        await signTransaction(signPsbtOptions)
        return txId
      } else if (provider === LEATHER) {
        interface SignPsbtRequestParams {
          hex: string
          signAtIndex?: number | number[]
          broadcast?: boolean
        }

        const requestParams: SignPsbtRequestParams = { hex: psbt, broadcast }
        const response: LeatherRPCResponse = await library?.request(
          'signPsbt',
          requestParams
        )
        const leatherHexResult = response.result as LeatherRequestSignResponse
        const signedTx = leatherHexResult.hex

        if (!broadcast) {
          return signedTx
        }
        const toSignPsbt = bitcoin.Psbt.fromHex(String(signedTx), {
          network: bitcoin.networks.testnet,
        })
        toSignPsbt.finalizeAllInputs()
        const txId = toSignPsbt.extractTransaction().getId()
        return txId
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const pushPsbt = async (psbt: string, finalize = false) => {
    try {
      if (!library) return
      if (provider === OYL) {
        return (await library?.pushPsbt(psbt)) as string
      } else if (provider === UNISAT) {
        return (await library?.pushPsbt(psbt)) as string
      } else if (provider === XVERSE) {
        const signPsbtOptions = {
          payload: {
            network: {
              type: NETWORK,
            },
            message: 'Sign Transaction',
            psbtBase64: `cHNidP8BAJwCAmO+JvQJxhVDDpm3tV5PmPfzvJOSL4GOdjEOpAAAAAAnrAAA==`,
            broadcast: false,
            inputsToSign: [
              {
                address: '33TKH4kkiFPyTLDNmdNsLggyLeAYre57Qm',
                signingIndexes: [1],
              },
            ],
          },
          onFinish: (response: { psbtBase64: any }) => {
            // alert(response.psbtBase64)
          },
          onCancel: () => console.log('Canceled'),
        }

        // @ts-ignore
        await signTransaction(signPsbtOptions)
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  const contextValue: LaserEyesContextType = {
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
    getInscriptions,
    getAllBRC20Tokens,

    sendBTC,
    signPsbt,
    pushPsbt,
    payInscribe,
    deploy,
    mint,
    signMessage,
  }

  return (
    <LaserEyesContext.Provider value={contextValue}>
      {children}
    </LaserEyesContext.Provider>
  )
}

export { LaserEyesProvider, useLaserEyes }
