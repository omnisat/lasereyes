import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { useLaserEyes } from '@omnisat/lasereyes'
import { satoshisToBTC } from '../../src/lib/helpers'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat', 'oyl']
  const { address, paymentAddress, publicKey, network, provider, balance } =
    useLaserEyes()

  const [signature, setSignature] = useState<string>('')
  const [signedPsbt, setSignedPsbt] = useState<
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
              <span className={'text-sm'}>
                {address?.length > 0 ? address : '--'}
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
              <span className={'text-sm'}>
                {paymentAddress?.length > 0 ? paymentAddress : '--'}
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
              <span className={'text-sm'}>
                {publicKey?.length > 0 ? publicKey : '--'}
              </span>
            </div>
          </div>

          <div className={'flex flex-col items-center'}>
            <span className={clsx('font-black')}>Signature</span>{' '}
            <span className={'text-sm'}>
              {signature?.length > 0 ? signature : '--'}{' '}
            </span>
          </div>
          <div className={clsx('font-black')}>
            {signedPsbt?.signedPsbtBase64}
          </div>
          <div className={clsx('font-black')}>{signedPsbt?.signedPsbtHex}</div>
        </div>
      </div>
      <div className={'flex flex-wrap gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={walletName}
            setSignature={setSignature}
          />
        ))}
      </div>
    </div>
  )
}

export default App
