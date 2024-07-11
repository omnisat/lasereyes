import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat', 'oyl', 'xverse']

  const [address, setAddress] = useState<string>('')
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
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-col items-center p-12 border'}>
        <div className={clsx('')}>{address}</div>
        <div className={clsx('')}>{signature}</div>
        <div className={clsx('')}>{signedPsbt?.signedPsbtBase64}</div>
        <div className={clsx('')}>{signedPsbt?.signedPsbtHex}</div>
      </div>
      <div className={'flex flex-wrap gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={walletName}
            setAddress={setAddress}
            setSignature={setSignature}
            setSignedPsbt={setSignedPsbt}
          />
        ))}
      </div>
    </div>
  )
}

export default App
