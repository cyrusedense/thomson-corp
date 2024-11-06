"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import Button from "./components/Button";
import BlogCard from "./components/BlogCard";
import ProductSlider from "./components/ProductSlider";

import { featuredBlogs } from "@/data/featuredBlogs";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const router = useRouter();
  //animations

  //wave animation
  const waveAnimation = useRef();

  //product animations
  const rotationElement = useRef();

  const infoAnimation = useRef();

  //contact animations
  const contactForm = useRef();

  //container for scoping
  const container = useRef();

  //GSAP

  useGSAP(() => {
    //initialise timeline

    gsap.to(waveAnimation.current, {
      width: "100vw",
      duration: 2,
    });

    gsap.from(contactForm.current, {
      translateX: "100%",
      duration: 1,
    });

    // gsap.to(rotationElement.current, {
    //   translateX: "10px",
    //   translateY: "20px",
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 5,
    //   ease: "none",
    // });
  });

  return (
    <main ref={container}>
      <section className="hero relative h-[50vh] sm:h-[70vh]">
        <div className="">
          <div className="absolute left-[5%] top-[50%] z-10 translate-y-[-50%]">
            <h1 className="font-hightide text-5xl text-white sm:text-[150px]">
              Redefining
            </h1>
            <h2 className="text-3xl text-white sm:text-5xl">
              {" "}
              Health and Wellness for a Better You
            </h2>
          </div>

          <video
            className="absolute h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            src="/videos/brand-story.mp4"
          ></video>
        </div>
        <div
          ref={waveAnimation}
          className="absolute bottom-0 z-20 w-0 translate-y-[30%]"
        >
          <Image
            width={900}
            height={300}
            className="w-screen bg-center"
            alt="wave"
            src={"/images/hero-wave-1.png"}
          />
        </div>
      </section>

      {/* hidden */}
      {/* <section className="product-section h-[50vh] md:h-[100vh]">
        <div className="product-frame relative h-full w-full py-10 md:py-14 lg:py-20">
          <Image
            fill
            className="z-10 object-cover"
            // width={500}
            // height={500}
            alt="background"
            src={
              "/images/product-animations/activated-ginko/activated-ginkgo-bg.png"
            }
          />
          <Image
            alt="stage-ring"
            className="absolute z-[18] w-[50%] translate-x-[50%]"
            width={300}
            height={300}
            src={"/images/product-animations/stage-ring.png"}
          />
          <Image
            alt="stage-shadow"
            className="absolute bottom-0 z-20 max-h-[300px] w-full object-cover object-top"
            width={300}
            height={300}
            src={"/images/product-animations/stage-with-shadow.png"}
          />

          <div className="absolute left-[5%] z-20 w-[30%]">
            <h1 className="text-3xl text-tsdarkgreen xl:text-4xl">
              Activated Ginkgo
            </h1>
            <h3 className="text-tsdarkgreen md:text-2xl">
              Traditionally Used To Promote Blood Circulation & Health
            </h3>
          </div>

          <Image
            width={300}
            height={300}
            alt="product"
            className="absolute left-[50%] z-20 h-[50%] w-[40%] translate-x-[-50%] translate-y-[20%] object-cover"
            src={
              "/images/product-animations/activated-ginko/activated_ginko.png"
            }
          />

          <Image
            width={300}
            height={400}
            alt="human"
            className="absolute right-[-50px] z-20 h-[50%] w-[40%] translate-y-[50%] object-cover"
            src={
              "/images/product-animations/activated-ginko/activated-ginkgo-human.png"
            }
          />

          <Image
            ref={infoAnimation}
            width={300}
            height={400}
            alt="product-info"
            className="absolute bottom-[40%] left-[19%] z-[19] w-[25%]"
            src={
              "/images/product-animations/activated-ginko/activated-ginkgo-banner.png"
            }
          />

          <Image
            ref={rotationElement}
            alt="blood"
            className="absolute right-[27%] z-20 max-h-[300px] w-[20%] transform-gpu object-contain object-top"
            width={200}
            height={200}
            src={
              "/images/product-animations/activated-ginko/activated-ginkgo-blood.png"
            }
          />
        </div>
      </section> */}
      <section className="product-section h-[700px] sm:h-[900px]">
        <ProductSlider />
      </section>
      <section className="about-us flex min-h-[90vh] justify-end bg-about-us-pattern bg-cover px-5 py-10 lg:py-20">
        <div className="about-us-content my-20 flex flex-col items-start gap-5 rounded-l-[56px] rounded-r-[56px] rounded-t-[56px] rounded-br-[0px] bg-[#ffffff79] p-10 sm:w-[50%] sm:max-w-[500px]">
          <h1 className="text-3xl text-tsdarkgreen md:text-4xl">ABOUT US</h1>
          <p className="">
            At Thomson, we are dedicated to improving the health and well-being
            of our customers through natural solutions. For over 30 years, we
            have been a trusted name, helping customers to enhance their overall
            quality of life. Our customers consistently share stories of relief
            from chronic issues and improved vitality, with many recommending
            our products to friends and family. We are proud to be a part of
            countless journeys toward better health, offering reliable, natural
            support for everyday wellness.
          </p>
          <Button intLink={"/about-us"} color={"yellow"} text={"Read More"} />

          <Image
            width={157}
            height={60}
            alt="halal-logos"
            src={"/images/halal-logos.png"}
          />
        </div>
      </section>
      <section className="flex flex-col gap-5 bg-home-bottom-bg bg-cover px-5 py-14 text-white">
        <h1 className="text-center text-3xl text-tsdarkgreen md:text-4xl">
          RESOURCES
        </h1>
        <p className="text-center text-tsdarkgreen">
          Read Articles from our panel of experts on health topics
        </p>

        <div className="blog-wrapper m-auto grid max-w-screen-lg gap-6 md:grid-cols-3">
          {featuredBlogs.map((featuredBlog) => (
            <BlogCard
              color={"green"}
              key={featuredBlog.title}
              title={featuredBlog.title}
              author={featuredBlog.author}
              featuredImage={featuredBlog.imageUrl}
              extUrl={featuredBlog.extUrl}
            />
          ))}
        </div>

        <div className="mb-10 w-fit self-center md:mb-14 lg:mb-20">
          {" "}
          <Button
            color={"yellow"}
            text={"See More"}
            extLink={"https://herbalrevival.life/article/"}
          />
        </div>

        <h1 className="mb-4 text-center text-3xl text-tsdarkgreen md:text-4xl">
          Contact Us
        </h1>

        <div className="m-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between">
          <div className="grid-left mb-6 flex flex-col items-center gap-6 sm:basis-[40%] md:items-start md:px-20">
            <h1 className="hidden text-4xl text-tsdarkgreen md:block">
              Ask Us Questions
            </h1>
            <p className="text-center text-tsdarkgreen md:text-left">
              For further inquiries, please visit our {"Contact Us"} page and
              complete the full form. Our team will assist you promptly.
            </p>
            <Button intLink={"/about-us"} color={"yellow"} text={"See More"} />
          </div>
          <div ref={contactForm} className="grid-right w-full sm:basis-[55%]">
            <div className="outer-div h-full rounded-l-[56px] rounded-tr-[56px] bg-tsdarkgreen p-2">
              <div className="inner-div h-full w-full rounded-l-[48px] rounded-tr-[48px] border-[1px] border-white py-10 pl-10 pr-5 sm:pl-14 sm:pr-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <h1 className="text-3xl text-tsyellow md:text-4xl">
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

                  <p className="text-sm md:text-lg">
                    Be the first to know about new promotions, exclusive events,
                    and product launches. Get health tips, wellness insights,
                    and special offers delivered straight to your inbox. Stay
                    connected with Thomson Health!
                  </p>

                  <form action="">
                    <div className="flex justify-between rounded-[10px] bg-white p-2">
                      <input
                        type="text"
                        className="w-[70%] p-2 text-tsdarkgreen"
                      />
                      <label htmlFor="email"></label>
                      <div className="">
                        {" "}
                        <Button color="yellow" text={"Subscribe"} link={"/"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto max-w-screen-xl py-10 md:py-14 lg:py-20">
          <h1 className="mb-5 text-center text-4xl text-tsdarkgreen">
            Location
          </h1>

          <div className="flex flex-col gap-10 rounded-t-[56px] rounded-bl-[56px] bg-tsdarkgreen p-10 sm:flex-row">
            <div className="location-left w-full sm:basis-1/2">
              <h4 className="text-xl">Malaysia Sales & Marketing Office</h4>
              <div>
                <div className="address">
                  C-06-07, Sunway Nexis,No. 1, Jalan PJU 5/1,Kota
                  Damansara,47810 Petaling Jaya, Malaysia
                </div>
                <div className="contact">
                  Contact: +603–6150 5818 WhatsApp: +6012-878 6438
                  Email: enquiry@thomson.com.my
                </div>
              </div>
            </div>
            <div className="location-right w-full border-white sm:basis-1/2 sm:border-l-2 sm:pl-10">
              <h4 className="text-xl">Factory</h4>
              <div>
                <div className="address">
                  C-06-07, Sunway Nexis,
                  <br />
                  No. 1, Jalan PJU 5/1,
                  <br />
                  Kota Damansara,
                  <br />
                  47810 Petaling Jaya, Malaysia
                </div>
                <div className="contact">
                  Contact: +603–6150 5818 <br />
                  WhatsApp: +6012-878 6438 <br />
                  Email: enquiry@thomson.com.my
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
