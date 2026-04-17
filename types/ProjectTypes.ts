import { StaticImageData } from 'next/image'

export type TabType = 'All' | 'Mobile' | 'Web' | 'Personal'

export type ProjectDataType = {
  title: string
  type: string
  date: string
  tags: TabType[]
  description: string
  contributions: string[]
  techStack: string[]
  image: StaticImageData
  android: string
  ios: string
  website: string
}
