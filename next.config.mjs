/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: 'export',
  basePath: isGithubPages ? '/Teofilo-Rosales-Web-Desing' : '',
  assetPrefix: isGithubPages ? '/Teofilo-Rosales-Web-Desing/' : '',
};

export default nextConfig;
