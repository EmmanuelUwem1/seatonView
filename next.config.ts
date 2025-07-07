import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Accept images from any HTTPS domain
      },
    ],
  },
};

export default nextConfig;




