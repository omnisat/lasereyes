'use client'
import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { MAINNET, TESTNET, useLaserEyes } from '@omnisat/lasereyes'
import useUtxos from '@/hooks/useUtxos'
import { createPsbt, satoshisToBTC } from '@/lib/btc'
import { truncateString } from '@/lib/utils'
import ClickToCopy from '@/components/ClickToCopy'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat']
  const { address, paymentAddress, publicKey, network, provider, balance } =
    useLaserEyes()

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
  }, [address])

  const unconfirmed = satoshisToBTC(balance?.unconfirmed)
  const confirmed = satoshisToBTC(balance?.confirmed)
  const total = satoshisToBTC(balance?.total)

  return (
    <div className={'flex flex-col gap-4 w-full max-w-5xl px-12'}>
      <div className={'border text-xl pb-8'}>
        <div className={'flex flex-row items-center gap-4 '}>
          <div className={'grow'} />
          <div className={'flex flex-col p-4 items-center'}>
            <span className={'text-md font-black'}>
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
              <span className={clsx('font-black')}>Provider</span>
              <span className={'text-black text-lg'}>
                {provider?.length > 0 ? provider : '--'}
              </span>
            </div>
          </div>
          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Address</span>
              <span
                className={
                  'text-xs flex flex-row gap-2 items-center justify-center'
                }
              >
                {address?.length > 0 ? address : '--'}
                <ClickToCopy value={address as string} />
              </span>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Payment Address</span>
              <span
                className={
                  'text-xs flex flex-row gap-2 items-center justify-center'
                }
              >
                {paymentAddress?.length > 0 ? paymentAddress : '--'}
                <ClickToCopy value={paymentAddress as string} />
              </span>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Balance</span>
              <span className={'text-sm'}>
                {balance !== undefined ? unconfirmed : '--'} unconfirmed
              </span>
              <span className={'text-sm'}>
                {balance !== undefined ? confirmed : '--'} confirmed
              </span>
              <span className={'text-sm'}>
                {balance !== undefined ? total : '--'} total
              </span>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Public Key</span>
              <span
                className={
                  'text-xs flex flex-row gap-2 items-center justify-center'
                }
              >
                {publicKey?.length > 0 ? publicKey : '--'}
                <ClickToCopy value={publicKey as string} />
              </span>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Unsigned PSBT</span>
              <span
                className={
                  'text-xs flex flex-row gap-2 items-center justify-center'
                }
              >
                {truncateString(unsignedPsbt ? unsignedPsbt : '--', 24)}
                <ClickToCopy value={unsignedPsbt as string} />
              </span>
            </div>
          </div>

          <div
            className={
              'flex flex-row items-center gap-4 justify-center space-around'
            }
          >
            <div className={'flex flex-col items-center'}>
              <span className={clsx('font-black')}>Signed PSBT</span>
              <span
                className={
                  'text-xs flex flex-row gap-2 items-center justify-center'
                }
              >
                {truncateString(
                  // @ts-ignore
                  signedPsbt?.signedPsbtHex ? signedPsbt.signedPsbtHex : '--',
                  24
                )}
                {/*@ts-ignore*/}
                <ClickToCopy value={signedPsbt?.signedPsbtHex as string} />
              </span>
            </div>
          </div>

          <div className={'flex flex-col items-center'}>
            <span className={clsx('font-black')}>Signature</span>{' '}
            <span
              className={
                'text-xs flex flex-row gap-2 items-center justify-center'
              }
            >
              {signature?.length > 0 ? signature : '--'}{' '}
              <ClickToCopy value={signature as string} />
            </span>
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
      </div>
    </div>
  )
}

export default App
