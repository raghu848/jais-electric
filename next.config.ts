import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add an empty Turbopack config so Next 16 doesn't error
  // when using a webpack-based plugin like next-pwa.
  // Ensure Next/Turbopack uses this project directory as the workspace root.
  // This prevents Next from incorrectly selecting a parent directory when it
  // detects additional lockfiles elsewhere on the machine.
  turbopack: {
    root: __dirname,
  } as any,
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
