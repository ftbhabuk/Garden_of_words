/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/Garden_of_words', // Your repo name
    // Disable server actions for static export
    experimental: {
      serverActions: false,
    }
  }
  
  export default nextConfig