/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org', 'cdn.pixabay.com', 'pic.baike.soso.com', 'pic.chinanews.com.cn', 'pic.nfapp.southcn.com'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withPWA(nextConfig)
