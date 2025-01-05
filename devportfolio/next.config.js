/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: '/devportfolio',  // Correct base path for your repository
    output: 'export',           // Use static export instead of next export
  };
  
  module.exports = nextConfig;   // Use CommonJS export
  