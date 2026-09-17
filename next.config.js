/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubPages
    ? { basePath: '/hotel-react-reto4', assetPrefix: '/hotel-react-reto4/' }
    : {}),
};

module.exports = nextConfig
