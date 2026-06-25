import type { Metadata } from 'next'
import Link from 'next/link'
import PageChrome from '@/components/PageChrome'
import { treatments } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'Treatments & Procedures',
  description: 'In-depth guides to specific treatments at Evercare Hospital — what each procedure involves, what to expect, and recovery.',
}

const card: React.CSSProperties = { background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px', textDecoration: 'none', display: 'block' }

export default function TreatmentsIndex() {
  return (
    <PageChrome
      eyebrow="Treatments & Procedures"
      title="Clear answers about your care"
      intro="Detailed, plain-language guides to common procedures — what they are, what to expect on the day, and how recovery works."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {treatments.map((t) => (
          <Link key={t.slug} href={`/treatments/${t.slug}`} style={card}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '10px' }}>{t.dept}</div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.3rem', color: 'var(--midnight)', marginBottom: '10px', lineHeight: 1.3 }}>{t.name}</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.summary}</p>
            <span style={{ display: 'inline-block', marginTop: '14px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--terracotta)' }}>Read the guide →</span>
          </Link>
        ))}
      </div>
    </PageChrome>
  )
}
