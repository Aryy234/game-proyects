export interface Game {
  id: number
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  releaseDate: string
  platform: string
  technicalDetails: string
  playLink: string
  codeLink?: string
  screenshots?: string[]
}
