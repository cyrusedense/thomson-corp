"use client";
import Image from "next/image";
import Logo from "./Logo";
import Button from "./Button";
import { useLocale } from "next-intl";

import { usePathname } from "next/navigation";

import { Slant as Hamburger } from "hamburger-react";
import { useState, useEffect, useCallback } from "react";
import LocaleSwitcher from "./localeSwitcher";

import { Link } from "@/i18n/routing";

const SG_NAV_LINKS = [
  {
    href: "/about-us",
    label: "About Us",
    submenu: [
      { href: "/leadership-team", label: "Leadership Team" },
      { href: "/careers", label: "Careers" },
      { href: "/factory", label: "Factory Facilities" },
    ],
  },
  { href: "/products", label: "Products" },
  {
    href: "/community",
    label: "Community",
    submenu: [
      { href: "/loyalty", label: "Loyalty Program" },
      { href: "/collaborations", label: "Collaborations" },
    ],
  },
  { href: "/resources", label: "Resources" },
  { href: "https://sg-shop.thomsonhealth.com/collections/all", label: "Shop" },
];

const MY_NAV_LINKS = [
  {
    href: "/about-us",
    label: "About Us",
    submenu: [
      { href: "/leadership-team", label: "Leadership Team" },
      { href: "/careers", label: "Careers" },
      { href: "/factory", label: "Factory Facilities" },
    ],
  },
  { href: "/products", label: "Products" },
  {
    href: "/community",
    label: "Community",
    submenu: [
      { href: "https://my.thomsonhealth.com/thomsonfamily-loyalty-program/", label: "Loyalty Program" },
      { href: "/collaborations", label: "Collaborations" },
    ],
  },
  { href: "/resources", label: "Resources" },
  { href: "/faqs", label: "FAQs" },
  { href: "https://my-shop.thomsonhealth.com/collections/all", label: "Shop" },
];

// Desktop navigation links component with submenu support
function DesktopLinks() {
  const locale = useLocale();

  return (
    <div className="flex w-full items-center justify-between">
      <ul className="flex items-center gap-5">
        {locale === "en-sg"
          ? SG_NAV_LINKS.map((link) => (
              <li key={link.label} className="group relative py-4">
                {/* Main Menu Link */}
                <Link href={link.href} className="hover:text-tsyellow">
                  {link.label}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <ul className="pointer-events-none absolute left-0 top-full w-40 rounded-md bg-tsdarkgreen text-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:flex group-hover:flex-col group-hover:opacity-100">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label}>
                        <Link href={sublink.href} className="block px-4 py-2 hover:bg-tsyellow">
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          : MY_NAV_LINKS.map((link) => (
              <li key={link.label} className="group relative py-4">
                {/* Main Menu Link */}
                <Link href={link.href} className="hover:text-tsyellow">
                  {link.label}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <ul className="pointer-events-none absolute left-0 top-full w-40 rounded-md bg-tsdarkgreen text-white opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:flex group-hover:flex-col group-hover:opacity-100">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label}>
                        <Link href={sublink.href} className="block px-4 py-2 hover:bg-tsyellow">
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
      <div className="flex flex-row gap-5">
        <LocaleSwitcher />
        <Button intLink="/contact-us" color="yellow" text="Contact Us" />
      </div>
    </div>
  );
}

// Mobile navigation menu component with submenu toggle
function MobileMenu({ isOpen, closeMenu }) {
  const locale = useLocale();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className={`absolute right-0 top-0 w-[60%] xl:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} flex min-h-screen flex-col items-center justify-center rounded-br-[56px] rounded-tl-[56px] bg-tsdarkgreen p-10 py-20 text-white transition-transform duration-500`}>
      <ul className="w-full space-y-6 text-center text-white">
        {locale === "en-sg"
          ? SG_NAV_LINKS.map((link, index) => (
              <li key={link.label} className="w-full">
                <div className="flex w-full items-center justify-between px-4 py-2" onClick={() => link.submenu && toggleSubmenu(index)}>
                  <Link href={link.href} className="hover:text-tsyellow">
                    {link.label}
                  </Link>
                  {link.submenu && <span className="text-white">{openSubmenu === index ? "▲" : "▼"}</span>}
                </div>
                {link.submenu && openSubmenu === index && (
                  <ul className="pl-8 text-white">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label} className="py-1 text-left">
                        <Link href={sublink.href} className="hover:text-tsyellow">
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          : MY_NAV_LINKS.map((link, index) => (
              <li key={link.label} className="w-full">
                <div className="flex w-full items-center justify-between px-4 py-2" onClick={() => link.submenu && toggleSubmenu(index)}>
                  <Link href={link.href} className="hover:text-tsyellow">
                    {link.label}
                  </Link>
                  {link.submenu && <span className="text-white">{openSubmenu === index ? "▲" : "▼"}</span>}
                </div>
                {link.submenu && openSubmenu === index && (
                  <ul className="pl-8 text-white">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label} className="py-1 text-left">
                        <Link href={sublink.href} className="hover:text-tsyellow">
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        <li></li>
      </ul>
      <div className="mt-10"></div>
      <div className="flex flex-col gap-5">
        <LocaleSwitcher />
        <Button intLink="/contact-us" color="yellow" text="Contact Us" />
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-40 m-auto flex h-[50px] w-screen items-center justify-between gap-10 px-5 py-10 backdrop-blur-md transition-all duration-300 ${hasScrolled ? "bg-tsdarkgreen" : "bg-white"}`}>
      <div className="mx-auto flex w-screen max-w-screen-2xl justify-between gap-10">
        <div className="logo-wrapper">
          {hasScrolled ? (
            <Logo color="white" />
          ) : (
            <Link href="/">
              <Image src={"/images/thomson.webp"} alt="Logo" className="h-[44px] w-auto" width={724} height={160} />
            </Link>
          )}
        </div>

        <div className={`hidden w-full xl:block ${hasScrolled ? "text-white" : "text-black"}`}>
          <DesktopLinks />
        </div>
      </div>

      <div className="z-10 xl:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded color="white" size={38} direction="right" />
      </div>

      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
}

export default Navbar;
