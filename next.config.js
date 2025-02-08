/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyoThiha987.github.io',
  reactStrictMode: true,
  //assetPrefix: '/MyoThiha987.github.io/',
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