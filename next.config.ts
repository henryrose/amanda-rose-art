import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/amanda-rose-art',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
