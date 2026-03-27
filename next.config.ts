import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.cdn.clsrio.com" },
      { protocol: "https", hostname: "**.b-cdn.net" },
      { protocol: "https", hostname: "assets.cdn.clsrio.com" },
      { protocol: "https", hostname: "senjaio.b-cdn.net" },
    ],
  },
};

export default nextConfig;
