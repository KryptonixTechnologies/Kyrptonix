import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Creates a fully static website in the "out" folder
  output: "export",
  trailingSlash: true,

  // Required if you use next/image on a static site
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
