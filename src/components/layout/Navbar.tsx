"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { Menu, X } from "lucide-react";
import { Button } from "../shared/Button";

const NAV_LINKS = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Offres", href: "#offres" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => setIsOpen(false),
        });
      }
    } else {
      setIsOpen(true);
    }
  };

  useGSAP(
    () => {
      if (isOpen && menuRef.current) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        );
      }
    },
    { dependencies: [isOpen], scope: menuRef },
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-ink py-4 shadow-xl" : "bg-ink/90 py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Trano Sur Mesure"
            className="h-12 w-auto transition-transform group-hover:scale-105 duration-300"
          />
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
          <Button href="#contact" variant="accent" size="sm">
            Demander un devis
          </Button>
        </nav>

        <button
          className="md:hidden text-parchment p-2 -mr-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
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
          <Button
            href="#contact"
            variant="accent"
            className="w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Demander un devis
          </Button>
        </div>
      )}
    </header>
  );
}
