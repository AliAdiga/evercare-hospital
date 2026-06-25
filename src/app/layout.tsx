import type { Metadata } from 'next'
import './globals.css'
import AccessibilityWidget from '@/components/AccessibilityWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://evercare-hospital-blush.vercel.app'),
  title: {
    default: 'Evercare Hospital — Where Healing Begins',
    template: '%s — Evercare Hospital',
  },
  description:
    'World-class medical care with a human touch. Evercare Hospital brings together top physicians, advanced technology, and compassionate care across 38+ specialties. Book an appointment today.',
  keywords: [
    'Evercare Hospital', 'hospital', 'cardiology', 'neurology', 'pediatrics',
    'orthopedics', 'oncology', 'emergency care', 'book appointment', 'specialists',
  ],
  openGraph: {
    type: 'website',
    url: 'https://evercare-hospital-blush.vercel.app',
    siteName: 'Evercare Hospital',
    title: 'Evercare Hospital — Where Healing Begins',
    description: 'World-class medical care with a human touch. 38+ specialties, 240 specialists, 24/7 emergency care.',
    images: [{ url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80', width: 1200, height: 630, alt: 'Evercare Hospital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evercare Hospital — Where Healing Begins',
    description: 'World-class medical care with a human touch.',
  },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: 'Evercare Hospital',
  description: 'World-class medical care with a human touch, serving the community since 1984.',
  url: 'https://evercare-hospital-blush.vercel.app',
  foundingDate: '1984',
  medicalSpecialty: ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Ophthalmology', 'Pulmonology', 'Radiology'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4200 Evercare Boulevard',
    addressLocality: 'Downtown Medical District',
    addressRegion: 'CA',
    postalCode: '90210',
    addressCountry: 'US',
  },
  telephone: '+1-800-382-7227',
  openingHours: 'Mo-Su 00:00-23:59',
  availableService: {
    '@type': 'EmergencyService',
    name: '24/7 Emergency Care',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  )
}
