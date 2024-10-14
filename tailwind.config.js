/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-us-pattern': "url('/images/about-pattern.png')",
        'flower-bg-1': "url('/images/flower-bg-1.png')",
        'contact-bg-1': "url('/images/contact-bg.png')",
        'home-bottom-bg': "url('/images/home-bottom-bg.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tsgreen: "#016A38",
        tsyellow: "#F9B002",
        tsdarkgreen: "#004414"
      },
    },
  },
  plugins: [],
};
