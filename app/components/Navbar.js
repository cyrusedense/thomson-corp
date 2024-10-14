import Image from "next/image";
import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="absolute top-0 z-10 flex h-[50px] w-screen items-center justify-between bg-none px-5 py-10">
      <div className="logo-wrapper">
        <Logo color="white" />
      </div>

      <div className="menu-links-wrapper hidden md:block">
        <ul className="flex items-center gap-5 text-white">
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>Our Products</li>
          <li>Blogs & Articles</li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
          <Button color="yellow" text={"Contact Us"} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
