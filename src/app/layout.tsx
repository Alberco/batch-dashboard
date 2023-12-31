import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'

const inter = Roboto({ subsets: ['latin'],
weight: ['300','400','500','700'] })

export const metadata: Metadata = {
  title: 'Dashboard Batch',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`relative ${inter.className}`}>      
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
