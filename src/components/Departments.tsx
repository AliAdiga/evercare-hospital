'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const departments = [
  { name: 'Cardiology', doctors: 8, slug: 'cardiology', featured: true, desc: 'Advanced heart care, diagnostics, and cardiac rehabilitation.', icon: 'M12 21s-7-4.35-9.5-8.5C.5 9 2.5 5 6 5c2 0 3.2 1 4 2 .8-1 2-2 4-2 3.5 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z' },
  { name: 'Neurology', doctors: 6, slug: 'neurology', desc: 'Care for stroke, epilepsy, and the nervous system.', icon: 'M3 12h4l2 6 4-12 2 6h4' },
  { name: 'Pediatrics', doctors: 7, slug: 'pediatrics', desc: 'Gentle, expert care from newborns to adolescents.', icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0' },
  { name: 'Orthopedics', doctors: 5, slug: 'orthopedics', desc: 'Joint replacement, sports injuries, and spine.', icon: 'M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3 M8 3h8' },
  { name: 'Oncology', doctors: 6, slug: 'oncology', desc: 'Cutting-edge cancer treatment and immunotherapy.', icon: 'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z M9 12l2 2 4-4' },
  { name: 'Ophthalmology', doctors: 4, slug: 'ophthalmology', desc: 'Full eye care, cataract surgery, and LASIK.', icon: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
  { name: 'Pulmonology', doctors: 5, slug: 'pulmonology', desc: 'Asthma, COPD, sleep apnea, and lung conditions.', icon: 'M12 4v8 M8 12c0 4-1 6-3 6s-2-3-2-6 2-6 4-6 M16 12c0 4 1 6 3 6s2-3 2-6-2-6-4-6' },
  { name: 'Radiology', doctors: 4, slug: 'radiology', desc: 'MRI, CT, and PET imaging with rapid results.', icon: 'M4 7V5a1 1 0 0 1 1-1h2 M17 4h2a1 1 0 0 1 1 1v2 M20 17v2a1 1 0 0 1-1 1h-2 M7 20H5a1 1 0 0 1-1-1v-2 M4 12h16' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export default function Departments() {
  return (
    <section id="departments" style={{ padding: '100px clamp(1.5rem, 6vw, 6rem)', background: 'var(--navy)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <SectionHeading
          index="05"
          eyebrow="Children health, our priority"
          title="Explore our medical departments"
          intro="From routine check-ups to complex surgery, our multidisciplinary teams care for every aspect of your health."
          light
          action={
            <a href="#appointment" style={{ background: 'var(--teal)', color: '#fff', padding: '13px 26px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', whiteSpace: 'nowrap' }}>
              View all departments
            </a>
          }
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}
        >
          {departments.map((dept) => {
            const featured = dept.featured
            return (
              <motion.div key={dept.name} variants={cardVariants} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/departments/${dept.slug}`}
                  style={{
                    display: 'block', textDecoration: 'none',
                    background: featured ? 'var(--teal)' : 'var(--warm-white)',
                    borderRadius: '20px', padding: '28px',
                    border: featured ? '1px solid var(--teal)' : '1px solid rgba(255,255,255,0.08)',
                    height: '100%',
                  }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: featured ? 'rgba(255,255,255,0.18)' : 'var(--blush)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px',
                  }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={featured ? '#fff' : 'var(--teal)'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={dept.icon} />
                    </svg>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600, color: featured ? '#fff' : 'var(--navy)', marginBottom: '6px' }}>{dept.name}</div>
                  <div style={{ fontSize: '0.84rem', color: featured ? 'rgba(255,255,255,0.85)' : 'var(--muted)', lineHeight: 1.55, marginBottom: '16px' }}>{dept.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: featured ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border)', paddingTop: '14px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: featured ? 'rgba(255,255,255,0.9)' : 'var(--teal)' }}>{dept.doctors} doctors</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: featured ? '#fff' : 'var(--navy)' }}>→</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
