import { Download } from "lucide-react"

export function DownloadGuide() {
  return (
    <a
      href="/TSM_%20Guide%20de%20la%20construction.doc"
      download
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-ink/90 hover:bg-ink text-parchment px-5 py-3 rounded-full shadow-lg backdrop-blur-sm border border-parchment/10 hover:border-laterite/50 transition-all duration-300 group"
      aria-label="Télécharger le guide de la construction"
    >
      <Download size={18} className="text-laterite shrink-0" />
      <span className="font-sans font-semibold text-[11px] uppercase tracking-wider whitespace-nowrap">
        Guide
      </span>
    </a>
  )
}
