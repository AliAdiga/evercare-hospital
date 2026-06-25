import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'

export const metadata: Metadata = {
  title: 'Virtual Care & Telehealth',
  description: 'See an Evercare specialist from home. Virtual visits for follow-ups, prescriptions, mental health, and more — secure, convenient, and covered by most plans.',
}

const cardGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }
const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: '8px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

export default function TelehealthPage() {
  return (
    <PageChrome
      eyebrow="Virtual Care"
      title="Quality care, from wherever you are"
      intro="Connect with Evercare physicians by secure video. Telehealth visits are ideal for follow-ups, medication management, and many non-urgent concerns — no commute, no waiting room."
    >
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Visit types we offer</h2>
        <div style={cardGrid}>
          {[
            { icon: '🩺', t: 'Follow-up consultations', d: 'Review results and check progress with your specialist after a procedure or diagnosis.' },
            { icon: '💊', t: 'Prescription management', d: 'Refills, dosage adjustments, and medication questions handled remotely.' },
            { icon: '🧠', t: 'Mental health', d: 'Confidential video sessions with our behavioral health team.' },
            { icon: '🤒', t: 'Minor & seasonal illness', d: 'Colds, rashes, infections, and other concerns that don’t require in-person tools.' },
            { icon: '📋', t: 'Second opinions', d: 'Share records and get an expert review from an Evercare subspecialist.' },
            { icon: '🍎', t: 'Nutrition & chronic care', d: 'Ongoing coaching for diabetes, blood pressure, and lifestyle goals.' },
          ].map((c) => (
            <div key={c.t} style={card}>
              <div aria-hidden="true" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{c.icon}</div>
              <h3 style={cardTitle}>{c.t}</h3>
              <p style={body}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Virtual or in-person?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ ...card, borderTop: '3px solid var(--sage)' }}>
            <h3 style={cardTitle}>Great for virtual</h3>
            <ul style={{ ...body, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Reviewing test or imaging results</li>
              <li>Prescription refills & adjustments</li>
              <li>Follow-up after a recent visit</li>
              <li>Mental health & counseling</li>
              <li>Minor skin, cold, or allergy concerns</li>
            </ul>
          </div>
          <div style={{ ...card, borderTop: '3px solid var(--terracotta)' }}>
            <h3 style={cardTitle}>Come in person</h3>
            <ul style={{ ...body, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Anything requiring a physical exam or labs</li>
              <li>Chest pain, breathing trouble, or injury</li>
              <li>Imaging (MRI, CT, X-ray) or procedures</li>
              <li>New or worsening severe symptoms</li>
              <li>Any emergency — call 911 or our ER line</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 style={h2}>How to prepare for your video visit</h2>
        <div style={cardGrid}>
          {[
            ['1', 'Test your setup', 'Use a quiet, well-lit room with a stable internet connection. A phone, tablet, or computer all work.'],
            ['2', 'Have your info ready', 'Keep your medication list, pharmacy, and any recent readings (blood pressure, glucose) nearby.'],
            ['3', 'Join 5 minutes early', 'You’ll get a secure link by SMS and email. Click it a few minutes before your appointment.'],
            ['4', 'After your visit', 'Notes, prescriptions, and next steps appear in your patient portal automatically.'],
          ].map(([n, t, d]) => (
            <div key={n} style={card}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--blush)', color: 'var(--sage-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '12px' }}>{n}</div>
              <h3 style={cardTitle}>{t}</h3>
              <p style={body}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          <a href="/#appointment" style={{ display: 'inline-block', background: 'var(--terracotta)', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Schedule a virtual visit
          </a>
        </div>
      </section>
    </PageChrome>
  )
}
