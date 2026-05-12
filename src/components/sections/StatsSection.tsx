'use client'

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
          <div
            key={stat.label}
            className="stat-item flex flex-col gap-2 relative after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-ink/5 last:after:hidden"
          >
            <span className="font-serif italic text-5xl md:text-6xl text-ink">{stat.value}</span>
            <span className="font-sans font-semibold text-[11px] uppercase tracking-widest text-laterite">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
