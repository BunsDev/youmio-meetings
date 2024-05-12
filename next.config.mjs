/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['my-lib'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.infura.io',
      },
      {
        protocol: 'https',
        hostname: 'statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'lens.infura-ipfs.io',
      },
    ],
  },
};

export default nextConfig;
