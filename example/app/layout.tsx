import './globals.css'
import { Space_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import AppLayout from '@/components/AppLayout'

const inter = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background flex flex-col items-center justify-center font-sans antialiased',
          inter.className
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
