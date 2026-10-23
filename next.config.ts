import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  devIndicators: false,
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
