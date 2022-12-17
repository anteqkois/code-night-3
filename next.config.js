/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.mercedes-benz.pl', 'assets.oneweb.mercedes-benz.com','res.cloudinary.com'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
