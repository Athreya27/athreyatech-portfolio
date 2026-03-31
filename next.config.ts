import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 👈 Enables static export
  images: {
    unoptimized: true, // 👈 Required for static hosting (S3 doesn't support Next image optimization)
  },
  trailingSlash: true, // 👈 Prevents routing issues on S3
};

export default nextConfig;