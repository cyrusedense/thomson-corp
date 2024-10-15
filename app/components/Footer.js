import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-tsdarkgreen px-5 py-10 text-white md:py-14 xl:py-20">
      <div className="footer-container m-auto grid max-w-screen-xl gap-10 md:grid-cols-2 xl:grid-cols-3">
        <div className="footer-column-one flex flex-col gap-5">
          <Logo color={"white"} />
          <p>HERBAL REVIVAL SDN BHD</p>
          <p>198701000341 (159007-X)</p>
        </div>

        <div className="footer-column-two flex gap-6">
          <div className="footer-column-two-left">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/our-products"}>Our Products</Link>
              </li>
              <li>
                <Link href={"/resources"}>Resources</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column-two-right">
            <h4>Purchase</h4>
            <ul>
              <li>
                <Link href={"/about-us"}>Buy Online</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-column-three">
          <h4>Follow Our Instagram Page</h4>
          <div>
            <h4>Connect With Us</h4>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
