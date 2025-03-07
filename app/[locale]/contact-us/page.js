"use client";

import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/app/components/ContactForm";
import LocationInfo from "@/app/components/Locations";
import Image from "next/image";
import Button from "@/app/components/Button";
import Wave from "@/app/components/Wave";

function Contact({ params: { locale } }) {
  return (
    <main className="text-[#004414]">
      <section className="relative flex min-h-[50vh] items-center bg-contact-us bg-cover bg-right">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="mt-7 py-10 md:py-20 xl:mt-[20px] xl:py-20">
        <h1 className="mb-10 text-center text-3xl underline">CONTACT INFO</h1>

        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-center">
          <div className="flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex items-center justify-center rounded-full bg-[#F9B002] p-4">
              <FaPhone size={35} className="text-white" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Phone</h3>
              {locale === "en-sg" ? (
                <p className="text-[15px]">+65 6612 1359</p>
              ) : (
                <div className="flex flex-col md:flex-row md:space-x-9">
                  <div className="mb-2 flex flex-col leading-[14px]">
                    <p className="text-[15px]">(office)</p>
                    <p className="text-[15px]">+603-6150 5818</p>
                  </div>
                  <div className="flex flex-col leading-[14px]">
                    <p className="text-[15px]">(factory)</p>
                    <p className="text-[15px]">+603-6157 4818</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex items-center justify-center rounded-full bg-[#F9B002] p-4">
              <FaWhatsapp size={45} color="white" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px] md:mb-1">Whatsapp</h3>

              {locale === "en-sg" ? <p className="text-[15px]">+65 6612 1359</p> : <p className="text-[15px]">+6012-878 6438</p>}
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex items-center justify-center rounded-full bg-[#F9B002] p-4">
              <FaEnvelope size={35} color="white" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Email</h3>
              {locale === "en-sg" ? <p className="text-[15px] md:mb-3">enquiry.sg@thomson.com</p> : <p className="text-[15px] md:mb-3">enquiry@thomson.com.my</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[5%] pb-[15%]">
        <ContactForm />
      </section>

      <Wave />

      <section className="pt-[5%]">
        <LocationInfo />
      </section>

      <section className="relative mt-[10%] flex flex-col items-center justify-center">
        <h1 className="mb-[5%] p-1 text-center text-3xl underline md:text-[35px]">COLLABORATIONS & PARTNERSHIPS</h1>

        <div className="m-auto flex max-w-screen-xl flex-col items-center md:flex-row">
          <div className="grid-left flex flex-col items-center gap-6 sm:basis-1/2 md:mb-[15%] md:items-start md:px-20 md:text-left">
            <p className="px-2 text-xl text-tsdarkgreen md:px-0">
              We are always on the look out for high-quality, clinically proven health supplement ingredients. <br />
              <br />
              Interested to learn more about Thomson partnership?
            </p>
            <div className="mb-10 flex w-[80%] justify-center gap-4 text-[15px] md:w-full md:flex-row md:justify-start md:text-[15px]">
              <div className="">
                {" "}
                <Button color="yellow" text={"Learn More"} intLink={"/collaborations"} />
              </div>
            </div>
          </div>
          <div className="grid-right z-10 mb-10 w-full px-10 md:relative md:right-[5%] md:mb-[75px] md:mt-0 md:w-[1000px] md:px-0 lg:relative lg:right-[-10%]">
            <div className="flex flex-col justify-center md:flex-row">
              <Image width={682} height={430} src={"/images/career-flower.png"} alt="Career Flower" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
