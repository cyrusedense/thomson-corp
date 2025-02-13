import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "../components/Navbar";
import { Lato } from "next/font/google";
import Footer from "../components/Footer";
import localFont from "next/font/local";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const highTide = localFont({
  src: "../fonts/HighTide.ttf",
  variable: "--font-high-tide",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Thomson Global",
  description: "The Health Experts",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${lato.className} ${highTide.variable} overflow-x-hidden`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
