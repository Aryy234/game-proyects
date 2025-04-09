'use client'

import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft, Calendar, Code, ExternalLink, Gamepad2, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GlitchText from "@/components/glitch-text"
import RetroNeonText from "@/components/retro-neon-text"
import { games } from "@/lib/data"

export default function ProjectPage() {
  // Usar el hook useParams
  const params = useParams();
  // Asegurarse de que slug es string, aunque useParams puede devolver string | string[]
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // Buscar el juego en los datos
  const game = games.find((game) => game.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Header */}
      <header className="relative py-16 border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 mx-auto">
          <Link href="/projects" className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300 pixel-text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Proyectos
          </Link>

          <div className="mb-6 scale-50 origin-left md:scale-75">
            <RetroNeonText text={game.title} />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 pixel-text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Project Details */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border border-cyan-900/50 aspect-video">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-cyan-300/80 pixel-text-sm">{game.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="bg-cyan-900/20 border-cyan-900/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-cyan-500 pixel-text-sm">Fecha de Lanzamiento</div>
                      <div className="font-medium pixel-text-sm">{game.releaseDate}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-cyan-900/20 border-cyan-900/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Gamepad2 className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-cyan-500 pixel-text-sm">Plataforma</div>
                      <div className="font-medium pixel-text-sm">{game.platform}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4 space-y-4">
                <h2 className="text-xl font-bold text-cyan-300 pixel-text">Detalles Técnicos</h2>
                <p className="text-cyan-300/80 pixel-text-sm">{game.technicalDetails}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white pixel-text-sm">
                  <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Jugar Ahora <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>

                {game.codeLink && (
                  <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 pixel-text-sm">
                    <a
                      href={game.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Ver Código <Code className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Screenshots */}
          {game.screenshots && game.screenshots.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 pixel-text">CAPTURAS DE PANTALLA</h2>
              <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {game.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg border border-cyan-900/50 aspect-video"
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${game.title} captura ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
