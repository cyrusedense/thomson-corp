import { Link } from "@/i18n/routing";

import Logo from "./Logo";
import { useLocale } from "next-intl"; // Import useLocale for locale detection
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  const locale = useLocale();

  // Define Instagram links for different locales
  const instagramLinks = {
    "en-global": "https://www.instagram.com/thomsonhealth/?hl=en",
    "en-sg": "https://www.instagram.com/thomsonhealth_sg/",
  };

  // Select the Instagram link based on locale
  const instagramUrl = instagramLinks[locale] || instagramLinks["en-global"];

  // Footer links data
  const quickLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/community", label: "Community" },
  ];

  const purchaseLinks = [{ href: "/buy-online", label: "Buy Online" }];

  return (
    <div className="bg-tsdarkgreen px-5 py-10 text-white md:py-14 xl:py-20">
      <div className="footer-container m-auto grid max-w-screen-xl gap-10 md:grid-cols-2 xl:grid-cols-3">
        {/* Column 1 - Company Info */}
        <div className="footer-column-one flex flex-col gap-5">
          <Logo color={"white"} />
          <p>HERBAL REVIVAL SDN BHD</p>
          <p>198701000341 (159007-X)</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column-two flex gap-6">
          <div className="footer-column-two-left">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column-two-right">
            <h4>Purchase</h4>
            <ul>
              {purchaseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3 - Social Media Links */}
        <div className="footer-column-three">
          <h4 className="mb-5">Follow Our Instagram Page</h4>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-gray-300"
          >
            <IoLogoInstagram size={40} />
          </a>
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
