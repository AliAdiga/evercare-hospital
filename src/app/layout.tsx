import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evercare Hospital — Where Healing Begins',
  description: 'World-class medical care with a human touch.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}