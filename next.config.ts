import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pharmacycouncil.org",
      },
      {
        protocol: "https",
        hostname: "telehealththailand.vercel.app",
      },
      {
        protocol: "https",
        hostname: "bvirrbphqdzrtreqdrmf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
