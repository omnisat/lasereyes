import {
  MAINNET,
  OYL,
  TESTNET,
  UNISAT,
  useLaserEyes,
  XVERSE,
} from '@omnisat/lasereyes'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { createPsbt } from '@/lib/btc'
import useUtxos from '@/hooks/useUtxos'
import { getMempoolSpaceUrl } from '@/lib/urls'
import { clsx } from 'clsx'

const WalletCard = ({
  walletName,
  setSignature,
  unsignedPsbt,
  setUnsignedPsbt,
  setSignedPsbt,
}: {
  walletName: typeof UNISAT | typeof XVERSE | typeof OYL
  setSignature: (signature: string) => void
  unsignedPsbt: string | undefined
  setUnsignedPsbt: (psbt: string) => void
  setSignedPsbt: (
    psbt:
      | {
          signedPsbtHex: string
          signedPsbtBase64: string
          txId?: string
        }
      | undefined
  ) => void
}) => {
  const {
    connect,
    disconnect,
    connected,
    provider,
    network,
    paymentAddress,
    paymentPublicKey,
    balance,
    hasUnisat,
    hasXverse,
    hasOyl,
    sendBTC,
    signMessage,
    signPsbt,
    pushPsbt,
    switchNetwork,
  } = useLaserEyes()

  const [finalize, setFinalize] = useState<boolean>(false)
  const [broadcast, setBroadcast] = useState<boolean>(false)
  const [unsigned, setUnsigned] = useState<string | undefined>()
  const [signed, setSigned] = useState<string | undefined>()
  const { utxos, loading, fetch } = useUtxos(
    paymentAddress,
    network as typeof MAINNET | typeof TESTNET
  )

  const hasWallet = {
    unisat: hasUnisat,
    xverse: hasXverse,
    oyl: hasOyl,
  }

  const connectWallet = async (
    walletName: typeof UNISAT | typeof XVERSE | typeof OYL
  ) => {
    try {
      // @ts-ignore
      await connect(walletName)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  useEffect(() => {
    if (utxos.length > 0 && connected) {
      const psbt = createPsbt(
        utxos,
        paymentAddress,
        paymentPublicKey,
        network as typeof MAINNET | typeof TESTNET
      )
      if (psbt) {
        setUnsignedPsbt(psbt.toHex())
        setUnsigned(psbt.toHex())
      }
    }
  }, [utxos, connected])

  useEffect(() => {
    setUnsigned(undefined)
  }, [network])

  const send = async () => {
    try {
      if (balance! < 1500) {
        throw new Error('Insufficient funds')
      }

      const txid = await sendBTC(paymentAddress, 1500)
      toast.success(
        <span className={'flex flex-col gap-1 items-center justify-center'}>
          <span className={'font-black'}>View on mempool.space</span>
          <a
            target={'_blank'}
            href={`${getMempoolSpaceUrl(network as typeof MAINNET | typeof TESTNET)}/tx/${txid}`}
            className={'underline text-blue-600 text-xs'}
          >
            {txid}
          </a>
        </span>
      )
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  const sign = async (message: string) => {
    setSignature('')
    try {
      const signature = await signMessage(message)
      setSignature(signature)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  const signUnsignedPsbt = async () => {
    try {
      if (!unsigned) {
        throw new Error('No unsigned PSBT')
      }

      if (broadcast && balance! < 1500) {
        throw new Error('Insufficient funds')
      }

      const signPsbtResponse = await signPsbt(
        unsignedPsbt!,
        finalize,
        broadcast
      )

      // @ts-ignore
      setSignedPsbt(signPsbtResponse)
      // @ts-ignore
      setSigned(signPsbtResponse?.signedPsbtHex)
      if (!signPsbtResponse) {
        throw new Error('Failed to sign PSBT')
      }

      if (typeof signPsbtResponse === 'string') {
        toast.success('Signed PSBT')
        return
      }

      // @ts-ignore
      if (signPsbtResponse?.txId) {
        toast.success(
          <span className={'flex flex-col gap-1 items-center justify-center'}>
            <span className={'font-black'}>View on mempool.space</span>
            <a
              target={'_blank'}
              // @ts-ignore
              href={`${getMempoolSpaceUrl(network as typeof MAINNET | typeof TESTNET)}/tx/${signPsbtResponse?.txId}`}
              className={'underline text-blue-600 text-xs'}
            >
              {/*@ts-ignore*/}
              {signPsbtResponse?.txId}
            </a>
          </span>
        )
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  const push = async () => {
    try {
      if (!signed) {
        throw new Error('No signed PSBT')
      }
      const txid = await pushPsbt(signed)
      setUnsigned(undefined)
      setSignedPsbt(undefined)
      toast.success(
        <span className={'flex flex-col gap-1 items-center justify-center'}>
          <span className={'font-black'}>View on mempool.space</span>
          <a
            target={'_blank'}
            href={`${getMempoolSpaceUrl(network as typeof MAINNET | typeof TESTNET)}/tx/${txid}`}
            className={'underline text-blue-600 text-xs'}
          >
            {txid}
          </a>
        </span>
      )
    } catch (error) {
      setSignedPsbt(undefined)
      // @ts-ignore
      if (error?.message!) {
        // @ts-ignore
        toast.error(error.message!)
      }
    }
  }

  const switchNet = async (desiredNetwork: typeof MAINNET | typeof TESTNET) => {
    try {
      await switchNetwork(desiredNetwork)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <Card
      className={'grow shadow-xl bg-[#323035] text-[#a7a7a8] border-[#3c393f]'}
    >
      <CardHeader>
        <CardTitle className={'uppercase text-white text-center'}>
          {walletName}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row space-between items-center gap-6'}>
            <Badge variant={provider === walletName ? 'success' : 'secondary'}>
              {provider === walletName ? 'Connected' : 'Disconnected'}
            </Badge>
            <Button
              className={'w-full bg-[#232225] '}
              disabled={!hasWallet[walletName]}
              variant={'default'}
              onClick={() =>
                provider === walletName
                  ? disconnect()
                  : connectWallet(walletName)
              }
            >
              {!hasWallet[walletName]
                ? 'Missing Wallet'
                : provider === walletName
                  ? 'Disconnect'
                  : 'Connect'}
            </Button>
          </div>

          <div className={'flex flex-col space-between items-center gap-2'}>
            {provider !== XVERSE && provider !== OYL && (
              <Button
                className={'w-full bg-[#232225]'}
                disabled={!hasWallet[walletName] || provider !== walletName}
                variant={provider !== walletName ? 'secondary' : 'default'}
                onClick={() =>
                  provider !== walletName
                    ? null
                    : switchNet(network === TESTNET ? MAINNET : TESTNET)
                }
              >
                Switch Network
              </Button>
            )}
            <Button
              className={'w-full bg-[#232225]'}
              disabled={!hasWallet[walletName] || provider !== walletName}
              variant={provider !== walletName ? 'secondary' : 'default'}
              onClick={() => (provider !== walletName ? null : send())}
            >
              Send BTC
            </Button>
            {provider !== OYL && (
              <Button
                className={'w-full bg-[#232225]'}
                disabled={!hasWallet[walletName] || provider !== walletName}
                variant={provider !== walletName ? 'secondary' : 'default'}
                onClick={() =>
                  provider !== walletName
                    ? null
                    : sign('Laser Eyes - Test Message').then(console.log)
                }
              >
                Sign Message
              </Button>
            )}
            <span
              className={
                'w-full flex flex-row items-center justify-center gap-4'
              }
            >
              <Button
                className={'w-full bg-[#232225]'}
                disabled={
                  !hasWallet[walletName] || provider !== walletName || !unsigned
                }
                variant={provider !== walletName ? 'secondary' : 'default'}
                onClick={() =>
                  provider !== walletName ? null : signUnsignedPsbt()
                }
              >
                Sign{broadcast ? ' & Send' : ''} PSBT
              </Button>
              {provider !== XVERSE && (
                <Button
                  className={clsx(
                    'shrink bg-[#232225] disabled:text-gray-500',
                    finalize ? 'text-white' : 'bg-[#232225]'
                  )}
                  disabled={
                    !hasWallet[walletName] ||
                    provider !== walletName ||
                    !unsigned
                  }
                  variant={finalize ? 'outline' : 'default'}
                  onClick={() => {
                    setFinalize(!finalize)
                    setBroadcast(false)
                  }}
                >
                  Finalize
                </Button>
              )}
              <Button
                className={clsx(
                  finalize || provider !== UNISAT
                    ? 'text-white'
                    : 'bg-[#232225]',
                  'shrink disabled:text-gray-500'
                )}
                disabled={
                  !hasWallet[walletName] ||
                  provider !== walletName ||
                  (!finalize && provider !== XVERSE) ||
                  !unsigned
                }
                variant={
                  broadcast ? 'destructive' : finalize ? 'ghost' : 'default'
                }
                onClick={() => setBroadcast(!broadcast)}
              >
                Broadcast
              </Button>
            </span>
            {provider !== XVERSE && (
              <Button
                className={'w-full bg-[#232225]'}
                disabled={
                  !hasWallet[walletName] ||
                  provider !== walletName ||
                  !signed ||
                  !unsigned
                }
                variant={provider !== walletName ? 'secondary' : 'default'}
                onClick={() => (provider !== walletName ? null : push())}
              >
                Push PSBT
              </Button>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default WalletCard
