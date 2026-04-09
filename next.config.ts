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
  async rewrites() {
    return [
      // Public Routes
      { source: "/home/:path*", destination: "/01_home/:path*" },
      { source: "/about/:path*", destination: "/02_about/:path*" },
      { source: "/department/:path*", destination: "/03_department/:path*" },
      { source: "/service/:path*", destination: "/04_service/:path*" },
      { source: "/meeting/:path*", destination: "/05_meeting/:path*" },
      { source: "/news/:path*", destination: "/06_news/:path*" },
      { source: "/laws/:path*", destination: "/07_laws/:path*" },
      { source: "/other-service/:path*", destination: "/08_other-service/:path*" },
      { source: "/contact/:path*", destination: "/09_contact/:path*" },

      // Member Routes
      { source: "/member-home/:path*", destination: "/01_member-home/:path*" },
      { source: "/profile/:path*", destination: "/02_profile/:path*" },
      { source: "/member-service/:path*", destination: "/03_member-service/:path*" },
      { source: "/member-meeting/:path*", destination: "/04_member-meeting/:path*" },
      { source: "/learning/:path*", destination: "/05_learning/:path*" },
      { source: "/careers/:path*", destination: "/06_careers/:path*" },
      { source: "/tools/:path*", destination: "/07_tools/:path*" },
      { source: "/store/:path*", destination: "/08_store/:path*" },
    ];
  },
};

export default nextConfig;
