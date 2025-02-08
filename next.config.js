/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Profile',
  assetPrefix: '/Profile/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 