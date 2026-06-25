import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageChrome from '@/components/PageChrome'
import { treatments, getTreatment } from '@/lib/treatments'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return treatments.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const t = getTreatment(slug)
  if (!t) return { title: 'Treatment not found' }
  return { title: `${t.name} at Evercare`, description: t.summary }
}

const h2: React.CSSProperties = { fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'var(--midnight)', marginBottom: '14px' }
const body: React.CSSProperties = { fontSize: '0.98rem', color: 'var(--charcoal)', lineHeight: 1.8 }
const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }

export default async function TreatmentPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const t = getTreatment(slug)
  if (!t) notFound()

  return (
    <PageChrome eyebrow={`${t.dept} · Treatment`} title={`${t.name} at Evercare`} intro={t.summary}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '48px', alignItems: 'start' }} className="evc-appointment__grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <h2 style={h2}>What it is</h2>
            <p style={body}>{t.whatItIs}</p>
          </section>

          <section>
            <h2 style={h2}>What to expect</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.whatToExpect.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blush)', color: 'var(--sage-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ ...body, fontSize: '0.92rem' }}>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={h2}>Recovery</h2>
            <p style={body}>{t.recovery}</p>
          </section>

          <section>
            <h2 style={h2}>Why Evercare</h2>
            <p style={body}>{t.whyEvercare}</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={card}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: 'var(--midnight)', marginBottom: '12px' }}>Considering this treatment?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '18px' }}>Book a consultation with our {t.dept} team to discuss whether it’s right for you.</p>
            <a href="/#appointment" style={{ display: 'block', background: 'var(--terracotta)', color: '#fff', padding: '13px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', textAlign: 'center', marginBottom: '10px' }}>Book a consultation</a>
            <Link href={`/departments/${t.deptSlug}`} style={{ display: 'block', background: 'var(--blush)', color: 'var(--sage-dark)', padding: '13px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', textAlign: 'center' }}>Explore {t.dept}</Link>
          </div>
          <div style={{ ...card, fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            This guide is general information, not medical advice. Your care team will tailor any plan to you.
          </div>
        </aside>
      </div>
    </PageChrome>
  )
}
