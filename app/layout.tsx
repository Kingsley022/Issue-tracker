import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import "./theme-config.css";
import { Theme } from '@radix-ui/themes'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <Navbar/>
          <main> {children} </main> 
        </Theme>
      </body>
    </html>
  )
}
