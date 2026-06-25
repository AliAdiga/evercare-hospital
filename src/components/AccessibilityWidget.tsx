'use client'

import { useEffect, useState } from 'react'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [contrast, setContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('a11y-high-contrast', contrast)
    root.classList.toggle('a11y-large-text', largeText)
  }, [contrast, largeText])

  return (
    <>
      <button
        type="button"
        aria-label="Accessibility options"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999,
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'var(--midnight)', color: '#fff', border: '2px solid rgba(255,255,255,0.25)',
          cursor: 'pointer', fontSize: '1.4rem', lineHeight: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
        }}
      >
        <span aria-hidden="true">♿</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          style={{
            position: 'fixed', bottom: '88px', left: '24px', zIndex: 9999,
            width: '280px', background: '#fff', borderRadius: '16px',
            border: '1px solid var(--border)', boxShadow: '0 16px 50px rgba(0,0,0,0.2)',
            padding: '20px',
          }}
        >
          <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.05rem', color: 'var(--midnight)', marginBottom: '14px' }}>
            Accessibility
          </h3>

          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 0', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--charcoal)' }}>
            High contrast
            <input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: 'var(--terracotta)' }} />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 0', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--charcoal)', borderTop: '1px solid var(--border)' }}>
            Larger text
            <input type="checkbox" checked={largeText} onChange={(e) => setLargeText(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: 'var(--terracotta)' }} />
          </label>

          <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '12px', lineHeight: 1.5 }}>
            Prefers-reduced-motion is respected automatically. For screen readers, all interactive elements are keyboard-navigable.
          </p>
        </div>
      )}
    </>
  )
}
