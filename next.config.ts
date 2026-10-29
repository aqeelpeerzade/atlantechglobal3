import type { NextConfig } from "next";

const basePath = "/agbeta3";

/**
 * Two deployment modes:
 *  - default (Node hosting): server rendering plus the /api/lead route that keeps the form key private.
 *  - STATIC_EXPORT=true (static hosting): plain files in /out; forms post to public/api/lead.php instead.
 */
const staticExport = process.env.STATIC_EXPORT === "true";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.1.6"],
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // The API route lives in route.server.ts so static builds can leave it out.
  pageExtensions: staticExport ? ["tsx", "ts", "jsx", "js"] : ["tsx", "ts", "jsx", "js", "server.ts"],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(staticExport
    ? { output: "export" as const }
    : { headers: async () => [{ source: "/:path*", headers: securityHeaders }] }),
};

export default nextConfig;
