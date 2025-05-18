import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
  },
  /* config options here */
  eslint: {
    // WARNING: this will ignore *all* lint errors during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
