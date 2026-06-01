import { departmentDetails } from '@/lib/data'
import Link from 'next/link'

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dept = departmentDetails[slug]

  if (!dept) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fdf8f2' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: '2rem', color: '#1e2b2f', marginBottom: '12px' }}>Department not found</h1>
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
        <Link href="/#departments" style={{ fontSize: '0.85rem', color: '#7a8a8f', textDecoration: 'none' }}>Back to Departments</Link>
        <a href="/#appointment" style={{ background: '#c7735a', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </nav>

      <div style={{ paddingTop: '70px', position: 'relative', height: '480px', overflow: 'hidden' }}>
        <img src={dept.image} alt={dept.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(30,43,47,0.85) 0%, rgba(30,43,47,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 8%' }}>
          <div>
            <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>{dept.name}</h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '500px' }}>{dept.tagline}</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 8%', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '60px' }}>
        <div>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '20px' }}>About our {dept.name} Department</h2>
          <p style={{ fontSize: '1rem', color: '#7a8a8f', lineHeight: 1.8, marginBottom: '56px' }}>{dept.overview}</p>

          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '28px' }}>What we offer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '56px' }}>
            {dept.services.map((service) => (
              <div key={service} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e8ddd4' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c7735a', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', color: '#3a4a4f', fontWeight: 500 }}>{service}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#1e2b2f', marginBottom: '28px' }}>Conditions we treat</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {dept.conditions.map((condition) => (
              <div key={condition} style={{ background: 'white', border: '1px solid #e8ddd4', padding: '10px 18px', borderRadius: '100px', fontSize: '0.85rem', color: '#3a4a4f', fontWeight: 500 }}>
                {condition}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'sticky', top: '90px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #e8ddd4', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#1e2b2f', marginBottom: '16px' }}>Book an Appointment</h3>
            <p style={{ fontSize: '0.85rem', color: '#7a8a8f', lineHeight: 1.6, marginBottom: '24px' }}>Schedule a consultation with one of our {dept.name} specialists today.</p>
            <a href="/#appointment" style={{ display: 'block', background: '#c7735a', color: 'white', padding: '14px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>Book Appointment</a>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #e8ddd4' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#1e2b2f', marginBottom: '16px' }}>Need help?</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f5e6da', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>📞</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>Call us</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e2b2f' }}>+1 (800) 382-7227</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f5e6da', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✉️</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>Email us</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e2b2f' }}>contact@evercarehospital.com</div>
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