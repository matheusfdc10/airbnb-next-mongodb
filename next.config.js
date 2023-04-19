/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '',
        pathname: '/**/**/**/**/**'
      }
    ]
  }
}

module.exports = nextConfig
