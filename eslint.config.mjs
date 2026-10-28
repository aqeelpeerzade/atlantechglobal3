import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "out_backup*/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // The site uses unoptimized static images with explicit sizes, so next/image adds nothing here.
    rules: { "@next/next/no-img-element": "off" },
  },
]);

export default eslintConfig;
