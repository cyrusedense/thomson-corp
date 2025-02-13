"use client";

import { useEffect, useState } from "react";

export default function FactoryTour() {
  const [isSingle, setIsSingle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState("9 April 2025, Wednesday");

  return (
    <>
      <div className="relative h-full bg-factory-tour-lab bg-cover bg-center">
        <div className="mx-auto max-w-[120rem] xl:grid xl:grid-cols-12 xl:gap-x-8 xl:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 xl:col-span-6 xl:px-0 xl:pb-48 xl:pt-40">
            <div className="mx-auto max-w-5xl xl:mx-0">
              <h1 className="mt-24 text-pretty text-3xl font-semibold tracking-tight text-white sm:mt-10 sm:text-5xl">What Your Eyes Cannot See</h1>
              <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">Come and take a look inside our Thomson Health SG GMP Compliant Facility and see how we at Thomson strive to create quality tested supplements for you and your loved ones.</p>
              <video className="mt-10 h-full w-full rounded-lg" controls>
                <source src="/videos/Thomson Health Singapore Intro.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-10">
                <a href="https://sg.thomsonhealth.com/quality-assurance/" target="_blank" className="rounded-md bg-tsyellow px-16 py-2.5 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsyellow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-6 pb-24 pt-10 sm:pb-32 xl:col-span-6 xl:px-0 xl:pb-48 xl:pt-40">
            <div className="w-full bg-tsdarkgreen p-4">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKxghldV2EJKkY0EbC8fmNGcjhetXVIWPIH_2Duw5ePukt8A/viewform?embedded=true" className="overflow-hidden" width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0">
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${isModalOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative grid max-h-screen w-full max-w-7xl grid-cols-1 gap-1 overflow-y-auto rounded-xl bg-white p-10">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-5 top-5 text-3xl text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              &times;
            </button>

            <div className="grid grid-cols-2">
              <div className="col-span-2 flex items-center justify-center">
                <img src="/images/factory-tour/thomson.jpg" className="h-auto w-1/4 md:-translate-y-3 md:translate-x-4" />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-1">
              <div className="col-span-1 flex items-center justify-end">
                <img src="/images/factory-tour/thank-you.png" className="h-auto w-1/2 md:-translate-y-3 md:translate-x-4" />
              </div>
              <div className="col-span-1 flex items-center justify-start">
                <p className="text-center text-sm font-semibold text-tsdarkgreen sm:text-2xl md:-translate-x-4 md:translate-y-3">for your booking!</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-1">
              <p className="text-center text-sm italic text-tsdarkgreen underline sm:text-2xl">We will be sending you your booking details in 1-2 days</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="col-span-1 lg:col-span-2">
                <div>
                  <p className="text-left text-sm font-bold text-tsdarkgreen sm:text-2xl">Date</p>
                  <p className="text-left text-sm text-tsdarkgreen sm:text-2xl">{selectedDate}</p>
                </div>

                <div className="mt-5">
                  <p className="text-left text-sm font-bold text-tsdarkgreen sm:text-2xl">Time</p>
                  <p className="text-left text-sm text-tsdarkgreen sm:text-2xl">9:30AM - 12:00PM</p>
                </div>

                <div className="mt-5">
                  <p className="text-left text-sm font-bold text-tsdarkgreen sm:text-2xl">Address</p>
                  <p className="text-left text-sm text-tsdarkgreen sm:text-2xl">7 Kaki Bukit Rd 1, #01-06 Eunos Technolink, Singapore 415937.</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.5577699347366!2d103.90083030330435!3d1.3346926887312638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17a57e0f4829%3A0x96bbc14a7a5ca9f7!2sThomson%20Health%20SG!5e0!3m2!1sen!2smy!4v1737133374413!5m2!1sen!2smy" className="mt-2 h-full w-full rounded-md border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-3">
                <p className="text-left text-lg font-bold text-tsdarkgreen">Gentle Reminder</p>
                <ol className="mt-2 list-inside list-decimal text-sm text-tsdarkgreen">
                  <li>Please wear appropriate attire (male and females wear long covered pants or women may wear at least knee length skirts), and wear covered shoes.</li>
                  <li>Do not touch tools, equipment, or products.</li>
                  <li>Keep a safe distance from all moving machinery and equipment. Do not lean on or touch machinery.</li>
                  <li>No food or beverages are allowed in production areas to maintain hygiene and safety.</li>
                  <li>Smoking is strictly prohibited.</li>
                  <li>No Photography: Taking photographs or videos is not permitted unless explicitly approved.</li>
                </ol>
                <p className="mt-4 text-left text-lg font-bold text-tsdarkgreen">Please contact us at least 1-2 days before Factory Visit date if you are unable to attend:</p>
                <p className="mt-2 text-sm text-tsdarkgreen">
                  <span>WhatsApp: </span>
                  <a href="https://wa.me/+6566121359" target="_blank" className="underline">
                    +65 6612 1359
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
