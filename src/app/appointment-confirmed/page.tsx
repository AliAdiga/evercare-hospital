import Link from 'next/link'

export default function AppointmentConfirmed() {
  const refNumber = 'EVC-' + Math.random().toString(36).substring(2, 8).toUpperCase()

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6f5', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav style={{ background: 'rgba(244,246,245,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #dde7e5', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#db6a47', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700 }}>E</div>
          <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#0e3a3f', fontWeight: 600 }}>Evercare Hospital</span>
        </Link>
      </nav>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 8%' }}>
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>

          {/* Success icon */}
          <div style={{
            width: '96px', height: '96px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #2f8f86, #1d6f69)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2.8rem', margin: '0 auto 32px',
            boxShadow: '0 0 0 16px rgba(47,143,134,0.12), 0 0 0 32px rgba(47,143,134,0.06)',
          }}>
            ✓
          </div>

          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0e3a3f', marginBottom: '16px', lineHeight: 1.2 }}>
            Appointment Requested!
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#7a8a8f', lineHeight: 1.7, marginBottom: '40px' }}>
            Thank you for choosing Evercare Hospital. We have received your appointment request and our team will contact you shortly to confirm your booking.
          </p>

          {/* Reference card */}
          <div style={{ background: 'white', border: '1px solid #dde7e5', borderRadius: '20px', padding: '32px', marginBottom: '40px' }}>
            <div style={{ fontSize: '0.78rem', color: '#7a8a8f', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Booking Reference
            </div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: '2rem', color: '#db6a47', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '20px' }}>
              {refNumber}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'left' }}>
              <div style={{ background: '#f4f6f5', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: '#7a8a8f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Status</div>
                <div style={{ fontSize: '0.9rem', color: '#0e3a3f', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2f8f86', display: 'inline-block' }} />
                  Pending Confirmation
                </div>
              </div>
              <div style={{ background: '#f4f6f5', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: '#7a8a8f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Response Time</div>
                <div style={{ fontSize: '0.9rem', color: '#0e3a3f', fontWeight: 600 }}>Within 2 hours</div>
              </div>
              <div style={{ background: '#f4f6f5', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: '#7a8a8f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Confirmation Via</div>
                <div style={{ fontSize: '0.9rem', color: '#0e3a3f', fontWeight: 600 }}>SMS & Email</div>
              </div>
              <div style={{ background: '#f4f6f5', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: '#7a8a8f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Emergency</div>
                <div style={{ fontSize: '0.9rem', color: '#db6a47', fontWeight: 600 }}>+1 (800) 911-CARE</div>
              </div>
            </div>
          </div>

          {/* What's next */}
          <div style={{ background: 'white', border: '1px solid #dde7e5', borderRadius: '20px', padding: '32px', marginBottom: '40px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#0e3a3f', marginBottom: '20px' }}>What happens next?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { step: '1', text: 'Our team reviews your request and checks specialist availability.' },
                { step: '2', text: 'You receive an SMS and email confirmation with your exact appointment time.' },
                { step: '3', text: 'A reminder is sent 24 hours before your appointment.' },
                { step: '4', text: 'Arrive 15 minutes early with your ID and insurance card.' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dcebe9', color: '#db6a47', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#7a8a8f', lineHeight: 1.6, paddingTop: '4px' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ background: '#db6a47', color: 'white', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Back to Home
            </Link>
            <Link href="/#departments" style={{ border: '2px solid #dde7e5', color: '#28393c', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>
              Explore Departments
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0e3a3f', padding: '24px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>2026 Evercare Hospital. All rights reserved.</span>
        <Link href="/" style={{ color: '#ec8a6c', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600 }}>evercarehospital.com</Link>
      </div>
    </div>
  )
}