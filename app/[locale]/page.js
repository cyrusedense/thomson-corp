"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

import Button from "../components/Button";
import BlogCard from "../components/BlogCard";
import ProductSlider from "../components/ProductSlider";

import { featuredBlogs } from "@/data/featuredBlogs";
import Wave from "@/app/components/Wave";

gsap.registerPlugin(useGSAP);

export default function Home({ params: { locale } }) {
  const t = useTranslations("HomePage");

  const router = useRouter();

  const contactForm = useRef();

  const container = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data["email"]) {
      alert("Please fill in your email address");
      return;
    }

    fetch("https://proxy.wwwavy.com/thomson-corporate/newsletter/submit.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        alert("Thank you for subscribing to our newsletter!");
        form.reset();
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <main ref={container}>
      <section className="relative isolate overflow-hidden pb-[15%] pt-14">
        <video className="absolute inset-0 -z-10 size-full object-cover" autoPlay muted playsInline loop src="/videos/brand-story.mp4"></video>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto py-32 sm:py-48 lg:py-56">
            <div className="text-left">
              <h1 className="text-balance font-hightide text-5xl tracking-tight text-white sm:text-[150px]">Redefining</h1>
              <p className="mt-1 text-pretty text-3xl text-white sm:text-5xl">Health and Wellness for a Better You</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[12rem] max-h-[40px] bg-white md:max-h-[50px] lg:max-h-[60px] xl:max-h-[70px] 2xl:max-h-[80px] min-[1860px]:max-h-none">&nbsp;</section>

      <Wave />

      <section className="product-section relative mt-[5%]">
        <ProductSlider />
      </section>

      <Wave />

      <section className="about-us flex justify-start bg-blog-hero bg-cover bg-right px-5 py-10 lg:py-20">
        <div className="about-us-inner m-auto w-screen max-w-screen-xl">
          <div className="about-us-content flex flex-col items-start gap-5 rounded-l-[56px] rounded-r-[56px] rounded-t-[56px] rounded-br-[0px] bg-white bg-opacity-65 p-10 sm:w-[50%] sm:max-w-[500px]">
            <h1 className="text-3xl text-tsdarkgreen md:text-4xl">ABOUT US</h1>
            <p className="">
              At Thomson, we are dedicated to improving the health and well-being of our customers through natural solutions. For over 38 years, we have been a trusted name, helping customers to enhance their overall quality of life. <br />
              <br />
              Our customers consistently share stories of relief from chronic issues and improved vitality, with many recommending our products to friends and family. We are proud to be a part of countless journeys toward better health, offering reliable and natural support for everyday wellness.
            </p>
            <Button intLink={"/about-us"} text={"Read More"} />

            {locale === "en-sg" ? "" : <Image width={157} height={60} alt="halal-logos" src={"/images/halal-logos.png"} />}
          </div>
        </div>
      </section>

      <section className="relative bg-home-bottom-bg bg-contain py-14 text-white">
        <div className="flex flex-col gap-5 px-5">
          <h1 className="text-center text-3xl text-tsdarkgreen md:text-4xl">RESOURCES</h1>
          <p className="text-center text-2xl text-tsdarkgreen">Read Articles from our panel of experts on health topics</p>

          <div className="blog-wrapper m-auto my-10 grid max-w-screen-xl gap-6 md:grid-cols-3">
            {featuredBlogs.map((featuredBlog) => (
              <BlogCard color={"green"} key={featuredBlog.title} title={featuredBlog.title} author={featuredBlog.author} featuredImage={featuredBlog.imageUrl} extUrl={featuredBlog.extUrl} />
            ))}
          </div>

          <div className="mb-10 w-fit self-center md:mb-14 lg:mb-20">
            {" "}
            <Button color={"yellow"} text={"See More"} extLink={"https://herbalrevival.life/article/"} />
          </div>

          <h1 className="mb-4 text-center text-3xl text-tsdarkgreen md:text-4xl">CONTACT US</h1>

          <div className="m-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between">
            <div className="grid-left mb-6 flex flex-col items-center gap-6 sm:basis-[40%] md:items-start md:px-20">
              <h1 className="hidden text-4xl text-tsdarkgreen md:block">Ask Us Questions</h1>
              <p className="text-center text-tsdarkgreen md:text-left">For further inquiries, please visit our {"Contact Us"} page and complete the full form. Our team will do our best to assist you.</p>
              <Button intLink={"/contact-us"} color={"yellow"} text={"Contact Us"} />
            </div>
            <div ref={contactForm} className="grid-right w-full sm:basis-[55%]">
              <div className="outer-div h-full rounded-l-[56px] rounded-tr-[56px] bg-tsdarkgreen p-2">
                <div className="inner-div h-full w-full rounded-l-[48px] rounded-tr-[48px] border-[1px] border-white py-10 pl-4 pr-5 sm:pl-14 sm:pr-10">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center">
                      <h1 className="text-3xl text-tsyellow md:text-4xl">Stay Updated with Thomson Health</h1>
                      <Image className="h-[80px] object-cover" alt="thomson-cross" width={56} height={80} src={"/images/CI-icon.png"} />
                    </div>

                    <h3>Subscribe to Our Newsletter</h3>

                    <p className="text-sm md:text-lg">Be the first to know about new promotions, exclusive events, and product launches. Get health tips, wellness insights, and special offers delivered straight to your inbox. Stay connected with Thomson Health!</p>

                    <form onSubmit={handleSubmit} method="POST">
                      <div className="flex justify-between rounded-[10px] bg-white p-2">
                        <input type="email" name="email" id="email" className="w-[70%] p-2 text-tsdarkgreen" />
                        <label htmlFor="email"></label>
                        <div className="">
                          {" "}
                          <button type="submit" className="rounded-full bg-tsyellow px-3 py-2 text-black">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-auto w-screen max-w-screen-xl py-10 md:py-14 lg:py-20">
            <h1 className="mb-5 text-center text-4xl uppercase text-tsdarkgreen">Location</h1>

            {locale === "en-sg" ? (
              <div className="gap-10 rounded-t-[56px] rounded-bl-[56px] bg-tsdarkgreen p-10 sm:flex">
                <div className="location-left mb-6 w-full sm:basis-1/2">
                  <h4 className="text-xl">Singapore Office</h4>
                  <div>
                    <div className="address mt-4">
                      5 Kaki Bukit Road 1,
                      <br />
                      #03-07 Eunos Technolink,
                      <br />
                      Singapore 415936
                    </div>
                    <div className="contact mt-4">
                      Contact: +65 6612 1359
                      <br />
                      WhatsApp: +65 6612 1359
                      <br />
                      Email: enquiry.sg@thomsonhealth.com
                    </div>
                  </div>
                </div>
                <div className="location-right w-full border-white sm:basis-1/2 sm:border-l-2 sm:pl-10">
                  <h4 className="text-xl">Factory</h4>
                  <div>
                    <div className="address mt-4">
                      7 Kaki Bukit Road 1,
                      <br />
                      #01-06 Eunos Technolink,
                      <br />
                      Singapore 415937
                    </div>
                    <div className="contact mt-4">{/* Contact: +603-6157 4818 <br /> */}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="gap-10 rounded-t-[56px] rounded-bl-[56px] bg-tsdarkgreen p-10 sm:flex">
                <div className="location-left mb-6 w-full sm:basis-1/2">
                  <h4 className="text-xl">Malaysia Sales & Marketing Office</h4>
                  <div>
                    <div className="address mt-4">
                      C-06-07, Sunway Nexis,
                      <br />
                      No. 1, Jalan PJU 5/1,
                      <br />
                      Kota Damansara,
                      <br />
                      47810 Petaling Jaya, Malaysia
                    </div>
                    <div className="contact mt-4">
                      Contact: +603-6150 5818
                      <br />
                      WhatsApp: +6012-878 6438
                      <br />
                      Email: enquiry@thomson.com.my
                    </div>
                  </div>
                </div>
                <div className="location-right w-full border-white sm:basis-1/2 sm:border-l-2 sm:pl-10">
                  <h4 className="text-xl">Factory</h4>
                  <div>
                    <div className="address mt-4">
                      No. 5 & 7, Jalan TSB 6,
                      <br />
                      Taman Industri Sungai Buloh,
                      <br />
                      47000 Sungai Buloh, Malaysia
                    </div>
                    <div className="contact mt-4">
                      Contact: +603-6157 4818 <br />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
