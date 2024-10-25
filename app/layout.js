import "./globals.css";
import Navbar from "./components/Navbar";
import { Lato } from "next/font/google";
import Footer from "./components/Footer";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
