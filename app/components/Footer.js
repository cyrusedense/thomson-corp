import { Link } from "@/i18n/routing";

import Logo from "./Logo";
import { useLocale } from "next-intl"; // Import useLocale for locale detection
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

function Footer() {
  const locale = useLocale();

  // Define Instagram links for different locales
  const socials = {
    instagram: locale === "en-sg" ? "https://www.instagram.com/thomsonhealth_sg/" : "https://www.instagram.com/thomsonhealth/",
    facebook: locale === "en-sg" ? "https://www.facebook.com/thomsonhealth.sg/" : "https://www.facebook.com/thomsonhealth/",
    youtube: "https://www.youtube.com/@ThomsonHealth",
  };

  // Footer links data
  const quickLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/community", label: "Community" },
  ];

  const purchaseLinks = [
    { href: "/products", label: "Our Products" },
    { href: "https://sg-shop.thomsonhealth.com/collections/all", label: "Buy Online" },
  ];

  return (
    <div className="bg-tsdarkgreen px-5 py-10 text-white md:py-14 xl:py-20">
      <div className="footer-container m-auto grid max-w-screen-xl gap-10 md:grid-cols-2 xl:grid-cols-3">
        {/* Column 1 - Company Info */}
        <div className="footer-column-one flex flex-col gap-5">
          <Logo color={"white"} />
          <p>THOMSON HEALTH PTE LTD</p>
          <p>201710714E</p>
        </div>

        {/* Column 2 - Quick Links */}

        <div>
          <h4 className="mb-2">Quick Links</h4>
          <div className="footer-column-two flex gap-6">
            <div className="footer-column-two-left">
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column-two-right">
              <ul>
                {purchaseLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3 - Social Media Links */}
        <div className="footer-column-three">
          <h4 className="mb-5">Follow Our Social Media Pages</h4>
          <div className="flex gap-5">
            <a href={socials["instagram"]} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
              <IoLogoInstagram size={40} />
            </a>
            <a href={socials["facebook"]} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
              <IoLogoFacebook size={40} />
            </a>
            <a href={socials["youtube"]} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
              <IoLogoYoutube size={40} />
            </a>
          </div>
          <div className="mt-5">
            <h4>Connect With Us</h4>
            {/* Add other social media links here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
