'use client'
import SectionHeading from '@/components/SectionHeading'

export default function News() {
  return (
    <section
      id="news"
      style={{ padding: '100px 8%', background: 'var(--warm-white)' }}
    >
      <SectionHeading
        index="06"
        eyebrow="Latest news"
        title="Health insights & hospital updates"
        maxWidth={560}
        action={
          <a href="/blog" style={{ border: '1.5px solid var(--border)', color: 'var(--charcoal)', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '0.88rem', whiteSpace: 'nowrap' }}>
            View all articles
          </a>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '24px' }}>

        <div
          style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&h=400&fit=crop&q=80"
              alt="Cardiac Surgery"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
            />
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'white', color: 'var(--terracotta)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Hospital News</div>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px' }}>May 28, 2026</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: 'var(--midnight)', marginBottom: '10px', lineHeight: 1.4, fontWeight: 600 }}>Evercare Opens New Cardiac Surgery Wing with Robotic-Assisted Technology</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>Our new 12-bed cardiac unit brings minimally invasive robotic surgery to our community, cutting recovery time by up to 40% for eligible patients.</div>
          </div>
        </div>

        <div
          style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&q=80"
              alt="Research"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'white', color: 'var(--terracotta)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Research</div>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px' }}>May 20, 2026</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: '1rem', color: 'var(--midnight)', marginBottom: '10px', lineHeight: 1.4, fontWeight: 600 }}>New Study Links Sleep Quality to Long-Term Heart Health</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>Our cardiology team joins a landmark national study on sleep and cardiovascular risk.</div>
          </div>
        </div>

        <div
          style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop&q=80"
              alt="Children screening"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'white', color: 'var(--terracotta)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Community</div>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px' }}>May 12, 2026</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: '1rem', color: 'var(--midnight)', marginBottom: '10px', lineHeight: 1.4, fontWeight: 600 }}>Free Children Health Screenings This June</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>Join us for our annual community outreach event — free vision, hearing, and developmental screenings for kids ages 2-12.</div>
          </div>
        </div>

      </div>
    </section>
  )
}