import type { ReactNode } from 'react'

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  maxWidth = 560,
  action,
}: {
  index: string
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
  center?: boolean
  maxWidth?: number
  action?: ReactNode
}) {
  const titleColor = light ? '#fff' : 'var(--midnight)'
  const introColor = light ? 'rgba(255,255,255,0.66)' : 'var(--muted)'
  const eyebrowColor = light ? 'var(--terracotta-light)' : 'var(--terracotta)'
  const indexColor = light ? 'rgba(255,255,255,0.5)' : 'var(--muted)'
  const ruleColor = light ? 'rgba(255,255,255,0.22)' : 'var(--border)'

  const group = (
    <div style={{ maxWidth, textAlign: center ? 'center' : 'left', margin: center ? '0 auto' : undefined }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', justifyContent: center ? 'center' : 'flex-start' }}>
        <span style={{ fontFamily: 'Fraunces, serif', fontSize: '0.82rem', fontWeight: 500, color: indexColor }}>{index}</span>
        <span style={{ width: center ? '40px' : '52px', height: '1px', background: ruleColor }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: eyebrowColor }}>{eyebrow}</span>
      </div>
      <h2 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', lineHeight: 1.08, color: titleColor, margin: 0, fontWeight: 500 }}>{title}</h2>
      {intro && <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: introColor, marginTop: '20px', maxWidth: center ? '560px' : undefined, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined }}>{intro}</p>}
    </div>
  )

  if (action) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap', marginBottom: '52px' }}>
        {group}
        {action}
      </div>
    )
  }
  return <div style={{ marginBottom: '52px' }}>{group}</div>
}
