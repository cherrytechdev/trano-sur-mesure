'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const STEPS = [
  { title: 'Étude', desc: 'Analyse du terrain, définition du cahier des charges et budget.' },
  { title: 'Conception', desc: 'Plans architecturaux, modélisation 3D et chiffrage détaillé.' },
  { title: 'Administratif', desc: 'Dépôt du permis de construire et démarches légales.' },
  { title: 'Réalisation', desc: 'Exécution des travaux avec suivi rigoureux et rapports réguliers.' },
  { title: 'Livraison', desc: 'Réception de l\'ouvrage, levée des réserves et remise des clés.' },
]

export function Process() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="5 étapes pour construire en toute confiance" light />

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-parchment/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col gap-4 ${idx % 2 !== 0 ? 'lg:mt-16' : ''}`}
              >
                <span className="font-serif italic text-6xl md:text-8xl text-laterite leading-none">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-serif italic text-2xl text-parchment mb-2">{step.title}</h3>
                  <p className="text-parchment/60 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
