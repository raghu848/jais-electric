import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add an empty Turbopack config so Next 16 doesn't error
  // when using a webpack-based plugin like next-pwa.
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Allow local images from public folder
  },
};

export default nextConfig;
