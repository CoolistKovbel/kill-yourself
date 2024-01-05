import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import AuthProvider from '@/components/providers/AuthProvider'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bored AI',
  description: 'One of your must have AI apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* Header */}
          <NavBar/>
          {children}
          {/* Footer */}
          <Footer/>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
