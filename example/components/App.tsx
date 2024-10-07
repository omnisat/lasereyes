'use client'
import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import {
  FRACTAL_TESTNET,
  LEATHER,
  MAGIC_EDEN,
  MAINNET,
  OKX,
  OYL,
  PHANTOM,
  SIGNET,
  TESTNET,
  UNISAT,
  useLaserEyes,
  WalletIcon,
  WIZZ,
  ASIGNA,
  ORANGE,
  XVERSE,
} from '@omnisat/lasereyes'
import { satoshisToBTC } from '@/lib/btc'
import { cn, truncateString } from '@/lib/utils'
import ClickToCopy from '@/components/ClickToCopy'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { getPackageVersion } from '@/lib/github'
import { badgeVariants } from '@/components/ui/badge'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { RxReload } from 'react-icons/rx'

const App = ({
  setNetwork,
}: {
  setNetwork: (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof SIGNET
      | typeof FRACTAL_TESTNET
  ) => void
}) => {
  const wallets = [
    LEATHER,
    MAGIC_EDEN,
    OKX,
    ORANGE,
    OYL,
    UNISAT,
    WIZZ,
    XVERSE,
    ASIGNA,
  ]
  const {
    address,
    paymentAddress,
    publicKey,
    paymentPublicKey,
    network,
    getBalance,
    switchNetwork,
    provider,
    balance,
  } = useLaserEyes()

  const [pkgVersion, setPkgVersion] = useState<string | undefined>()
  const [signature, setSignature] = useState<string>('')
  const [unsignedPsbt, setUnsignedPsbt] = useState<string | undefined>()
  const [signedPsbt, setSignedPsbt] = useState<
    | string
    | {
        signedPsbtHex: string
        signedPsbtBase64: string
      }
    | undefined
  >()

  useEffect(() => {
    getPackageVersion().then((version) => {
      setPkgVersion(version)
    })
  }, [])

  useEffect(() => {
    setSignature('')
    setUnsignedPsbt(undefined)
    setSignedPsbt(undefined)
  }, [address])

  // @ts-ignore
  const total = satoshisToBTC(balance)

  const switchNet = async (
    network:
      | typeof MAINNET
      | typeof TESTNET
      | typeof SIGNET
      | typeof FRACTAL_TESTNET
  ) => {
    try {
      await switchNetwork(network)
      setNetwork(network)
    } catch (e) {
      // @ts-ignore
      toast.error(e.message)
    }
  }

  return (
    <div
      className={
        'flex flex-col gap-4 w-full mt-12 mb-24 max-w-[1200px] px-12 font-windows'
      }
    >
      <div className={'w-full flex gap-2 flex-row justify-center items-center'}>
        <Image
          src={
            address ? '/lasereyes_connected.svg' : '/lasereyes_disconnected.svg'
          }
          alt={address ? 'Laser Eyes Connected' : 'Laser Eyes Disconnected'}
          width={300}
          height={300}
        />
        <Link
          className={cn(
            badgeVariants({ variant: 'outline' }),
            'self-end mb-1.5 text-orange-500 border-orange-500 hover:border-white hover:bg-white hover:text-black transition-all text-md'
          )}
          href={'https://github.com/omnisat/lasereyes'}
        >
          {pkgVersion ? `v ${pkgVersion}` : '--'}
        </Link>

        <div className={'grow'} />
        <Link
          href={'https://www.lasereyes.build/docs/getting-started'}
          className={
            'self-end font-windows text-white hover:text-orange-500 transition-all'
          }
        >
          docs
        </Link>
        <Link
          href={'https://github.com/omnisat/lasereyes/tree/main/example'}
          target={'_blank'}
          className={
            'self-end font-windows text-white hover:text-orange-500 transition-all'
          }
        >
          view source
        </Link>
      </div>
      <div className={'border border-[#3c393f] w-full text-xl grow pb-8'}>
        <div className={'flex flex-row items-center gap-4 '}>
          <div className={'grow'} />
          <div className={'flex flex-col p-4 items-center'}>
            <Select onValueChange={(e) => switchNet(e as any)}>
              <SelectTrigger className="">
                <SelectValue
                  placeholder={network?.length > 0 ? network : '--'}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mainnet">mainnet</SelectItem>
                <SelectItem value="testnet">testnet</SelectItem>
                <SelectItem value="testnet4">testnet4</SelectItem>
                <SelectItem value="signet">signet</SelectItem>
                <SelectItem value="fractal mainnet">fractal_mainnet</SelectItem>
                <SelectItem value="fractal testnet">fractal_testnet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div
          className={'flex flex-col gap-2 text-center items-center break-all'}
        >
          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black text-orange-500')}>
                Provider
              </span>
              <span
                className={clsx(
                  'text-lg flex flex-row gap-2 items-center justify-center',
                  provider?.length > 0 ? 'text-white' : 'text-gray-500'
                )}
              >
                {provider && <WalletIcon walletName={provider} size={24} />}{' '}
                {provider?.length > 0 ? provider : '--'}
              </span>
            </div>
          </div>
          <div
            className={
              'flex flex-row items-center gap-6 justify-center space-around'
            }
          >
            <div className={'flex flex-row gap-2'}>
              <div className={'flex flex-col items-center'}>
                <span
                  className={clsx('font-black text-orange-500 justify-center')}
                >
                  address (taproot)
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    address?.length > 0 ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {address?.length > 0 && (
                    <span className={'flex flex-row gap-4'}>
                      <Link
                        href={`https://mempool.space/address/${address}`}
                        target={'_blank'}
                        className={'flex flex-row items-center gap-1'}
                      >
                        <FaExternalLinkAlt className="h-3 w-3 text-gray-500" />
                      </Link>
                      <ClickToCopy value={address as string} />
                    </span>
                  )}
                  {address?.length > 0 ? truncateString(address, 24) : '--'}
                </span>
              </div>
            </div>

            <div
              className={
                'flex flex-row items-center gap-4 justify-center space-around'
              }
            >
              <div className={'flex flex-col items-center'}>
                <span className={clsx('font-black text-orange-500')}>
                  payment address
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    paymentAddress?.length > 0 ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {paymentAddress?.length > 0
                    ? truncateString(paymentAddress, 24)
                    : '--'}
                  {paymentAddress?.length > 0 && (
                    <span className={'flex flex-row gap-4'}>
                      <ClickToCopy value={paymentAddress as string} />
                      <Link
                        href={`https://mempool.space/address/${paymentAddress}`}
                        target={'_blank'}
                        className={'flex flex-row items-center gap-1'}
                      >
                        <FaExternalLinkAlt className="h-3 w-3 text-gray-500" />
                      </Link>
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className={'flex flex-row gap-6'}>
            <div
              className={
                'flex flex-row items-center gap-4 justify-center space-around'
              }
            >
              <div className={'flex flex-col items-center'}>
                <span className={clsx('font-black text-orange-500')}>
                  public key
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    publicKey?.length > 0 ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {publicKey?.length > 0 && (
                    <ClickToCopy value={publicKey as string} />
                  )}
                  {publicKey?.length > 0 ? truncateString(publicKey, 24) : '--'}
                </span>
              </div>
            </div>
            <div
              className={
                'flex flex-row items-center gap-4 justify-center space-around'
              }
            >
              <div className={'flex flex-col items-center'}>
                <span className={clsx('font-black text-orange-500')}>
                  payment public key
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    paymentPublicKey?.length > 0
                      ? 'text-white'
                      : 'text-gray-500'
                  )}
                >
                  {paymentPublicKey?.length > 0
                    ? truncateString(paymentPublicKey, 24)
                    : '--'}
                  {paymentPublicKey?.length > 0 && (
                    <ClickToCopy value={paymentPublicKey as string} />
                  )}
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black text-orange-500')}>
                balance
              </span>
              <span
                className={clsx(
                  'text-lg flex flex-row gap-2 items-center justify-center',
                  publicKey?.length > 0 ? 'text-white' : 'text-gray-500'
                )}
              >
                {balance !== undefined ? total : '--'} BTC{' '}
                <RxReload
                  className={'cursor-pointer text-gray-600'}
                  onClick={getBalance}
                />
              </span>
            </div>
          </div>

          <div className={'flex flex-col items-center'}>
            <span className={clsx('font-black text-orange-500')}>
              signature
            </span>{' '}
            <span
              className={clsx(
                'text-md flex flex-row gap-2 items-center justify-center',
                signature?.length > 0 ? 'text-white' : 'text-gray-500'
              )}
            >
              {signature?.length > 0 ? truncateString(signature, 24) : '--'}{' '}
              {signature?.length > 0 && (
                <ClickToCopy value={signature as string} />
              )}
            </span>
          </div>
          <div
            className={
              'flex flex-row items-center gap-6 justify-center space-around'
            }
          >
            <div
              className={
                'flex flex-row items-center gap-4 justify-center space-around'
              }
            >
              <div className={'flex flex-col items-center'}>
                <span className={clsx('font-black text-orange-500')}>
                  unsigned PSBT
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    unsignedPsbt ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {unsignedPsbt && (
                    <ClickToCopy value={unsignedPsbt as string} />
                  )}
                  <Input
                    type="text"
                    className={'bg-transparent text-lg text-center border-none'}
                    placeholder="Tx Hex"
                    value={truncateString(
                      unsignedPsbt ? unsignedPsbt : '--',
                      24
                    )}
                    onChange={(e) => setUnsignedPsbt(e.target.value)}
                  />
                </span>
              </div>
            </div>

            <div
              className={
                'flex flex-row items-center gap-4 justify-center space-around'
              }
            >
              <div className={'flex flex-col items-center'}>
                <span className={clsx('font-black text-orange-500')}>
                  signed PSBT
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    // @ts-ignore
                    signedPsbt?.signedPsbtHex ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {truncateString(
                    // @ts-ignore
                    signedPsbt?.signedPsbtHex ? signedPsbt.signedPsbtHex : '--',
                    24
                  )}
                  {/*@ts-ignore*/}
                  {signedPsbt?.signedPsbtHex && (
                    //@ts-ignore
                    <ClickToCopy value={signedPsbt?.signedPsbtHex as string} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex flex-wrap justify-center gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={
              walletName as
                | typeof UNISAT
                | typeof XVERSE
                | typeof MAGIC_EDEN
                | typeof LEATHER
                | typeof PHANTOM
                | typeof OKX
                | typeof MAGIC_EDEN
                | typeof OYL
                | typeof ORANGE
                | typeof WIZZ
                | typeof ASIGNA
            }
            setSignature={setSignature}
            unsignedPsbt={unsignedPsbt}
            setUnsignedPsbt={setUnsignedPsbt}
            setSignedPsbt={setSignedPsbt}
          />
        ))}

        {/*<PollCard />*/}
        {/*<div className={'grow'} />*/}
      </div>
    </div>
  )
}

export default App
