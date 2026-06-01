'use client'
export default function Accreditations() {
  return (
    <section style={{ padding: '60px 8%', background: 'var(--warm-white)', borderTop: '1px solid var(--border)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          color: 'var(--muted)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          Accreditations & Certifications
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexWrap: 'wrap', gap: '40px',
      }}>
        {[
          { name: 'JCI Accredited', icon: '🏅', desc: 'Joint Commission International' },
          { name: 'ISO 9001:2015', icon: '📋', desc: 'Quality Management' },
          { name: 'HACA Certified', icon: '✅', desc: 'Healthcare Accreditation' },
          { name: 'AHA Certified', icon: '❤️', desc: 'American Heart Association' },
          { name: 'TQCSI Certified', icon: '🎖️', desc: 'Total Quality Management' },
        ].map((acc) => (
          <div
            key={acc.name}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
              padding: '24px 32px', background: 'white',
              borderRadius: '16px', border: '1px solid var(--border)',
              minWidth: '160px', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ fontSize: '2.4rem' }}>{acc.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--midnight)' }}>{acc.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>{acc.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}