'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 120000, suffix: '+', label: 'Patients Treated', icon: '🫀' },
  { number: 240, suffix: '+', label: 'Specialist Doctors', icon: '👨‍⚕️' },
  { number: 38, suffix: '+', label: 'Departments', icon: '🏥' },
  { number: 40, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { number: 98, suffix: '%', label: 'Patient Satisfaction', icon: '⭐' },
  { number: 24, suffix: '/7', label: 'Emergency Care', icon: '🚑' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section style={{
      padding: '80px 8%',
      background: 'linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-light) 100%)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          <span style={{ width: '20px', height: '2px', background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
          By The Numbers
          <span style={{ width: '20px', height: '2px', background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
        </div>
        <h2 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
          color: 'white', lineHeight: 1.25,
        }}>
          Trusted by thousands, every day
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px',
      }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              padding: '32px 24px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{stat.icon}</div>
            <div style={{
              fontFamily: 'Lora, serif',
              fontSize: '2.4rem', color: 'white',
              fontWeight: 600, marginBottom: '8px',
            }}>
              <CountUp target={stat.number} suffix={stat.suffix} />
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}