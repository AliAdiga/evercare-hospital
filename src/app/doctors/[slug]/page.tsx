import { doctorDetails } from '@/lib/data'
import Link from 'next/link'

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = doctorDetails[slug]

  if (!doc) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fdf8f2' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: '2rem', color: '#1e2b2f', marginBottom: '12px' }}>Doctor not found</h1>
          <Link href="/" style={{ color: '#c7735a', textDecoration: 'none', fontWeight: 600 }}>Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#fdf8f2', minHeight: '100vh' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(253,248,242,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8ddd4', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#c7735a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700 }}>E</div>
          <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#1e2b2f', fontWeight: 600 }}>Evercare Hospital</span>
        </Link>
        <Link href="/#doctors" style={{ fontSize: '0.85rem', color: '#7a8a8f', textDecoration: 'none' }}>Back to Doctors</Link>
        <a href="/#appointment" style={{ background: '#c7735a', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </nav>

      <div style={{ paddingTop: '70px', background: 'linear-gradient(135deg, #1e2b2f 0%, #3a4a4f 100%)' }}>
        <div style={{ padding: '60px 8%', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '60px', alignItems: 'end' }}>
          <div style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', height: '400px' }}>
            <img src={doc.photo} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{ paddingBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(199,115,90,0.25)', color: '#e8a090', border: '1px solid rgba(199,115,90,0.4)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              {doc.specialty}
            </div>
            <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'white', lineHeight: 1.2, marginBottom: '12px' }}>{doc.name}</h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>{doc.credentials} · {doc.experience} experience</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <div>
                <div style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: 'white', fontWeight: 600 }}>⭐ {doc.rating}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{doc.reviews} reviews</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: 'white', fontWeight: 600 }}>{doc.experience}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Experience</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: 'white', fontWeight: 600 }}>{doc.languages.length}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 8%', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '60px' }}>
        <div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '20px' }}>About</h2>
            <p style={{ fontSize: '1rem', color: '#7a8a8f', lineHeight: 1.8 }}>{doc.about}</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '20px' }}>Education & Training</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {doc.education.map((edu) => (
                <div key={edu} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e8ddd4' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c7735a', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#3a4a4f' }}>{edu}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '20px' }}>Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {doc.services.map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e8ddd4' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c7735a', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#3a4a4f', fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '20px' }}>Languages</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {doc.languages.map((lang) => (
                <div key={lang} style={{ background: 'white', border: '1px solid #e8ddd4', padding: '10px 20px', borderRadius: '100px', fontSize: '0.85rem', color: '#3a4a4f', fontWeight: 500 }}>
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'sticky', top: '90px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #e8ddd4', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#1e2b2f', marginBottom: '16px' }}>Availability</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                <div key={day} style={{ padding: '6px 14px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, background: doc.availability.includes(day) ? '#f5e6da' : '#f8f8f8', color: doc.availability.includes(day) ? '#c7735a' : '#b0b0b0', border: `1px solid ${doc.availability.includes(day) ? '#e8c4b0' : '#e8e8e8'}` }}>
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            <a href="/#appointment" style={{ display: 'block', background: '#c7735a', color: 'white', padding: '14px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
              Book Appointment
            </a>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #e8ddd4' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#1e2b2f', marginBottom: '16px' }}>Contact</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f5e6da', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>📞</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>Call us</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e2b2f' }}>+1 (800) 382-7227</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f5e6da', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🏥</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>Department</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e2b2f' }}>{doc.specialty}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#1e2b2f', padding: '32px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>2026 Evercare Hospital. All rights reserved.</span>
        <Link href="/" style={{ color: '#e08b72', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Back to Home</Link>
      </div>
    </div>
  )
}