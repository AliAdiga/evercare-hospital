'use client'

import Link from 'next/link'

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

export default function Doctors() {
  return (
    <section id="doctors" style={{ padding: '100px 8%', background: 'var(--cream)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--terracotta)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <span style={{ width: '20px', height: '2px', background: 'var(--terracotta)', display: 'inline-block' }} />
            Our Physicians
          </div>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', color: 'var(--midnight)', lineHeight: 1.25 }}>
            Meet the people who care
          </h2>
        </div>
        <a href="#" style={{ border: '2px solid var(--border)', color: 'var(--charcoal)', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '0.88rem', whiteSpace: 'nowrap' }}>
          View all doctors
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
        {doctors.map((doc) => (
          <Link
            key={doc.slug}
            href={`/doctors/${doc.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', transition: 'all 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={doc.photo}
                  alt={doc.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: doc.badgeColor, color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600 }}>
                  {doc.specialty}
                </div>
              </div>
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Lora, serif', fontSize: '1.05rem', color: 'var(--midnight)', fontWeight: 600, marginBottom: '4px' }}>{doc.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '12px' }}>{doc.credentials}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{doc.stars}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>({doc.rating})</span>
                </div>
                <div style={{ marginTop: '16px', padding: '8px 16px', background: 'var(--blush)', borderRadius: '100px', fontSize: '0.78rem', color: 'var(--terracotta)', fontWeight: 600, display: 'inline-block' }}>
                  View Profile
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}