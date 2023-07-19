/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'recipe-db.hop.sh',
            port: '',
            pathname: '/api/**',
          },
        ],
      },
}

module.exports = nextConfig
