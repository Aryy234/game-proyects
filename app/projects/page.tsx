import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import GameGrid from "@/components/game-grid"
import { games } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Header */}
      <header className="relative py-16 border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 mx-auto">
          <Link href="/" className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300 pixel-text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl pixel-text">PROYECTOS</h1>
          <p className="text-lg text-cyan-300/80 max-w-2xl pixel-text-sm">
            Explora nuestra colección de juegos desarrollados con pasión y creatividad.
          </p>
        </div>
      </header>

      {/* Proyectos Destacados */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl pixel-text">DESTACADOS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games.filter(game => game.featured)} fullWidth={true} />
        </div>
      </section>

      {/* Todos los Proyectos */}
      <section className="py-16 border-t border-cyan-900/50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl pixel-text">TODOS LOS JUEGOS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games} fullWidth={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 border-t border-cyan-900/50 bg-black/50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl font-bold text-cyan-400 pixel-text">MINIJUEGOS_RETRO</div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Aryy234"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only pixel-text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arielelizalde/"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only pixel-text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:marcelo-elizalde@hotmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only pixel-text-sm">Correo</span>
              </a>
              <a
                href="https://portfolioariel.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <span className="pixel-text-sm">Portfolio</span>
              </a>
            </div>
            <div className="text-sm text-cyan-600 pixel-text-sm">© {new Date().getFullYear()} Ariel Elizalde. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
