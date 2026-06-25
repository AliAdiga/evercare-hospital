'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const stats = [
  { number: 120000, suffix: '+', label: 'Patients Treated', icon: '🫀' },
  { number: 240, suffix: '+', label: 'Specialist Doctors', icon: '👨‍⚕️' },
  { number: 38, suffix: '+', label: 'Departments', icon: '🏥' },
  { number: 40, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { number: 98, suffix: '%', label: 'Patient Satisfaction', icon: '⭐' },
  { number: 24, suffix: '/7', label: 'Emergency Care', icon: '🚑' },
]

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!trigger || started.current) return
    started.current = true

    // Respect users who prefer reduced motion — show the final value instantly.
    const reduce = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(target)
      return
    }

    const duration = 2200
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutExpo(progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }

    requestAnimationFrame(tick)
  }, [trigger, target])

  return <span>{count.toLocaleString()}{suffix}</span>
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [forced, setForced] = useState(false)

  // Fallback: if the intersection observer never fires (edge cases / odd
  // viewports), still count up shortly after mount so numbers never sit at 0.
  useEffect(() => {
    const id = setTimeout(() => setForced(true), 1800)
    return () => clearTimeout(id)
  }, [])

  const go = inView || forced

  return (
    <section style={{
      padding: '80px 8%',
      background: 'linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-light) 100%)',
    }}>
      {/* Header */}
      <SectionHeading
        index="02"
        eyebrow="By the numbers"
        title="Trusted by thousands, every day"
        center
        light
      />

      {/* Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={go ? 'show' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px',
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardVariants}
            whileHover={{
              y: -8,
              background: 'rgba(255,255,255,0.22)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            }}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              padding: '32px 24px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              cursor: 'default',
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={go ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300 }}
              style={{ fontSize: '2.2rem', marginBottom: '12px' }}
            >
              {stat.icon}
            </motion.div>

            <div style={{
              fontFamily: 'Lora, serif',
              fontSize: '2.4rem', color: 'white',
              fontWeight: 600, marginBottom: '8px',
            }}>
              <CountUp target={stat.number} suffix={stat.suffix} trigger={go} />
            </div>

            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}