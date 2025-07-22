/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: ['assets.ajio.com'],
    // Or use remotePatterns for more control (Next.js 12.3+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.ajio.com',
        port: '',
        pathname: '/medias/**',
      },
    ],
  },

}

module.exports = nextConfig
