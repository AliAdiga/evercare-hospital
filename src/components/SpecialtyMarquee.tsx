const items = ['Cardiology', 'Neurology', 'Gastroenterology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Pulmonology', 'Radiology']

export default function SpecialtyMarquee() {
  const row = [...items, ...items]
  return (
    <div style={{ background: 'var(--warm-white)', padding: '40px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="evc-marquee" style={{ display: 'flex', alignItems: 'center', gap: '44px', width: 'max-content', whiteSpace: 'nowrap' }}>
        {row.map((s, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '44px' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#8ad4cb', letterSpacing: '-0.01em' }}>{s}</span>
            <span aria-hidden="true" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 700, color: 'var(--teal)' }}>+</span>
          </span>
        ))}
      </div>
    </div>
  )
}
