import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'

export const metadata: Metadata = {
  title: 'Careers & Residency',
  description: 'Build your career at Evercare Hospital. Explore openings for physicians, nurses, and allied health, plus our accredited residency and fellowship programs.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: '6px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

const openings = [
  { role: 'Registered Nurse — ICU', type: 'Full-time · Nursing', loc: 'On-site' },
  { role: 'Interventional Cardiologist', type: 'Full-time · Physician', loc: 'On-site' },
  { role: 'Pediatric Nurse Practitioner', type: 'Full-time · Advanced Practice', loc: 'On-site' },
  { role: 'Radiologic Technologist', type: 'Full-time · Allied Health', loc: 'On-site' },
  { role: 'Patient Experience Coordinator', type: 'Full-time · Administration', loc: 'Hybrid' },
  { role: 'Clinical Pharmacist', type: 'Full-time · Pharmacy', loc: 'On-site' },
]

export default function CareersPage() {
  return (
    <PageChrome
      eyebrow="Work at Evercare"
      title="Care for people. We’ll care for your career."
      intro="We invest in our people with above-market pay, continuing education, and one of the calmest, most collaborative clinical cultures in the region."
    >
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Why clinicians choose Evercare</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Real growth', d: 'Funded training, mentorship, and internal promotion — many of our leaders started at the bedside.' },
            { t: 'Fair pay & benefits', d: 'Above-market salaries, full health coverage, retirement matching, and generous leave.' },
            { t: 'A humane workplace', d: 'Sensible staffing ratios and a no-ego culture. We protect our teams from burnout.' },
            { t: 'Purpose', d: 'A mission-driven hospital where your work changes outcomes for real families every day.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Open positions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {openings.map((o) => (
            <div key={o.role} style={{ ...card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', padding: '20px 28px' }}>
              <div>
                <div style={cardTitle}>{o.role}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{o.type} · {o.loc}</div>
              </div>
              <a href="/#contact" style={{ background: 'var(--blush)', color: 'var(--sage-dark)', padding: '10px 22px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Apply →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={h2}>Residency & fellowships</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Internal Medicine Residency', d: '3-year ACGME-style program with rotations across all major departments.' },
            { t: 'Cardiology Fellowship', d: 'Advanced training in interventional and imaging cardiology with a robust case mix.' },
            { t: 'Nursing Externship', d: 'Paid summer program for nursing students, with preceptor mentorship.' },
          ].map((c) => (
            <div key={c.t} style={card}><h3 style={cardTitle}>{c.t}</h3><p style={body}>{c.d}</p></div>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          <a href="/#contact" style={{ display: 'inline-block', background: 'var(--terracotta)', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Talk to our recruiting team
          </a>
        </div>
      </section>
    </PageChrome>
  )
}
