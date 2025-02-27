/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
    },
    images: {
      domains: ["placeholder.com"], // Add any image domains you're using
    },
  }
  
  module.exports = nextConfig
  
  