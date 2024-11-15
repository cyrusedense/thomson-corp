import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "herbalrevival.life",
        pathname: "/**", // Allows all paths from this domain
      },
    ],
  },
};

export default withNextIntl(nextConfig);
