'use client'

export default function Appointment() {
  return (
    <section
      id="appointment"
      style={{
        padding: '100px 8%',
        background: 'linear-gradient(135deg, var(--sage-dark) 0%, var(--sage) 100%)',
      }}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            <span style={{ width: '20px', height: '2px', background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
            Book Appointment
          </div>

          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
            color: 'white', lineHeight: 1.25, marginBottom: '16px',
          }}>
            Schedule your visit in minutes
          </h2>

          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7, maxWidth: '400px', marginBottom: '36px',
          }}>
            Choose your specialist, pick a time that works for you, and leave the rest to us.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '⚡', text: 'Instant confirmation via SMS & email' },
              { icon: '🔄', text: 'Free reschedule up to 24 hours before' },
              { icon: '💳', text: 'All major insurance plans accepted' },
              { icon: '🎥', text: 'Telehealth options available' },
            ].map((f) => (
              <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
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
        <div style={{
          background: 'white', borderRadius: '24px', padding: '40px',
        }}>
          <h3 style={{
            fontFamily: 'Lora, serif', fontSize: '1.3rem',
            color: 'var(--midnight)', marginBottom: '28px',
          }}>
            Request an Appointment
          </h3>

          {/* Name row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            {[
              { label: 'FIRST NAME', placeholder: 'Jane' },
              { label: 'LAST NAME', placeholder: 'Smith' },
            ].map((f) => (
              <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
                  {f.label}
                </label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  style={{
                    padding: '12px 16px', border: '1.5px solid var(--border)',
                    borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem', color: 'var(--charcoal)',
                    background: 'var(--cream)', outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Contact row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            {[
              { label: 'PHONE NUMBER', placeholder: '+1 (555) 000-0000', type: 'tel' },
              { label: 'EMAIL', placeholder: 'jane@email.com', type: 'email' },
            ].map((f) => (
              <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{
                    padding: '12px 16px', border: '1.5px solid var(--border)',
                    borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem', color: 'var(--charcoal)',
                    background: 'var(--cream)', outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Department */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
              DEPARTMENT
            </label>
            <select style={{
              padding: '12px 16px', border: '1.5px solid var(--border)',
              borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.88rem', color: 'var(--charcoal)',
              background: 'var(--cream)', outline: 'none',
            }}>
              <option>Select a department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Oncology</option>
              <option>General Medicine</option>
            </select>
          </div>

          {/* Date & Time row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
                PREFERRED DATE
              </label>
              <input
                type="date"
                style={{
                  padding: '12px 16px', border: '1.5px solid var(--border)',
                  borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.88rem', color: 'var(--charcoal)',
                  background: 'var(--cream)', outline: 'none',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
                PREFERRED TIME
              </label>
              <select style={{
                padding: '12px 16px', border: '1.5px solid var(--border)',
                borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.88rem', color: 'var(--charcoal)',
                background: 'var(--cream)', outline: 'none',
              }}>
                <option>Morning (8AM–12PM)</option>
                <option>Afternoon (12PM–5PM)</option>
                <option>Evening (5PM–8PM)</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em' }}>
              BRIEF DESCRIPTION (OPTIONAL)
            </label>
            <textarea
              placeholder="Describe your symptoms or reason for visit…"
              rows={3}
              style={{
                padding: '12px 16px', border: '1.5px solid var(--border)',
                borderRadius: '12px', fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.88rem', color: 'var(--charcoal)',
                background: 'var(--cream)', outline: 'none', resize: 'vertical',
              }}
            />
          </div>

          <button
            style={{
              width: '100%', background: 'var(--terracotta)', color: 'white',
              border: 'none', padding: '14px', borderRadius: '100px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--terracotta-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
           onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--terracotta)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            onClick={() => window.location.href = '/appointment-confirmed'}
          >
            Confirm Appointment Request
          </button>
        </div>
      </div>
    </section>
  )
}