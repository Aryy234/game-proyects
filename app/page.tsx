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
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 py-20 mx-auto text-center md:py-32">
          <div className="inline-block px-6 py-2 mb-6 text-xs font-mono tracking-wider border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400">
            GAME DEVELOPER & DESIGNER
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <GlitchText>CYBER_DEV</GlitchText>
          </h1>

          <p className="max-w-2xl mx-auto mb-8 text-lg text-cyan-300/80">
            Creating immersive gaming experiences with cutting-edge technology and retro aesthetics
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30">
              <Link href="/about" className="flex items-center gap-2">
                About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Game */}
      <section className="py-16 border-b border-cyan-900/50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl">FEATURED PROJECT</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <FeaturedGame game={games[0]} />
        </div>
      </section>

      {/* Game Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center text-cyan-300 md:text-3xl">MY PROJECTS</h2>
          <div className="w-20 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-500 to-cyan-500"></div>

          <GameGrid games={games.slice(1)} />

          <div className="mt-12 text-center">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="text-sm text-cyan-600">© {new Date().getFullYear()} CYBER_DEV. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
