/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only enable standalone mode during 'next build', not 'next dev'
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/epcorn/**',
      },
    ],
  },
};

export default nextConfig;