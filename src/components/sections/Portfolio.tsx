'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import { SectionHeading } from '../shared/SectionHeading'

interface Conception {
  name: string
  image: string
}

interface Travail {
  name: string
  desc: string
  type: string
  location: string
  service: string
  surface: string
  period: string
  image: string
  thumbs: string[]
}

const CONCEPTIONS: Conception[] = [
  {
    name: 'Résidence Horizon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnS48syXdmq03ynKY6fdwoghak7qZxnxSnMkeBytW7mbQn_QMTcWo3aCW40d9sK6qQIMHoLaMOVoexuC7Ubup1MIcbwXQ68Ucm65lN0-fe7GM_d_2tFzSCs33fUOYzK2ZgiaZ9Mx_cg7y2MEVjrQXk1v6r4AFNF6w9N_ZYAFTDPdNnqaPOM2JC7b9-4pBs-D9WC9igISMrPN-qbz2B7D8weOwlxy6LF8m_FP_HV3gyQa1LVj0zasd14wn2FR5fDkToTT2f8zaJRMf1',
  },
  {
    name: 'Villa Onyx',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDes5LqaVkFsW-fwMraQGojTb3-I_L2vCqdjxW_y_597sic2r7DNrKnLSJGLlizhGfRVS54De3CWj54rcOgbWsl547bjNhFHjViCae1rig4nea-GIggIX42yVzhLFi-Ed0HLt8qn_LyGX0Ah8WyKLHsyse1Fs-XIxWmjK6-_AXKLVtyPWRfSZ6Xs5yU2v16CTC1eSUCGXu3u-3R_-SFZ6GUydFEvY8sPLjHpw7i7TnzPZt9EqUCqPbfz_knizI0lIVVeFafJyZ5dJe',
  },
  {
    name: 'Bureaux Lumina',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRrm1l8SkVY8izcN0Tw-5iwcZsaOPeE5wjvOVI0CAPZP_H0UPJOB4LR5xBCha-5n2lZuh2SjptPCZxuGU9mjxQHemJPZ6hpb9AFVgpXb44BQaykG2DEGVnNht5mHIKC6xrw4Hpq_gDLpeUTI3iOUmnufPgDXAJo12N24B3HZYxCl0VpdT-uPhUTkhrAVo59xH7BimphUqfvv5qtYbdQyrdw4s4g4p-Kdo9OLIp7BF9Vv8AoT5edeHsKvL7VSw_xMdKtRLT9iGfavq4',
  },
  {
    name: 'Éco-Lodge Mandra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPcg9kb0wqxYOTxKJYi0rRIq3FB8KEKVD9-9RFtr5fI77iq1pCvQ2r4XEOsngZ9SGXX1JM8Jm8AD_Qk6gN0448hF61urjn_WnC4uWQKoT_7IMaTNCcl-mWKltprkFYjwFjfeAFCbuQuYHY-WUmRhW_d_DelZFB7k78Ynj6YKvyETM8khBiv5gAzwa3KyNDgzfaCF5bPVpRdPpQN0B3d1N_m4gOjxpT-Axaztp1RjuLPZLI09GzuP1qPX96fJcHedmluZkwMac3IVaA',
  },
]

const TRAVAUX: Travail[] = [
  {
    name: 'Villa Ambatobe',
    desc: 'Résidence contemporaine alliant lignes épurées et intégration paysagère, conçue pour maximiser la lumière naturelle tout en préservant l\'intimité.',
    type: 'Résidentiel Haut de Gamme',
    location: 'Ambatobe, Antananarivo',
    service: 'Conception & Études Complètes',
    surface: '350 m²',
    period: '2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnS48syXdmq03ynKY6fdwoghak7qZxnxSnMkeBytW7mbQn_QMTcWo3aCW40d9sK6qQIMHoLaMOVoexuC7Ubup1MIcbwXQ68Ucm65lN0-fe7GM_d_2tFzSCs33fUOYzK2ZgiaZ9Mx_cg7y2MEVjrQXk1v6r4AFNF6w9N_ZYAFTDPdNnqaPOM2JC7b9-4pBs-D9WC9igISMrPN-qbz2B7D8weOwlxy6LF8m_FP_HV3gyQa1LVj0zasd14wn2FR5fDkToTT2f8zaJRMf1',
    thumbs: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDes5LqaVkFsW-fwMraQGojTb3-I_L2vCqdjxW_y_597sic2r7DNrKnLSJGLlizhGfRVS54De3CWj54rcOgbWsl547bjNhFHjViCae1rig4nea-GIggIX42yVzhLFi-Ed0HLt8qn_LyGX0Ah8WyKLHsyse1Fs-XIxWmjK6-_AXKLVtyPWRfSZ6Xs5yU2v16CTC1eSUCGXu3u-3R_-SFZ6GUydFEvY8sPLjHpw7i7TnzPZt9EqUCqPbfz_knizI0lIVVeFafJyZ5dJe',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRrm1l8SkVY8izcN0Tw-5iwcZsaOPeE5wjvOVI0CAPZP_H0UPJOB4LR5xBCha-5n2lZuh2SjptPCZxuGU9mjxQHemJPZ6hpb9AFVgpXb44BQaykG2DEGVnNht5mHIKC6xrw4Hpq_gDLpeUTI3iOUmnufPgDXAJo12N24B3HZYxCl0VpdT-uPhUTkhrAVo59xH7BimphUqfvv5qtYbdQyrdw4s4g4p-Kdo9OLIp7BF9Vv8AoT5edeHsKvL7VSw_xMdKtRLT9iGfavq4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPcg9kb0wqxYOTxKJYi0rRIq3FB8KEKVD9-9RFtr5fI77iq1pCvQ2r4XEOsngZ9SGXX1JM8Jm8AD_Qk6gN0448hF61urjn_WnC4uWQKoT_7IMaTNCcl-mWKltprkFYjwFjfeAFCbuQuYHY-WUmRhW_d_DelZFB7k78Ynj6YKvyETM8khBiv5gAzwa3KyNDgzfaCF5bPVpRdPpQN0B3d1N_m4gOjxpT-Axaztp1RjuLPZLI09GzuP1qPX96fJcHedmluZkwMac3IVaA',
    ],
  },
]

const TRAVAIL_DETAILS = [
  { label: 'Type', key: 'type' as const },
  { label: 'Localisation', key: 'location' as const },
  { label: 'Service', key: 'service' as const },
]

export function Portfolio() {
  const [activeIndex] = useState(0)
  const currentTravail = TRAVAUX[activeIndex]

  return (
    <section id="realisations" className="bg-dark-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Portfolio" title="Réalisations" />

        <div className="mb-32">
          <div className="mb-12">
            <h3 className="font-serif italic text-3xl text-ink mb-4">Conceptions & Études</h3>
            <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
              Une sélection de nos projets en phase d'étude, où chaque trait est pensé pour allier esthétique, fonctionnalité et respect du contexte local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONCEPTIONS.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/5] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div>
                    <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-2">Concept architectural</span>
                    <h4 className="font-serif italic text-2xl text-parchment">{item.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-12">
            <h3 className="font-serif italic text-3xl text-ink mb-4">Travaux Réalisés</h3>
            <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
              De la conception à la remise des clés, découvrez nos projets aboutis qui témoignent de notre exigence technique et de notre souci du détail.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-parchment flex flex-col lg:flex-row shadow-2xl relative overflow-hidden group"
          >
            <div className="lg:w-[60%] flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative bg-dark-parchment">
                <img
                  src={currentTravail.image}
                  alt={currentTravail.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-4 gap-2 p-2 md:p-4 bg-parchment border-t border-ink/5">
                {currentTravail.thumbs.map((thumb, i) => (
                  <div
                    key={thumb}
                    className={`aspect-square overflow-hidden cursor-pointer ring-offset-2 transition-all ${i === 0 ? 'ring-2 ring-laterite' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt={`Détail ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="aspect-square bg-dark-parchment flex items-center justify-center cursor-pointer hover:bg-laterite hover:text-parchment transition-all">
                  <Plus />
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-4xl text-ink mb-6">
                  {currentTravail.name}
                </h3>
                <p className="text-ink/70 text-lg mb-12 leading-relaxed border-b border-ink/10 pb-10">
                  {currentTravail.desc}
                </p>

                <div className="space-y-8">
                  {TRAVAIL_DETAILS.map(({ label, key }) => (
                    <div key={key}>
                      <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-1">{label}</span>
                      <span className="text-xl text-ink">{currentTravail[key]}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-1">Surface</span>
                      <span className="text-xl text-ink">{currentTravail.surface}</span>
                    </div>
                    <div>
                      <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-1">Période</span>
                      <span className="text-xl text-ink">{currentTravail.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex justify-between items-center">
                <button className="p-4 hover:bg-ink hover:text-parchment transition-all ring-1 ring-ink/10 rounded-full" disabled>
                  <ArrowLeft size={20} />
                </button>
                <span className="font-sans font-bold text-[11px] uppercase tracking-widest text-ink">
                  01 / 01
                </span>
                <button className="p-4 hover:bg-ink hover:text-parchment transition-all ring-1 ring-ink/10 rounded-full" disabled>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
