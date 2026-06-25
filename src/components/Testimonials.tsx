'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
    role: 'Cardiac Patient',
    dept: 'Cardiology',
    rating: 5,
    text: 'The cardiology team at Evercare saved my life. From the moment I arrived, every doctor and nurse made me feel safe and cared for. Dr. Okonkwo explained everything clearly and the follow-up care was exceptional.',
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
    text: 'Bringing my daughter here was the best decision. The pediatric team was so gentle and patient. Dr. Noor took the time to explain everything and made my daughter feel at ease throughout her treatment.',
  },
  {
    name: 'Robert Chen',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    role: 'Neurology Patient',
    dept: 'Neurology',
    rating: 5,
    text: 'After my stroke, I was frightened and confused. The neurology team guided me through every step of my recovery with professionalism and genuine compassion. Today I am fully recovered and forever grateful.',
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
  return (
    <section style={{ padding: '100px 8%', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          color: 'var(--terracotta)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          <span aria-hidden="true" style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
          Patient Stories
          <span aria-hidden="true" style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
        </div>
        <h2 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
          color: 'var(--midnight)', lineHeight: 1.25,
        }}>
          What our patients say
        </h2>
      </div>

      {/* Grid — every patient shows a full quote */}
      <div
        className="evc-testimonial-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              background: 'white', borderRadius: '20px',
              padding: '32px', border: '1px solid var(--border)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', gap: '18px',
              margin: 0,
            }}
          >
            {/* Stars */}
            <div aria-label={`${t.rating} out of 5 stars`} style={{ display: 'flex', gap: '2px' }}>
              {Array.from({ length: t.rating }).map((_, s) => (
                <span key={s} aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '1.05rem' }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{
              fontFamily: 'Lora, serif',
              fontSize: '1rem', lineHeight: 1.75,
              color: 'var(--charcoal)', fontStyle: 'italic',
              margin: 0, flex: 1,
            }}>
              “{t.text}”
            </blockquote>

            {/* Author */}
            <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
              <img
                src={t.photo}
                alt={`${t.name}, ${t.role}`}
                loading="lazy"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--blush)' }}
              />
              <span>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--midnight)', fontSize: '0.9rem' }}>{t.name}</span>
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 600 }}>{t.role} · {t.dept}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
