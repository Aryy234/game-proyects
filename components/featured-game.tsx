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
      className="relative overflow-hidden rounded-lg border border-cyan-900/50 aspect-[16/9]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={game.image || "/placeholder.svg"}
        alt={game.title}
        fill
        className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {game.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">{game.title}</h3>

        <p className="mb-6 text-cyan-300/80 max-w-2xl">{game.description}</p>

        <div className="flex flex-wrap gap-4">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Play Now <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30">
            <Link href={`/projects/${game.slug}`} className="flex items-center gap-2">
              View Details <Info className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
