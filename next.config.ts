import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.getgems.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aquabreezewave.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1skldygiinxua.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dirtycoins.fun",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;




