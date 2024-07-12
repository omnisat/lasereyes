import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { useLaserEyes } from '@omnisat/lasereyes'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat', 'oyl', 'xverse']
  const { address, paymentAddress, publicKey, network } = useLaserEyes()

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

  return (
    <div className={'flex flex-col gap-4 w-full max-w-5xl px-12'}>
      <div
        className={
          'flex flex-col gap-4 text-center items-center p-12 border text-xl break-all'
        }
      >
        <div
          className={
            'flex flex-row items-center gap-4 justify-center space-around'
          }
        >
          <div className={'flex flex-col items-center'}>
            <span className={clsx('font-black')}>Network</span>
            <span className={'text-lg'}>
              {network?.length > 0 ? network : '--'}
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
            <span className={'text-lg'}>
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
            <span className={'text-lg'}>
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
            <span className={clsx('font-black')}>Public Key</span>
            <span className={'text-lg'}>
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
        <div className={clsx('font-black')}>{signedPsbt?.signedPsbtBase64}</div>
        <div className={clsx('font-black')}>{signedPsbt?.signedPsbtHex}</div>
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
