import Link from 'next/link'

const linkStyle: React.CSSProperties = {
  textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)',
}

const services = [
  { label: 'Cardiology', href: '/departments/cardiology' },
  { label: 'Neurology', href: '/departments/neurology' },
  { label: 'Pediatrics', href: '/departments/pediatrics' },
  { label: 'Orthopedics', href: '/departments/orthopedics' },
  { label: 'Oncology', href: '/departments/oncology' },
]

const patientCare = [
  { label: 'Book Appointment', href: '/#appointment' },
  { label: 'Insurance', href: '/#contact' },
  { label: 'Telehealth', href: '/#appointment' },
  { label: 'Emergency', href: '/#emergency' },
  { label: 'Contact', href: '/#contact' },
]

const about = [
  { label: 'Departments', href: '/#departments' },
  { label: 'Our Doctors', href: '/#doctors' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'News', href: '/#news' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--midnight)', padding: '60px 8% 40px' }}>
      <div className="evc-footer__grid" style={{
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '40px', marginBottom: '50px',
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div aria-hidden="true" style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'var(--terracotta)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '18px', fontWeight: 700,
              fontFamily: 'Lora, serif',
            }}>E</div>
            <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: 'white', fontWeight: 600 }}>
              Evercare Hospital
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '260px' }}>
            Serving our community with compassion and expertise since 1984.
            Your health, our deepest commitment.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0 }}>
            {services.map((s) => (
              <li key={s.label}><Link href={s.href} style={linkStyle}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Patient Care */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
            Patient Care
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0 }}>
            {patientCare.map((s) => (
              <li key={s.label}><Link href={s.href} style={linkStyle}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0 }}>
            {about.map((s) => (
              <li key={s.label}><Link href={s.href} style={linkStyle}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="evc-footer__bottom" style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
          © 2026 Evercare Hospital. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/#contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/#contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Use</Link>
          <Link href="/#contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Accessibility</Link>
        </div>
      </div>
    </footer>
  )
}
