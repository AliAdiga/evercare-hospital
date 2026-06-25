'use client'
import SectionHeading from '@/components/SectionHeading'

export default function WhyUs() {
  return (
    <section style={{ padding: '100px 8%', background: 'var(--warm-white)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* LEFT — image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '280px' }}>
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop&q=80"
              alt="Surgery"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '280px', marginTop: '32px' }}>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&q=80"
              alt="Doctor"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80"
              alt="Lab"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', marginTop: '-32px' }}>
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop&q=80"
              alt="Patient room"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <SectionHeading
              index="02"
              eyebrow="Why choose us"
              title="Four pillars of exceptional healthcare"
              intro="At Evercare, we set ourselves apart through our unwavering commitment to quality, innovation, and the human side of medicine."
              maxWidth={480}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                icon: '🏆',
                title: 'Best Quality Care',
                desc: 'Our physicians are trained at top-tier international institutions, working in multidisciplinary teams to deliver the highest standards of safety.',
              },
              {
                icon: '✨',
                title: 'Outstanding Experience',
                desc: 'We provide excellent service in a warm environment, focusing on communication, transparency, and making every visit comfortable.',
              },
              {
                icon: '🔬',
                title: 'Technology & Innovation',
                desc: 'We adopt the latest medical equipment and IT systems, improving safety, efficiency, and diagnostic accuracy across all departments.',
              },
              {
                icon: '🤝',
                title: 'Multidisciplinary Approach',
                desc: 'Our subspecialists work together to provide the highest standard of care, following evidence-based practices and publishing outcomes.',
              },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'var(--blush)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Lora, serif', fontSize: '1rem', color: 'var(--midnight)', fontWeight: 600, marginBottom: '6px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}