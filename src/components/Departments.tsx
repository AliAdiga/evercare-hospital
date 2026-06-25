'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const departments = [
  { icon: '🫀', color: '#fdeaea', name: 'Cardiology', desc: 'Advanced heart care including diagnostics, interventional procedures, and cardiac rehabilitation.' },
  { icon: '🧠', color: '#e8f5f0', name: 'Neurology', desc: 'Comprehensive neurological care for stroke, epilepsy, and brain tumors.' },
  { icon: '👶', color: '#fef3e2', name: 'Pediatrics', desc: 'Gentle, expert care for children from newborns through adolescence.' },
  { icon: '🦴', color: '#f0eeff', name: 'Orthopedics', desc: 'Joint replacement, sports injuries, spine surgery, and rehabilitation.' },
  { icon: '🔬', color: '#fdeaea', name: 'Oncology', desc: 'Cutting-edge cancer treatment including immunotherapy and radiation.' },
  { icon: '👁', color: '#e8f5f0', name: 'Ophthalmology', desc: 'Full-spectrum eye care including cataract surgery and LASIK.' },
  { icon: '🫁', color: '#fef3e2', name: 'Pulmonology', desc: 'Respiratory care for asthma, COPD, sleep apnea, and lung conditions.' },
  { icon: '🩻', color: '#fdeaea', name: 'Radiology', desc: 'State-of-the-art imaging including MRI, CT, and PET scans.' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Departments() {
  return (
    <section id="departments" style={{ padding: '100px 8%', background: 'var(--warm-white)' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <div style={{
          color: 'var(--terracotta)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
        }}>
          Medical Departments
        </div>
        <h2 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
          color: 'var(--midnight)', lineHeight: 1.25, marginBottom: '16px',
        }}>
          Everything under one roof
        </h2>
        <p style={{
          fontSize: '1rem', color: 'var(--muted)',
          lineHeight: 1.7, maxWidth: '560px', margin: '0 auto',
        }}>
          From routine check-ups to complex surgeries, our multidisciplinary teams
          are equipped to care for every aspect of your health.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}
      >
        {departments.map((dept) => (
          <motion.div
            key={dept.name}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 16px 48px rgba(199,115,90,0.13)',
              borderColor: 'var(--terracotta)',
            }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              background: 'white', borderRadius: '20px',
              padding: '32px', border: '1px solid var(--border)',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Subtle corner glow on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                background: `radial-gradient(circle at top right, ${dept.color}, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.12, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              style={{
                width: '54px', height: '54px', borderRadius: '14px',
                background: dept.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', marginBottom: '20px',
              }}
            >
              {dept.icon}
            </motion.div>

            <div style={{
              fontFamily: 'Lora, serif', fontSize: '1.1rem',
              color: 'var(--midnight)', marginBottom: '8px', fontWeight: 600,
            }}>
              {dept.name}
            </div>

            <div style={{
              fontSize: '0.85rem', color: 'var(--muted)',
              lineHeight: 1.6, marginBottom: '16px',
            }}>
              {dept.desc}
            </div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                href={`/departments/${dept.name.toLowerCase()}`}
                style={{
                  fontSize: '0.82rem', color: 'var(--terracotta)',
                  fontWeight: 600, textDecoration: 'none',
                }}
              >
                Learn more →
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}