export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', paddingTop: '70px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Full-bleed background photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.35)',
      }} />

      {/* Overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(30,43,47,0.85) 0%, rgba(30,43,47,0.3) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        minHeight: 'calc(100vh - 70px)',
        display: 'flex', alignItems: 'center',
        padding: '80px 8%',
      }}>
        <div style={{ maxWidth: '640px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(199,115,90,0.25)', color: '#e8a090',
            border: '1px solid rgba(199,115,90,0.4)',
            padding: '6px 16px', borderRadius: '100px',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e8a090', display: 'inline-block' }} />
            Trusted Since 1984 · 120,000+ Patients Served
          </div>

          <h1 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            lineHeight: 1.15, color: 'white', marginBottom: '24px',
          }}>
            Your health,<br />
            our <em style={{ color: 'var(--terracotta-light)', fontStyle: 'italic' }}>deepest</em><br />
            commitment.
          </h1>

          <p style={{
            fontSize: '1.1rem', lineHeight: 1.8,
            color: 'rgba(255,255,255,0.75)', maxWidth: '500px', marginBottom: '44px',
          }}>
            Evercare brings together world-class physicians, advanced technology,
            and genuine human care — because you deserve both the science and the warmth.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#appointment" style={{
              background: 'var(--terracotta)', color: 'white',
              padding: '16px 34px', borderRadius: '100px',
              textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              📅 Book Appointment
            </a>
            <a href="#departments" style={{
              border: '2px solid rgba(255,255,255,0.35)', color: 'white',
              padding: '16px 34px', borderRadius: '100px',
              textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem',
            }}>
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '48px', marginTop: '64px',
            paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.15)',
          }}>
            {[
              { num: '38+', label: 'Specialties' },
              { num: '240', label: 'Specialists' },
              { num: '98%', label: 'Patient Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Lora, serif', fontSize: '2.2rem', color: 'white', fontWeight: 600 }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div style={{
          position: 'absolute', right: '8%', bottom: '15%',
          background: 'white', borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', gap: '16px',
          maxWidth: '300px',
        }}>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&q=80"
            alt="Doctor"
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--midnight)' }}>Dr. Sarah Okonkwo</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 600, marginTop: '2px' }}>Cardiology</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>🟢 Available Today</div>
          </div>
        </div>
      </div>
    </section>
  )
}