'use client'

import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'

const facilities = [
  {
    slug: 'main-building',
    title: 'Main Hospital Building',
    desc: '120,000 sq ft · 8 floors · 240 beds',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=600&fit=crop&q=80',
    gridRow: '1 / 3',
    height: '500px',
  },
  {
    slug: 'operating-theatres',
    title: 'Operating Theatres',
    desc: '12 fully-equipped surgical suites',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=300&fit=crop&q=80',
    gridRow: undefined,
    height: '240px',
  },
  {
    slug: 'icu',
    title: 'Intensive Care Unit',
    desc: '24/7 monitoring · 32 beds',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop&q=80',
    gridRow: undefined,
    height: '240px',
  },
  {
    slug: 'patient-rooms',
    title: 'Patient Rooms',
    desc: 'Private & semi-private suites',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=300&fit=crop&q=80',
    gridRow: undefined,
    height: '240px',
  },
  {
    slug: 'pharmacy',
    title: 'In-House Pharmacy',
    desc: 'Open 24/7 · 4,000+ medications',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&h=300&fit=crop&q=80',
    gridRow: undefined,
    height: '240px',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" style={{ padding: '100px 8%', background: 'var(--midnight)' }}>
      <SectionHeading
        index="07"
        eyebrow="Our facilities"
        title="World-class care, world-class environment"
        intro="Our facilities are designed with your comfort and recovery in mind — from state-of-the-art operating theatres to warm, welcoming patient rooms."
        center
        light
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '16px' }}>
        {facilities.map((f) => (
          <Link
            key={f.slug}
            href={`/facilities/${f.slug}`}
            style={{
              textDecoration: 'none',
              gridRow: f.gridRow,
              borderRadius: '20px', overflow: 'hidden',
              position: 'relative', minHeight: f.height,
              display: 'block',
            }}
          >
            <div
              style={{ height: '100%', minHeight: f.height, position: 'relative', transition: 'transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <img src={f.image} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,38,92,0.9) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <div style={{ color: 'white', fontFamily: 'Lora, serif', fontSize: f.gridRow ? '1.3rem' : '1rem', fontWeight: 600, marginBottom: '4px' }}>{f.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem' }}>{f.desc}</div>
              </div>
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600 }}>
                View details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}