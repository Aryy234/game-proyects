import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Game } from "@/lib/types"

interface GameGridProps {
  games: Game[]
  fullWidth?: boolean
}

export default function GameGrid({ games, fullWidth = false }: GameGridProps) {
  return (
    <div className={`grid gap-6 ${fullWidth ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
      {games.map((game) => (
        <div key={game.slug} className="group relative overflow-hidden rounded-lg border border-cyan-900/50 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={game.image || "/placeholder.svg"}
              alt={game.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>

          <div className="p-4 transition-transform duration-300">
            <div className="flex flex-wrap gap-2 mb-2">
              {game.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-900/50 group-hover:border-cyan-500/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-black/70 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80">
              <h3 className="mb-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">{game.title}</h3>
              <p className="mb-4 text-sm text-cyan-300/80 line-clamp-2 transition-colors duration-300 group-hover:text-cyan-300/90">{game.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 transform hover:scale-105">
                <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Jugar <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>

              <Button size="sm" variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105">
                <Link href={`/projects/${game.slug}`} className="flex items-center gap-1">
                  Detalles <Info className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
