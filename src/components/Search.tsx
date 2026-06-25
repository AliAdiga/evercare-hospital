'use client'

import { useState } from 'react'
import Link from 'next/link'

const searchData = [
  { type: 'Department', title: 'Cardiology', desc: 'Heart care, diagnostics, interventional procedures', href: '/departments/cardiology', icon: '🫀' },
  { type: 'Department', title: 'Neurology', desc: 'Brain, spinal cord, and nervous system care', href: '/departments/neurology', icon: '🧠' },
  { type: 'Department', title: 'Pediatrics', desc: 'Children and newborn care', href: '/departments/pediatrics', icon: '👶' },
  { type: 'Department', title: 'Orthopedics', desc: 'Joint replacement, sports injuries, spine', href: '/departments/orthopedics', icon: '🦴' },
  { type: 'Department', title: 'Oncology', desc: 'Cancer treatment and immunotherapy', href: '/departments/oncology', icon: '🔬' },
  { type: 'Department', title: 'Ophthalmology', desc: 'Eye care, LASIK, cataract surgery', href: '/departments/ophthalmology', icon: '👁' },
  { type: 'Department', title: 'Pulmonology', desc: 'Respiratory care, asthma, COPD', href: '/departments/pulmonology', icon: '🫁' },
  { type: 'Department', title: 'Radiology', desc: 'MRI, CT, PET scans, imaging', href: '/departments/radiology', icon: '🩻' },
  { type: 'Doctor', title: 'Dr. Sarah Okonkwo', desc: 'Cardiologist · MD, FACC · 18 years', href: '/doctors/sarah-okonkwo', icon: '👩‍⚕️' },
  { type: 'Doctor', title: 'Dr. Marcus Vidal', desc: 'Neurologist · MD, PhD · 22 years', href: '/doctors/marcus-vidal', icon: '👨‍⚕️' },
  { type: 'Doctor', title: 'Dr. Aisha Noor', desc: 'Pediatrician · MD, FAAP · 14 years', href: '/doctors/aisha-noor', icon: '👩‍⚕️' },
  { type: 'Doctor', title: 'Dr. Ravi Sharma', desc: 'Orthopedic Surgeon · MD, FACS · 16 years', href: '/doctors/ravi-sharma', icon: '👨‍⚕️' },
  { type: 'Page', title: 'Book Appointment', desc: 'Schedule a visit with a specialist', href: '/#appointment', icon: '📅' },
  { type: 'Page', title: 'Emergency Care', desc: '24/7 emergency department', href: '/#emergency', icon: '🚑' },
  { type: 'Page', title: 'Health Blog', desc: 'Articles and health insights', href: '/blog', icon: '📝' },
  { type: 'Page', title: 'Contact Us', desc: 'Get in touch with our team', href: '/#contact', icon: '📞' },
]

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = query.length > 1
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'var(--blush)', border: '1px solid var(--border)',
          borderRadius: '100px', padding: '8px 16px',
          cursor: 'pointer', fontSize: '0.85rem', color: 'var(--muted)',
          transition: 'all 0.2s',
        }}
      >
        🔍 Search...
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(14,58,63,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            paddingTop: '80px', padding: '80px 20px 20px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div style={{
            background: 'white', borderRadius: '20px',
            width: '100%', maxWidth: '600px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}>
            {/* Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px 24px', borderBottom: '1px solid #dde7e5' }}>
              <span style={{ fontSize: '1.2rem' }}>🔍</span>
              <input
                autoFocus
                type="text"
                placeholder="Search doctors, departments, services..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  fontSize: '1rem', color: '#0e3a3f',
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'transparent',
                }}
              />
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#7a8a8f', padding: '4px' }}
              >
                ✕
              </button>
            </div>

            {/* Results */}
            <div style={{ maxHeight: '420px', overflowY: 'auto' }}>
              {query.length <= 1 && (
                <div style={{ padding: '24px', textAlign: 'center', color: '#7a8a8f', fontSize: '0.88rem' }}>
                  Start typing to search departments, doctors, and more...
                </div>
              )}
              {query.length > 1 && results.length === 0 && (
                <div style={{ padding: '24px', textAlign: 'center', color: '#7a8a8f', fontSize: '0.88rem' }}>
                  No results found for "{query}"
                </div>
              )}
              {results.length > 0 && (
                <div style={{ padding: '12px' }}>
                  {results.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        padding: '12px 16px', borderRadius: '12px',
                        transition: 'background 0.15s', cursor: 'pointer',
                      }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f4f6f5'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#dcebe9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                          {item.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0e3a3f', marginBottom: '2px' }}>{item.title}</div>
                          <div style={{ fontSize: '0.78rem', color: '#7a8a8f' }}>{item.desc}</div>
                        </div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#db6a47', background: '#fbe8e1', padding: '3px 10px', borderRadius: '100px' }}>
                          {item.type}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: '12px 24px', borderTop: '1px solid #dde7e5', display: 'flex', gap: '16px' }}>
              <span style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>↵ to select</span>
              <span style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}