import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import GameGrid from "@/components/game-grid"
import RetroNeonText from "@/components/retro-neon-text"
import { games } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Header */}
      <header className="relative py-8 border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 mx-auto">
          <Link href="/" className="inline-flex items-center mb-4 text-cyan-400 hover:text-cyan-300 pixel-text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>

          <h1 className="mb-3 scale-50 origin-left md:scale-75">
            <RetroNeonText text="TODOS LOS JUEGOS" />
          </h1>

          <p className="max-w-2xl mb-4 text-sm md:text-base text-cyan-300/80 pixel-text-sm leading-relaxed">
            Explora mi colección completa de juegos retro
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <GameGrid games={games} fullWidth />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 border-t border-cyan-900/50 bg-black/50">
        <div className="container px-4 mx-auto text-center text-sm text-cyan-600 pixel-text-sm">
          © {new Date().getFullYear()} MINIJUEGOS_RETRO. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
