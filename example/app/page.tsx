'use client'
import {
  FRACTAL_TESTNET,
  LaserEyesProvider,
  MAINNET,
  SIGNET,
  TESTNET,
} from '@omnisat/lasereyes'
import App from '@/components/App'
import { useState } from 'react'

export default function Home() {
  const [network, setNetwork] = useState<
    typeof MAINNET | typeof TESTNET | typeof SIGNET | typeof FRACTAL_TESTNET
  >(MAINNET)
  return (
    <LaserEyesProvider config={{ network }}>
      <App setNetwork={setNetwork} />
    </LaserEyesProvider>
  )
}
