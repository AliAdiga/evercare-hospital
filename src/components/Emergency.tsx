import ERWaitStatus from '@/components/ERWaitStatus'

export default function Emergency() {
  return (
    <section
      id="emergency"
      style={{ padding: '100px 8%', background: 'var(--midnight)' }}
    >
      <div className="evc-appointment__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

        {/* LEFT */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff8080', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <span style={{ width: '20px', height: '2px', background: '#ff8080', display: 'inline-block' }} />
            Emergency Care
          </div>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', color: 'white', lineHeight: 1.25, marginBottom: '16px' }}>
            We are here when every second matters
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '36px' }}>
            Our Emergency Department is staffed 24 hours a day, 7 days a week
            with board-certified emergency physicians and trauma specialists.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px 24px', borderRadius: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ff4f4f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
              📞
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Emergency Hotline</div>
              <div style={{ fontFamily: 'Lora, serif', fontSize: '2rem', color: 'white', fontWeight: 600 }}>+1 (800) 911-CARE</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <ERWaitStatus />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px 24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🚑</div>
            <div>
              <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '4px' }}>Ambulance & Trauma Bay</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>Direct ambulance access with pre-notification capability. Level II Trauma Center.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px 24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>⏱️</div>
            <div>
              <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '4px' }}>Average Wait: less than 18 minutes</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>Real-time triage — patients are seen based on clinical urgency, not arrival order.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px 24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🧬</div>
            <div>
              <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '4px' }}>Rapid Diagnostics On-Site</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>Labs, CT, MRI, and X-ray available 24/7 within the ED for fast decisions.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px 24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>👨‍👩‍👧</div>
            <div>
              <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '4px' }}>Pediatric Emergency Unit</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>A dedicated, child-friendly emergency area with specialized pediatric nurses and physicians.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}