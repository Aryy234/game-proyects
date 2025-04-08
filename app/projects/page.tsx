import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import GameGrid from "@/components/game-grid"
import GlitchText from "@/components/glitch-text"
import { games } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      {/* Header */}
      <header className="relative py-16 border-b border-cyan-900/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/50"></div>

        <div className="container relative px-4 mx-auto">
          <Link href="/" className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            <GlitchText>ALL PROJECTS</GlitchText>
          </h1>

          <p className="max-w-2xl mb-8 text-lg text-cyan-300/80">
            Browse through my complete collection of game development projects
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <GameGrid games={games} fullWidth />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 border-t border-cyan-900/50 bg-black/50">
        <div className="container px-4 mx-auto text-center text-sm text-cyan-600">
          © {new Date().getFullYear()} CYBER_DEV. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
