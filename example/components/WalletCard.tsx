import { useLaserEyes } from '@omnisat/lasereyes'
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
import { useEffect } from 'react'
import { toast } from 'sonner'

const WalletCard = ({
  walletName,
  setAddress,
  setSignature,
  setSignedPsbt,
}: {
  walletName: 'unisat' | 'oyl' | 'xverse' | 'leather'
  setAddress: (address: string) => void
  setSignature: (signature: string) => void
  setSignedPsbt: (
    signedPsbt: { signedPsbtHex: string; signedPsbtBase64: string } | undefined
  ) => void
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
    signMessage,
    signPsbt,
    switchNetwork,
  } = useLaserEyes()

  const hasWallet = {
    unisat: hasUnisat,
    oyl: hasOyl,
    leather: hasLeather,
    xverse: hasXverse,
  }

  useEffect(() => {
    if (provider === walletName) {
      setAddress(address)
    }
  }, [address])

  const sign = async (walletName: string) => {
    try {
      const signature = await signMessage(walletName)
      setSignature(signature)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${walletName} hasn't implemented signMessage yet`)
      }
    }
  }

  return (
    <Card className={'grow'}>
      <CardHeader>
        <CardTitle className={'uppercase text-center'}>{walletName}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-row space-between items-center gap-6'}>
            <Badge variant={provider === walletName ? 'success' : 'secondary'}>
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
          <div className={'flex flex-col space-between items-center gap-2'}>
            <Button
              className={'w-full'}
              disabled={!hasWallet[walletName] || provider !== walletName}
              variant={provider !== walletName ? 'secondary' : 'default'}
              onClick={() =>
                provider !== walletName
                  ? null
                  : sign(walletName).then(console.log)
              }
            >
              Sign Message
            </Button>
            <Button
              className={'w-full'}
              disabled={!hasWallet[walletName] || provider !== walletName}
              variant={provider !== walletName ? 'secondary' : 'default'}
              onClick={() =>
                provider !== walletName ? null : signPsbt(walletName)
              }
            >
              Sign PSBT
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default WalletCard
