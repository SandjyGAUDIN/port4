import type { NextConfig } from "next";

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'], // Pour le développement
    // OU pour les builds de production :
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  
}

export default nextConfig;
