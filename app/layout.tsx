import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin DashBoard',
  description: 'Admin DashBoard of our Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
