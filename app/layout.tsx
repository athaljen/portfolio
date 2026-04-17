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
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PortfolioHeader />
        <main className="safe-container">{children}</main>
        <PortfolioFooter />
      </body>
    </html>
  )
}
