'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Navigation */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neon">SiteNest</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          aria-label="Menu"
        >
          <div className={`w-6 flex flex-col gap-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 rotate-90' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 -rotate-90 -translate-y-2' : 'w-6'}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 pt-20 px-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="flex flex-col gap-6 text-lg font-medium text-white/90 mt-10">
          <Link href="/" onClick={handleLinkClick} className="py-3 border-b border-white/10">Home</Link>
          <Link href="#why" onClick={handleLinkClick} className="py-3 border-b border-white/10">Why</Link>
          <Link href="#work" onClick={handleLinkClick} className="py-3 border-b border-white/10">Work</Link>
          <Link href="#faq" onClick={handleLinkClick} className="py-3 border-b border-white/10">FAQ</Link>
          <Link href="#contact" onClick={handleLinkClick} className="py-3">Contact</Link>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-sm px-6 py-4 justify-between items-center">
        <h1 className="text-2xl font-bold text-neon">SiteNest</h1>
        <nav className="flex gap-6 text-sm font-medium text-white/90">
          <Link href="/">Home</Link>
          <Link href="#why">Why</Link>
          <Link href="#work">Work</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}