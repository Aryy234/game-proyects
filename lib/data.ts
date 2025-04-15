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
  {
    id: 1,
    title: "Typing Rivals",
    slug: "mecanografy-game",
    description:
      "Juego multigugador de mecanografía, donde debes escribir las palabras que aparecen en la pantalla lo más rápido posible.",
    image: "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744678705/ChatGPT_Image_14_abr_2025_19_57_36_tatkdb.png",
    tags: ["mecanografia", "multijugador", "escritura"],
    releaseDate: "2025",
    platform: "PC",
    technicalDetails:
      "Desarrollado con Vite, Typescript y Socket.io para la comunicación en tiempo real.",
    playLink: "https://mecanografy-game.fly.dev/",
    codeLink: "Privado",
    screenshots: [
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679505/Screenshot_2025-04-14_194221_mq11rr.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679505/Screenshot_2025-04-14_194331_v2v6tf.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679559/Screenshot_2025-04-14_200819_nop4ay.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679559/Screenshot_2025-04-14_200814_yorwhl.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679559/Screenshot_2025-04-14_200911_eiaykd.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679560/Screenshot_2025-04-14_200925_xhlfbo.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679560/Screenshot_2025-04-14_200959_mn8x7m.png",
      "https://res.cloudinary.com/dehzy8s6l/image/upload/v1744679562/Screenshot_2025-04-14_201021_l0zuom.png",
    ],
    featured: true,
  },
  
]
