'use client'

import { motion } from 'framer-motion'
import { PencilRuler, Construction, SearchCheck } from 'lucide-react'
import { SectionHeading } from '../shared/SectionHeading'

const SERVICES = [
  {
    title: 'Conception & Études',
    desc: 'Plans architecturaux sur mesure, études de sol, ingénierie structurelle et modélisation 3D pour visualiser votre futur espace avec précision.',
    icon: PencilRuler,
    tag: 'Sur Mesure',
  },
  {
    title: 'Réalisation Clé en Main',
    desc: 'Prise en charge intégrale de la construction. Du terrassement aux finitions intérieures, nous coordonnons tous les corps d\'état.',
    icon: Construction,
    tag: 'Garantie Décennale',
    highlight: true,
  },
  {
    title: 'Suivi & Contrôle',
    desc: 'Direction de l\'exécution des travaux, réunions de chantier hebdomadaires et contrôle qualité rigoureux à chaque phase de la construction.',
    icon: SearchCheck,
    tag: 'Transparence',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Expertise" title="Nos Services" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 flex flex-col h-full relative group cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1 ${
                service.highlight ? 'bg-dark-parchment ring-1 ring-ink/5 pt-16' : 'bg-dark-parchment'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 w-full bg-ink text-parchment font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-2 text-center">
                  Cœur de métier
                </div>
              )}
              <service.icon className="h-12 w-12 text-laterite mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
              <h3 className="font-serif italic text-3xl text-ink mb-6">{service.title}</h3>
              <p className="text-ink/70 text-lg mb-8 flex-grow leading-relaxed">{service.desc}</p>
              <span className="inline-block bg-parchment text-laterite font-sans font-bold text-[9px] uppercase tracking-widest px-4 py-2 self-start ring-1 ring-ink/5">
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
