/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-us": "url('/images/Contact-us.jpg')",
        "about-us-pattern": "url('/images/about-pattern.png')",
        "flower-bg-1": "url('/images/flower-bg-1.png')",
        "contact-bg-1": "url('/images/contact-bg.png')",
        "home-bottom-bg": "url('/images/home-bottom-bg.webp')",
        "about-hero": "url(/images/hero-bgs/hero-bg12.png)",
        "factory-bg": "url(/images/factory.webp)",
        "collab-bg": "url(/images/collab-hero.webp)",
        "product-bg": "url(/images/hero-bgs/hero-bg2.png)",
        "blog-hero": "url(/images/hero-bgs/hero-bg3.png)",
        "community-hero": "url(/images/hero-bgs/hero-bg7.png)",
        ginkgo: "url(/images/bg-ginkgo.png)",
        "loyalty-banner": "url(/images/loyalty-banner.webp)",
        "ginkgo-2": "url(/images/bg-ginkgo-2.webp)",
        "leadership-hero": "url(/images/leadership-new.png)",
        "careers-hero": "url(/images/careers.webp)",
        "facilities-hero": "url(/images/hero-bgs/hero-bg-facilities.webp)",

        "factory-tour-lab": "url(/images/factory-tour/factory.webp)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tsgreen: "#016A38",
        tsyellow: "#F9B002",
        tsdarkgreen: "#004414",
      },
      fontFamily: {
        hightide: "var(--font-high-tide)",
      },
    },
  },
  plugins: [],
};
