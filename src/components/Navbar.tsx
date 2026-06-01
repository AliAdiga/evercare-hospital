'use client'
import Search from '@/components/Search'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(253,248,242,0.95)' : 'rgba(253,248,242,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 5%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '70px',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700 }}>E</div>
        <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: 'var(--midnight)', fontWeight: 600 }}>Evercare Hospital</span>
      </Link>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><a href="#departments" style={{ textDecoration: 'none', color: 'var(--charcoal)', fontSize: '0.88rem' }}>Departments</a></li>
        <li><a href="#doctors" style={{ textDecoration: 'none', color: 'var(--charcoal)', fontSize: '0.88rem' }}>Doctors</a></li>
        <li><a href="#emergency" style={{ textDecoration: 'none', color: 'var(--charcoal)', fontSize: '0.88rem' }}>Emergency</a></li>
        <li><a href="#news" style={{ textDecoration: 'none', color: 'var(--charcoal)', fontSize: '0.88rem' }}>News</a></li>
        <li><a href="#contact" style={{ textDecoration: 'none', color: 'var(--charcoal)', fontSize: '0.88rem' }}>Contact</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Search />
        <a href="#appointment" style={{ background: 'var(--terracotta)', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </div>
    </nav>
  )
}