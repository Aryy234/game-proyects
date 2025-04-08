import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import GlitchText from "@/components/glitch-text"

export default function AboutPage() {
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
            <GlitchText>ABOUT ME</GlitchText>
          </h1>

          <p className="max-w-2xl mb-8 text-lg text-cyan-300/80">Game developer, designer, and cyberpunk enthusiast</p>
        </div>
      </header>

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border-2 border-cyan-500/30 aspect-square md:aspect-auto">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer Portrait"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-2xl font-bold text-cyan-300">CYBER_DEV</div>
                <div className="text-cyan-400">Game Developer & Designer</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-cyan-300">My Story</h2>
                <p className="mb-4 text-cyan-300/80">
                  I'm a passionate game developer with over 5 years of experience creating immersive gaming experiences.
                  My journey began with a fascination for retro games and cyberpunk aesthetics, which continue to
                  influence my design philosophy today.
                </p>
                <p className="text-cyan-300/80">
                  I specialize in creating games that blend nostalgic elements with modern gameplay mechanics, focusing
                  on creating memorable experiences that resonate with players. My technical expertise spans multiple
                  game engines and programming languages, allowing me to bring my creative visions to life.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-cyan-300">Skills & Expertise</h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-900/50">
                    <div className="font-medium">Game Engines</div>
                    <div className="text-sm text-cyan-400">Unity, Unreal Engine, Godot</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-900/50">
                    <div className="font-medium">Programming</div>
                    <div className="text-sm text-cyan-400">C#, C++, JavaScript, Python</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-900/50">
                    <div className="font-medium">Design</div>
                    <div className="text-sm text-cyan-400">3D Modeling, Pixel Art, UI/UX</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-900/50">
                    <div className="font-medium">Platforms</div>
                    <div className="text-sm text-cyan-400">PC, Mobile, Web, Console</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="mb-4 text-2xl font-bold text-cyan-300">Contact Me</h2>
                <p className="mb-6 text-cyan-300/80">
                  Interested in collaborating or have questions about my work? Feel free to reach out!
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    <a href="mailto:contact@example.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email Me
                    </a>
                  </Button>

                  <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </Button>

                  <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
