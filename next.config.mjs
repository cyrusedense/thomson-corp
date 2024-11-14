import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["herbalrevival.life"], // Add the domain here
  },
};

export default withNextIntl(nextConfig);
