import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set for GitHub Project Pages: https://USERNAME.github.io/beta-bay
  basePath: '/beta-bay',
  assetPrefix: '/beta-bay/',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
