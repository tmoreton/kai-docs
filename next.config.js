/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  // No basePath for Vercel root deployment
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add trailingSlash to ensure proper static file generation
  trailingSlash: true,
  // Force CSS to be included
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
