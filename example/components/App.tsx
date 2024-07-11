import WalletCard from '@/components/WalletCard'
import { useState } from 'react'
import { clsx } from 'clsx'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat', 'oyl', 'xverse']

  const [address, setAddress] = useState<string>('')
  const [signature, setSignature] = useState<string>('')

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-col items-center p-12 border'}>
        <div className={clsx('')}>{address}</div>
        <div className={clsx('')}>{signature}</div>
      </div>
      <div className={'flex flex-wrap gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={walletName}
            setAddress={setAddress}
            setSignature={setSignature}
          />
        ))}
      </div>
    </div>
  )
}

export default App
