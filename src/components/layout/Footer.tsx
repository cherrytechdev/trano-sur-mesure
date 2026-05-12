import { Building2 } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Offres', href: '#offres' },
  { name: 'Contact', href: '#contact' },
]

const LEGAL_ITEMS = [
  { name: 'Mentions Légales', href: '#' },
  { name: 'Politique de Confidentialité', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-parchment pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <Building2 className="text-laterite h-8 w-8" />
              <span className="font-serif italic text-2xl uppercase tracking-tight">Trano Sur Mesure</span>
            </a>
            <p className="text-parchment/60 text-lg max-w-sm leading-relaxed mb-8 font-light">
              L'excellence architecturale et la rigueur de construction pour des projets immobiliers sereins à Madagascar.
            </p>
          </div>

          <div>
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-laterite block mb-8">Navigation</span>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-laterite block mb-8">Légal</span>
            <ul className="space-y-4">
              {LEGAL_ITEMS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-parchment/5 pt-12 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
          <span className="text-parchment/30 text-[10px] uppercase tracking-widest font-sans font-bold">
            © 2024 Trano Sur Mesure. L'excellence architecturale.
          </span>
        </div>
      </div>
    </footer>
  )
}
