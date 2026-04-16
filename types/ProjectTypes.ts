import { StaticImageData } from 'next/image'

export type ProjectDataType = {
  title: string
  type: string
  date: string
  description: string
  contributions: string[]
  techStack: string[]
  image: StaticImageData
  android: string
  ios: string
  website: string
}
