import type { Game } from "./types"

export const games: Game[] = [
  {
    id: 1,
    title: "NEON DRIFT",
    slug: "neon-drift",
    description:
      "A high-speed racing game set in a cyberpunk future where players compete in illegal street races through neon-lit cityscapes.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Racing", "Cyberpunk", "Multiplayer", "Unity"],
    releaseDate: "2023",
    platform: "PC, Console",
    technicalDetails:
      "Built with Unity using custom shaders for neon effects and a physics-based vehicle system. Features online multiplayer with up to 8 players and procedurally generated race tracks.",
    playLink: "https://example.com/play/neon-drift",
    codeLink: "https://github.com/example/neon-drift",
    screenshots: [
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
    ],
    featured: true,
  },
  
]
