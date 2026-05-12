interface SectionHeadingProps {
  subtitle?: string
  title: string
  light?: boolean
}

export function SectionHeading({ subtitle, title, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <span className={`font-sans font-semibold text-[12px] uppercase tracking-[0.2em] mb-4 block text-laterite`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif italic text-4xl md:text-5xl lg:text-6xl ${light ? 'text-parchment' : 'text-ink'}`}>
        {title}
      </h2>
    </div>
  )
}
