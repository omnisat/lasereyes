import {
  MAGIC_EDEN,
  MAINNET,
  OKX,
  OYL,
  PHANTOM,
  TESTNET,
  UNISAT,
  useLaserEyes,
  WIZZ,
  XVERSE,
  LEATHER,
  WalletIcon,
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
import { useEffect, useRef, useState } from 'react'
import { createPsbt } from '@/lib/btc'
import useUtxos from '@/hooks/useUtxos'
import { getMempoolSpaceUrl, getOrdpoolSpaceUrl } from '@/lib/urls'
import { clsx } from 'clsx'
import { cn } from '@/lib/utils'
import { MIME_TYPE_TEXT } from '../../src/consts/inscribe'

const WalletCard = ({
  walletName,
  setSignature,
  unsignedPsbt,
  setUnsignedPsbt,
  setSignedPsbt,
}: {
  walletName:
    | typeof UNISAT
    | typeof XVERSE
    | typeof OYL
    | typeof MAGIC_EDEN
    | typeof OKX
    | typeof LEATHER
    | typeof PHANTOM
    | typeof WIZZ
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
    isInitializing,
    connect,
    disconnect,
    address,
    connected,
    provider,
    network,
    paymentAddress,
    paymentPublicKey,
    balance,
    hasUnisat,
    hasXverse,
    hasOyl,
    hasMagicEden,
    hasOkx,
    hasLeather,
    hasPhantom,
    hasWizz,
    sendBTC,
    signMessage,
    signPsbt,
    pushPsbt,
    switchNetwork,
  } = useLaserEyes()

  const [hasError, setHasError] = useState(false)
  const hasRun = useRef(false)

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
    [MAGIC_EDEN]: hasMagicEden,
    okx: hasOkx,
    leather: hasLeather,
    phantom: hasPhantom,
    wizz: hasWizz,
  }

  useEffect(() => {
    if (utxos.length > 0 && connected && !hasRun.current && !hasError) {
      hasRun.current = true
      createPsbt(
        utxos,
        paymentAddress,
        paymentPublicKey,
        network as typeof MAINNET | typeof TESTNET
      )
        .then((psbt) => {
          if (psbt && psbt.toHex() !== unsigned) {
            setUnsignedPsbt(psbt.toHex())
            setUnsigned(psbt.toHex())
            setSigned(undefined)
            setSignedPsbt(undefined)
          }
        })
        .catch((e) => {
          setHasError(true)
          toast.error(e.message)
        })
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

  const connectWallet = async (
    walletName:
      | typeof UNISAT
      | typeof XVERSE
      | typeof OYL
      | typeof MAGIC_EDEN
      | typeof OKX
      | typeof LEATHER
      | typeof PHANTOM
      | typeof WIZZ
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

  const sign = async (message: string) => {
    setSignature('')
    try {
      const signature = await signMessage(message)
      setSignature(signature)
      if (typeof signature === 'string') {
        toast.success(
          <div className={'flex flex-col gap-2 items-center'}>
            <span className={'font-black'}>signed message</span>{' '}
            <div className={'text-xs'}>{signature}</div>
          </div>
        )
        return
      }
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
      setSigned(signPsbtResponse?.signedPsbtHex)
      if (!signPsbtResponse) {
        throw new Error('Failed to sign PSBT')
      }

      //@ts-ignore
      setSignedPsbt(signPsbtResponse)

      console.log(signPsbtResponse)

      if (
        typeof signPsbtResponse.signedPsbtHex === 'string' &&
        !signPsbtResponse.txId
      ) {
        toast.success(
          <div className={'flex flex-col gap-2 items-center'}>
            <span className={'font-black'}>
              signed {finalize ? '& finalized' : ''} PSBT
            </span>{' '}
            <div className={'text-xs'}>{signPsbtResponse.signedPsbtHex}</div>
          </div>
        )
        return
      }

      // @ts-ignore
      if (typeof signPsbtResponse.txId === 'string') {
        setUnsigned(undefined)
        setSignedPsbt(undefined)
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

  const isConnected = provider === walletName
  const isMissingWallet = !hasWallet[walletName]

  return (
    <Card
      className={
        'grow max-w-[346px] w-[346px] shadow-xl bg-[#323035] text-[#a7a7a8] border-[#3c393f]'
      }
    >
      <CardHeader>
        <CardTitle
          className={
            'uppercase text-white text-center flex flex-row items-center justify-center gap-2'
          }
        >
          <WalletIcon walletName={walletName} size={42} />
          {walletName.replace('-', ' ')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row space-between items-center gap-6'}>
            <Badge variant={isConnected ? 'success' : 'secondary'}>
              {isConnected ? 'connected' : 'disconnected'}
            </Badge>
            <Button
              className={'w-full bg-[#232225] '}
              disabled={isMissingWallet}
              variant={'default'}
              onClick={() =>
                isConnected ? disconnect() : connectWallet(walletName)
              }
            >
              {isInitializing
                ? 'initializing..'
                : isMissingWallet
                  ? 'missing wallet'
                  : isConnected
                    ? 'disconnect'
                    : 'connect'}
            </Button>
          </div>

          <div className={'flex flex-col space-between items-center gap-2'}>
            <Button
              className={'w-full bg-[#232225]'}
              disabled={isMissingWallet || !isConnected}
              variant={!isConnected ? 'secondary' : 'default'}
              onClick={() =>
                !isConnected
                  ? null
                  : switchNet(network === TESTNET ? MAINNET : TESTNET)
              }
            >
              switch network
            </Button>
            <Button
              className={'w-full bg-[#232225]'}
              disabled={isMissingWallet || !isConnected}
              variant={!isConnected ? 'secondary' : 'default'}
              onClick={() => (!isConnected ? null : send())}
            >
              send BTC
            </Button>
            <Button
              className={'w-full bg-[#232225]'}
              disabled={isMissingWallet || !isConnected}
              variant={!isConnected ? 'secondary' : 'default'}
              onClick={() =>
                !isConnected
                  ? null
                  : sign('Laser Eyes - Test Message').then(console.log)
              }
            >
              sign message
            </Button>
            <span
              className={
                'w-full flex flex-row items-center justify-center gap-4'
              }
            >
              <Button
                className={'w-full bg-[#232225]'}
                disabled={isMissingWallet || !isConnected || !unsigned}
                variant={!isConnected ? 'secondary' : 'default'}
                onClick={() => (!isConnected ? null : signUnsignedPsbt())}
              >
                sign{broadcast ? ' & Send' : ''} PSBT
              </Button>
              <Button
                className={clsx(
                  'shrink bg-[#232225] disabled:text-gray-500',
                  finalize ? 'text-white' : 'bg-[#232225]'
                )}
                disabled={isMissingWallet || !isConnected || !unsigned}
                variant={finalize ? 'outline' : 'default'}
                onClick={() => {
                  setFinalize(!finalize)
                  setBroadcast(false)
                }}
              >
                finalize
              </Button>
              <Button
                className={clsx(
                  finalize || provider !== UNISAT
                    ? 'text-white'
                    : 'bg-[#232225]',
                  'shrink disabled:text-gray-500 disabled'
                )}
                disabled={
                  isMissingWallet ||
                  !isConnected ||
                  (!finalize && provider !== XVERSE) ||
                  !unsigned
                }
                variant={
                  broadcast ? 'destructive' : finalize ? 'ghost' : 'default'
                }
                onClick={() => setBroadcast(!broadcast)}
              >
                broadcast
              </Button>
            </span>

            <Button
              className={'w-full bg-[#232225]'}
              disabled={isMissingWallet || !isConnected || !signed || !unsigned}
              variant={!isConnected ? 'secondary' : 'default'}
              onClick={() => (!isConnected ? null : push())}
            >
              push PSBT
            </Button>
            {/*<Button*/}
            {/*  disabled={*/}
            {/*    isMissingWallet ||*/}
            {/*    !isConnected ||*/}
            {/*    isFetchingCommitPsbt ||*/}
            {/*    isInscribing*/}
            {/*  }*/}
            {/*  className={'w-full bg-[#232225] gap-1'}*/}
            {/*  variant={!isConnected ? 'secondary' : 'default'}*/}
            {/*  onClick={() => (!isConnected ? null : inscribeText('Laser_Eyes'))}*/}
            {/*>*/}
            {/*  {isInscribing ? (*/}
            {/*    'inscribing...'*/}
            {/*  ) : isFetchingCommitPsbt ? (*/}
            {/*    ' creating commit psbt'*/}
            {/*  ) : (*/}
            {/*    <>*/}
            {/*      inscribe{' '}*/}
            {/*      <span*/}
            {/*        className={cn(*/}
            {/*          ' text-[8px] p-.5 px-1',*/}
            {/*          isConnected ? 'bg-black' : ''*/}
            {/*        )}*/}
            {/*      >*/}
            {/*        Laser_Eyes*/}
            {/*      </span>*/}
            {/*    </>*/}
            {/*  )}*/}
            {/*</Button>*/}
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default WalletCard
