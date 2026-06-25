'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }
  }),
}

const stats = [
  { num: '38+', label: 'Specialties' },
  { num: '240', label: 'Specialists' },
  { num: '98%', label: 'Patient Satisfaction' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', paddingTop: '70px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(14,58,63,0.9) 0%, rgba(14,58,63,0.35) 100%)',
      }} />

      {/* Content */}
      <div className="evc-hero__content" style={{
        position: 'relative', zIndex: 1,
        minHeight: 'calc(100vh - 70px)',
        display: 'flex', alignItems: 'center',
        padding: '80px 8%',
      }}>
        <div style={{ maxWidth: '640px' }}>

          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(219,106,71,0.22)', color: '#f0a98e',
              border: '1px solid rgba(219,106,71,0.45)',
              padding: '6px 16px', borderRadius: '100px',
              fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f0a98e', display: 'inline-block' }}
            />
            Trusted Since 1984 · 120,000+ Patients Served
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontFamily: 'Lora, serif',
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              lineHeight: 1.15, color: 'white', marginBottom: '24px',
            }}
          >
            Your health,<br />
            our <em style={{ color: 'var(--terracotta-light)', fontStyle: 'italic' }}>deepest</em><br />
            commitment.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontSize: '1.1rem', lineHeight: 1.8,
              color: 'rgba(255,255,255,0.75)', maxWidth: '500px', marginBottom: '44px',
            }}
          >
            Evercare brings together world-class physicians, advanced technology,
            and genuine human care — because you deserve both the science and the warmth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--terracotta)', color: 'white',
                padding: '16px 34px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                cursor: 'pointer',
              }}
            >
              📅 Book Appointment
            </motion.a>
            <motion.a
              href="#departments"
              whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.7)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                border: '2px solid rgba(255,255,255,0.35)', color: 'white',
                padding: '16px 34px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="evc-hero__stats"
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            style={{
              display: 'flex', gap: '48px', marginTop: '64px',
              paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              >
                <div style={{ fontFamily: 'Lora, serif', fontSize: '2.2rem', color: 'white', fontWeight: 600 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating card */}
        <motion.div
          className="evc-hero__floating-card"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ y: -6, boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}
          style={{
            position: 'absolute', right: '8%', bottom: '15%',
            background: 'white', borderRadius: '20px',
            padding: '24px 28px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', gap: '16px',
            maxWidth: '300px',
            cursor: 'default',
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&q=80"
            alt="Dr. Sarah Okonkwo, Cardiologist"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--midnight)' }}>Dr. Sarah Okonkwo</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 600, marginTop: '2px' }}>Cardiology</div>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}
            >
              🟢 Available Today
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}