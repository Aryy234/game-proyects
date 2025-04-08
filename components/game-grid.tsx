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
        <div key={game.slug} className="group relative overflow-hidden rounded-lg border border-cyan-900/50">
          <div className="aspect-video relative">
            <Image
              src={game.image || "/placeholder.svg"}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100"></div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {game.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-1 text-lg font-bold text-white">{game.title}</h3>

            <p className="mb-4 text-sm text-cyan-300/80 line-clamp-2">{game.description}</p>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Play <ExternalLink className="w-3 h-3" />
                </a>
              </Button>

              <Button size="sm" variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30">
                <Link href={`/projects/${game.slug}`} className="flex items-center gap-1">
                  Details <Info className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
