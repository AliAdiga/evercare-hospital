'use client'
import Search from '@/components/Search'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { href: '#departments', label: 'Departments' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#emergency', label: 'Emergency' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  const navHeight = useTransform(scrollY, [0, 80], [70, 58])
  const logoSize = useTransform(scrollY, [0, 80], [36, 30])
  const logoFontSize = useTransform(scrollY, [0, 80], [1.2, 1.05])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(244,246,245,0.97)' : 'rgba(244,246,245,0.82)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: navHeight,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link href="/" aria-label="Evercare Hospital — home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <motion.div
          style={{
            width: logoSize, height: logoSize,
            borderRadius: '50%',
            background: 'var(--terracotta)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <motion.span style={{ fontSize: useTransform(scrollY, [0, 80], [18, 15]) }}>E</motion.span>
        </motion.div>
        <motion.span
          style={{
            fontFamily: 'Lora, serif',
            fontSize: logoFontSize,
            color: 'var(--midnight)', fontWeight: 600,
          }}
        >
          Evercare Hospital
        </motion.span>
      </Link>

      {/* Desktop nav links */}
      <ul className="evc-nav__links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="evc-nav__link"
              aria-current={activeLink === link.href ? 'true' : undefined}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop actions */}
      <div className="evc-nav__actions">
        <Search />
        <Link
          href="/patient-portal"
          style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--charcoal)', textDecoration: 'none' }}
        >
          Portal
        </Link>
        <a
          href="#appointment"
          style={{
            background: 'var(--terracotta)', color: 'white',
            padding: '10px 22px', borderRadius: '100px',
            fontSize: '0.85rem', fontWeight: 600,
            textDecoration: 'none', display: 'inline-block',
          }}
        >
          Book Appointment
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
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={`evc-nav__mobile${mobileOpen ? ' evc-nav__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <Link href="/telehealth" onClick={() => setMobileOpen(false)}>Telehealth</Link>
        <Link href="/patient-portal" onClick={() => setMobileOpen(false)}>Patient Portal</Link>
        <a href="#appointment" className="evc-nav__mobile-cta" onClick={() => setMobileOpen(false)}>
          Book Appointment
        </a>
      </div>
    </motion.nav>
  )
}
