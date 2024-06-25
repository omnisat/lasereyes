'use client'

import { ReactNode } from 'react'
import { LaserEyesProvider } from '@omnisat/lasereyes'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <LaserEyesProvider>
      <>{children}</>
    </LaserEyesProvider>
  )
}
