/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use output: 'export' only for production builds, not development
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Fix issues with Node.js modules in browser environment
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    return config;
  },
};

module.exports = nextConfig;