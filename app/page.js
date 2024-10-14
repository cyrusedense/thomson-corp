"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import Button from "./components/Button";
import BlogCard from "./components/BlogCard";

gsap.registerPlugin(useGSAP);

export default function Home() {
  //animations

  //wave animation
  const waveAnimation = useRef();

  //container for scoping
  const container = useRef();

  useGSAP(() => {
    gsap.to(waveAnimation.current, {
      width: "100vw",
      duration: 2,
    });
  });

  return (
    <main ref={container}>
      <section className="hero relative h-[90vh] w-screen">
        <div className="relative h-full w-screen">
          <Image
            className="bg-center"
            fill
            objectFit="cover"
            alt="woman"
            src={"/images/hero-banner.png"}
          />
        </div>
        <div
          ref={waveAnimation}
          className="absolute bottom-0 w-0 translate-y-[30%]"
        >
          <Image
            width={900}
            height={300}
            className="z-20 w-screen bg-center"
            alt="wave"
            src={"/images/hero-wave-1.png"}
          />
        </div>
      </section>

      <section className="about-us mt-[-40px] flex min-h-[90vh] justify-end bg-about-us-pattern bg-cover py-10 lg:py-20">
        <div className="about-us-content m-20 flex max-w-[50%] flex-col items-start gap-5 rounded-l-[56px] rounded-r-[56px] rounded-t-[56px] rounded-br-[0px] bg-[#ffffff79] p-10">
          <h1 className="text-4xl text-tsdarkgreen">ABOUT US</h1>
          <p>
            At Thomson, we are dedicated to improving the health and well-being
            of our customers through natural solutions. For over 30 years, we
            have been a trusted name, helping customers to enhance their overall
            quality of life. Our customers consistently share stories of relief
            from chronic issues and improved vitality, with many recommending
            our products to friends and family. We are proud to be a part of
            countless journeys toward better health, offering reliable, natural
            support for everyday wellness.
          </p>
          <Button color={"yellow"} text={"Read More"} />

          <Image
            width={157}
            height={60}
            alt="halal-logos"
            src={"/images/halal-logos.png"}
          />
        </div>
      </section>

      <section className="flex flex-col gap-7 bg-home-bottom-bg bg-cover py-14 text-white">
        <h1 className="text-center text-4xl text-tsdarkgreen">RESOURCES</h1>
        <p className="text-center text-tsdarkgreen">
          Read Articles from our panel of experts on health topics
        </p>

        <div className="blog-wrapper m-auto grid max-w-screen-lg gap-6 md:grid-cols-3">
          <BlogCard
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />

          <BlogCard
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />

          <BlogCard
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />
        </div>

        <div className="w-fit self-center">
          {" "}
          <Button color={"yellow"} text={"See More"} />
        </div>

        <h1 className="text-center text-4xl text-tsdarkgreen">Contact Us</h1>

        <div className="flex w-screen flex-row flex-wrap items-center justify-between px-5">
          <div className="grid-left mb-6 flex w-full flex-col items-center gap-6 md:basis-[40%] md:items-start md:px-20">
            <h1 className="text-4xl text-tsdarkgreen">Ask Us Questions</h1>
            <p className="text-center text-tsdarkgreen md:text-left">
              For further inquiries, please visit our {"Contact Us"} page and
              complete the full form. Our team will assist you promptly.
            </p>
            <Button color={"yellow"} text={"See More"} />
          </div>
          <div className="grid-right basis-[60%]">
            <div className="outer-div h-full w-full rounded-l-[56px] bg-tsdarkgreen p-2">
              <div className="inner-div h-full w-full rounded-l-[48px] border-[1px] border-white p-14">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <h1 className="text-4xl text-tsyellow">
                      Stay Updated with Thomson Health
                    </h1>
                    <Image
                      className="h-[80px] object-cover"
                      alt="thomson-cross"
                      width={56}
                      height={80}
                      src={"/images/CI-icon.png"}
                    />
                  </div>

                  <h3>Subscribe to Our Newsletter</h3>

                  <p>
                    Be the first to know about new promotions, exclusive events,
                    and product launches. Get health tips, wellness insights,
                    and special offers delivered straight to your inbox. Stay
                    connected with Thomson Health!
                  </p>

                  <form action="">
                    <div className="flex max-w-[70%] justify-between rounded-[10px] bg-white p-2">
                      <input
                        type="text"
                        className="grow p-2 text-tsdarkgreen"
                      />
                      <label htmlFor="email"></label>
                      <Button color="yellow" text={"Subscribe"} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Contact begins */}

        <div className="max-w-screen-xl">
          <div className="contact-inner-section flex flex-wrap justify-between px-3 py-10 lg:py-20">
            <div className="contact-inner-left basis-1/2">
              <h1 className="text-4xl text-tsdarkgreen">LOCATION</h1>

              <div className="contact-section">
                <h4 className="text-tsdarkgreen">
                  Malaysia Sales and Marketing Office
                </h4>

                <address className="text-tsdarkgreen">
                  C-06-07, Sunway Nexis,No. 1, <br />
                  Jalan PJU 5/1,Kota Damansara,
                  <br />
                  47810 Petaling Jaya, Malaysia
                </address>

                <address className="text-tsdarkgreen">
                  Contact: <a href="">+603-61505818</a>
                  <br />
                  Whatsapp:<a href="">+603-61505818</a>
                  <br />
                  Email: <a href="">enquiry@thomson.com</a>
                </address>
              </div>
            </div>

            <div className="contact-inner-right h-[500px] max-w-[300px] basis-1/2">
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="cover"
                  alt="health-professionals"
                  src="/images/contact-bottom-right.png"
                />

                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white via-transparent via-70% to-transparent"></div>

                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white via-transparent via-70% to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
