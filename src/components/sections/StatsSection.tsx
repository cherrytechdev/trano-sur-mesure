'use client'

import { motion } from 'framer-motion'

const STATS = [
  { label: 'Projets livrés', value: '20+' },
  { label: "d'expérience", value: '15 ans' },
  { label: 'Transparence', value: '100%' },
  { label: 'Interlocuteur unique', value: '1' },
]

export function StatsSection() {
  return (
    <section className="bg-parchment bg-noise py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="font-serif italic text-5xl md:text-6xl text-ink">{stat.value}</span>
            <span className="font-sans font-semibold text-[11px] uppercase tracking-widest text-laterite">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
