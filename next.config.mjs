/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '127.0.0.1', 'images.ctfassets.net'],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default nextConfig;