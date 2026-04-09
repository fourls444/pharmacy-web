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
      { source: "/home", destination: "/01_home" },
      { source: "/about", destination: "/02_about" },
      { source: "/department", destination: "/03_department" },
      { source: "/service", destination: "/04_service" },
      { source: "/meeting", destination: "/05_meeting" },
      { source: "/news", destination: "/06_news" },
      { source: "/laws", destination: "/07_laws" },
      { source: "/other-service", destination: "/08_other-service" },
      { source: "/contact", destination: "/09_contact" },

      // Member Routes
      { source: "/member-home", destination: "/01_member-home" },
      { source: "/profile", destination: "/02_profile" },
      { source: "/member-service", destination: "/03_member-service" },
      { source: "/member-meeting", destination: "/04_member-meeting" },
      { source: "/learning", destination: "/05_learning" },
      { source: "/careers", destination: "/06_careers" },
      { source: "/tools", destination: "/07_tools" },
      { source: "/store", destination: "/08_store" },
    ];
  },
};

export default nextConfig;
