'use client'

import { motion } from 'framer-motion'

const features = [
  { title: 'Experienced & Caring', sub: 'Specialists across 38 fields', icon: 'M12 21s-7-4.35-9.5-8.5C.5 9 2.5 5 6 5c2 0 3.2 1 4 2 .8-1 2-2 4-2 3.5 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z' },
  { title: 'Comprehensive Check-Ups', sub: 'For every age and stage', icon: 'M9 11l3 3 8-8 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
  { title: 'Advanced Diagnostics', sub: 'On-site labs & imaging', icon: 'M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3 M8 3h8 M7 16h10' },
  { title: 'Emergency Care 24/7', sub: 'When every second matters', icon: 'M12 8v4l3 2 M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', background: 'var(--warm-white)' }}>
      {/* Hero banner */}
      <div style={{ position: 'relative', minHeight: 'min(86vh, 760px)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1800&q=80)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(22,38,92,0.82) 0%, rgba(22,38,92,0.5) 45%, rgba(22,38,92,0.15) 100%)' }} />

        {/* Oversized + motif */}
        <span aria-hidden="true" style={{ position: 'absolute', left: '2%', bottom: '-6%', fontSize: 'clamp(14rem, 30vw, 34rem)', lineHeight: 1, color: 'rgba(255,255,255,0.08)', fontWeight: 700, pointerEvents: 'none', userSelect: 'none' }}>+</span>

        <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1.5rem, 6vw, 6rem)', maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ maxWidth: '680px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', padding: '7px 16px', borderRadius: '100px', marginBottom: '26px' }}>
              <span style={{ color: 'var(--terracotta-light)', fontWeight: 700 }}>+</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', color: '#fff' }}>Trusted since 1984 · 120,000+ patients</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', lineHeight: 1.05, color: '#fff', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Compassionate care<br />for every stage of life
            </h1>

            <p style={{ fontSize: 'clamp(1.02rem, 1.4vw, 1.18rem)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, maxWidth: '520px', margin: '24px 0 36px' }}>
              World-class medicine and a genuinely human touch — from routine check-ups to complex surgery, our specialists are here for you and your family.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#appointment" style={{ background: 'var(--terracotta)', color: '#fff', padding: '15px 34px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 10px 30px rgba(21,177,164,0.35)' }}>Book online</a>
              <a href="#departments" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '15px 34px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Our departments</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature strip */}
      <div style={{ background: 'var(--blush)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '28px clamp(1.5rem, 6vw, 6rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {features.map((f) => (
            <div key={f.title} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--warm-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(22,38,92,0.08)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={f.icon} />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--navy)', lineHeight: 1.25 }}>{f.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
