import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "senjaio.b-cdn.net" },
      { protocol: "https", hostname: "assets.cdn.clsrio.com" },
      { protocol: "https", hostname: "brand.cdn.clsrio.com" },
    ],
  },
};

export default nextConfig;
