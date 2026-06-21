import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // GitHub Pages serves from /repo-name/ subpath
  basePath: isProd ? '/akkarinca_sandals' : '',
  assetPrefix: isProd ? '/akkarinca_sandals/' : '',

  images: {
    // GitHub Pages has no server — can't optimize at runtime
    unoptimized: true,
  },

  // Enable compression
  compress: true,

  // Trailing slash helps with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
