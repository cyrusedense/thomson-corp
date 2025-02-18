"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import Button from "./Button.js";

gsap.registerPlugin(useGSAP);

const ContactForm = () => {
  const inputFields = ["Name", "Country", "Email", "Phone", "Subject"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data["name"]) {
      alert("Please enter your name");
      return;
    }

    if (!data["country"]) {
      alert("Please enter your country");
      return;
    }

    if (!data["email"]) {
      alert("Please enter your email address");
      return;
    }

    if (!data["phone"]) {
      alert("Please enter your phone number");
      return;
    }

    if (!data["subject"]) {
      alert("Please enter a subject");
      return;
    }

    if (!data["message"]) {
      alert("Please enter a message");
      return;
    }

    fetch("https://proxy.wwwavy.com/thomson-corporate/contact/submit.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        alert("Thank you for contacting us! We will be in touch within 2-5 working days.");
        form.reset();
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <main className="relative z-[9999]">
      <div className="m-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row">
        <div className="grid-left flex flex-col items-center gap-6 sm:basis-1/2 md:mb-[15%] md:items-start md:px-20 md:text-left">
          <h1 className="text-[40px] text-tsdarkgreen sm:text-[50px]">Get In Touch</h1>
          <p className="max-w-[80%] px-2 text-center text-2xl text-tsdarkgreen sm:px-0 md:text-left">We will be in touch within 2-5 working days</p>
        </div>
        <div className="grid-right z-10 mt-8 h-auto w-full px-10 md:mt-0 md:w-[1000px] md:px-0 lg:relative lg:right-[-15%]">
          <div className="outer-div flex h-full items-start rounded-l-[56px] rounded-tr-[56px] bg-tsdarkgreen p-4">
            <div className="inner-div h-full w-full rounded-l-[48px] rounded-tr-[48px] border-[1px] border-white px-6 py-6 sm:px-10 sm:py-10 md:px-14 md:py-10">
              <div className="flex flex-col md:flex-row">
                <div className="w-full space-y-6 md:w-3/4">
                  <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    {inputFields.map((placeholder) => (
                      <div className="flex flex-col" key={placeholder}>
                        <input className="border-0 border-b-2 border-white bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none" type={placeholder === "Email" ? "email" : "text"} id={placeholder.toLowerCase().replace(" ", "-")} name={placeholder.toLowerCase().replace(" ", "-")} placeholder={placeholder} />
                      </div>
                    ))}
                    <div className="flex flex-col">
                      <textarea className="rounded-lg border-0 bg-white p-2 text-black placeholder-gray-400 focus:outline-none" id="message" name="message" rows="4" placeholder="Message" />
                    </div>
                    <div className="flex justify-center md:justify-start">
                      {/* <button className="rounded-lg bg-yellow-500 px-[15%] py-1 font-bold text-white transition hover:bg-yellow-600">
                        Submit
                      </button> */}{" "}
                      <button type="submit" className="rounded-full bg-tsyellow px-3 py-2 text-black">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-1 hidden w-full items-start justify-center md:mt-0 md:block md:w-1/4 md:justify-start">
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
      </div>
    </main>
  );
};

export default ContactForm;
