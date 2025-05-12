/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['placehold.co', 'placekitten.com', 'picsum.photos', 'via.placeholder.com'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;