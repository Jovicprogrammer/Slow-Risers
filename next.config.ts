import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Adicione outros domínios que você for usar
    ],
  },
}

module.exports = nextConfig



export default nextConfig;