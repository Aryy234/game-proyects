import type { Game } from "./types"

export const games: Game[] = [
  {
    id: 1,
    title: "RETRO BLOCK",
    slug: "retro-block",
    description:
      "Un juego sencillo basado en tetris, con un estilo retro.",
    image: "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744129444/portada_retro_block_pirjxr.png",
    tags: ["block", "tetris", "retro"],
    releaseDate: "2025",
    platform: "PC",
    technicalDetails:
      "Juego sencillo, desarrollado con typescript y react.",
    playLink: "https://retro-block-game.vercel.app/",
    codeLink: "https://github.com/Aryy234/retro-block-blitz-game-12",
    screenshots: [
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744129443/Screenshot_2025-04-08_112102_z3witn.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744129443/Screenshot_2025-04-08_112018_peu7my.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744129443/Screenshot_2025-04-08_112040_gzf7ia.png",
    ],
    featured: true,
  },
  
]
