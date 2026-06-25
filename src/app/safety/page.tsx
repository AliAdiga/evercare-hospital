import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'

export const metadata: Metadata = {
  title: 'Safety & Infection Control',
  description: 'Current safety and infection-prevention protocols at Evercare Hospital — visitor guidance, masking, screening, and how we keep patients and staff protected.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: '8px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

export default function SafetyPage() {
  return (
    <PageChrome
      eyebrow="Your Safety"
      title="How we keep you safe"
      intro="Infection prevention is built into everything we do. Here are our current protocols for patients and visitors — reviewed regularly by our infection-control team."
    >
      <div style={{ background: 'var(--blush)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 22px', marginBottom: '40px', fontSize: '0.85rem', color: 'var(--sage-dark)', fontWeight: 600 }}>
        ✓ Current status: Standard precautions in effect · Last reviewed monthly by Infection Prevention
      </div>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Current visitor guidance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { t: '😷 Masking', d: 'Masks are available at every entrance and required in oncology, transplant, and ICU areas. Wear one anywhere if you have respiratory symptoms.' },
            { t: '🤧 Stay home if sick', d: 'Please don’t visit if you have fever, cough, or flu-like symptoms. Use a video visit instead.' },
            { t: '🧼 Hand hygiene', d: 'Sanitizer stations are at every entrance, elevator, and unit. Clean hands on the way in and out.' },
            { t: '💉 Vaccination', d: 'We encourage staying current on flu and COVID vaccines. Free flu shots are offered each autumn in the lobby.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>How we protect every patient</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Rigorous sterilization', d: 'Operating theatres and instruments follow strict sterilization cycles with documented verification.' },
            { t: 'Isolation capacity', d: 'Negative-pressure rooms and dedicated pathways isolate infectious cases from general care.' },
            { t: 'Continuous monitoring', d: 'Our infection-control team tracks rates in real time and audits hand-hygiene compliance.' },
            { t: 'Air quality', d: 'HEPA filtration and high air-exchange rates throughout clinical areas.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={h2}>When to choose virtual care</h2>
        <div style={card}>
          <p style={body}>
            If your concern doesn’t require a physical exam, a video visit keeps you comfortable at home and
            reduces exposure for everyone. Follow-ups, prescriptions, and many minor illnesses are well suited to
            telehealth.{' '}
            <a href="/telehealth" style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>Learn about virtual care →</a>
          </p>
        </div>
      </section>
    </PageChrome>
  )
}
