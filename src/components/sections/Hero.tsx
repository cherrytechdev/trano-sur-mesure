'use client'

import { motion } from 'framer-motion'
import { Button } from '../shared/Button'

export function Hero() {
  return (
    <section id="accueil" className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQMueDh0XVo80qVhTbE-n78GaghBypKhFhgP54577-nYJlDFvAi7hMpaougsP-jVphIOJf31jMPBul_arSWWNzlyI0DkmyZZbl14YuVMHjrkULMolbmnIxF9SdJLkAFObUaPGNbr93r_WMihQ6MqNvvWWUQelrbTU8jnjC7_ZdVZb4pp6isVNdp4ZeXCZXEV3zidkuMom0C60S4leURPriOobUDmQNMceYNCyI-atslmAOjPB696um89RLNEw1-nHt1hiAjwYfgEI_"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans font-semibold text-[12px] uppercase tracking-[0.3em] text-laterite mb-6"
        >
          Trano Sur Mesure
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-parchment leading-tight max-w-5xl mb-8"
        >
          Construisez votre maison en toute sécurité
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-parchment/80 max-w-2xl mb-10"
        >
          Conception sur mesure, suivi rigoureux, transparence totale — que vous soyez à Antananarivo ou à l'étranger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <p className="font-serif italic text-parchment/70 text-lg">&ldquo;La rigueur d'une entreprise au prix d'un indépendant&rdquo;</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="#realisations" variant="primary" size="lg" arrow>
            Voir nos réalisations
          </Button>
          <Button href="#contact" variant="secondary" size="lg" arrow>
            Demander un devis gratuit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
