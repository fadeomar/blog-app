/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Domain of Unsplash images
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Domain of Unsplash images
      },
    ],
  },
};

module.exports = nextConfig;
