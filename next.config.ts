import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/research-website-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/research-website-template/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all domains
      },
    ],
  },
};

export default nextConfig;
