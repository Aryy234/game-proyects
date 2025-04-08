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
  },
  {
    id: 2,
    title: "CYBER HUNTER",
    slug: "cyber-hunter",
    description:
      "An immersive first-person stealth game where you play as a hacker infiltrating corporate facilities to steal valuable data.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Stealth", "First-Person", "Hacking", "Unreal Engine"],
    releaseDate: "2022",
    platform: "PC",
    technicalDetails:
      "Developed with Unreal Engine 5, featuring advanced AI systems, realistic lighting, and a complex hacking mini-game system. Includes procedurally generated security systems and multiple approaches to each mission.",
    playLink: "https://example.com/play/cyber-hunter",
    codeLink: "https://github.com/example/cyber-hunter",
    screenshots: [
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
    ],
  },
  {
    id: 3,
    title: "PIXEL REBELLION",
    slug: "pixel-rebellion",
    description:
      "A retro-style 2D platformer with roguelike elements set in a dystopian future where AI has taken over.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Platformer", "Roguelike", "Pixel Art", "Godot"],
    releaseDate: "2022",
    platform: "PC, Mobile, Web",
    technicalDetails:
      "Created with Godot Engine, featuring procedurally generated levels, permadeath mechanics, and a unique pixel art style. Includes over 50 different power-ups and 20 enemy types.",
    playLink: "https://example.com/play/pixel-rebellion",
    screenshots: ["/placeholder.svg?height=400&width=800", "/placeholder.svg?height=400&width=800"],
  },
  {
    id: 4,
    title: "SYNTH WARRIORS",
    slug: "synth-warriors",
    description:
      "A competitive fighting game with a synthwave aesthetic where players control customizable robots in arena combat.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Fighting", "Multiplayer", "Synthwave", "Unity"],
    releaseDate: "2021",
    platform: "PC, Console",
    technicalDetails:
      "Built with Unity using a custom combat system with physics-based interactions. Features online multiplayer, tournament modes, and a deep robot customization system with over 200 parts.",
    playLink: "https://example.com/play/synth-warriors",
    codeLink: "https://github.com/example/synth-warriors",
  },
  {
    id: 5,
    title: "VIRTUAL NEXUS",
    slug: "virtual-nexus",
    description:
      "A VR puzzle game that takes place inside a digital world where players manipulate code and physics to progress.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["VR", "Puzzle", "Sci-Fi", "Unity"],
    releaseDate: "2021",
    platform: "PC VR",
    technicalDetails:
      "Developed for VR platforms using Unity with custom interaction systems. Features innovative puzzle mechanics based on programming concepts and a narrative that adapts to player choices.",
    playLink: "https://example.com/play/virtual-nexus",
    screenshots: ["/placeholder.svg?height=400&width=800", "/placeholder.svg?height=400&width=800"],
  },
  {
    id: 6,
    title: "GLITCH CITY",
    slug: "glitch-city",
    description:
      "An open-world adventure game set in a cyberpunk city full of corruption, where player choices affect the story and world.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Open World", "RPG", "Cyberpunk", "Unreal Engine"],
    releaseDate: "2020",
    platform: "PC, Console",
    technicalDetails:
      "Created with Unreal Engine, featuring a reactive world with day/night cycles, dynamic weather, and an advanced NPC system. Includes a branching narrative with multiple endings and a reputation system.",
    playLink: "https://example.com/play/glitch-city",
    codeLink: "https://github.com/example/glitch-city",
  },
]
