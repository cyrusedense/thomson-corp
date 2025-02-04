"use client";

import { useState } from "react";

export default function FactoryTour() {
  const [isSingle, setIsSingle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [selectedDate, setSelectedDate] = useState("9 April 2025, Wednesday");

  return (
    <>
      <div className="relative h-full bg-factory-tour-lab bg-cover bg-center">
        <div className="mx-auto max-w-[120rem] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-5 lg:px-0 lg:pb-48 lg:pt-40">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h1 className="mt-24 text-pretty text-3xl font-semibold tracking-tight text-white sm:mt-10 sm:text-5xl">What Your Eyes Cannot See</h1>
              <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">Come and take a look inside our Thomson Health SG GMP Compliant Facility and see how we at Thomson strive to create quality tested supplements for you and your loved ones.</p>
              <div className="mt-10">
                <a href="https://sg.thomsonhealth.com/quality-assurance/" target="_blank" className="rounded-md bg-tsyellow px-16 py-2.5 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsyellow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40">
            <form method="POST" className="mx-auto max-w-7xl rounded-l-[5rem] rounded-r-xl bg-tsdarkgreen px-5 py-5 lg:max-w-none">
              <div className="rounded-l-[5rem] rounded-r-xl border-4 border-white px-12 py-16 text-lg text-white">
                <div className="w-full gap-y-3">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white">Thomson Health SG</h1>
                  <h1 className="text-pretty text-6xl font-bold tracking-tight text-white">Factory Tour</h1>
                  <div className="mt-10 grid grid-cols-2 justify-evenly gap-x-3 gap-y-10">
                    <div className="col-span-2 w-full xl:col-span-1">
                      <label htmlFor="date" className="block font-bold">
                        Date
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select onChange={(e) => setSelectedDate(e.target.value)} id="date" name="date" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent">
                          <option className="text-black">9 April 2025, Wednesday</option>
                          <option className="text-black">16 April 2025, Wednesday</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>

                    <div className="col-span-2 w-full xl:col-span-1">
                      <label htmlFor="time" className="block font-bold">
                        Time
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <p className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent">9:30AM - 12:00PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-2 justify-evenly gap-x-3 gap-y-10">
                    <div className="col-span-2 w-full xl:col-span-1">
                      <label htmlFor="pax" className="block font-bold">
                        Number of People Attending
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          onChange={(e) => {
                            setIsSingle(e.target.value === "1" ? true : false);
                          }}
                          id="pax"
                          name="pax"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent"
                        >
                          <option className="text-black" value={"1"}>
                            1
                          </option>
                          <option className="text-black" value={"2"}>
                            2
                          </option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>

                    <div className="col-span-2 w-full xl:col-span-1">
                      <p className="block font-bold">Address</p>
                      <div className="flex flex-col">
                        <p className="mt-2">Kaki Bukit, Singapore.</p>
                        <p className="text-sm italic">(Exact address will be emailed to you upon booking confirmation)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="block font-bold underline">Attendee 1</p>

                    <div className="mt-5 grid grid-cols-2 justify-evenly gap-x-3 gap-y-5">
                      <div className="col-span-2 w-full xl:col-span-1">
                        <label htmlFor="full-name-1" className="sr-only">
                          Full Name
                        </label>
                        <input id="full-name-1" name="full-name-1" type="text" placeholder="Name" autoComplete="name" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm focus-visible:border-0" />
                      </div>

                      <div className="col-span-2 w-full xl:col-span-1">
                        <label htmlFor="contact-number-1" className="sr-only">
                          Contact Number
                        </label>
                        <input id="contact-number-1" name="contact-number-1" type="text" placeholder="Contact Number" autoComplete="tel" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm" />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 justify-evenly gap-x-3">
                      <div className="col-span-2 flex w-full flex-col">
                        <label htmlFor="email-address-1" className="sr-only">
                          Email Address
                        </label>
                        <input id="email-address-1" name="email-address-1" type="email" placeholder="Email" autoComplete="email" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm focus-visible:border-0" />
                        <p className="text-sm italic">(Booking details will be sent to this email address)</p>
                      </div>
                    </div>
                  </div>

                  {!isSingle && (
                    <div className="mt-10">
                      <p className="block font-bold underline">Attendee 2</p>

                      <div className="mt-5 grid grid-cols-2 justify-evenly gap-x-3 gap-y-5">
                        <div className="col-span-2 w-full xl:col-span-1">
                          <label htmlFor="full-name-2" className="sr-only">
                            Full Name
                          </label>
                          <input id="full-name-2" name="full-name-2" type="text" placeholder="Name" autoComplete="name" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm focus-visible:border-0" />
                        </div>

                        <div className="col-span-2 w-full xl:col-span-1">
                          <label htmlFor="contact-number-2" className="sr-only">
                            Contact Number
                          </label>
                          <input id="contact-number-2" name="contact-number-2" type="text" placeholder="Contact Number" autoComplete="tel" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm" />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 justify-evenly gap-x-3">
                        <div className="col-span-2 w-full">
                          <label htmlFor="email-address-2" className="sr-only">
                            Email Address
                          </label>
                          <input id="email-address-2" name="email-address-2" type="email" placeholder="Email" autoComplete="email" className="block w-full border-0 border-b bg-transparent px-4 py-3 text-white placeholder-gray-300 shadow-sm focus-visible:border-0" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-16 grid grid-cols-1">
                  <div className="mx-auto">
                    <button type="button" onClick={(e) => setIsModalOpen(true)} className="rounded-md bg-tsyellow px-16 py-2.5 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsyellow">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${isModalOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative grid w-full max-w-7xl grid-cols-1 gap-1 rounded-xl bg-white p-10">
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
