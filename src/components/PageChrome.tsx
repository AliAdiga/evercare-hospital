import Link from 'next/link'

export default function PageChrome({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(244,246,245,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div aria-hidden="true" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Lora, serif' }}>E</div>
          <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: 'var(--midnight)', fontWeight: 600 }}>Evercare Hospital</span>
        </Link>
        <a href="/#appointment" style={{ background: 'var(--terracotta)', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </nav>

      {/* Hero */}
      <header style={{ position: 'relative', overflow: 'hidden', paddingTop: '70px', background: 'linear-gradient(135deg, var(--midnight) 0%, var(--sage-dark) 100%)' }}>
        <span aria-hidden="true" style={{ position: 'absolute', right: '-1%', top: '8%', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 'clamp(12rem, 26vw, 28rem)', color: 'rgba(255,255,255,0.05)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>E</span>
        <div className="evc-section-pad" style={{ position: 'relative', padding: '76px 8% 64px', maxWidth: '1100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <span style={{ width: '52px', height: '1px', background: 'rgba(255,255,255,0.32)' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta-light)' }}>{eyebrow}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', color: '#fff', lineHeight: 1.02, margin: 0, fontWeight: 500, maxWidth: '860px', letterSpacing: '-0.02em' }}>{title}</h1>
          {intro && <p style={{ fontSize: 'clamp(1.02rem, 1.5vw, 1.22rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '620px', marginTop: '24px' }}>{intro}</p>}
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.14)', margin: '0 8%' }} />
      </header>

      {/* Content */}
      <main className="evc-section-pad" style={{ padding: '64px 8%', maxWidth: '1100px', margin: '0 auto' }}>
        {children}
      </main>

      {/* Footer */}
      <div style={{ background: 'var(--midnight)', padding: '32px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>© 2026 Evercare Hospital. All rights reserved.</span>
        <Link href="/" style={{ color: 'var(--terracotta-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Back to Home</Link>
      </div>
    </div>
  )
}
