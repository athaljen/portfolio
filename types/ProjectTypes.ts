import { StaticImageData } from 'next/image'

export type ProjectDataType = {
  title: string
  type: string
  date: string
  description: string
  contributions: string[]
  techStack: string[]
  image: StaticImageData
  android_link: string
  ios_link: string
  website: string
}
