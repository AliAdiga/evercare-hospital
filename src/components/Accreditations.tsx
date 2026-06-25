const accreditations = [
  { abbr: 'JCI', name: 'JCI Accredited', desc: 'Joint Commission International' },
  { abbr: 'ISO', name: 'ISO 9001:2015', desc: 'Quality Management' },
  { abbr: 'HACA', name: 'HACA Certified', desc: 'Healthcare Accreditation' },
  { abbr: 'AHA', name: 'AHA Certified', desc: 'American Heart Association' },
  { abbr: 'TQCSI', name: 'TQCSI Certified', desc: 'Total Quality Management' },
]

function Seal({ abbr }: { abbr: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle cx="32" cy="32" r="24" fill="var(--midnight)" />
      <text
        x="32" y="32" dominantBaseline="central" textAnchor="middle"
        fill="#fff" fontFamily="Lora, serif"
        fontSize={abbr.length > 3 ? 11 : 15} fontWeight="600"
      >
        {abbr}
      </text>
    </svg>
  )
}

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
        display: 'flex', alignItems: 'stretch', justifyContent: 'center',
        flexWrap: 'wrap', gap: '24px',
      }}>
        {accreditations.map((acc) => (
          <div
            key={acc.name}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
              padding: '28px 32px', background: 'white',
              borderRadius: '16px', border: '1px solid var(--border)',
              minWidth: '170px', textAlign: 'center',
            }}
          >
            <Seal abbr={acc.abbr} />
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--midnight)' }}>{acc.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{acc.desc}</div>
            <div style={{
              fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--sage-dark)', display: 'inline-flex', alignItems: 'center', gap: '4px',
              background: 'var(--blush)', padding: '3px 10px', borderRadius: '100px',
            }}>
              <span aria-hidden="true">✓</span> Certificate on file
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
