/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/pda_6th_shinhan',
  basePath: '/pda_6th_shinhan',
}

export default nextConfig
