/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { unoptimized: true },
  devIndicators: false,
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
