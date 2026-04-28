'use client'

import { useEffect } from 'react'

export default function ICCClient() {
  useEffect(() => {
    const nav = document.getElementById('main-nav')
    const onScroll = () => {
      if (window.scrollY > 8) nav?.classList.add('scrolled')
      else nav?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    const cta = document.getElementById('inquire-cta')
    if (cta) {
      cta.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = 'mailto:info@imperiumcuriacapital.com?subject=ICC%20Inquiry'
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return null
}
