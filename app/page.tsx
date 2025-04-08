import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedGame from "@/components/featured-game"
import GameGrid from "@/components/game-grid"
import RetroNeonText from "@/components/retro-neon-text"
import { games } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Sección Hero */}
      <section className="relative overflow-hidden border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 py-20 mx-auto text-center md:py-32">
          <div className="inline-block px-6 py-2 mb-6 text-xs font-mono tracking-wider border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400 pixel-text-sm">
            BY ARYY234
          </div>

          <h1 className="mb-6">
            <RetroNeonText text="MINIJUEGOS_RETRO" />
          </h1>

          <p className="max-w-2xl mx-auto mb-8 text-xl md:text-2xl text-cyan-300/80 pixel-text-sm leading-relaxed">
            Videojuegos clásicos, con un toque de nostalgia
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white pixel-text-sm">
              <Link href="/projects" className="flex items-center gap-2">
                Ver Juegos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PROYECTO DESTACADO - Actualmente oculta
          Para reactivar esta sección, elimina los comentarios de abajo */}
      {/*
      <section className="py-16 border-b border-cyan-900/50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl pixel-text">PROYECTO DESTACADO</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <FeaturedGame game={games[0]} />
        </div>
      </section>
      */}

      {/* Cuadrícula de Juegos */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl pixel-text">DESTACADOS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games.filter(game => game.featured)} />

          <div className="mt-12 text-center">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white pixel-text-sm">
              <Link href="/projects" className="flex items-center gap-2">
                Ver Todos los Juegos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pie de página */}
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
