'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import { Check, Gavel, Eye } from 'lucide-react'
import { SectionHeading } from '../shared/SectionHeading'
import { Button } from '../shared/Button'

interface Pack {
  name: string
  desc: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

interface AddOn {
  title: string
  desc: string
  icon: React.ElementType
}

const PACKS: Pack[] = [
  {
    name: 'Pack Économique',
    desc: 'L\'essentiel pour démarrer votre projet sereinement.',
    price: 'Sur devis',
    features: [
      'Plans architecturaux 2D',
      'Plans de distribution',
      'Façades et coupes de principe',
    ],
    cta: 'Choisir',
  },
  {
    name: 'Pack Standard',
    desc: 'Conception complète pour un dossier solide.',
    price: 'Sur devis',
    features: [
      'Tout le Pack Économique',
      'Modélisation 3D extérieure',
      'Plans techniques détaillés',
      'Estimation budgétaire sommaire',
    ],
    cta: 'Choisir',
    popular: true,
  },
  {
    name: 'Pack Premium',
    desc: 'L\'accompagnement total pour des finitions parfaites.',
    price: 'Sur devis',
    features: [
      'Tout le Pack Standard',
      'Rendus 3D photoréalistes int/ext',
      'Carnet de détails (menuiseries, calepinage)',
      'Chiffrage quantitatif précis',
    ],
    cta: 'Choisir',
  },
]

const ADD_ONS: AddOn[] = [
  {
    title: 'Assistance Permis de Construire',
    desc: 'Constitution et suivi du dossier administratif.',
    icon: Gavel,
  },
  {
    title: 'Mission Suivi de Chantier',
    desc: 'Contrôle hebdomadaire et direction des travaux.',
    icon: Eye,
  },
]

export function Pricing() {
  return (
    <section id="offres" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Transparence Tarifaire" title="Nos Offres de Conception" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">
          {PACKS.map((pack) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 flex flex-col h-full relative group cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-xl ${
                pack.popular ? 'bg-dark-parchment ring-1 ring-ink/10 md:scale-105 shadow-xl z-10' : 'bg-dark-parchment/60 opacity-70 hover:opacity-100 hover:bg-dark-parchment'
              }`}
            >
              {pack.popular && (
                <div className="absolute top-0 left-0 w-full bg-ink text-parchment font-sans font-bold text-[9px] uppercase tracking-[0.3em] py-2 text-center">
                  Le plus choisi
                </div>
              )}
              <h3 className="font-serif italic text-3xl text-ink mb-2 mt-4">{pack.name}</h3>
              <p className="text-ink/60 text-base mb-8 h-12 leading-relaxed">{pack.desc}</p>

              <div className="mb-10">
                <span className={`font-serif italic text-3xl ${pack.popular ? 'text-laterite' : 'text-ink'}`}>{pack.price}</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start group/feature">
                    <Check size={18} className={`${pack.popular ? 'text-laterite' : 'text-ink/40 group-hover:text-laterite'} shrink-0 transition-colors`} />
                    <span className={`text-base ${pack.popular ? 'text-ink font-medium' : 'text-ink/70 group-hover:text-ink'} transition-colors`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant="primary" className="w-full" arrow>
                {pack.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ADD_ONS.map((item) => (
            <motion.div
              key={item.title}
              className="bg-dark-parchment p-8 flex items-center gap-6 shadow-sm border border-ink/5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="bg-parchment p-4 rounded-full">
                <item.icon className="h-8 w-8 text-laterite" />
              </div>
              <div>
                <h4 className="font-serif italic text-xl text-ink mb-1">{item.title}</h4>
                <p className="text-ink/60 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
