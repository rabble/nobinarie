/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Static site export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages deployment (comment this out for production)
  // basePath: '/nobinarie',
  
  // Handle Node.js specific modules
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs', 'path', 'zlib' and other Node.js built-ins on client-side
      config.resolve.fallback = {
        fs: false,
        path: false,
        zlib: false,
        util: false,
        stream: false,
        crypto: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig