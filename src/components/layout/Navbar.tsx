'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Offres', href: '#offres' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ink py-4 shadow-xl' : 'bg-ink/90 py-6'}`}>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Building2 className="text-laterite h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="font-serif italic text-xl md:text-2xl text-parchment uppercase tracking-tight">
            Trano Sur Mesure
          </span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-semibold text-[11px] uppercase tracking-wider text-parchment/80 hover:text-laterite transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-laterite text-parchment font-sans font-semibold text-[11px] uppercase tracking-wider px-6 py-3 hover:bg-parchment hover:text-ink transition-all"
          >
            Demander un devis
          </a>
        </nav>

        <button className="md:hidden text-parchment" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-ink border-t border-parchment/10 p-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-lg text-parchment text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-laterite text-parchment font-sans font-semibold text-center py-4"
            >
              Demander un devis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
