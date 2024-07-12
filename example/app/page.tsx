'use client'
import { LaserEyesProvider, MAINNET, TESTNET } from '@omnisat/lasereyes'
import App from '@/components/App'

export default function Home() {
  return (
    <LaserEyesProvider>
      <App />
    </LaserEyesProvider>
  )
}
