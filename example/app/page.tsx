'use client'
import { Button } from '@/components/ui/button'
import { LaserEyesProvider, useLaserEyes } from '@omnisat/lasereyes'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { truncateString } from '@/lib/utils'

export default function Home() {
  return (
    <LaserEyesProvider>
      <App />
    </LaserEyesProvider>
  )
}

type SUPPORTED_WALLET_NAMES = 'unisat' | 'oyl' | 'xverse' | 'leather'

const App = () => {
  const wallets: SUPPORTED_WALLET_NAMES[] = [
    'unisat',
    'oyl',
    'xverse',
    'leather',
  ]

  return (
    <div className={'flex flex-wrap gap-8'}>
      {wallets.map((walletName) => (
        <WalletCard key={walletName} walletName={walletName} />
      ))}
    </div>
  )
}

const WalletCard = ({
  walletName,
}: {
  walletName: 'unisat' | 'oyl' | 'xverse' | 'leather'
}) => {
  const {
    connect,
    disconnect,
    provider,
    address,
    hasUnisat,
    hasOyl,
    hasLeather,
    hasXverse,
  } = useLaserEyes()
  const hasWallet = {
    unisat: hasUnisat,
    oyl: hasOyl,
    leather: hasLeather,
    xverse: hasXverse,
  }

  return (
    <Card className={'grow'}>
      <CardHeader>
        <CardTitle className={'uppercase text-center'}>{walletName}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-row space-between items-center gap-6'}>
          <Badge variant={provider === walletName ? 'success' : 'destructive'}>
            {provider === walletName ? 'Connected' : 'Disconnected'}
          </Badge>

          <Button
            disabled={!hasWallet[walletName]}
            variant={provider === walletName ? 'destructive' : 'default'}
            onClick={() =>
              provider === walletName ? disconnect() : connect(walletName)
            }
          >
            {provider === walletName ? 'disconnect' : 'Connect'}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className={'text-gray-700 m-auto'}>
          {provider === walletName ? truncateString(address, 16) : ''}
        </p>
      </CardFooter>
    </Card>
  )
}
