'use client'
import Search from '@/components/Search'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#departments', label: 'Departments' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
]

function CrossLogo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '12px', background: 'var(--teal)', flexShrink: 0 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <path d="M12 5v14 M5 12h14" />
      </svg>
    </span>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'var(--warm-white)', boxShadow: '0 1px 0 var(--border)' }}>
      {/* Utility bar */}
      <div className="evc-util" style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.8)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '8px clamp(1.25rem, 5vw, 4rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem' }}>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Mon–Sat: 7:00am – 11:00pm</span>
          </div>
          <div style={{ display: 'flex', gap: '22px' }}>
            <a href="tel:+18003827227" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>+1 (800) 382-7227</a>
            <a href="mailto:contact@evercarehospital.com" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>contact@evercarehospital.com</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 4rem)', height: '74px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem' }}>
        {/* Logo */}
        <Link href="/" aria-label="Evercare Medical Center — home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <CrossLogo />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)' }}>Evercare</span>
            <span style={{ fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>Medical Center</span>
          </span>
        </Link>

        {/* Centered nav */}
        <nav className="evc-nav__links" style={{ justifyContent: 'center' }}>
          {navLinks.map((link) => (
            <li key={link.href} style={{ listStyle: 'none' }}>
              <a href={link.href} className="evc-nav__link" style={{ fontWeight: 500 }}>{link.label}</a>
            </li>
          ))}
        </nav>

        {/* Actions */}
        <div className="evc-nav__actions" style={{ justifyContent: 'flex-end' }}>
          <Search />
          <Link href="/patient-portal" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none' }}>Portal</Link>
          <a href="#appointment" style={{ background: 'var(--teal)', color: '#fff', padding: '11px 24px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', boxShadow: '0 8px 22px rgba(21,177,164,0.3)' }}>
            Book online
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="evc-nav__burger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
          style={{ gridColumn: 3, justifySelf: 'end' }}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`evc-nav__mobile${mobileOpen ? ' evc-nav__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
        ))}
        <Link href="/telehealth" onClick={() => setMobileOpen(false)}>Telehealth</Link>
        <Link href="/patient-portal" onClick={() => setMobileOpen(false)}>Patient Portal</Link>
        <a href="#appointment" className="evc-nav__mobile-cta" onClick={() => setMobileOpen(false)}>Book online</a>
      </div>
    </header>
  )
}
