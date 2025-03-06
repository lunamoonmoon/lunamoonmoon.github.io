/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/lunamoonmoon.github.io',
  assetPrefix: '/lunamoonmoon.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
