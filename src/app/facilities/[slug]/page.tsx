import GalleryGrid from '@/components/GalleryGrid'
import { facilityDetails } from '@/lib/data'
import Link from 'next/link'

export default async function FacilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const facility = facilityDetails[slug]

  if (!facility) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6f5' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: '2rem', color: '#0e3a3f', marginBottom: '12px' }}>Facility not found</h1>
          <Link href="/" style={{ color: '#db6a47', textDecoration: 'none', fontWeight: 600 }}>Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#f4f6f5', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(244,246,245,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dde7e5', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#db6a47', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700 }}>E</div>
          <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#0e3a3f', fontWeight: 600 }}>Evercare Hospital</span>
        </Link>
        <Link href="/#facilities" style={{ fontSize: '0.85rem', color: '#7a8a8f', textDecoration: 'none' }}>Back to Facilities</Link>
        <a href="/#appointment" style={{ background: '#db6a47', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </nav>

      {/* Hero */}
      <div style={{ paddingTop: '70px', position: 'relative', height: '520px', overflow: 'hidden' }}>
        <img src={facility.image} alt={facility.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,58,63,0.88) 0%, rgba(14,58,63,0.35) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 8%' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(219,106,71,0.25)', color: '#f0a98e', border: '1px solid rgba(219,106,71,0.4)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Our Facilities
            </div>
            <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>{facility.name}</h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '500px' }}>{facility.tagline}</p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: '#0e3a3f', padding: '32px 8%' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          {facility.stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: 'white', fontWeight: 600 }}>{stat.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '80px 8%', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '60px' }}>

        {/* Left */}
        <div>

          {/* Overview */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#db6a47', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ width: '20px', height: '2px', background: '#db6a47', display: 'inline-block' }} />
              Overview
            </div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#0e3a3f', marginBottom: '20px' }}>About this facility</h2>
            <div style={{ fontSize: '1rem', color: '#7a8a8f', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
              {facility.detailedDesc}
            </div>
          </div>

          {/* Photo gallery */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#db6a47', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ width: '20px', height: '2px', background: '#db6a47', display: 'inline-block' }} />
              Photo Gallery
            </div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#0e3a3f', marginBottom: '24px' }}>See inside</h2>
            <GalleryGrid photos={facility.gallery} name={facility.name} />
          </div>

          {/* Features */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#db6a47', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ width: '20px', height: '2px', background: '#db6a47', display: 'inline-block' }} />
              Features
            </div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: '#0e3a3f', marginBottom: '24px' }}>Capabilities & amenities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {facility.features.map((feature) => (
                <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '16px 20px', borderRadius: '12px', border: '1px solid #dde7e5' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#db6a47', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: '#28393c', fontWeight: 500 }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div style={{ background: 'linear-gradient(135deg, #0e3a3f, #28393c)', borderRadius: '20px', padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f0a98e', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ width: '20px', height: '2px', background: '#f0a98e', display: 'inline-block' }} />
              Why It Matters
            </div>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', color: 'white', marginBottom: '16px' }}>The difference it makes for you</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>{facility.whyItMatters}</p>
          </div>

        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: '90px', alignSelf: 'start' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #dde7e5', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#0e3a3f', marginBottom: '16px' }}>Book an Appointment</h3>
            <p style={{ fontSize: '0.85rem', color: '#7a8a8f', lineHeight: 1.6, marginBottom: '24px' }}>
              Schedule a visit and experience our world-class facilities firsthand.
            </p>
            <a href="/#appointment" style={{ display: 'block', background: '#db6a47', color: 'white', padding: '14px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center', marginBottom: '12px' }}>
              Book Appointment
            </a>
            <a href="tel:+18003827227" style={{ display: 'block', background: '#dcebe9', color: '#db6a47', padding: '14px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
              Call +1 (800) 382-7227
            </a>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #dde7e5', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#0e3a3f', marginBottom: '16px' }}>Location & Hours</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dcebe9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f', marginBottom: '2px' }}>Address</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0e3a3f', lineHeight: 1.5 }}>4200 Evercare Boulevard{'\n'}Downtown Medical District, CA 90210</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dcebe9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>🕐</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f', marginBottom: '2px' }}>Hours</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0e3a3f' }}>Open 24 hours, 7 days</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dcebe9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>🚗</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#7a8a8f', marginBottom: '2px' }}>Parking</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0e3a3f' }}>Free on-site · 400 spaces</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #dde7e5' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#0e3a3f', marginBottom: '16px' }}>Other Facilities</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { slug: 'operating-theatres', name: 'Operating Theatres', icon: '🏥' },
                { slug: 'icu', name: 'Intensive Care Unit', icon: '💊' },
                { slug: 'patient-rooms', name: 'Patient Rooms', icon: '🛏️' },
                { slug: 'pharmacy', name: 'In-House Pharmacy', icon: '💊' },
              ].filter(f => f.slug !== slug).map((f) => (
                <Link key={f.slug} href={`/facilities/${f.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#f4f6f5', textDecoration: 'none', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '16px' }}>{f.icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#28393c' }}>{f.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0e3a3f', padding: '32px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>2026 Evercare Hospital. All rights reserved.</span>
        <Link href="/" style={{ color: '#ec8a6c', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Back to Home</Link>
      </div>
    </div>
  )
}