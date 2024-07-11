import WalletCard from '@/components/WalletCard'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useLaserEyes } from '@omnisat/lasereyes'
import { truncateString } from '@/lib/utils'

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse'
const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = ['unisat', 'oyl', 'xverse']

  const { address } = useLaserEyes()

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
        <div
          className={
            'flex flex-row items-center gap-4 justify-center space-around'
          }
        >
          <Avatar className={'border'}>
            <AvatarImage
              src={
                address
                  ? `https://robohash.org/${address}.png?set=set1/shadcn.png`
                  : ''
              }
            />
            <AvatarFallback>{address[address.length - 1]}</AvatarFallback>
          </Avatar>
          <div className={clsx('text-xl font-black')}>
            {truncateString(address, 16)}
          </div>
        </div>

        <div className={clsx('')}>{signature}</div>
        <div className={clsx('')}>{signedPsbt?.signedPsbtBase64}</div>
        <div className={clsx('')}>{signedPsbt?.signedPsbtHex}</div>
      </div>
      <div className={'flex flex-wrap gap-8'}>
        {wallets.map((walletName) => (
          <WalletCard
            key={walletName}
            walletName={walletName}
            setSignature={setSignature}
            setSignedPsbt={setSignedPsbt}
          />
        ))}
      </div>
    </div>
  )
}

export default App
