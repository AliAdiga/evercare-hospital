import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'

export const metadata: Metadata = {
  title: 'International Patients',
  description: 'A dedicated team for patients traveling to Evercare Hospital — visa and travel support, interpreters, international insurance coordination, and concierge care.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: '8px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

export default function InternationalPage() {
  return (
    <PageChrome
      eyebrow="International Patients"
      title="World-class care, made simple from abroad"
      intro="Our International Patient Office supports travelers from arrival to recovery — so you can focus on getting well, not logistics."
    >
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>How we help</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { t: '🛂 Visa & travel assistance', d: 'Invitation letters for medical visas, plus help arranging flights, airport pickup, and nearby accommodation.' },
            { t: '🗣️ Interpreter services', d: 'Professional medical interpreters in Arabic, Mandarin, Spanish, French, and more — in person and on call.' },
            { t: '💳 International insurance', d: 'We coordinate directly with global insurers and provide itemized records for reimbursement.' },
            { t: '🤝 Concierge care', d: 'A single dedicated coordinator manages your appointments, records, and follow-up across your whole stay.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Your journey, step by step</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            ['1', 'Share your case', 'Send records securely; our specialists review and propose a care plan with cost estimate.'],
            ['2', 'Plan your trip', 'We issue documents for your visa and help schedule travel around your treatment dates.'],
            ['3', 'Arrive & be cared for', 'Airport pickup, an interpreter, and your coordinator meet you. Treatment begins on schedule.'],
            ['4', 'Recover & follow up', 'Continue care by telehealth once home, with records shared to your local doctor.'],
          ].map(([n, t, d]) => (
            <div key={n} style={card}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--blush)', color: 'var(--sage-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '12px' }}>{n}</div>
              <h3 style={cardTitle}>{t}</h3>
              <p style={body}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={{ ...card, background: 'var(--midnight)', borderColor: 'transparent', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.4rem', color: '#fff', marginBottom: '6px' }}>Start your medical travel plan</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Our International Patient Office replies within one business day.</p>
          </div>
          <a href="/#contact" style={{ background: 'var(--terracotta)', color: '#fff', padding: '14px 30px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            Contact the team
          </a>
        </div>
      </section>
    </PageChrome>
  )
}
