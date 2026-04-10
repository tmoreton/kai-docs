/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  // Deploy to /kai-docs subdirectory
  basePath: "/kai-docs",
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
};

module.exports = nextConfig;
