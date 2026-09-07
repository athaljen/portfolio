import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.31.115'],
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}

export default nextConfig
