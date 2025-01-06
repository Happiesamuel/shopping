import type { NextConfig } from "next";

// next.config.ts

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for debugging

  images: {
    // Define allowed external image domains and patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
      },
    ],

    // Alternative domain whitelisting
    domains: ["static.wixstatic.com", "cdn.dummyjson.com"], // Add additional domains here

    // Cache control
    minimumCacheTTL: 60, // Cache external images for 60 seconds

    // Responsive image breakpoints
    deviceSizes: [256, 512, 1024, 1600], // Customize these sizes as needed

    // Allow SVG images
    dangerouslyAllowSVG: true,

    // Content disposition type
    contentDispositionType: "inline",

    // Set `unoptimized` to true if you want to disable all optimizations globally
    unoptimized: false,
  },

  webpack: (config) => {
    return config; // Add custom Webpack configuration if needed
  },
};

export default nextConfig;
