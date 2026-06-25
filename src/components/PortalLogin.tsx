'use client'

import { useState } from 'react'

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }
const cardTitle: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.1rem', color: 'var(--midnight)', marginBottom: '6px' }
const body: React.CSSProperties = { fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }
const input: React.CSSProperties = { width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'var(--charcoal)', background: 'var(--cream)' }
const label: React.CSSProperties = { fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }

const demoBanner: React.CSSProperties = {
  background: 'var(--blush)', border: '1px dashed var(--sage)', borderRadius: '12px',
  padding: '12px 18px', fontSize: '0.8rem', color: 'var(--sage-dark)', fontWeight: 600, marginBottom: '28px',
}

export default function PortalLogin() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (loggedIn) {
    return (
      <div>
        <div style={demoBanner}>Demo portal — sample data only. No real records are shown or stored.</div>
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'var(--midnight)', marginBottom: '20px' }}>Welcome back, Jordan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
          <div style={card}>
            <h3 style={cardTitle}>📅 Upcoming visit</h3>
            <p style={body}>Cardiology follow-up with Dr. Okonkwo — Thu, Jul 9, 10:30 AM. <br /><a href="/#appointment" style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>Reschedule</a></p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>🧪 Lab results</h3>
            <p style={body}>Lipid panel — <strong style={{ color: 'var(--sage-dark)' }}>Ready</strong>. Reviewed by your care team; all values within range.</p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>💊 Prescriptions</h3>
            <p style={body}>Atorvastatin 20mg — 2 refills left. <br /><span style={{ color: 'var(--terracotta)', fontWeight: 600 }}>Request refill</span></p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>✉️ Messages</h3>
            <p style={body}>1 new message from the cardiology nurse line about your recent results.</p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>💳 Billing</h3>
            <p style={body}>Balance $0.00 — last claim processed by your insurer on Jun 12.</p>
          </div>
          <div style={card}>
            <h3 style={cardTitle}>📄 Records</h3>
            <p style={body}>Download visit summaries, imaging reports, and immunization history.</p>
          </div>
        </div>
        <button onClick={() => setLoggedIn(false)} style={{ marginTop: '28px', background: 'none', border: '1.5px solid var(--border)', color: 'var(--charcoal)', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '440px' }}>
      <div style={demoBanner}>Demo only — this doesn’t connect to a real records system. Click “Sign in” with any values to preview the portal.</div>
      <form
        onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }}
        style={{ ...card, padding: '32px', display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.4rem', color: 'var(--midnight)', margin: 0 }}>Patient Portal</h2>
        <div>
          <label htmlFor="portal-email" style={label}>Email or MRN</label>
          <input id="portal-email" name="email" type="text" required placeholder="you@email.com" style={input} />
        </div>
        <div>
          <label htmlFor="portal-pass" style={label}>Password</label>
          <input id="portal-pass" name="password" type="password" required placeholder="••••••••" style={input} />
        </div>
        <button type="submit" style={{ background: 'var(--terracotta)', color: '#fff', border: 'none', padding: '14px', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
          Sign in
        </button>
        <p style={{ ...body, textAlign: 'center', margin: 0 }}>
          New patient? <a href="/#appointment" style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>Book your first visit</a>
        </p>
      </form>
    </div>
  )
}
