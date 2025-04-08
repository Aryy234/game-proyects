import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedGame from "@/components/featured-game"
import GameGrid from "@/components/game-grid"
import GlitchText from "@/components/glitch-text"
import { games } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Sección Hero */}
      <section className="relative overflow-hidden border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 py-20 mx-auto text-center md:py-32">
          <div className="inline-block px-6 py-2 mb-6 text-xs font-mono tracking-wider border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400">
            DESARROLLADOR Y DISEÑADOR DE JUEGOS
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <GlitchText>CYBER_DEV</GlitchText>
          </h1>

          <p className="max-w-2xl mx-auto mb-8 text-lg text-cyan-300/80">
            Creando experiencias inmersivas de juego con tecnología de vanguardia y estética retro
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/projects" className="flex items-center gap-2">
                Ver Proyectos <ArrowRight className="w-4 h-4" />
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
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl">PROYECTO DESTACADO</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <FeaturedGame game={games[0]} />
        </div>
      </section>
      */}

      {/* Cuadrícula de Juegos */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl">MIS PROYECTOS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games.slice(1)} />

          <div className="mt-12 text-center">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/projects" className="flex items-center gap-2">
                Ver Todos los Proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="py-8 mt-16 border-t border-cyan-900/50 bg-black/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-xl font-bold text-cyan-400">CYBER_DEV</div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 text-cyan-400 transition-colors rounded-full hover:bg-cyan-900/30"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Correo</span>
              </a>
            </div>
            <div className="text-sm text-cyan-600">© {new Date().getFullYear()} CYBER_DEV. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
