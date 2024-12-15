import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti.import("./src/env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  output: "standalone",
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
