import './globals.css'

import { PT_Serif, Raleway } from 'next/font/google'

import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Raleway({
  variable: '--font-sans',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        sans.variable,
        serif.variable,
      )}
    >
      <body className="relative">{children}</body>
      <Toaster />
    </html>
  )
}
