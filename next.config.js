/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  // Remove basePath for root deployment (docs.kai.dev)
  // Add it back if deploying to a subdirectory (e.g., /kai)
  // basePath: "/kai",
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
