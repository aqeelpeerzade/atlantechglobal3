import type { NextConfig } from "next";
const basePath = "/agbeta3";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  allowedDevOrigins: ["192.168.1.6"],
  basePath,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  },
};

export default nextConfig;
