"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { ArrowDown, Cookie } from "lucide-react";
import { Button } from "../shared/Button";

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!prefersReduced) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-label", { opacity: 0, y: 20, duration: 0.8 })
          .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
          .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
          .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
          .from(".hero-scroll", { opacity: 0, x: -20, duration: 0.6 }, "-=0.4")
          .from(".hero-cookie", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-socials", { opacity: 0, x: 20, duration: 0.6 }, "-=0.4");
      } else {
        gsap.set(
          ".hero-label, .hero-title, .hero-subtitle, .hero-buttons, .hero-scroll, .hero-cookie, .hero-socials",
          { opacity: 1, y: 0, x: 0 },
        );
      }
    },
    { scope: container },
  );

  return (
    <section
      id="accueil"
      ref={container}
      className="relative h-[calc(100vh-12px)] py-5 min-h-screen overflow-hidden bg-ink flex flex-col justify-end item-center "
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/conception/06. Ifarihy.webp"
          alt="Construction sur mesure"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      {/* Contenu principal — centré en haut */}
      <div className="relative z-10 flex flex-col items-center pt-36 md:pt-44 px-6">
        <h1 className="hero-title font-serif italic text-3xl md:text-5xl lg:text-6xl text-parchment leading-tight max-w-4xl text-center mb-4">
          Construisez votre maison en toute sécurité
        </h1>

        <p className="hero-subtitle font-sans text-parchment/60 text-sm md:text-base max-w-xl text-center mb-10">
          Découvrez notre expertise en construction et rénovation. Des projets
          sur mesure, du devis à la livraison.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4">
          <Button href="#realisations" variant="primary" size="lg" arrow>
            Voir nos réalisations
          </Button>
          <Button href="#contact" variant="accent" size="lg" arrow>
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}
