import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'
import InsuranceLookup from '@/components/InsuranceLookup'

export const metadata: Metadata = {
  title: 'Insurance & Pricing',
  description: 'Check whether Evercare accepts your insurance, see estimated cost ranges for common procedures, and learn about payment plans and financial assistance.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.1rem', color: 'var(--midnight)', marginBottom: '6px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

const estimates = [
  { name: 'Specialist consultation', range: '$120 – $280' },
  { name: 'MRI scan (single region)', range: '$400 – $900' },
  { name: 'Coronary angioplasty', range: '$11,000 – $19,000' },
  { name: 'Knee replacement', range: '$18,000 – $32,000' },
  { name: 'Routine childbirth (vaginal)', range: '$6,000 – $11,000' },
  { name: 'Colonoscopy (screening)', range: '$900 – $2,200' },
]

export default function InsurancePage() {
  return (
    <PageChrome
      eyebrow="Insurance & Pricing"
      title="Clear answers about cost and coverage"
      intro="Cost shouldn’t be a mystery. Check your plan, see typical price ranges, and explore payment options — before you ever set foot in the building."
    >
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Check your coverage</h2>
        <InsuranceLookup />
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Estimated cost ranges</h2>
        <p style={{ ...body, marginBottom: '20px', maxWidth: '640px' }}>
          Self-pay estimates for common services before insurance. Your actual cost depends on your plan, your specific
          care, and pre-authorization. These are typical ranges, not quotes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {estimates.map((e) => (
            <div key={e.name} style={{ ...card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '20px 24px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)', fontWeight: 500 }}>{e.name}</span>
              <span style={{ fontFamily: 'Lora, serif', fontSize: '1rem', color: 'var(--sage-dark)', fontWeight: 600, whiteSpace: 'nowrap' }}>{e.range}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={h2}>Payment & financial assistance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Interest-free payment plans', d: 'Spread eligible balances over 6–24 months with no interest, arranged before or after your visit.' },
            { t: 'Financial assistance', d: 'Households under defined income thresholds may qualify for 30–100% reductions. Apply confidentially.' },
            { t: 'Upfront estimates', d: 'Ask for a written good-faith estimate for any planned procedure — we’ll prepare it before you commit.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          <a href="/#contact" style={{ display: 'inline-block', background: 'var(--terracotta)', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Talk to a financial counselor
          </a>
        </div>
      </section>
    </PageChrome>
  )
}
