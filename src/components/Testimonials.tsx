'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
    role: 'Cardiac Patient',
    dept: 'Cardiology',
    rating: 5,
    text: 'The cardiology team at Evercare saved my life. From the moment I arrived, every doctor and nurse made me feel safe and cared for. Dr. Okonkwo explained everything clearly and the follow-up care was exceptional. I cannot thank them enough.',
  },
  {
    name: 'James Oduya',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
    role: 'Orthopedic Patient',
    dept: 'Orthopedics',
    rating: 5,
    text: 'After my knee replacement surgery, I was back on my feet in weeks. The physiotherapy team was incredible and the facilities are world-class. I highly recommend Evercare to anyone needing orthopedic care.',
  },
  {
    name: 'Fatima Al-Hassan',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    role: 'Pediatrics Parent',
    dept: 'Pediatrics',
    rating: 5,
    text: 'Bringing my daughter here was the best decision. The pediatric team was so gentle and patient with her. Dr. Noor took the time to explain everything to us and made my daughter feel at ease throughout her treatment.',
  },
  {
    name: 'Robert Chen',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    role: 'Neurology Patient',
    dept: 'Neurology',
    rating: 5,
    text: 'After my stroke, I was frightened and confused. The neurology team at Evercare guided me through every step of my recovery with professionalism and genuine compassion. Today I am fully recovered and forever grateful.',
  },
  {
    name: 'Maria Santos',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
    role: 'Oncology Patient',
    dept: 'Oncology',
    rating: 5,
    text: 'Going through cancer treatment is never easy, but Evercare made it bearable. The oncology team treated me like a person, not just a patient. Their cutting-edge treatments and emotional support made all the difference.',
  },
  {
    name: 'Ahmed Khalil',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80',
    role: 'Emergency Patient',
    dept: 'Emergency',
    rating: 5,
    text: 'I came in with severe chest pain late at night. Within minutes I was seen, diagnosed, and treated. The speed and professionalism of the emergency team was remarkable. Evercare truly delivers on their 24/7 promise.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section style={{ padding: '100px 8%', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: 'var(--terracotta)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          <span style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
          Patient Stories
          <span style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
        </div>
        <h2 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
          color: 'var(--midnight)', lineHeight: 1.25,
        }}>
          What our patients say
        </h2>
      </div>

      {/* Main testimonial */}
      <div style={{
        maxWidth: '800px', margin: '0 auto',
        background: 'white', borderRadius: '24px',
        padding: '56px', border: '1px solid var(--border)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Quote mark */}
        <div style={{
          position: 'absolute', top: '32px', left: '40px',
          fontFamily: 'Lora, serif', fontSize: '6rem',
          color: 'var(--blush)', lineHeight: 1, userSelect: 'none',
        }}>
          "
        </div>

        {/* Stars */}
        <div style={{ marginBottom: '24px' }}>
          {'★'.repeat(t.rating).split('').map((s, i) => (
            <span key={i} style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>{s}</span>
          ))}
        </div>

        {/* Text */}
        <p style={{
          fontFamily: 'Lora, serif',
          fontSize: '1.15rem', lineHeight: 1.8,
          color: 'var(--charcoal)', marginBottom: '36px',
          fontStyle: 'italic', position: 'relative', zIndex: 1,
        }}>
          {t.text}
        </p>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <img
            src={t.photo}
            alt={t.name}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--blush)' }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: 'var(--midnight)', fontSize: '0.95rem' }}>{t.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--terracotta)', fontWeight: 600 }}>{t.role} · {t.dept}</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
        <button
          onClick={prev}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '2px solid var(--border)', background: 'white',
            cursor: 'pointer', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--terracotta)'; e.currentTarget.style.color = 'var(--terracotta)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'inherit' }}
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px', borderRadius: '100px',
                background: i === active ? 'var(--terracotta)' : 'var(--border)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '2px solid var(--border)', background: 'white',
            cursor: 'pointer', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--terracotta)'; e.currentTarget.style.color = 'var(--terracotta)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'inherit' }}
        >
          →
        </button>
      </div>

      {/* Thumbnail row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 16px', borderRadius: '100px',
              border: `2px solid ${i === active ? 'var(--terracotta)' : 'var(--border)'}`,
              background: i === active ? 'var(--blush)' : 'white',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            <img
              src={t.photo}
              alt={t.name}
              style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: i === active ? 'var(--terracotta)' : 'var(--charcoal)', whiteSpace: 'nowrap' }}>
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}