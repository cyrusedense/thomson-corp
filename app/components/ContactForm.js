"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import Button from "./Button.js"

gsap.registerPlugin(useGSAP);

const ContactForm = () => {
  const waveAnimation = useRef();

  useGSAP(() => {
    gsap.to(waveAnimation.current, {
      width: "100vw",
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  const inputFields = ["Name", "Country", "Email", "Phone Number", "Subject"];

  return (
    <main className="relative">
      <div className="m-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row">
        <div className="grid-left flex flex-col items-center gap-6 sm:basis-1/2 md:mb-[15%] md:items-start md:px-20 md:text-left">
          <h1 className="text-[40px] text-tsdarkgreen sm:text-[50px]">
            Get In Touch
          </h1>
          <p className="max-w-[80%] px-2 text-center text-tsdarkgreen sm:px-0 md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </p>
        </div>
        <div className="grid-right z-10 mt-8 h-auto w-full px-10 md:mt-0 md:w-[1000px] md:px-0 lg:relative lg:right-[-15%]">
          <div className="outer-div flex h-full items-start rounded-l-[56px] rounded-tr-[56px] bg-tsdarkgreen p-4">
            <div className="inner-div h-full w-full rounded-l-[48px] rounded-tr-[48px] border-[1px] border-white px-6 py-6 sm:px-10 sm:py-10 md:px-14 md:py-10">
              <div className="flex flex-col md:flex-row">
                <div className="w-full space-y-6 md:w-3/4">
                  <form action="" className="space-y-6">
                    {inputFields.map((placeholder) => (
                      <div className="flex flex-col" key={placeholder}>
                        <input
                          className="border-0 border-b-2 border-white bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none"
                          type="text"
                          id={placeholder.toLowerCase().replace(" ", "-")}
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                    <div className="flex flex-col">
                      <textarea
                        className="rounded-lg border-0 bg-white p-2 p-3 text-black placeholder-gray-400 focus:outline-none"
                        id="message"
                        rows="4"
                        placeholder="Message"
                      />
                    </div>
                    <div className="flex justify-center md:justify-start">
                      {/* <button className="rounded-lg bg-yellow-500 px-[15%] py-1 font-bold text-white transition hover:bg-yellow-600">
                        Submit
                      </button> */}
                  
                        {" "}
                        <Button color="yellow" text={"Submit"} />
                    
                    </div>
                  </form>
                </div>
                <div className="mt-1 flex hidden w-full items-start justify-center md:mt-0 md:block md:w-1/4 md:justify-start">
                  <Image
                    className="h-[110px] w-[110px] object-cover"
                    alt="thomson-cross"
                    width={110} // Set the width to match the class size
                    height={110} // Set the height to match the class size
                    src={"/images/CI-icon.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={waveAnimation}
          className="absolute bottom-0 left-0 w-0 translate-y-[20%]"
        >
          <Image
            width={900}
            height={400}
            className="z-0 w-screen bg-center"
            alt="wave"
            src={"/images/hero-wave-1.png"}
          />
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
