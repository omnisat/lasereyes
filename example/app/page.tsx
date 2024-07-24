'use client'
import { LaserEyesProvider, MAINNET, TESTNET } from '@omnisat/lasereyes'
import App from '@/components/App'
import { useState } from 'react'

export default function Home() {
  const [network, setNetwork] = useState<typeof MAINNET | typeof TESTNET>(
    MAINNET
  )
  return (
    <LaserEyesProvider config={{ network }}>
      <App />
    </LaserEyesProvider>
  )
}
