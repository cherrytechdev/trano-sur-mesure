'use client'

import { motion } from 'framer-motion'
import { CircleCheck, CircleX, Globe } from 'lucide-react'
import { SectionHeading } from '../shared/SectionHeading'

const PROBLEMS = [
  'Budgets dépassés et frais cachés',
  'Retards de livraison interminables',
  'Malfaçons et qualité approximative',
  'Stress et manque de communication',
]

const SOLUTIONS = [
  'Devis détaillé et prix garanti',
  'Planning strict et pénalités de retard',
  'Excellence technique et finitions soignées',
  'Reporting régulier (photos/vidéos)',
]

export function ProblemSolution() {
  return (
    <section className="bg-dark-parchment bg-noise py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="Construire à Madagascar comporte des risques. Nous sommes là pour les éliminer." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-parchment p-10 shadow-sm"
          >
            <h3 className="font-serif italic text-2xl text-ink mb-10 pb-4 border-b border-ink/5">Ce que vivent nos clients</h3>
            <ul className="space-y-6">
              {PROBLEMS.map((text) => (
                <li key={text} className="flex gap-4 items-start">
                  <CircleX className="text-laterite shrink-0 translate-y-1" />
                  <span className="text-ink/80 text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-parchment p-10 shadow-sm"
          >
            <h3 className="font-serif italic text-2xl text-ink mb-10 pb-4 border-b border-ink/5">Notre réponse</h3>
            <ul className="space-y-6">
              {SOLUTIONS.map((text) => (
                <li key={text} className="flex gap-4 items-start">
                  <CircleCheck className="text-ink shrink-0 translate-y-1" />
                  <span className="text-ink/80 text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-parchment p-10 text-center max-w-4xl mx-auto shadow-sm"
        >
          <Globe className="mx-auto text-ink mb-6 h-12 w-12" />
          <h4 className="font-serif italic text-3xl text-ink mb-4">Spécial Diaspora</h4>
          <p className="text-ink/70 text-lg">
            Suivez l'avancement de votre chantier à distance grâce à notre interface dédiée et nos rapports hebdomadaires détaillés. Vous n'êtes jamais loin de votre projet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
