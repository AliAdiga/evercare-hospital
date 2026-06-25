import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: 'Directions, parking, public transit, entrances, accessibility, and visitor policies for Evercare Hospital in the Downtown Medical District.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: '8px' }
const body: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }

export default function VisitPage() {
  return (
    <PageChrome
      eyebrow="Plan Your Visit"
      title="Everything you need before you arrive"
      intro="4200 Evercare Boulevard, Downtown Medical District, CA 90210. Here’s how to get here, where to park, and what to expect at the door."
    >
      {/* Map + directions */}
      <section style={{ marginBottom: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', minHeight: '300px' }}>
          <iframe
            title="Map to Evercare Hospital"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-118.45%2C34.04%2C-118.39%2C34.08&layer=mapnik"
            style={{ width: '100%', height: '100%', minHeight: '300px', border: 0 }}
            loading="lazy"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={card}>
            <h3 style={cardTitle}>🚗 By car & parking</h3>
            <p style={body}>Free on-site parking with 400 spaces in the visitor structure on Level P1–P3. Valet is available at the Main Entrance ($8 flat). EV charging on P1.</p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>🚌 Public transit</h3>
            <p style={body}>Metro Line 2 to Medical District Station (4-min walk). Bus routes 14, 37, and 60 stop directly outside the East Entrance.</p>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: 'none', color: 'var(--terracotta)', fontWeight: 600, fontSize: '0.9rem' }}>
            Open turn-by-turn directions →
          </a>
        </div>
      </section>

      {/* Entrances */}
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Entrances</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Main Entrance', d: 'Outpatient clinics, admissions, and the pharmacy. Open 6 AM–10 PM.' },
            { t: 'Emergency Entrance', d: 'North side, clearly signed. Open 24/7 with dedicated ambulance access.' },
            { t: 'East / Transit Entrance', d: 'Closest to Metro and bus stops. Step-free access to all floors.' },
          ].map((e) => (
            <div key={e.t} style={card}>
              <h3 style={cardTitle}>{e.t}</h3>
              <p style={body}>{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '56px' }}>
        <h2 style={h2}>Accessibility</h2>
        <div style={{ ...card }}>
          <ul style={{ ...body, paddingLeft: '18px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px 24px' }}>
            <li>Step-free access at every entrance</li>
            <li>Accessible parking on P1 near elevators</li>
            <li>Wheelchairs available at each entrance desk</li>
            <li>Sign-language interpreters on request</li>
            <li>Quiet sensory room on Level 2</li>
            <li>Assistance animals welcome</li>
          </ul>
        </div>
      </section>

      {/* Visitor policy */}
      <section>
        <h2 style={h2}>Visitor policy & hours</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={card}><h3 style={cardTitle}>General wards</h3><p style={body}>Daily 10 AM – 8 PM. Up to two visitors per patient at a time.</p></div>
          <div style={card}><h3 style={cardTitle}>ICU & NICU</h3><p style={body}>11 AM–1 PM and 5 PM–7 PM. Immediate family; please check in at the unit desk.</p></div>
          <div style={card}><h3 style={cardTitle}>What to bring</h3><p style={body}>Photo ID, insurance card, a list of current medications, and any referral paperwork.</p></div>
        </div>
      </section>
    </PageChrome>
  )
}
