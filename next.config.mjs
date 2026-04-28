// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'standalone',
  eslint:{ignoreDuringBuilds:true},
 images: {
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
