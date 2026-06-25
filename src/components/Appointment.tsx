'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'

const inputStyle: React.CSSProperties = {
  padding: '12px 16px', border: '1.5px solid var(--border)',
  borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.88rem', color: 'var(--charcoal)',
  background: 'var(--cream)',
}
const labelStyle: React.CSSProperties = {
  fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em',
}

export default function Appointment() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Native required-field validation runs before this fires.
    setSubmitting(true)
    window.location.href = '/appointment-confirmed'
  }

  return (
    <section
      id="appointment"
      style={{
        padding: '100px 8%',
        background: 'linear-gradient(135deg, var(--sage-dark) 0%, var(--sage) 100%)',
      }}
    >
      <div className="evc-appointment__grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
          <div style={{ marginBottom: '36px' }}>
            <SectionHeading
              index="08"
              eyebrow="Book appointment"
              title="Schedule your visit in minutes"
              intro="Choose your specialist, pick a time that works for you, and leave the rest to us."
              maxWidth={400}
              light
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '⚡', text: 'Instant confirmation via SMS & email' },
              { icon: '🔄', text: 'Free reschedule up to 24 hours before' },
              { icon: '💳', text: 'All major insurance plans accepted' },
              { icon: '🎥', text: 'Telehealth options available' },
            ].map((f) => (
              <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div aria-hidden="true" style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <form onSubmit={handleSubmit} noValidate={false} style={{
          background: 'white', borderRadius: '24px', padding: '40px',
        }}>
          <h3 style={{
            fontFamily: 'Lora, serif', fontSize: '1.3rem',
            color: 'var(--midnight)', marginBottom: '28px',
          }}>
            Request an Appointment
          </h3>

          {/* Name row */}
          <div className="evc-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="firstName" style={labelStyle}>FIRST NAME</label>
              <input id="firstName" name="firstName" type="text" required autoComplete="given-name" placeholder="Jane" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="lastName" style={labelStyle}>LAST NAME</label>
              <input id="lastName" name="lastName" type="text" required autoComplete="family-name" placeholder="Smith" style={inputStyle} />
            </div>
          </div>

          {/* Contact row */}
          <div className="evc-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="phone" style={labelStyle}>PHONE NUMBER</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="email" style={labelStyle}>EMAIL</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@email.com" style={inputStyle} />
            </div>
          </div>

          {/* Department */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
            <label htmlFor="department" style={labelStyle}>DEPARTMENT</label>
            <select id="department" name="department" required defaultValue="" style={inputStyle}>
              <option value="" disabled>Select a department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Oncology</option>
              <option>General Medicine</option>
            </select>
          </div>

          {/* Date & Time row */}
          <div className="evc-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="date" style={labelStyle}>PREFERRED DATE</label>
              <input id="date" name="date" type="date" required style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="time" style={labelStyle}>PREFERRED TIME</label>
              <select id="time" name="time" required style={inputStyle}>
                <option>Morning (8AM–12PM)</option>
                <option>Afternoon (12PM–5PM)</option>
                <option>Evening (5PM–8PM)</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
            <label htmlFor="notes" style={labelStyle}>BRIEF DESCRIPTION (OPTIONAL)</label>
            <textarea
              id="notes" name="notes"
              placeholder="Describe your symptoms or reason for visit…"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%', background: 'var(--terracotta)', color: 'white',
              border: 'none', padding: '14px', borderRadius: '100px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600,
              cursor: submitting ? 'default' : 'pointer', opacity: submitting ? 0.7 : 1,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--terracotta-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--terracotta)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {submitting ? 'Submitting…' : 'Confirm Appointment Request'}
          </button>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center', marginTop: '12px' }}>
            We&apos;ll confirm your request by phone or email within one business day.
          </p>
        </form>
      </div>
    </section>
  )
}
