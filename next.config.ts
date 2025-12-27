import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.digitalmediavending.com",
      },
      {
        protocol: "https",
        hostname: "www.louisianavending.com",
      },
      {
        protocol: "https",
        hostname: "cbn.com",
      },
      {
        protocol: "https",
        hostname: "www.executiverefreshments.com",
      },
      {
        protocol: "https",
        hostname: "redyref.com",
      },
      {
        protocol: "https",
        hostname: "www.inhand.com",
      },
      {
        protocol: "https",
        hostname: "snackattacknow.com",
      },
      {
        protocol: "https",
        hostname: "www.vendsoft.com",
      },
      {
        protocol: "https",
        hostname: "www.blockgemini.com",
      },
    ],
  },
};

export default nextConfig;



