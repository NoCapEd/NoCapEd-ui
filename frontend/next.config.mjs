/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  // Enable if you're using API routes for authentication
  experimental: {
    asyncWebAssembly: true,
  },
}

export default nextConfig

