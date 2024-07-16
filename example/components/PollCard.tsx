import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { useLaserEyes } from '@omnisat/lasereyes'
import { Button } from '@/components/ui/button'

const PollCard = () => {
  const { address } = useLaserEyes()
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const wallets = ['OYL', 'XVERSE', 'LEATHER', 'WIZ', 'MAGIC EDEN', 'PHANTOM']

  const handleSubmit = async () => {
    if (selectedWallet) {
      try {
        const response = await fetch('/api/submit-poll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ wallet: selectedWallet, address }),
        })

        if (response.ok) {
          setSubmitted(true)
        } else {
          const errorData = await response.json()
          setError(errorData.error)
        }
      } catch (error) {
        setError('An unexpected error occurred')
      }
    } else {
      setError('Please select a wallet')
    }
  }

  return (
    <Card className="flex flex-col shrink items-center p-6 space-y-4 ">
      <CardHeader>
        <CardTitle className={'break-words max-w-[200px] text-center'}>
          which wallet should we support next?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-2">
        {wallets.map((wallet) => (
          <div key={wallet}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="wallet"
                value={wallet}
                onChange={() => setSelectedWallet(wallet)}
              />
              <span>{wallet}</span>
            </label>
          </div>
        ))}
        <Button
          className={'w-full'}
          disabled={submitted || address.length === 0 || !selectedWallet}
          variant={address.length === 0 ? 'secondary' : 'default'}
          onClick={handleSubmit}
        >
          {submitted
            ? 'Thank You!'
            : address.length === 0
              ? 'Connect To Vote'
              : 'Submit'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default PollCard
