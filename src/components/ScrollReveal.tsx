'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let io: IntersectionObserver | null = null

    const run = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>('section:not(#hero), [data-reveal]')
      ).filter((el) => !el.classList.contains('evc-reveal'))

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              io?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px -8% 0px' }
      )

      els.forEach((el) => {
        el.classList.add('evc-reveal')
        io?.observe(el)
      })
    }

    const raf = requestAnimationFrame(run)
    return () => {
      cancelAnimationFrame(raf)
      io?.disconnect()
    }
  }, [pathname])

  return null
}
