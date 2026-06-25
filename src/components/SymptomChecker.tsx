'use client'

import { useState } from 'react'

const symptoms: { label: string; dept: string; slug: string; note: string }[] = [
  { label: 'Chest pain or pressure', dept: 'Emergency / Cardiology', slug: 'cardiology', note: 'Sudden or severe chest pain can be an emergency — call 911 now.' },
  { label: 'Shortness of breath', dept: 'Pulmonology', slug: 'pulmonology', note: 'If breathing is severely difficult, seek emergency care immediately.' },
  { label: 'Persistent headache or dizziness', dept: 'Neurology', slug: 'neurology', note: 'Sudden severe headache, weakness, or slurred speech — call 911.' },
  { label: 'Joint, back, or bone pain', dept: 'Orthopedics', slug: 'orthopedics', note: 'For an acute injury or inability to move a limb, visit the ER.' },
  { label: 'Child is unwell', dept: 'Pediatrics', slug: 'pediatrics', note: 'For high fever in infants or trouble breathing, seek urgent care.' },
  { label: 'Vision changes', dept: 'Ophthalmology', slug: 'ophthalmology', note: 'Sudden vision loss is an emergency — go to the ER.' },
  { label: 'A lump or unexplained weight loss', dept: 'Oncology', slug: 'oncology', note: 'Book an evaluation — early assessment matters.' },
  { label: 'Something else', dept: 'General Medicine', slug: 'cardiology', note: 'Our team can route you to the right specialist.' },
]

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }

export default function SymptomChecker() {
  const [selected, setSelected] = useState<number | null>(null)
  const s = selected !== null ? symptoms[selected] : null

  return (
    <div>
      <div style={{ background: '#fff4f0', border: '1px solid var(--terracotta)', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', fontSize: '0.85rem', color: 'var(--terracotta)', fontWeight: 600 }}>
        ⚠ This guide is for general routing only — it is not medical advice or a diagnosis. If this is an emergency, call 911 or our ER line +1 (800) 911-CARE.
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '16px' }}>What’s your main concern today?</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
        {symptoms.map((sym, i) => (
          <button
            key={sym.label}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            style={{
              padding: '10px 18px', borderRadius: '100px',
              border: `1.5px solid ${selected === i ? 'var(--terracotta)' : 'var(--border)'}`,
              background: selected === i ? 'var(--terracotta)' : '#fff',
              color: selected === i ? '#fff' : 'var(--charcoal)',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            {sym.label}
          </button>
        ))}
      </div>

      {s && (
        <div style={{ ...card, borderLeft: '4px solid var(--sage)' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: '8px' }}>Suggested department</div>
          <div style={{ fontFamily: 'Lora, serif', fontSize: '1.4rem', color: 'var(--midnight)', marginBottom: '10px' }}>{s.dept}</div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '18px' }}>{s.note}</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={`/departments/${s.slug}`} style={{ background: 'var(--blush)', color: 'var(--sage-dark)', padding: '11px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Learn about this department</a>
            <a href="/#appointment" style={{ background: 'var(--terracotta)', color: '#fff', padding: '11px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book an appointment</a>
          </div>
        </div>
      )}
    </div>
  )
}
