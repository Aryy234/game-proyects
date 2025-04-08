"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Game } from "@/lib/types"

interface FeaturedGameProps {
  game: Game
}

export default function FeaturedGame({ game }: FeaturedGameProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-cyan-900/50 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 rotate-1" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>

      <div className="p-6 md:p-8 transition-transform duration-300">
        <div className="flex flex-wrap gap-2 mb-3">
          {game.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 transition-all duration-300 hover:bg-cyan-900/50 hover:border-cyan-500/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-black/70 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/80">
          <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl transition-colors duration-300 hover:text-cyan-300">{game.title}</h3>
          <p className="mb-6 text-cyan-300/80 max-w-2xl transition-colors duration-300 hover:text-cyan-300/90">{game.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 transform hover:scale-105">
            <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Jugar ahora <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105">
            <Link href={`/projects/${game.slug}`} className="flex items-center gap-2">
              Ver detalles <Info className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
