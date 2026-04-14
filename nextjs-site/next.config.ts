import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix monorepo/multiple-lockfile root inference issues.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
