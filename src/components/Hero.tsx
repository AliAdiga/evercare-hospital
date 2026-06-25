'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: 'easeOut' as const },
  }),
}

const heroStats = [
  { num: '240', label: 'Specialists' },
  { num: '38', label: 'Departments' },
  { num: '98%', label: 'Satisfaction' },
  { num: '24/7', label: 'Emergency' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: 'var(--midnight)' }}>
      {/* Full-bleed photography */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1800&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.42)',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(14,58,63,0.92) 0%, rgba(14,58,63,0.45) 50%, rgba(14,58,63,0.2) 100%)' }} />

      {/* Content frame */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 clamp(1.25rem, 5vw, 5rem)' }}>

        {/* Top editorial markers */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'calc(70px + 28px)', color: 'rgba(255,255,255,0.6)' }}
        >
          <span className="evc-index" style={{ color: 'rgba(255,255,255,0.6)' }}>01 — Welcome</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Est. 1984 · Downtown Medical District</span>
        </motion.div>
        <motion.hr custom={0} variants={fadeUp} initial="hidden" animate="show" style={{ border: 0, height: '1px', background: 'rgba(255,255,255,0.18)', margin: '20px 0 0' }} />

        {/* Headline block */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '48px 0' }}>
          <div style={{ maxWidth: '900px' }}>
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate="show" className="evc-eyebrow" style={{ color: 'var(--terracotta-light)', marginBottom: '24px', display: 'block' }}>
              Trusted by 120,000+ patients
            </motion.p>
            <motion.h1
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', lineHeight: 0.98, color: '#fff', margin: 0, fontWeight: 500 }}
            >
              Where healing<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--terracotta-light)' }}>begins</span>.
            </motion.h1>
            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '540px', margin: '32px 0 40px' }}
            >
              World-class medicine and genuinely human care, together — because you deserve both the science and the warmth.
            </motion.p>
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#appointment" style={{ background: 'var(--terracotta)', color: '#fff', padding: '17px 38px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                Book an appointment
              </a>
              <a href="#departments" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '17px 38px', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                Explore care
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom stat band */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="evc-hero__stats"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.18)', paddingBottom: '40px' }}
        >
          {heroStats.map((s, i) => (
            <div key={s.label} style={{ padding: '28px 24px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
              <div className="evc-display" style={{ fontSize: 'clamp(2rem, 3.4vw, 3.2rem)', color: '#fff', fontWeight: 500, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '10px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
