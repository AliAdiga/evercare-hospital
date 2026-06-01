export default function Footer() {
  return (
    <footer style={{ background: 'var(--midnight)', padding: '60px 8% 40px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '40px', marginBottom: '50px',
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{
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
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Cardiology</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Neurology</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Pediatrics</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Orthopedics</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Oncology</a></li>
          </ul>
        </div>

        {/* Patient Care */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
            Patient Care
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Book Appointment</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Patient Portal</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Insurance</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Medical Records</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Telehealth</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
            About
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Our Story</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Leadership</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Careers</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Research</a></li>
            <li><a href="#" style={{ textDecoration: 'none', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>Press Room</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
          2026 Evercare Hospital. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Use</a>
          <a href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Accessibility</a>
        </div>
      </div>
    </footer>
  )
}