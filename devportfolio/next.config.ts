import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/devportfolio', // Correct base path for your repository      // Ensure URLs have a trailing slash
  output: 'export',          // Use static export instead of next export
};

export default nextConfig;
