import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  // Add an empty Turbopack config so Next 16 doesn’t error
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
        hostname: "lirp.cdn-website.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "irp-cdn.multiscreensite.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "irp-cdn-multiscreensite.com",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Allow all local images
  },
};

export default withPWA(nextConfig);