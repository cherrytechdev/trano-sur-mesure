import { MapPin, Mail, Phone } from "lucide-react";

const NAV_ITEMS = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Offres", href: "#offres" },
  { name: "Contact", href: "#contact" },
];

const CONTACT_INFO = [
  { icon: MapPin, text: "Antananarivo, Madagascar" },
  { icon: Mail, text: "contact@tranosurmesure.mg" },
  { icon: Phone, text: "+261 34 00 000 00" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-parchment pt-20 md:pt-28 pb-10 relative overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-laterite/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src="/images/logo.png"
                alt="Trano Sur Mesure"
                className="h-12 w-auto transition-transform group-hover:scale-105 duration-500"
              />
              <span className="font-serif italic text-2xl uppercase tracking-tight">
                Trano Sur Mesure
              </span>
            </a>
            <p className="text-parchment/50 text-base leading-relaxed mb-8 max-w-sm font-light">
              L&apos;excellence architecturale et la rigueur de construction
              pour des projets immobiliers sereins à Madagascar.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              {["FB", "IG", "LN"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 border border-parchment/10 flex items-center justify-center text-parchment/30 text-[10px] font-sans font-bold tracking-wider hover:bg-laterite hover:text-parchment hover:border-laterite transition-all duration-300"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-3">
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-laterite block mb-8">
              Navigation
            </span>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-parchment/50 hover:text-parchment transition-colors text-base font-light relative inline-block group/link"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-laterite transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-laterite block mb-8">
              Contact
            </span>
            <ul className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 group">
                  <span className="w-8 h-8 border border-parchment/10 flex items-center justify-center shrink-0 group-hover:border-laterite group-hover:bg-laterite transition-all duration-300">
                    <Icon
                      size={14}
                      className="text-parchment/40 group-hover:text-parchment transition-colors duration-300"
                    />
                  </span>
                  <span className="text-parchment/50 text-sm font-light group-hover:text-parchment/70 transition-colors duration-300">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/5 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <span className="text-parchment/20 text-[10px] uppercase tracking-widest font-sans font-bold">
            &copy; {new Date().getFullYear()} Trano Sur Mesure. Tous droits
            réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
