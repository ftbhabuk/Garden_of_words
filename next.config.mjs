// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // You might want to restrict this to specific domains
      },
    ],
  },
  // Remove any serverActions configuration since it's stable in Next.js 14
  experimental: {
    // Only add experimental features if absolutely needed
  }
};

export default nextConfig;