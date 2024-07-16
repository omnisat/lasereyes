'use client'
import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { useLaserEyes, UNISAT } from '@omnisat/lasereyes'
import { satoshisToBTC } from '@/lib/btc'
import { truncateString } from '@/lib/utils'
import ClickToCopy from '@/components/ClickToCopy'
import PollCard from '@/components/PollCard'
import Image from 'next/image'
import Link from 'next/link'

type SUPPORTED_WALLET_NAMES = [typeof UNISAT]
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES = [UNISAT]
  const {
    address,
    paymentAddress,
    publicKey,
    paymentPublicKey,
    network,
    provider,
    balance,
  } = useLaserEyes()

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
    setSignature('')
    setUnsignedPsbt(undefined)
    setSignedPsbt(undefined)
  }, [address])

  // @ts-ignore
  const total = satoshisToBTC(balance)

  return (
    <div
      className={'flex flex-col gap-4 w-full max-w-[1200px] px-12 font-windows'}
    >
      <div className={'w-full flex flex-row justify-center items-center'}>
        <Image
          src={
            address ? '/lasereyes_connected.svg' : '/lasereyes_disconnected.svg'
          }
          alt={address ? 'Laser Eyes Connected' : 'Laser Eyes Disconnected'}
          width={300}
          height={300}
        />
        <div className={'grow'} />
        <Link
          href={'https://www.lasereyes.build/docs/getting-started'}
          className={
            'self-end font-windows text-white hover:text-orange-500 transition-all'
          }
        >
          view docs
        </Link>
      </div>
      <div className={'border border-[#3c393f] w-full text-xl grow pb-8'}>
        <div className={'flex flex-row items-center gap-4 '}>
          <div className={'grow'} />
          <div className={'flex flex-col p-4 items-center'}>
            <span className={'text-md text-white font-black'}>
              {network?.length > 0 ? network : '--'}
            </span>
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
                  provider?.length > 0 ? 'text-[#a7a7a8]' : 'text-gray-500'
                )}
              >
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
                <span className={clsx('font-black text-orange-500')}>
                  Address
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    address?.length > 0 ? 'text-[#a7a7a8]' : 'text-gray-500'
                  )}
                >
                  {address?.length > 0 && (
                    <ClickToCopy value={address as string} />
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
                  Payment Address
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    paymentAddress?.length > 0
                      ? 'text-[#a7a7a8]'
                      : 'text-gray-500'
                  )}
                >
                  {paymentAddress?.length > 0
                    ? truncateString(paymentAddress, 24)
                    : '--'}
                  {paymentAddress?.length > 0 && (
                    <ClickToCopy value={paymentAddress as string} />
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
                  Public Key
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    publicKey?.length > 0 ? 'text-[#a7a7a8]' : 'text-gray-500'
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
                  Payment Public Key
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    paymentPublicKey?.length > 0
                      ? 'text-[#a7a7a8]'
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
                Balance
              </span>
              <span
                className={clsx(
                  'text-lg flex flex-row gap-2 items-center justify-center',
                  publicKey?.length > 0 ? 'text-[#a7a7a8]' : 'text-gray-500'
                )}
              >
                {balance !== undefined ? total : '--'} BTC
              </span>
            </div>
          </div>

          <div className={'flex flex-col items-center'}>
            <span className={clsx('font-black text-orange-500')}>
              Signature
            </span>{' '}
            <span
              className={clsx(
                'text-md flex flex-row gap-2 items-center justify-center',
                signature?.length > 0 ? 'text-[#a7a7a8]' : 'text-gray-500'
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
                  Unsigned PSBT
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    unsignedPsbt ? 'text-[#a7a7a8]' : 'text-gray-500'
                  )}
                >
                  {unsignedPsbt && (
                    <ClickToCopy value={unsignedPsbt as string} />
                  )}
                  {truncateString(unsignedPsbt ? unsignedPsbt : '--', 24)}
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
                  Signed PSBT
                </span>
                <span
                  className={clsx(
                    'text-lg flex flex-row gap-2 items-center justify-center',
                    // @ts-ignore
                    signedPsbt?.signedPsbtHex
                      ? 'text-[#a7a7a8]'
                      : 'text-gray-500'
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
      <div className={'flex flex-wrap gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={walletName}
            setSignature={setSignature}
            setUnsignedPsbt={setUnsignedPsbt}
            setSignedPsbt={setSignedPsbt}
          />
        ))}
        <PollCard />
      </div>
    </div>
  )
}

export default App
