'use client'

import { useEffect, useState } from 'react'

export default function ERWaitStatus() {
  const [wait, setWait] = useState(14)
  const [updated, setUpdated] = useState(0)

  // Demo only: gently fluctuate the displayed wait to feel "live".
  useEffect(() => {
    const id = setInterval(() => {
      setWait((w) => Math.max(6, Math.min(24, w + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 2)))))
      setUpdated(0)
    }, 20000)
    const tick = setInterval(() => setUpdated((u) => u + 1), 60000)
    return () => { clearInterval(id); clearInterval(tick) }
  }, [])

  const level = wait <= 12 ? { label: 'Low', color: '#4ade80' } : wait <= 18 ? { label: 'Moderate', color: '#fbbf24' } : { label: 'Busy', color: '#fb923c' }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: '16px', padding: '22px 24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          <span style={{ position: 'relative', display: 'inline-flex', width: '9px', height: '9px' }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: level.color, animation: 'erpulse 1.8s ease-in-out infinite' }} />
          </span>
          ER — Live Status
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: level.color }}>{level.label}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span style={{ fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>~{wait}</span>
        <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>min current average wait</span>
      </div>

      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '10px' }}>
        Updated {updated === 0 ? 'just now' : `${updated} min ago`} · Triage by clinical urgency · Demo data
      </div>
    </div>
  )
}
