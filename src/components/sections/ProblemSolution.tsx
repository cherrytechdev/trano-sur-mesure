'use client'

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

const ITEM_LABELS = ['Budget', 'Délais', 'Qualité', 'Communication']

export function ProblemSolution() {
  return (
    <section className="bg-dark-parchment bg-noise py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="Construire à Madagascar comporte des risques. Nous sommes là pour les éliminer." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 relative">
          {/* Decorative vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-line/30 -translate-x-1/2" />

          {/* PROBLEMS CARD */}
          <div className="relative">
            <div className="hidden md:block absolute -top-2 -left-2 w-10 h-10" aria-hidden>
              <div className="absolute top-0 left-0 w-5 h-px bg-laterite/40" />
              <div className="absolute top-0 left-0 h-5 w-px bg-laterite/40" />
            </div>
            <div className="hidden md:block absolute -bottom-2 -right-2 w-10 h-10" aria-hidden>
              <div className="absolute bottom-0 right-0 w-5 h-px bg-laterite/40" />
              <div className="absolute bottom-0 right-0 h-5 w-px bg-laterite/40" />
            </div>

            <div className="relative bg-parchment border border-line/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,var(--color-laterite)/0.02_0,var(--color-laterite)/0.02_1px,transparent_1px,transparent_8px)] pointer-events-none" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-laterite/10">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-laterite">
                    Risques
                  </span>
                  <div className="flex-1 h-px bg-laterite/10" />
                </div>

                <ul className="space-y-5">
                  {PROBLEMS.map((text, i) => (
                    <li key={text} className="flex gap-4 items-start group/item">
                      <span className="font-sans font-bold text-[10px] text-laterite/25 w-5 shrink-0 pt-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <CircleX className="text-laterite/50 shrink-0 mt-1 group-hover/item:scale-110 group-hover/item:text-laterite transition-all duration-300 size-5" />
                      <span className="flex-1">
                        <span className="text-ink/75 text-base md:text-lg">{text}</span>
                        <span className="block font-sans text-[9px] text-laterite/25 uppercase tracking-[0.15em] mt-0.5">
                          {ITEM_LABELS[i]}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SOLUTIONS CARD */}
          <div className="relative">
            <div className="hidden md:block absolute -top-2 -right-2 w-10 h-10" aria-hidden>
              <div className="absolute top-0 right-0 w-5 h-px bg-ink/30" />
              <div className="absolute top-0 right-0 h-5 w-px bg-ink/30" />
            </div>
            <div className="hidden md:block absolute -bottom-2 -left-2 w-10 h-10" aria-hidden>
              <div className="absolute bottom-0 left-0 w-5 h-px bg-ink/30" />
              <div className="absolute bottom-0 left-0 h-5 w-px bg-ink/30" />
            </div>

            <div className="relative bg-parchment border border-line/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="absolute inset-0 bg-plan opacity-40 pointer-events-none" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ink/5">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-ink">
                    Solutions
                  </span>
                  <div className="flex-1 h-px bg-ink/5" />
                </div>

                <ul className="space-y-5">
                  {SOLUTIONS.map((text, i) => (
                    <li key={text} className="flex gap-4 items-start group/item">
                      <span className="font-sans font-bold text-[10px] text-ink/20 w-5 shrink-0 pt-1.5 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <CircleCheck className="text-ink/40 shrink-0 mt-1 group-hover/item:scale-110 group-hover/item:text-ink transition-all duration-300 size-5" />
                      <span className="flex-1">
                        <span className="text-ink/75 text-base md:text-lg">{text}</span>
                        <span className="block font-sans text-[9px] text-ink/20 uppercase tracking-[0.15em] mt-0.5">
                          {ITEM_LABELS[i]}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DIASPORA CARD */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-parchment border border-line/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="absolute inset-0 bg-plan opacity-15 pointer-events-none" />
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gold/50" />

            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/20 rounded-full mb-8">
                <span className="size-1.5 rounded-full bg-gold/60 animate-pulse" />
                <span className="font-sans font-bold text-[9px] uppercase tracking-[0.25em] text-gold">
                  Spécial
                </span>
              </div>

              <Globe className="mx-auto text-gold/60 mb-6 size-12" />
              <h4 className="font-serif italic text-3xl md:text-4xl text-ink mb-4">
                Spécial Diaspora
              </h4>
              <p className="text-ink/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Suivez l'avancement de votre chantier à distance grâce à notre interface dédiée
                et nos rapports hebdomadaires détaillés. Vous n'êtes jamais loin de votre projet.
              </p>

              <div className="mt-8 pt-6 border-t border-line/30 flex flex-wrap justify-center gap-x-8 gap-y-2 text-ink/20">
                <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Suivi temps réel</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Reporting photo</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em]">Interface dédiée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
