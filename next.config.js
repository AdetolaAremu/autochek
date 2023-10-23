/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "media.autochek.africa",
      "unsplash.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
