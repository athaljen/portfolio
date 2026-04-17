import { MetadataRoute } from 'next'

import portfolioData from '@/data/portfolioData'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: portfolioData.name,
    short_name: portfolioData.short_name,
    description: portfolioData.description,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#171717',
    display: 'standalone',
  }
}
