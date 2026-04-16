import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import PortfolioFooter from '@/components/layout/PortfolioFooter'
import PortfolioHeader from '@/components/layout/PortfolioHeader'
import portfolioData from '@/data/portfolioData'

import './globals.css'

const inter = Inter({
  variable: '--font-family',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: portfolioData.name,
  description: portfolioData.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PortfolioHeader />
        <main className="safe-container">{children}</main>
        <PortfolioFooter />
      </body>
    </html>
  )
}
