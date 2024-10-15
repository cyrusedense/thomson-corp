"use client";
import Image from "next/image";
import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Slant as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "#", label: "Our Products" },
  { href: "#", label: "Blogs & Articles" },
  { href: "/community", label: "Community" },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  //handle scrolling and setting menu to solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 flex h-[50px] w-screen items-center justify-between px-5 py-10 transition-all duration-300 ${
        hasScrolled
          ? "bg-tsdarkgreen bg-opacity-90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="logo-wrapper">
        <Logo color="white" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-5 text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <Button
            clickFunction={() => router.push("/contact-us")}
            color="yellow"
            text="Contact Us"
          />
        </ul>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="z-10 md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          rounded
          color="white"
          size={38}
          direction="right"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-0 w-[60%] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex min-h-screen flex-col items-center justify-center rounded-br-[56px] rounded-tl-[56px] bg-tsdarkgreen p-10 py-20 text-white transition-transform duration-500`}
      >
        <ul className="space-y-6 text-center text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Button
              clickFunction={() => {
                router.push("/contact-us");
                setOpen(false); // Close menu after navigating
              }}
              color="yellow"
              text="Contact Us"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
