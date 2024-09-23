/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // This will warn but not fail the build
      ignoreDuringBuilds: false,
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
      },
  }
  
  export default nextConfig