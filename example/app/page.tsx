'use client'
import { LaserEyesProvider } from '@omnisat/lasereyes'
import App from '@/components/App'

export default function Home() {
  return (
    <LaserEyesProvider>
      <App />
    </LaserEyesProvider>
  )
}
