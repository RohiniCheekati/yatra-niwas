import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Next ignores stray lockfiles elsewhere on the PC.
  turbopack: { root: __dirname },
};

export default nextConfig;
