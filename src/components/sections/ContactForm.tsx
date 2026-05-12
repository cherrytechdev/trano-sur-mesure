'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Gift } from 'lucide-react'

const CONTACT_INFO = [
  { icon: MapPin, text: 'Antananarivo, Madagascar' },
  { icon: Mail, text: 'contact@tranosurmesure.mg' },
  { icon: Phone, text: '+261 34 00 000 00' },
]

const PROJECT_TYPES = [
  'Construction Neuve (Clé en main)',
  'Conception & Plans seuls',
  'Suivi de chantier',
]

const BUDGET_OPTIONS = [
  'Moins de 100M MGA',
  '100M - 300M MGA',
  'Plus de 300M MGA',
  'Je ne sais pas encore',
]

export function ContactForm() {
  return (
    <section id="contact" className="bg-dark-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <span className="font-sans font-semibold text-[12px] uppercase tracking-[0.2em] text-laterite mb-6 block">Commencer</span>
            <h2 className="font-serif italic text-5xl md:text-7xl text-ink mb-8 leading-tight">Parlez-nous de votre projet.</h2>
            <p className="text-ink/70 text-lg md:text-xl mb-12 max-w-md leading-relaxed">
              Que vous ayez une idée précise ou besoin de conseils pour démarrer, notre équipe est à votre écoute pour concrétiser votre vision.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-parchment p-8 mb-16 inline-flex items-center gap-6 self-start shadow-md border border-ink/5"
            >
              <Gift className="text-laterite h-10 w-10 shrink-0" />
              <div>
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink block mb-1">Cadeau Inclus</span>
                <span className="text-ink/70 text-base">Première consultation d'une heure offerte.</span>
              </div>
            </motion.div>

            <div className="space-y-8">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 bg-ink/5 group-hover:bg-laterite group-hover:text-parchment transition-all">
                    <Icon size={24} />
                  </div>
                  <span className="text-lg text-ink">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-parchment p-10 md:p-16 shadow-2xl"
          >
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 group">
                  <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Nom complet *</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink placeholder:text-ink/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 group">
                  <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Email *</label>
                  <input
                    type="email"
                    placeholder="jean@exemple.com"
                    className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink placeholder:text-ink/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+261 34 00 000 00"
                  className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink placeholder:text-ink/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 group">
                  <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Type de Projet</label>
                  <select className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink transition-all appearance-none">
                    <option disabled selected value="">Sélectionnez...</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 group">
                  <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Budget Estimatif</label>
                  <select className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink transition-all appearance-none">
                    <option disabled selected value="">Sélectionnez...</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Message</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez brièvement votre terrain et vos envies..."
                  className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink placeholder:text-ink/20 transition-all resize-none"
                />
              </div>

              <button className="bg-ink text-parchment font-sans font-bold text-[11px] uppercase tracking-[0.2em] py-6 hover:bg-laterite transition-all shadow-xl mt-4">
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
