"use client";

import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/app/components/ContactForm";
import LocationInfo from "@/app/components/Locations";
import Image from "next/image";
import Button from "@/app/components/Button";
import WaveAnimation from "@/app/components/waveAnimation";

function Contact() {
  return (
    <main className="text-[#004414]">
      <section className="relative min-h-[50vh] bg-contact-us bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Contact Us</h1>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing
          </p>
        </div>
      </section>

      <section className="mt-7 py-10 md:py-20 xl:mt-[20px] xl:py-20">
        <h1 className="mb-10 text-center text-[30px] underline md:text-[35px]">
          CONTACT INFO
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:justify-evenly">
          <div className="mb-6 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaPhone className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Phone</h3>
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
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaWhatsapp className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px] md:mb-1">Whatsapp</h3>
              <p className="text-[15px]">+6012-878 6438</p>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaEnvelope className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Email</h3>
              <p className="text-[15px] md:mb-3">enquiry@thomson.com.my</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[5%]">
        <ContactForm />
      </section>

      <section className="mb-[5%]">
        <LocationInfo />
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-center md:text-center">
          <div className="flex flex-col items-center justify-center gap-8 sm:basis-1/2 md:mb-[3%] md:items-center md:text-center">
            <h1 className="text-[30px] text-tsdarkgreen underline sm:text-[35px]">
              CAREER OPPORTUNITIES
            </h1>
            <p className="max-w-[80%] text-center text-tsdarkgreen md:max-w-[100%] md:text-center md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>

        <div className="my-3 flex flex-col items-center justify-center p-5">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#004414]">
            Open Positions
          </h2>

          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#F9B002] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Product Manager
                </h3>
                <p className="text-white">Senior with 5 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>
                <div className="">
                  {" "}
                  <Button color="white" text={"Apply Now"} />
                </div>
              </div>
            </div>

            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#004414] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Sales Executive
                </h3>
                <p className="text-white">Senior with 3 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>

                <div className="">
                  {" "}
                  <Button color="yellow" text={"Apply Now"} />
                </div>
              </div>
            </div>

            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#F9B002] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Data Specialist
                </h3>
                <p className="text-white">Senior with 5 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>
                <div className="">
                  {" "}
                  <Button color="white" text={"Apply Now"} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[60px]">
            <div className="">
              {" "}
              <Button color="yellow" text={"See More"} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-[10%] flex flex-col items-center justify-center">
        <h1 className="mb-[5%] p-1 text-center text-3xl underline md:text-[35px]">
          COLLABORATIONS & PARTNERSHIPS
        </h1>

        <div className="m-auto flex max-w-screen-xl flex-col items-center md:flex-row">
          <div className="grid-left flex flex-col items-center gap-6 sm:basis-1/2 md:mb-[15%] md:items-start md:px-20 md:text-left">
            <p className="px-2 text-center text-tsdarkgreen md:px-0 md:text-left md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu
            </p>
            <div className="mb-10 flex w-[80%] justify-center gap-4 text-[15px] md:w-full md:flex-row md:justify-start md:text-[15px]">
              <div className="">
                {" "}
                <Button color="yellow" text={"Join Now"} />
              </div>
              <div className="">
                {" "}
                <Button color="yellow" text={"Read More"} />
              </div>
            </div>
          </div>
          <div className="grid-right z-10 mb-10 w-full px-10 md:relative md:right-[5%] md:mb-[75px] md:mt-0 md:w-[1000px] md:px-0 lg:relative lg:right-[-10%]">
            <div className="flex flex-col justify-center md:flex-row">
              <Image
                width={682}
                height={430}
                src={"/images/career-flower.png"}
                alt="Career Flower"
              />
            </div>
          </div>
        </div>
        <WaveAnimation />
      </section>
    </main>
  );
}

export default Contact;
