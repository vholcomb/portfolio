import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from './components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vicky Holcomb Portfolio',
  description: 'Vicky Holcomb Portfolio site',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout;
