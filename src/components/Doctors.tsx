'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const doctors = [
  {
    slug: 'sarah-okonkwo',
    name: 'Dr. Sarah Okonkwo',
    specialty: 'Cardiology',
    credentials: 'MD, FACC · 18 years experience',
    rating: '4.9',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&q=80',
    badgeColor: 'var(--terracotta)',
    stars: '★★★★★',
  },
  {
    slug: 'marcus-vidal',
    name: 'Dr. Marcus Vidal',
    specialty: 'Neurology',
    credentials: 'MD, PhD · 22 years experience',
    rating: '4.8',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&q=80',
    badgeColor: 'var(--sage-dark)',
    stars: '★★★★★',
  },
  {
    slug: 'aisha-noor',
    name: 'Dr. Aisha Noor',
    specialty: 'Pediatrics',
    credentials: 'MD, FAAP · 14 years experience',
    rating: '5.0',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop&q=80',
    badgeColor: 'var(--gold)',
    stars: '★★★★★',
  },
  {
    slug: 'ravi-sharma',
    name: 'Dr. Ravi Sharma',
    specialty: 'Orthopedics',
    credentials: 'MD, FACS · 16 years experience',
    rating: '4.7',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop&q=80',
    badgeColor: '#6a5a8e',
    stars: '★★★★☆',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Doctors() {
  return (
    <section id="doctors" style={{ padding: '100px 8%', background: 'var(--cream)' }}>

      {/* Header */}
      <SectionHeading
        index="06"
        eyebrow="Our physicians"
        title="Meet the people who care"
        maxWidth={560}
        action={
          <a
            href="#appointment"
            style={{
              border: '1.5px solid var(--border)', color: 'var(--charcoal)',
              padding: '12px 24px', borderRadius: '100px',
              textDecoration: 'none', fontWeight: 500, fontSize: '0.88rem',
              whiteSpace: 'nowrap', display: 'inline-block',
            }}
          >
            Book a consultation
          </a>
        }
      />

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px',
        }}
      >
        {doctors.map((doc) => (
          <motion.div key={doc.slug} variants={cardVariants}>
            <Link href={`/doctors/${doc.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  background: 'white', borderRadius: '20px',
                  overflow: 'hidden', border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                {/* Photo */}
                <motion.div
                  style={{ height: '260px', overflow: 'hidden', position: 'relative' }}
                  whileHover="hovered"
                >
                  <motion.img
                    src={doc.photo}
                    alt={doc.name}
                    variants={{
                      hovered: { scale: 1.06 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      position: 'absolute', bottom: '12px', left: '12px',
                      background: doc.badgeColor, color: 'white',
                      padding: '4px 12px', borderRadius: '100px',
                      fontSize: '0.72rem', fontWeight: 600,
                    }}
                  >
                    {doc.specialty}
                  </motion.div>
                </motion.div>

                {/* Info */}
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Lora, serif', fontSize: '1.05rem',
                    color: 'var(--midnight)', fontWeight: 600, marginBottom: '4px',
                  }}>
                    {doc.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '12px' }}>
                    {doc.credentials}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{doc.stars}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>({doc.rating})</span>
                  </div>
                  <motion.div
                    whileHover={{ background: 'var(--terracotta)', color: 'white' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      marginTop: '16px', padding: '8px 16px',
                      background: 'var(--blush)', borderRadius: '100px',
                      fontSize: '0.78rem', color: 'var(--terracotta)',
                      fontWeight: 600, display: 'inline-block',
                      cursor: 'pointer',
                    }}
                  >
                    View Profile →
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}