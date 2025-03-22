/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Static site export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages deployment (comment this out for production)
  // basePath: '/nobinarie',
}

module.exports = nextConfig