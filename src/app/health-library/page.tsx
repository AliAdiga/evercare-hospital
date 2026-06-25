import type { Metadata } from 'next'
import Link from 'next/link'
import PageChrome from '@/components/PageChrome'
import SymptomChecker from '@/components/SymptomChecker'

export const metadata: Metadata = {
  title: 'Health Library & Symptom Guide',
  description: 'Plain-language overviews of common conditions, when to seek emergency care, and a simple symptom guide to help you reach the right Evercare department.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.05rem', color: 'var(--midnight)', marginBottom: '6px' }
const body: React.CSSProperties = { fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.6 }

const conditions = [
  { t: 'High blood pressure', dept: 'cardiology', d: 'What the numbers mean, lifestyle levers, and when medication helps.' },
  { t: 'Type 2 diabetes', dept: 'cardiology', d: 'Managing blood sugar, diet, and reducing long-term complications.' },
  { t: 'Migraine', dept: 'neurology', d: 'Triggers, treatment options, and warning signs that need urgent care.' },
  { t: 'Asthma', dept: 'pulmonology', d: 'Controlling symptoms, inhaler technique, and avoiding flare-ups.' },
  { t: 'Osteoarthritis', dept: 'orthopedics', d: 'Joint care, when to consider replacement, and recovery expectations.' },
  { t: 'Cataracts', dept: 'ophthalmology', d: 'How vision changes, and what modern surgery involves.' },
]

export default function HealthLibraryPage() {
  return (
    <PageChrome
      eyebrow="Health Library"
      title="Understand your health, find the right care"
      intro="Clear, doctor-reviewed overviews of common conditions — plus a quick guide to help you reach the right department."
    >
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Symptom guide</h2>
        <SymptomChecker />
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Condition overviews</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
          {conditions.map((c) => (
            <Link key={c.t} href={`/departments/${c.dept}`} style={{ ...card, textDecoration: 'none', display: 'block' }}>
              <h3 style={cardTitle}>{c.t}</h3>
              <p style={body}>{c.d}</p>
              <span style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--terracotta)' }}>Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div style={{ ...card, background: 'var(--midnight)', borderColor: 'transparent' }}>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.4rem', color: '#fff', marginBottom: '10px' }}>When to seek emergency care</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: '8px' }}>
            Call 911 or go to the nearest ER for: chest pain, sudden weakness or trouble speaking, severe difficulty
            breathing, heavy bleeding, sudden severe headache, or loss of consciousness. When in doubt, don’t wait.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>Evercare ER line: +1 (800) 911-CARE · Open 24/7</p>
        </div>
      </section>
    </PageChrome>
  )
}
