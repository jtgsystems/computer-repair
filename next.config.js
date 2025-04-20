/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Prefer the App Router over Pages Router
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
