export default function Insurance() {
  const insurers = [
    { name: 'Aetna', color: '#7B1FA2' },
    { name: 'BlueCross BlueShield', color: '#1565C0' },
    { name: 'Cigna', color: '#00838F' },
    { name: 'UnitedHealth', color: '#2E7D32' },
    { name: 'Humana', color: '#00695C' },
    { name: 'Kaiser', color: '#1A237E' },
    { name: 'Metlife', color: '#0277BD' },
    { name: 'Allianz', color: '#006DB3' },
  ]

  return (
    <section style={{ padding: '60px 8%', background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ color: 'var(--muted)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Accepted Insurance Plans
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
          We work with all major insurance providers to make your care as accessible and affordable as possible.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
        {insurers.map((ins) => (
          <div
            key={ins.name}
            style={{
              background: 'white', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '16px 28px',
              display: 'flex', alignItems: 'center', gap: '12px',
              transition: 'all 0.2s', cursor: 'default',
              minWidth: '180px', justifyContent: 'center',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: ins.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal)' }}>{ins.name}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <a href="#contact" style={{ fontSize: '0.85rem', color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>
          Not sure if your plan is covered? Contact us
        </a>
      </div>
    </section>
  )
}