import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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

      {/* Todos los Proyectos */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl pixel-text">TODOS LOS JUEGOS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games} fullWidth={true} />
        </div>
      </section>
    </div>
  )
}
