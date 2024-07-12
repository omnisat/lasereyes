'use client'
import { LaserEyesProvider, MAINNET } from '@omnisat/lasereyes'
import App from '@/components/App'

export default function Home() {
  return (
    <LaserEyesProvider config={{ network: MAINNET }}>
      <App />
    </LaserEyesProvider>
  )
}
