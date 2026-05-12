"use client";

import type React from "react";
import { Check, Gavel, Eye } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../shared/Button";

interface Pack {
  name: string;
  desc: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface AddOn {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const PACKS: Pack[] = [
  {
    name: "Pack Économique",
    desc: "L'essentiel pour démarrer votre projet sereinement.",
    price: "Sur devis",
    features: [
      "Plans architecturaux 2D",
      "Plans de distribution",
      "Façades et coupes de principe",
    ],
    cta: "Choisir",
  },
  {
    name: "Pack Standard",
    desc: "Conception complète pour un dossier solide.",
    price: "Sur devis",
    features: [
      "Tout le Pack Économique",
      "Modélisation 3D extérieure",
      "Plans techniques détaillés",
      "Estimation budgétaire sommaire",
    ],
    cta: "Choisir",
    popular: true,
  },
  {
    name: "Pack Premium",
    desc: "L'accompagnement total pour des finitions parfaites.",
    price: "Sur devis",
    features: [
      "Tout le Pack Standard",
      "Rendus 3D photoréalistes int/ext",
      "Carnet de détails (menuiseries, calepinage)",
      "Chiffrage quantitatif précis",
    ],
    cta: "Choisir",
  },
];

const ADD_ONS: AddOn[] = [
  {
    title: "Assistance Permis de Construire",
    desc: "Constitution et suivi du dossier administratif.",
    icon: Gavel,
  },
  {
    title: "Mission Suivi de Chantier",
    desc: "Contrôle hebdomadaire et direction des travaux.",
    icon: Eye,
  },
];

const packTexture: Record<string, string> = {
  "Pack Économique": "bg-plan opacity-20",
  "Pack Standard": "bg-[repeating-linear-gradient(45deg,var(--color-laterite)/0.03_0,var(--color-laterite)/0.03_1px,transparent_1px,transparent_8px)]",
  "Pack Premium": "bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,var(--color-line)_39px,var(--color-line)_40px)] opacity-[0.08]",
};

export function Pricing() {
  return (
    <section id="offres" className="bg-parchment bg-noise py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          subtitle="Transparence Tarifaire"
          title="Nos Offres de Conception"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-24">
          {PACKS.map((pack) => (
            <div
              key={pack.name}
              className={`relative group cursor-pointer transition-all duration-500 ${
                pack.popular
                  ? "md:-mt-4 md:mb-4 z-10"
                  : ""
              }`}
            >
              {/* Corner brackets */}
              <div className="hidden md:block absolute -top-2 -left-2 w-10 h-10 pointer-events-none z-20" aria-hidden>
                <div className={`absolute top-0 left-0 w-5 h-px ${pack.popular ? "bg-laterite/40" : "bg-line/50"}`} />
                <div className={`absolute top-0 left-0 h-5 w-px ${pack.popular ? "bg-laterite/40" : "bg-line/50"}`} />
              </div>
              <div className="hidden md:block absolute -bottom-2 -right-2 w-10 h-10 pointer-events-none z-20" aria-hidden>
                <div className={`absolute bottom-0 right-0 w-5 h-px ${pack.popular ? "bg-laterite/40" : "bg-line/50"}`} />
                <div className={`absolute bottom-0 right-0 h-5 w-px ${pack.popular ? "bg-laterite/40" : "bg-line/50"}`} />
              </div>

              {/* Popular badge */}
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-laterite to-laterite-dark text-parchment font-sans font-bold text-[9px] uppercase tracking-[0.25em] px-5 py-1.5 z-20 whitespace-nowrap shadow-lg">
                  Le plus choisi
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full flex flex-col bg-dark-parchment border transition-all duration-500 overflow-hidden ${
                  pack.popular
                    ? "border-laterite/30 shadow-xl md:scale-105 ring-2 ring-laterite/20"
                    : "border-line/30 shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Texture de fond */}
                <div
                  className={`absolute inset-0 pointer-events-none ${packTexture[pack.name]}`}
                />

                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ink/5">
                    <span className={`font-sans font-bold text-[10px] uppercase tracking-[0.25em] ${pack.popular ? "text-laterite" : "text-ink/40"}`}>
                      {pack.name}
                    </span>
                    <div className="flex-1 h-px bg-ink/5" />
                    <span className={`font-sans text-[9px] ${pack.popular ? "text-laterite/40" : "text-ink/20"}`}>
                      {pack.popular ? "Recommandé" : `${pack.features.length} prestations`}
                    </span>
                  </div>

                  <p className="text-ink/60 text-sm mb-6 leading-relaxed flex-0">
                    {pack.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className={`font-serif italic text-4xl ${pack.popular ? "text-laterite" : "text-ink"}`}>
                      {pack.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pack.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 items-start group/feature"
                      >
                        <Check
                          size={16}
                          className={`${
                            pack.popular
                              ? "text-laterite"
                              : "text-ink/30 group-hover:text-laterite"
                          } shrink-0 mt-0.5 transition-all duration-300`}
                        />
                        <span
                          className={`text-sm ${
                            pack.popular
                              ? "text-ink font-medium"
                              : "text-ink/60 group-hover:text-ink"
                          } transition-colors`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="#contact"
                    variant={pack.popular ? "accent" : "outline"}
                    className="w-full"
                    arrow
                  >
                    {pack.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ADD_ONS.map((item) => (
            <div
              key={item.title}
              className="relative group cursor-pointer"
            >
              <div className="hidden md:block absolute -top-2 -left-2 w-8 h-8 pointer-events-none" aria-hidden>
                <div className="absolute top-0 left-0 w-4 h-px bg-line/50" />
                <div className="absolute top-0 left-0 h-4 w-px bg-line/50" />
              </div>
              <div className="hidden md:block absolute -bottom-2 -right-2 w-8 h-8 pointer-events-none" aria-hidden>
                <div className="absolute bottom-0 right-0 w-4 h-px bg-line/50" />
                <div className="absolute bottom-0 right-0 h-4 w-px bg-line/50" />
              </div>

              <div className="relative bg-dark-parchment border border-line/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 p-6 md:p-8 flex items-center gap-6">
                <div className="w-14 h-14 shrink-0 bg-parchment flex items-center justify-center shadow-sm">
                  <item.icon className="h-7 w-7 text-laterite" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif italic text-xl text-ink mb-1">
                    {item.title}
                  </h4>
                  <p className="text-ink/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
