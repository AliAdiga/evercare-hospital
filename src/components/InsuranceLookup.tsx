'use client'

import { useState } from 'react'

const plans = ['Aetna', 'BlueCross BlueShield', 'Cigna', 'UnitedHealth', 'Humana', 'Kaiser', 'MetLife', 'Allianz']

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }
const input: React.CSSProperties = { width: '100%', padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'var(--charcoal)', background: 'var(--cream)' }
const label: React.CSSProperties = { fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }

export default function InsuranceLookup() {
  const [plan, setPlan] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ maxWidth: '520px' }}>
      <div style={{ background: 'var(--blush)', border: '1px dashed var(--sage)', borderRadius: '12px', padding: '12px 18px', fontSize: '0.8rem', color: 'var(--sage-dark)', fontWeight: 600, marginBottom: '24px' }}>
        Demo lookup — for an official coverage check, please confirm with our billing team.
      </div>
      <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label htmlFor="plan" style={label}>Select your insurance plan</label>
          <select
            id="plan"
            value={plan}
            onChange={(e) => { setPlan(e.target.value); setChecked(false) }}
            style={input}
          >
            <option value="">Choose a provider…</option>
            {plans.map((p) => <option key={p} value={p}>{p}</option>)}
            <option value="__other">Other / not listed</option>
          </select>
        </div>
        <button
          type="button"
          disabled={!plan}
          onClick={() => setChecked(true)}
          style={{ background: plan ? 'var(--terracotta)' : 'var(--border)', color: '#fff', border: 'none', padding: '13px', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', cursor: plan ? 'pointer' : 'default' }}
        >
          Check coverage
        </button>

        {checked && plan && plan !== '__other' && (
          <div style={{ background: 'var(--blush)', borderRadius: '12px', padding: '18px', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--sage-dark)' }}>✓ In-network.</strong> Evercare accepts <strong>{plan}</strong> for most services.
            Typical specialist visit copay is <strong>$25–$45</strong> depending on your plan tier. Pre-authorization may be
            required for imaging and surgery — our team handles that for you.
          </div>
        )}
        {checked && plan === '__other' && (
          <div style={{ background: 'var(--blush)', borderRadius: '12px', padding: '18px', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.6 }}>
            We work with many regional and international insurers. <a href="/#contact" style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>Contact our billing team</a> and we’ll verify your specific plan within one business day.
          </div>
        )}
      </div>
    </div>
  )
}
