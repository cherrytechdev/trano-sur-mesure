"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../shared/Button";

type ConceptionItem = {
  name: string;
  project: string;
  prestation: string;
  location: string;
  period: string;
  image: string;
};

type RealisationItem = {
  name: string;
  project: string;
  prestation: string;
  location: string;
  delay: string;
  thumbs: string[];
};

const CONCEPTIONS: ConceptionItem[] = [
  {
    name: "Ambohimangakely",
    project: "Maison d’habitation",
    prestation: "Conception – Études (TCE)",
    location: "Ambohimangakely",
    period: "Janvier 2026",
    image: "/images/conception/01. Ambohimangakely.webp",
  },
  {
    name: "Antanifotsy",
    project: "Maison d’habitation – Local commercial",
    prestation: "Conception – Études (TCE)",
    location: "Antanifotsy",
    period: "Juillet 2025",
    image: "/images/conception/02. Antanifotsy.webp",
  },
  {
    name: "Fenoarivo",
    project: "Maison d’habitation – Local commercial",
    prestation: "Conception – Études (TCE)",
    location: "Fenoarivo",
    period: "Juin 2025",
    image: "/images/conception/03. Fenoarivo.webp",
  },
  {
    name: "Cité Planton",
    project: "Immeubles 3 appartements R+2",
    prestation: "Conception – Études (TCE)",
    location: "Cité Planton",
    period: "Avril 2025",
    image: "/images/conception/04. Cité Planton.webp",
  },
  {
    name: "Lazaina",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études (TCE)",
    location: "Lazaina",
    period: "Avril 2025",
    image: "/images/conception/05. Lazaina.webp",
  },
  {
    name: "Ifarihy",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études (TCE)",
    location: "Ifarihy By Pass",
    period: "Février 2025",
    image: "/images/conception/06. Ifarihy.webp",
  },
  {
    name: "Isahafa",
    project: "Maison d’habitation",
    prestation: "Conception – Études (TCE) – Réalisation Clé en Main",
    location: "Isahafa",
    period: "Août 2024",
    image: "/images/conception/07. Isahafa.webp",
  },
  {
    name: "Ivandry",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (TCE)",
    location: "Ivandry",
    period: "Mars 2024",
    image: "/images/conception/08. Ivandry.webp",
  },
  {
    name: "Ankerana",
    project: "Rénovation maison traditionnelle",
    prestation: "Conception – Études (TCE)",
    location: "Ankerana",
    period: "Décembre 2023",
    image: "/images/conception/09. Ankerana.webp",
  },
  {
    name: "Itaosy",
    project: "Maison d’habitation R+3 – 150m²",
    prestation: "Conception – Études (TCE) – Réalisation Gros Oeuvre",
    location: "Itaosy",
    period: "Décembre 2023",
    image: "/images/conception/10. Itaosy.webp",
  },
  {
    name: "Canada",
    project: "Immeubles 3 appartements R+2",
    prestation: "Conception – Études (TCE)",
    location: "Canada - Toamasina",
    period: "Novembre 2022",
    image: "/images/conception/11. Canada.webp",
  },
  {
    name: "Ankaraobato Bypass",
    project: "Maison d’habitation en R+0",
    prestation: "Conception – Études - Suivi (TCE)",
    location: "Ankaraobato By Pass",
    period: "Mai 2022",
    image: "/images/conception/12. Ankaraobato Bypass.webp",
  },
  {
    name: "Andoharanofotsy",
    project: "Maison d’habitation",
    prestation: "Conception – Études (TCE)",
    location: "Andoharanofotsy",
    period: "Octobre 2021",
    image: "/images/conception/13. Andoharanofotsy.webp",
  },
  {
    name: "Ambohimalaza",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (TCE)",
    location: "Ambohimalaza",
    period: "Septembre 2021",
    image: "/images/conception/14. Ambohimalaza.webp",
  },
  {
    name: "Anjomakely",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (TCE)",
    location: "Anjomakely",
    period: "Avril 2021",
    image: "/images/conception/15. Anjomakely.webp",
  },
  {
    name: "Isaingy Bevalala",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (Gros Oeuvre)",
    location: "Isaingy Bevalala",
    period: "Avril 2021",
    image: "/images/conception/17. Isaingy Bevalala.webp",
  },
  {
    name: "Manandona ByPass",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (Gros Oeuvre)",
    location: "Manandona ByPass",
    period: "Mars 2021",
    image: "/images/conception/18. Manandona ByPass.webp",
  },
  {
    name: "Ankadilalampotsy",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études et Réalisation (Gros Œuvre)",
    location: "Ankadilalampotsy",
    period: "Mars 2021",
    image: "/images/conception/19. Ankadilalampotsy.webp",
  },
  {
    name: "Ambohibao",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études (Gros Oeuvre)",
    location: "Ambohibao",
    period: "Janvier 2021",
    image: "/images/conception/20. Ambohibao.webp",
  },
  {
    name: "ByPass",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études et Travaux (Gros Oeuvre)",
    location: "ByPass",
    period: "Octobre 2020",
    image: "/images/conception/21. ByPass.webp",
  },
  {
    name: "Bezaha",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études (Gros Oeuvre)",
    location: "Bezaha - Tuléar",
    period: "Octobre 2020",
    image: "/images/conception/22. Bezaha.webp",
  },
  {
    name: "Alakamisy",
    project: "Maison d’habitation R+1 avec sous-sol",
    prestation: "Conception – Études (Gros Œuvre)",
    location: "Fenoarivo",
    period: "Septembre 2020",
    image: "/images/conception/23. Alakamisy.webp",
  },
  {
    name: "Sanfily Tuléar",
    project: "Maison d’habitation R+0",
    prestation: "Conception – Études (TCE)",
    location: "Sanfily - Tuléar",
    period: "Avril 2020",
    image: "/images/conception/24. Sanfily Tuléar.webp",
  },
  {
    name: "Tanjombato",
    project: "Maison d’habitation R+0",
    prestation: "Conception – Études (TCE)",
    location: "Tanjombato",
    period: "Février 2020",
    image: "/images/conception/25. Tanjombato.webp",
  },
  {
    name: "Andrefan’Ambohijanahary",
    project: "Immeubles 3 - Appartements en R+2",
    prestation: "Conception – Études (TCE)",
    location: "Andrefan’Ambohijanahary",
    period: "Janvier 2020",
    image: "/images/conception/26. Andrefan'Ambohijanahary.webp",
  },
  {
    name: "Imerimanjaka",
    project: "Maison d’habitation en R+1 avec 2 sous-sol",
    prestation: "Conception – Études - Réalisation (TCE)",
    location: "Ambohijanaka",
    period: "Août 2017",
    image: "/images/conception/27. Imerimanjaka.webp",
  },
  {
    name: "By Pass 2",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études (Gros Oeuvre)",
    location: "By Pass",
    period: "Janvier 2016",
    image: "/images/conception/29. By Pass.webp",
  },
];

const REALISATIONS: RealisationItem[] = [
  {
    name: "Isahafa",
    project: "Maison d’habitation en R+0 - Clôture et Aménagement extérieure",
    prestation: "Conception – Études - Réalisation (TCE)",
    location: "Isahafa",
    delay: "09 mois",
    thumbs: [
      "/images/traveaux/01. tga A.webp",
      "/images/traveaux/01. tga B.webp",
      "/images/traveaux/01. tga C.webp",
      "/images/traveaux/01. tga D.webp",
      "/images/traveaux/01. tga E.webp",
    ],
  },
  {
    name: "Itaosy",
    project: "Maison d’habitation en R+3",
    prestation: "Conception – Études (TCE) - Réalisation (Gros Œuvre)",
    location: "Itaosy",
    delay: "06 mois",
    thumbs: [
      "/images/traveaux/02. Itaosy A.webp",
      "/images/traveaux/02. Itaosy B.webp",
      "/images/traveaux/02. Itaosy C.webp",
      "/images/traveaux/02. Itaosy D.webp",
      "/images/traveaux/02. Itaosy E.webp",
    ],
  },
  {
    name: "Ankaraobato By Pass",
    project: "Maison d’habitation en R+0",
    prestation: "Conception – Études - Suivi (TCE)",
    location: "Ankaraobato By Pass",
    delay: "10 mois",
    thumbs: [
      "/images/traveaux/03. Ankaraobato Bypass A.webp",
      "/images/traveaux/03. Ankaraobato Bypass B.webp",
      "/images/traveaux/03. Ankaraobato Bypass C.webp",
      "/images/traveaux/03. Ankaraobato Bypass D.webp",
      "/images/traveaux/03. Ankaraobato Bypass E.webp",
    ],
  },
  {
    name: "Ankadilalampotsy Ankaraobato",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études - Réalisation (Gros Œuvre)",
    location: "Ankadilalampotsy Ankaraobato",
    delay: "04 mois",
    thumbs: [
      "/images/traveaux/04. Ankadilalampotsy A.webp",
      "/images/traveaux/04. Ankadilalampotsy B.webp",
      "/images/traveaux/04. Ankadilalampotsy C.webp",
      "/images/traveaux/04. Ankadilalampotsy D.webp",
    ],
  },
  {
    name: "Imerimanjaka By Pass",
    project: "Maison d’habitation en R+1",
    prestation: "Conception – Études - Réalisation (Gros Œuvre et Clôture)",
    location: "Imerimanjaka By Pass",
    delay: "05 mois",
    thumbs: [
      "/images/traveaux/05. Merimanjaka A.webp",
      "/images/traveaux/05. Merimanjaka B.webp",
      "/images/traveaux/05. Merimanjaka C.webp",
      "/images/traveaux/05. Merimanjaka D.webp",
      "/images/traveaux/05. Merimanjaka E.webp",
    ],
  },
  {
    name: "Ambohijanaka",
    project: "Maison d’habitation en R+1 avec 2 sous-sol",
    prestation: "Conception – Études (TCE) - Réalisation (Gros œuvre)",
    location: "Ambohijanaka",
    delay: "07 mois",
    thumbs: [
      "/images/traveaux/06. Lohanosy A.webp",
      "/images/traveaux/06. Lohanosy B.webp",
      "/images/traveaux/06. Lohanosy C.webp",
      "/images/traveaux/06. Lohanosy D.webp",
      "/images/traveaux/06. Lohanosy E.webp",
    ],
  },
  {
    name: "Ambohimalaza 1",
    project: "Maison d’habitation R+1",
    prestation: "Conception – Études - Réalisation (TCE)",
    location: "Ambohimalaza",
    delay: "05 mois",
    thumbs: [
      "/images/traveaux/07. ByPass A.webp",
      "/images/traveaux/07. ByPass B.webp",
      "/images/traveaux/07. ByPass C.webp",
    ],
  },
  {
    name: "Ambohimalaza 2",
    project: "Maison d’habitation",
    prestation: "Conception – Études - Réalisation (Gros Œuvre)",
    location: "Ambohimalaza",
    delay: "03 mois",
    thumbs: [
      "/images/traveaux/08. Ambohimalaza A.webp",
      "/images/traveaux/08. Ambohimalaza B.webp",
      "/images/traveaux/08. Ambohimalaza C.webp",
      "/images/traveaux/08. Ambohimalaza D.webp",
    ],
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentTravail = REALISATIONS[currentIndex];
  const currentImage =
    currentTravail.thumbs[selectedImageIndex] ?? currentTravail.thumbs[0];

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [currentIndex]);

  return (
    <section
      id="realisations"
      className="bg-dark-parchment bg-noise py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading subtitle="Notre Portfolio" title="Réalisations" />

        <div className="mb-32">
          <div className="mb-12">
            <h3 className="font-serif italic text-3xl text-ink mb-4">
              Conceptions & Études
            </h3>
            <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
              Une sélection de projets en phase d’étude, structurée comme dans
              le PDF, mais sans le montant.
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              grabCursor
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              navigation={{
                nextEl: ".swiper-conception-next",
                prevEl: ".swiper-conception-prev",
              }}
              className="conception-slider !pb-4"
            >
              {CONCEPTIONS.map((item) => (
                <SwiperSlide key={`${item.name}-${item.location}`}>
                  <div className="group relative aspect-[5/6] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite-light block mb-2">
                        {item.location}
                      </span>
                      <h4 className="font-serif italic text-2xl text-parchment mb-2">
                        {item.name}
                      </h4>
                      <p className="text-parchment/80 text-sm leading-relaxed">
                        {item.project}
                      </p>
                      <p className="text-parchment/60 text-xs mt-3">
                        {item.prestation} • {item.period}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-conception-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-parchment shadow-lg border border-line/30 flex items-center justify-center text-ink">
              <ArrowLeft size={20} />
            </button>
            <button className="swiper-conception-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-parchment shadow-lg border border-line/30 flex items-center justify-center text-ink">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div>
          <div className="mb-12">
            <h3 className="font-serif italic text-3xl text-ink mb-4">
              Travaux Réalisés
            </h3>

            <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
              De la conception à la réalisation, chaque projet raconte une
              matière, une lumière et un lieu.
            </p>
          </div>

          <div className="travail-card bg-parchment flex flex-col lg:flex-row shadow-2xl relative overflow-hidden border border-ink/5">
            {/* LEFT */}
            <div className="lg:w-[60%] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative bg-dark-parchment">
                <img
                  src={currentImage}
                  alt={currentTravail.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              <div className="grid grid-cols-5 gap-1 p-1 md:p-2 bg-parchment border-t border-ink/5">
                {currentTravail.thumbs.map((img, i) => (
                  <button
                    key={`${img}-${i}`}
                    type="button"
                    onClick={() => setSelectedImageIndex(i)}
                    className={`aspect-square overflow-hidden ring-offset-2 transition-all duration-300 ${
                      i === selectedImageIndex
                        ? "ring-2 ring-laterite ring-offset-1"
                        : "opacity-60 hover:opacity-100 hover:ring-2 hover:ring-ink/20 hover:ring-offset-1"
                    }`}
                    aria-label={`Voir l'image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${currentTravail.name} miniature ${i + 1}`}
                      // loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}

                {/* <button
                  className="aspect-square bg-dark-parchment flex items-center justify-center hover:bg-laterite hover:text-parchment transition-all duration-300"
                  aria-label="Voir plus de photos"
                  type="button"
                >
                  <Plus size={20} />
                </button> */}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:w-[40%] p-10 md:p-14 flex flex-col justify-between bg-gradient-to-br from-parchment to-dark-parchment/50">
              <div className="flex-1">
                <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-laterite block mb-4">
                  Projet Réalisé
                </span>

                <h3 className="font-serif italic text-4xl text-ink mb-6 leading-tight">
                  {currentTravail.name}
                </h3>

                <p className="text-ink/70 text-lg mb-8 leading-relaxed border-b border-ink/10 pb-8">
                  {currentTravail.project}
                </p>

                <div className="space-y-6">
                  <div>
                    <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-2">
                      Localisation
                    </span>

                    <span className="text-xl text-ink">
                      {currentTravail.location}
                    </span>
                  </div>

                  <div>
                    <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-2">
                      Prestation
                    </span>

                    <span className="text-xl text-ink leading-relaxed block">
                      {currentTravail.prestation}
                    </span>
                  </div>

                  <div>
                    <span className="font-sans font-bold text-[9px] uppercase tracking-[0.2em] text-laterite block mb-2">
                      Délai
                    </span>

                    <span className="text-xl text-ink">
                      {currentTravail.delay}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 md:pt-8 flex justify-between items-center">
                <Button
                  variant="icon"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={currentIndex === 0}
                  aria-label="Projet précédent"
                >
                  <ArrowLeft size={20} />
                </Button>

                <span className="font-sans font-bold text-[11px] uppercase tracking-widest text-ink">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(REALISATIONS.length).padStart(2, "0")}
                </span>

                <Button
                  variant="icon"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      Math.min(prev + 1, REALISATIONS.length - 1),
                    )
                  }
                  disabled={currentIndex === REALISATIONS.length - 1}
                  aria-label="Projet suivant"
                >
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
