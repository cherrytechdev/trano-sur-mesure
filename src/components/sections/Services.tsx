'use client'

import { PencilRuler, Construction, SearchCheck } from 'lucide-react'
import { SectionHeading } from '../shared/SectionHeading'

const SERVICES = [
  {
    title: 'Conception & Études',
    desc: 'Plans architecturaux sur mesure, études de sol, ingénierie structurelle et modélisation 3D pour visualiser votre futur espace avec précision.',
    icon: PencilRuler,
    tag: 'Sur Mesure',
    variant: 'conception' as const,
  },
  {
    title: 'Réalisation Clé en Main',
    desc: 'Prise en charge intégrale de la construction. Du terrassement aux finitions intérieures, nous coordonnons tous les corps d\'état.',
    icon: Construction,
    tag: 'Garantie Décennale',
    variant: 'realisation' as const,
    highlight: true,
  },
  {
    title: 'Suivi & Contrôle',
    desc: 'Direction de l\'exécution des travaux, réunions de chantier hebdomadaires et contrôle qualité rigoureux à chaque phase de la construction.',
    icon: SearchCheck,
    tag: 'Transparence',
    variant: 'suivi' as const,
  },
]

const textureMap: Record<string, string> = {
  conception: 'bg-plan opacity-30',
  realisation: 'bg-concrete opacity-[0.04]',
  suivi: 'bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,var(--color-line)_39px,var(--color-line)_40px)] opacity-[0.1]',
}

const iconBoxVariants: Record<string, string> = {
  conception: 'bg-laterite shadow-sm group-hover:shadow-md',
  realisation: 'bg-gradient-to-br from-laterite to-laterite-dark shadow-md group-hover:shadow-lg',
  suivi: 'bg-ink shadow-sm group-hover:shadow-md',
}

export function Services() {
  return (
    <section id="services" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Expertise" title="Nos Services" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="relative group cursor-pointer">
              {/* Décorative corner brackets */}
              <div className="hidden md:block absolute -top-2 -left-2 w-10 h-10 pointer-events-none" aria-hidden>
                <div className="absolute top-0 left-0 w-5 h-px bg-line/50" />
                <div className="absolute top-0 left-0 h-5 w-px bg-line/50" />
              </div>
              <div className="hidden md:block absolute -bottom-2 -right-2 w-10 h-10 pointer-events-none" aria-hidden>
                <div className="absolute bottom-0 right-0 w-5 h-px bg-line/50" />
                <div className="absolute bottom-0 right-0 h-5 w-px bg-line/50" />
              </div>

              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-laterite to-laterite-dark text-parchment font-sans font-bold text-[9px] uppercase tracking-[0.25em] px-5 py-1.5 z-10 whitespace-nowrap shadow-lg">
                  Cœur de métier
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-dark-parchment border border-line/30 transition-all duration-500
                  ${service.highlight ? 'pt-12 pb-8 px-8 shadow-md' : 'p-8 shadow-sm'}
                  hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Texture de fond */}
                <div
                  className={`absolute inset-0 pointer-events-none ${textureMap[service.variant]}`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon box */}
                  <div
                    className={`w-12 h-12 text-parchment flex items-center justify-center mb-6 transition-all duration-500 ${iconBoxVariants[service.variant]}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif italic text-3xl text-ink mb-6">
                    {service.title}
                  </h3>

                  <p className="text-ink/70 text-base md:text-lg mb-8 leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  {/* Tag */}
                  <span className="self-start inline-flex items-center gap-2 bg-parchment text-laterite font-sans font-bold text-[9px] uppercase tracking-widest px-4 py-2 ring-1 ring-ink/5 group-hover:bg-laterite group-hover:text-parchment group-hover:ring-laterite transition-all duration-500">
                    {service.variant === 'conception' && <span className="w-1.5 h-1.5 bg-laterite/40 rounded-full group-hover:bg-parchment/40 transition-colors duration-500" />
                    }
                    {service.variant === 'realisation' && <span className="w-3 h-px bg-laterite/40 group-hover:bg-parchment/40 transition-colors duration-500" />
                    }
                    {service.variant === 'suivi' && <span className="w-1.5 h-1.5 border border-laterite/40 rotate-45 group-hover:border-parchment/40 transition-colors duration-500" />
                    }
                    {service.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
