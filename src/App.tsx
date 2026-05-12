/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Menu, 
  X, 
  CircleCheck, 
  CircleX, 
  Globe, 
  PencilRuler, 
  Construction, 
  SearchCheck, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  MapPin, 
  Mail, 
  Phone, 
  Gift,
  Plus,
  Eye,
  Gavel
} from 'lucide-react';

// --- Shared Components ---

const SectionHeading = ({ subtitle, title, light = false }: { subtitle?: string; title: string; light?: boolean }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <span className={`font-sans font-semibold text-[12px] uppercase tracking-[0.2em] mb-4 block ${light ? 'text-laterite' : 'text-laterite'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-serif italic text-4xl md:text-5xl lg:text-6xl ${light ? 'text-parchment' : 'text-ink'}`}>
      {title}
    </h2>
  </div>
);

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Offres', href: '#offres' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ink py-4 shadow-xl' : 'bg-ink/90 py-6'}`}>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Building2 className="text-laterite h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="font-serif italic text-xl md:text-2xl text-parchment uppercase tracking-tight">
            Trano Sur Mesure
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-sans font-semibold text-[11px] uppercase tracking-wider text-parchment/80 hover:text-laterite transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-laterite text-parchment font-sans font-semibold text-[11px] uppercase tracking-wider px-6 py-3 hover:bg-parchment hover:text-ink transition-all"
          >
            Demander un devis
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-parchment" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-ink border-t border-parchment/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-lg text-parchment text-center"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="bg-laterite text-parchment font-sans font-semibold text-center py-4"
            >
              Demander un devis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQMueDh0XVo80qVhTbE-n78GaghBypKhFhgP54577-nYJlDFvAi7hMpaougsP-jVphIOJf31jMPBul_arSWWNzlyI0DkmyZZbl14YuVMHjrkULMolbmnIxF9SdJLkAFObUaPGNbr93r_WMihQ6MqNvvWWUQelrbTU8jnjC7_ZdVZb4pp6isVNdp4ZeXCZXEV3zidkuMom0C60S4leURPriOobUDmQNMceYNCyI-atslmAOjPB696um89RLNEw1-nHt1hiAjwYfgEI_"
          alt="Modern Villa Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
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
          <p className="font-serif italic text-parchment/70 text-lg">"La rigueur d'une entreprise au prix d'un indépendant"</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#realisations" className="bg-ink text-parchment font-sans font-semibold text-[12px] uppercase tracking-widest px-10 py-5 hover:bg-laterite transition-all border border-parchment/10">
            Voir nos réalisations
          </a>
          <a href="#contact" className="bg-parchment text-ink font-sans font-semibold text-[12px] uppercase tracking-widest px-10 py-5 hover:bg-laterite hover:text-parchment transition-all">
            Demander un devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: 'Projets livrés', value: '20+' },
    { label: "d'expérience", value: '15 ans' },
    { label: 'Transparence', value: '100%' },
    { label: 'Interlocuteur unique', value: '1' },
  ];

  return (
    <section className="bg-parchment bg-noise py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
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
  );
};

const ProblemSolution = () => {
  return (
    <section className="bg-dark-parchment bg-noise py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="Construire à Madagascar comporte des risques. Nous sommes là pour les éliminer." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-parchment p-10 shadow-sm"
          >
            <h3 className="font-serif italic text-2xl text-ink mb-10 pb-4 border-b border-ink/5">Ce que vivent nos clients</h3>
            <ul className="space-y-6">
              {[
                "Budgets dépassés et frais cachés",
                "Retards de livraison interminables",
                "Malfaçons et qualité approximative",
                "Stress et manque de communication"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CircleX className="text-laterite shrink-0 translate-y-1" />
                  <span className="text-ink/80 text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-parchment p-10 shadow-sm"
          >
            <h3 className="font-serif italic text-2xl text-ink mb-10 pb-4 border-b border-ink/5">Notre réponse</h3>
            <ul className="space-y-6">
              {[
                "Devis détaillé et prix garanti",
                "Planning strict et pénalités de retard",
                "Excellence technique et finitions soignées",
                "Reporting régulier (photos/vidéos)"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CircleCheck className="text-ink shrink-0 translate-y-1" />
                  <span className="text-ink/80 text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Diaspora */}
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
  );
};

const Services = () => {
  const services = [
    {
      title: "Conception & Études",
      desc: "Plans architecturaux sur mesure, études de sol, ingénierie structurelle et modélisation 3D pour visualiser votre futur espace avec précision.",
      icon: PencilRuler,
      tag: "Sur Mesure"
    },
    {
      title: "Réalisation Clé en Main",
      desc: "Prise en charge intégrale de la construction. Du terrassement aux finitions intérieures, nous coordonnons tous les corps d'état.",
      icon: Construction,
      tag: "Garantie Décennale",
      highlight: true
    },
    {
      title: "Suivi & Contrôle",
      desc: "Direction de l'exécution des travaux, réunions de chantier hebdomadaires et contrôle qualité rigoureux à chaque phase de la construction.",
      icon: SearchCheck,
      tag: "Transparence"
    }
  ];

  return (
    <section id="services" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Expertise" title="Nos Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 flex flex-col h-full relative group transition-all duration-500 overflow-hidden ${
                service.highlight ? 'bg-dark-parchment ring-1 ring-ink/5 pt-16' : 'bg-dark-parchment'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 w-full bg-ink text-parchment font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-2 text-center">
                  Cœur de métier
                </div>
              )}
              <service.icon className={`h-12 w-12 text-laterite mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`} />
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
  );
};

const Process = () => {
  const steps = [
    { title: "Étude", desc: "Analyse du terrain, définition du cahier des charges et budget." },
    { title: "Conception", desc: "Plans architecturaux, modélisation 3D et chiffrage détaillé." },
    { title: "Administratif", desc: "Dépôt du permis de construire et démarches légales." },
    { title: "Réalisation", desc: "Exécution des travaux avec suivi rigoureux et rapports réguliers." },
    { title: "Livraison", desc: "Réception de l'ouvrage, levée des réserves et remise des clés." }
  ];

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="5 étapes pour construire en toute confiance" light />
        
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-parchment/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
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
  );
};

const Portfolio = () => {
  const conceptions = [
    {
      name: "Résidence Horizon",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnS48syXdmq03ynKY6fdwoghak7qZxnxSnMkeBytW7mbQn_QMTcWo3aCW40d9sK6qQIMHoLaMOVoexuC7Ubup1MIcbwXQ68Ucm65lN0-fe7GM_d_2tFzSCs33fUOYzK2ZgiaZ9Mx_cg7y2MEVjrQXk1v6r4AFNF6w9N_ZYAFTDPdNnqaPOM2JC7b9-4pBs-D9WC9igISMrPN-qbz2B7D8weOwlxy6LF8m_FP_HV3gyQa1LVj0zasd14wn2FR5fDkToTT2f8zaJRMf1"
    },
    {
      name: "Villa Onyx",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDes5LqaVkFsW-fwMraQGojTb3-I_L2vCqdjxW_y_597sic2r7DNrKnLSJGLlizhGfRVS54De3CWj54rcOgbWsl547bjNhFHjViCae1rig4nea-GIggIX42yVzhLFi-Ed0HLt8qn_LyGX0Ah8WyKLHsyse1Fs-XIxWmjK6-_AXKLVtyPWRfSZ6Xs5yU2v16CTC1eSUCGXu3u-3R_-SFZ6GUydFEvY8sPLjHpw7i7TnzPZt9EqUCqPbfz_knizI0lIVVeFafJyZ5dJe"
    },
    {
      name: "Bureaux Lumina",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRrm1l8SkVY8izcN0Tw-5iwcZsaOPeE5wjvOVI0CAPZP_H0UPJOB4LR5xBCha-5n2lZuh2SjptPCZxuGU9mjxQHemJPZ6hpb9AFVgpXb44BQaykG2DEGVnNht5mHIKC6xrw4Hpq_gDLpeUTI3iOUmnufPgDXAJo12N24B3HZYxCl0VpdT-uPhUTkhrAVo59xH7BimphUqfvv5qtYbdQyrdw4s4g4p-Kdo9OLIp7BF9Vv8AoT5edeHsKvL7VSw_xMdKtRLT9iGfavq4"
    },
    {
      name: "Éco-Lodge Mandra",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcg9kb0wqxYOTxKJYi0rRIq3FB8KEKVD9-9RFtr5fI77iq1pCvQ2r4XEOsngZ9SGXX1JM8Jm8AD_Qk6gN0448hF61urjn_WnC4uWQKoT_7IMaTNCcl-mWKltprkFYjwFjfeAFCbuQuYHY-WUmRhW_d_DelZFB7k78Ynj6YKvyETM8khBiv5gAzwa3KyNDgzfaCF5bPVpRdPpQN0B3d1N_m4gOjxpT-Axaztp1RjuLPZLI09GzuP1qPX96fJcHedmluZkwMac3IVaA"
    }
  ];

  const travaux = [
    {
      name: "Villa Ambatobe",
      desc: "Résidence contemporaine alliant lignes épurées et intégration paysagère, conçue pour maximiser la lumière naturelle tout en préservant l'intimité.",
      type: "Résidentiel Haut de Gamme",
      location: "Ambatobe, Antananarivo",
      service: "Conception & Études Complètes",
      surface: "350 m²",
      period: "2023",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnS48syXdmq03ynKY6fdwoghak7qZxnxSnMkeBytW7mbQn_QMTcWo3aCW40d9sK6qQIMHoLaMOVoexuC7Ubup1MIcbwXQ68Ucm65lN0-fe7GM_d_2tFzSCs33fUOYzK2ZgiaZ9Mx_cg7y2MEVjrQXk1v6r4AFNF6w9N_ZYAFTDPdNnqaPOM2JC7b9-4pBs-D9WC9igISMrPN-qbz2B7D8weOwlxy6LF8m_FP_HV3gyQa1LVj0zasd14wn2FR5fDkToTT2f8zaJRMf1",
      thumbs: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDes5LqaVkFsW-fwMraQGojTb3-I_L2vCqdjxW_y_597sic2r7DNrKnLSJGLlizhGfRVS54De3CWj54rcOgbWsl547bjNhFHjViCae1rig4nea-GIggIX42yVzhLFi-Ed0HLt8qn_LyGX0Ah8WyKLHsyse1Fs-XIxWmjK6-_AXKLVtyPWRfSZ6Xs5yU2v16CTC1eSUCGXu3u-3R_-SFZ6GUydFEvY8sPLjHpw7i7TnzPZt9EqUCqPbfz_knizI0lIVVeFafJyZ5dJe",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCRrm1l8SkVY8izcN0Tw-5iwcZsaOPeE5wjvOVI0CAPZP_H0UPJOB4LR5xBCha-5n2lZuh2SjptPCZxuGU9mjxQHemJPZ6hpb9AFVgpXb44BQaykG2DEGVnNht5mHIKC6xrw4Hpq_gDLpeUTI3iOUmnufPgDXAJo12N24B3HZYxCl0VpdT-uPhUTkhrAVo59xH7BimphUqfvv5qtYbdQyrdw4s4g4p-Kdo9OLIp7BF9Vv8AoT5edeHsKvL7VSw_xMdKtRLT9iGfavq4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcg9kb0wqxYOTxKJYi0rRIq3FB8KEKVD9-9RFtr5fI77iq1pCvQ2r4XEOsngZ9SGXX1JM8Jm8AD_Qk6gN0448hF61urjn_WnC4uWQKoT_7IMaTNCcl-mWKltprkFYjwFjfeAFCbuQuYHY-WUmRhW_d_DelZFB7k78Ynj6YKvyETM8khBiv5gAzwa3KyNDgzfaCF5bPVpRdPpQN0B3d1N_m4gOjxpT-Axaztp1RjuLPZLI09GzuP1qPX96fJcHedmluZkwMac3IVaA",
      ]
    }
  ];

  const currentTravail = travaux[0];

  return (
    <section id="realisations" className="bg-dark-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Portfolio" title="Réalisations" />
        
        {/* Conceptions Section */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="font-serif italic text-3xl text-ink mb-4">Conceptions & Études</h3>
            <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
              Une sélection de nos projets en phase d'étude, où chaque trait est pensé pour allier esthétique, fonctionnalité et respect du contexte local.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conceptions.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
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
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-2">Concept architectural</span>
                    <h4 className="font-serif italic text-2xl text-parchment">{item.name}</h4>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Realised Works Section */}
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
            {/* Main Image View */}
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
                  <div key={i} className={`aspect-square overflow-hidden cursor-pointer ring-offset-2 transition-all ${i === 0 ? 'ring-2 ring-laterite' : 'opacity-60 hover:opacity-100'}`}>
                    <img src={thumb} alt={`Detail ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="aspect-square bg-dark-parchment flex items-center justify-center cursor-pointer hover:bg-laterite hover:text-parchment transition-all">
                  <Plus />
                </div>
              </div>
            </div>

            {/* Details Pane */}
            <div className="lg:w-[40%] p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-4xl text-ink mb-6">
                  {currentTravail.name}
                </h3>
                <p className="text-ink/70 text-lg mb-12 leading-relaxed border-b border-ink/10 pb-10">
                  {currentTravail.desc}
                </p>

                <div className="space-y-8">
                  {[
                    { label: "Type", value: currentTravail.type },
                    { label: "Localisation", value: currentTravail.location },
                    { label: "Service", value: currentTravail.service }
                  ].map((item, i) => (
                    <div key={i}>
                      <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-1">{item.label}</span>
                      <span className="text-xl text-ink">{item.value}</span>
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
  );
};

const Pricing = () => {
  const packs = [
    {
      name: "Pack Économique",
      desc: "L'essentiel pour démarrer votre projet sereinement.",
      price: "Sur devis",
      features: [
        "Plans architecturaux 2D",
        "Plans de distribution",
        "Façades et coupes de principe"
      ],
      cta: "Choisir"
    },
    {
      name: "Pack Standard",
      desc: "Conception complète pour un dossier solide.",
      price: "Sur devis",
      features: [
        "Tout le Pack Économique",
        "Modélisation 3D extérieure",
        "Plans techniques détaillés",
        "Estimation budgétaire sommaire"
      ],
      cta: "Choisir",
      popular: true
    },
    {
      name: "Pack Premium",
      desc: "L'accompagnement total pour des finitions parfaites.",
      price: "Sur devis",
      features: [
        "Tout le Pack Standard",
        "Rendus 3D photoréalistes int/ext",
        "Carnet de détails (menuiseries, calepinage)",
        "Chiffrage quantitatif précis"
      ],
      cta: "Choisir"
    }
  ];

  return (
    <section id="offres" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Transparence Tarifaire" title="Nos Offres de Conception" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">
          {packs.map((pack, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 flex flex-col h-full relative transition-all duration-500 overflow-hidden ${
                pack.popular ? 'bg-dark-parchment ring-1 ring-ink/10 md:scale-105 shadow-xl z-10' : 'bg-dark-parchment/60 opacity-90'
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
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check size={18} className={`${pack.popular ? 'text-laterite' : 'text-ink/40'} shrink-0`} />
                    <span className={`text-base ${pack.popular ? 'text-ink font-medium' : 'text-ink/70'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="bg-ink text-parchment font-sans font-bold text-[11px] uppercase tracking-widest py-5 text-center hover:bg-laterite transition-all shadow-md">
                {pack.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { 
              title: "Assistance Permis de Construire", 
              desc: "Constitution et suivi du dossier administratif.",
              icon: Gavel
            },
            { 
              title: "Mission Suivi de Chantier", 
              desc: "Contrôle hebdomadaire et direction des travaux.",
              icon: Eye
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-dark-parchment p-8 flex items-center gap-6 shadow-sm border border-ink/5"
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
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="bg-dark-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
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
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-ink/5 group-hover:bg-laterite group-hover:text-parchment transition-all">
                  <MapPin size={24} />
                </div>
                <span className="text-lg text-ink">Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-ink/5 group-hover:bg-laterite group-hover:text-parchment transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-lg text-ink">contact@tranosurmesure.mg</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-ink/5 group-hover:bg-laterite group-hover:text-parchment transition-all">
                  <Phone size={24} />
                </div>
                <span className="text-lg text-ink">+261 34 00 000 00</span>
              </div>
            </div>
          </div>

          {/* Form */}
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
                    <option>Construction Neuve (Clé en main)</option>
                    <option>Conception & Plans seuls</option>
                    <option>Suivi de chantier</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 group">
                  <label className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink/40 group-focus-within:text-laterite transition-colors">Budget Estimatif</label>
                  <select className="bg-transparent border-0 border-b border-ink/10 focus:border-laterite focus:ring-0 px-0 py-4 text-lg text-ink transition-all appearance-none">
                    <option disabled selected value="">Sélectionnez...</option>
                    <option>Moins de 100M MGA</option>
                    <option>100M - 300M MGA</option>
                    <option>Plus de 300M MGA</option>
                    <option>Je ne sais pas encore</option>
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
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-parchment pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <Building2 className="text-laterite h-8 w-8" />
              <span className="font-serif italic text-2xl uppercase tracking-tight">Trano Sur Mesure</span>
            </a>
            <p className="text-parchment/60 text-lg max-w-sm leading-relaxed mb-8 font-light">
              L'excellence architecturale et la rigueur de construction pour des projets immobiliers sereins à Madagascar.
            </p>
          </div>

          <div>
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-laterite block mb-8">Navigation</span>
            <ul className="space-y-4">
              <li><a href="#accueil" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Accueil</a></li>
              <li><a href="#services" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Services</a></li>
              <li><a href="#realisations" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Réalisations</a></li>
              <li><a href="#offres" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Offres</a></li>
              <li><a href="#contact" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-laterite block mb-8">Légal</span>
            <ul className="space-y-4">
              <li><a href="#" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Mentions Légales</a></li>
              <li><a href="#" className="text-parchment/60 hover:text-parchment transition-colors text-base font-light">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-parchment/5 pt-12 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
          <span className="text-parchment/30 text-[10px] uppercase tracking-widest font-sans font-bold">
            © 2024 Trano Sur Mesure. L'excellence architecturale.
          </span>
          <div className="flex gap-8">
            {/* Social links placeholder if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-noise min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ProblemSolution />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
