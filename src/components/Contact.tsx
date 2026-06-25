export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: '100px 8%', background: 'var(--cream)' }}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.2fr',
        gap: '80px', alignItems: 'start',
      }}>

        {/* LEFT */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'var(--terracotta)', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            <span style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
            Get In Touch
          </div>

          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
            color: 'var(--midnight)', lineHeight: 1.25, marginBottom: '16px',
          }}>
            We are always here for you
          </h2>

          <p style={{
            fontSize: '1rem', color: 'var(--muted)',
            lineHeight: 1.7, maxWidth: '440px', marginBottom: '36px',
          }}>
            Whether you have a question, need directions, or want to speak
            with a care coordinator, we are happy to help.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'white', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: '4px' }}>Main Campus</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>4200 Evercare Boulevard{'\n'}Downtown Medical District, CA 90210</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'white', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>📞</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: '4px' }}>General Inquiries</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>+1 (800) 382-7227 · Mon–Fri 8AM–8PM{'\n'}Sat–Sun 9AM–5PM</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'white', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>✉️</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: '4px' }}>Email Us</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>contact@evercarehospital.com{'\n'}We respond within 24 hours</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'white', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🕐</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: '4px' }}>Visiting Hours</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>Daily: 10AM – 8PM{'\n'}ICU & NICU: 11AM–1PM · 5PM–7PM</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — Map */}
        <div style={{
          background: 'white', borderRadius: '20px', overflow: 'hidden',
          border: '1px solid var(--border)', minHeight: '480px',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(122,158,142,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122,158,142,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '12px',
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'var(--terracotta)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px',
              boxShadow: '0 0 0 12px rgba(219,106,71,0.15), 0 0 0 24px rgba(219,106,71,0.07)',
            }}>
              🏥
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--midnight)' }}>
              Evercare Hospital
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              4200 Evercare Blvd, CA
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '8px',
                background: 'var(--terracotta)', color: 'white',
                padding: '10px 20px', borderRadius: '100px',
                fontSize: '0.82rem', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}