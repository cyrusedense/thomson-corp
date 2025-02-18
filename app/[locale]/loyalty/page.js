"use client";

import Image from "next/image";
import Button from "../../components/Button";

import { FiArrowRight } from "react-icons/fi";
import SingleFAQ from "../../components/SingleFAQ";

function Loyalty() {
  return (
    <main className="bg-[#f7f7f7]">
      <section className="h-20 bg-tsdarkgreen"></section>
      <section className="loyalty-hero py-10 md:py-14 xl:py-20">
        <div className="relative grid min-h-[80vh] gap-5 md:grid-cols-4 md:grid-rows-6">
          <div className="hidden-grid-block hidden md:block"></div>
          <div className="text-center md:col-start-2 md:row-span-6 md:row-start-1">
            <Image className="m-auto w-[200px] md:w-full" alt="ts-family" width={481} height={214} src={"/images/thomson-family-logo.png"} />
            <h4 className="text-2xl font-extrabold text-tsgreen">Be Part of the Family</h4>
            <p className="text-tsgreen">Now with our new Loyalty Program!</p>
            <p className="font-medium text-tsgreen">Sign up today to enjoy our benefits!</p>
            <button onClick={() => window.open("https://thomson-health-sg.eber.co/", "_blank")} className="group m-auto my-5 flex items-center justify-center rounded-full bg-tsyellow px-4 py-2 transition-transform group-hover:scale-105">
              <h4 className="font-bold uppercase text-tsgreen">Sign Up Now</h4>
              {/* Arrow (hidden initially, appears on hover) */}
              <span className="button-arrow ml-2 hidden text-black opacity-0 transition-all duration-200 ease-in-out group-hover:block group-hover:opacity-100">
                <FiArrowRight />
              </span>
            </button>
            <p className="text-center text-tsgreen">It&apos;s 100% Free!</p>
          </div>
          <Image className="h-full w-full object-cover object-left md:col-span-2 md:col-start-3 md:row-span-6 md:row-start-1" alt="thomson-loyalty-discounts" width={800} height={800} src={"/images/hero-bgs/loyalty-hero-img.png"} />
          <div className="md:col-span-4 md:col-start-1 md:row-start-6">
            <p className="px-5 text-center text-sm text-tsgreen md:text-lg">
              Earn points when you buy Thomson products, anywhere! <br /> No membership fee. Long point expiry. No downgrades!
            </p>
          </div>
          <div className="absolute bottom-[28%] right-[10%] w-fit rounded-3xl bg-[#01715D] p-4 text-white md:bottom-[10%] md:left-[47%] md:translate-y-[-50%]">
            Join now to earn <br /> <span className="text-2xl font-extrabold text-tsyellow">+100 points</span>
          </div>
        </div>
      </section>

      <section className="h-auto gap-5 bg-ginkgo bg-cover py-10 md:py-14 xl:py-20">
        <div className="m-auto max-w-screen-lg px-5">
          <h1 className="mb-5 text-center text-4xl font-bold text-[#195729] md:text-left md:text-5xl md:text-[50px]">Why Join Us?</h1>
        </div>

        <div className="m-auto flex max-w-screen-md flex-wrap justify-center gap-10 py-10">
          {/* <div>
            <Image
              src={"/images/loyalty-icons/member-discounts.png"}
              alt="discounts"
              width={240}
              height={240}
            />
          </div> */}
          <div>
            <Image src={"/images/loyalty-icons/welcome-rewards.png"} alt="loyalty" width={160} height={160} />
          </div>
          <div>
            <Image src={"/images/loyalty-icons/loyalty-points.png"} alt="points" width={160} height={160} />
          </div>
          <div>
            <Image src={"/images/loyalty-icons/refer-a-friend.png"} alt="friend-referral" width={160} height={160} />
          </div>
          {/* <div>
            <Image src={"/images/loyalty-icons/birthday-month.png"} alt="birthday-reward" width={160} height={160} />
          </div> */}
          <div>
            <Image src={"/images/loyalty-icons/survey-and-review.png"} alt="survey-rewards" width={160} height={160} />
          </div>
        </div>

        <div className="m-auto max-w-screen-lg px-5 pb-2">
          <h1 className="mb-5 text-center text-4xl font-bold text-[#195729] md:text-left md:text-5xl md:text-[50px]">Enjoy up to 40% Savings!</h1>
          <p>
            Enjoy more savings when you buy more! Feel free to join our Thomson Family to receive additional loyalty points and redeem exclusive rewards! It’s our way of thanking you for your support! <br /> <br /> Sign up today and start saving more!
          </p>

          <Image className="my-2 w-full sm:hidden" src={"/images/loyalty-table-mobile.jpg"} width={1000} height={500} alt="loyalty-table-desktop"></Image>

          <Image className="my-2 hidden sm:block xl:w-[120%] xl:max-w-[120%] xl:translate-x-[-10%]" src={"/images/loyalty-table-desktop.png"} width={1000} height={500} alt="loyalty-table-desktop"></Image>
        </div>

        <div className="m-auto mt-5 max-w-screen-lg justify-between px-5 sm:flex">
          <p className="mb-5 text-center text-xl text-[#195729]">Have more questions?</p>

          <div className="flex justify-center gap-6">
            <button onClick={() => window.open("https://wa.me/+6566121359", "_blank")} className="flex items-center gap-2 rounded-[40px] border border-black px-10 py-4">
              <Image className="h-[30px] w-[30px]" alt="whatsapp-button" width={30} height={30} src={"/images/whatsapp.svg"} />
              WHATSAPP
            </button>

            <Button extLink={"https://thomson-health-sg.eber.co/"} color={"yellow"} text={"SIGN UP NOW"} />

            <Button extLink={"https://sg-shop.thomsonhealth.com/collections/all"} color={"yellow"} text={"VISIT STORE"} />
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-14 xl:py-20">
        <div className="m-auto max-w-screen-lg">
          <h1 className="mb-5 text-left text-4xl font-bold text-tsdarkgreen md:text-5xl">How To’s</h1>

          <div className="">
            {[
              {
                id: 1,
                question: "How to Register",
                answer: "Sign up with either your email or mobile number",
                screens: [
                  {
                    url: "/videos/1-1.mp4",
                    caption: "Press Sign Up",
                  },
                  {
                    url: "/videos/1-2.mp4",
                    caption: "Use Email / Mobile Number",
                  },
                  {
                    url: "/videos/1-3.mp4",
                    caption: "Fill in your Info",
                  },
                ],
              },
              {
                id: 2,
                question: "How to Submit Receipts",
                answer: "",
                screens: [
                  {
                    url: "/videos/2-1.mp4",
                    caption: "Submit Receipt",
                  },
                ],
              },
              {
                id: 3,
                question: "Share Your Thomson Experience",
                answer: "Share your testimonial to receive more points",
                screens: [
                  {
                    url: "/videos/2-2.mp4",
                    caption: "Share Your Experience",
                  },
                ],
              },

              {
                id: 4,
                question: "How to Refer a Friend!",
                answer: "Refer a friend and you both can enjoy referral points after their first Thomson purchase",
                screens: [
                  {
                    url: "/videos/2-3.mp4",
                    caption: "Refer a Friend",
                  },
                ],
              },
            ].map(({ id, question, answer, screens }, index) => (
              <details className="group mb-6 [&_summary::-webkit-details-marker]:hidden" key={id} open={index === 0} id={"howto" + id}>
                <summary className="flex cursor-pointer items-center justify-between p-0 text-2xl font-medium text-[#195729] xl:text-3xl">
                  <h2 className="text-tsdarkgreen">{question}</h2>
                  <div className="rounded-full p-1 text-[#195729] shadow-md">
                    <svg className="h-6 w-6 rotate-180 text-[#195729] transition-transform duration-300 group-open:rotate-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-2 text-lg font-bold text-[#195729]">{answer}</p>

                {/* screens */}
                <div className="my-14 grid gap-6 sm:grid-cols-3 xl:grid-cols-4">
                  {screens.map((screen, index) => (
                    <div key={index} className="m-auto h-[550px] max-w-[250px]">
                      <div className="relative w-full">
                        <video className="rounded-[14px] border-[4px] border-black object-cover" src={screen.url} autoPlay loop muted playsInline></video>
                      </div>
                      <h3 className="my-3 text-center text-xl text-tsdarkgreen">{screen.caption}</h3>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-loyalty-banner bg-cover bg-center px-5 py-10 text-white md:py-14 lg:py-20">
        <h1 className="mb-5 text-center text-4xl font-bold">Be Part of the Family</h1>
        <h3 className="mb-5 text-center text-xl">Now with our new Loyalty Program! Sign up today to enjoy our benefits!</h3>
        <div className="m-auto w-fit">
          <Button extLink={"https://thomson-health-sg.eber.co/"} color={"yellow"} text={"SIGN UP NOW"}></Button>
        </div>
      </section>

      <section className="min-h-[50vh] bg-ginkgo-2 bg-contain bg-center px-5 py-10 md:py-14 lg:py-20">
        <div className="faq-content-wrapper m-auto max-w-screen-lg">
          <h1 className="mb-5 text-4xl font-bold text-tsdarkgreen">Common FAQ</h1>

          <div className="general-section">
            <h3 className="mb-3 text-2xl text-tsdarkgreen">General Questions</h3>
            <hr className="h-1 bg-tsdarkgreen" />

            <SingleFAQ question={"Is there any fee to join Family?"} answer={"None at all. In fact, you also do not need to make a purchase to join."} />
            <SingleFAQ question={"How can I add this app into my home page?"} answer={"We strongly recommend that you add Thomson Family onto your homescreen, upon which re-login is not necessary for your ease."} />
            <Image className="m-auto mb-8" alt="homepage-loyalty-programme" width={300} height={700} src={"/images/homepage-faq.webp"} />
          </div>

          <div className="family-points-section">
            <h3 className="mb-3 text-2xl text-tsdarkgreen">Thomson Family Points Questions</h3>
            <hr className="h-1 bg-tsdarkgreen" />

            <SingleFAQ question={"How do I earn Welcome points?"} answer={"Upon signing up into our Thomson Family Loyalty Program, your welcome points will be automatically accorded to your account."} />

            <SingleFAQ question={"How many points do I get for purchasing Thomson products?"} answer={"Earn 2 points for every $1 spent in our <a href='https://sg-shop.thomsonhealth.com/collections/all' target='_blank' class='text-tsgreen font-bold underline'>sg-shop.thomsonhealth.com Official Store</a>. Earn 1 point for every $1 spent on Thomson products bought in any other store in Singapore."} />

            <SingleFAQ question={"What do I need to do to earn 2x points after purchasing in the Thomson Official Store?"} answer={"Nothing! Upon checkout in our official sg-shop.thomsonhealth.com store, points will be automatically credited to your registered Thomson Member Account. (Please note: 2x Reward Points only applies to purchases made in Thomson Official Store sg-shop@thomsonhealth.com)."} />

            <SingleFAQ question={"Can I get points even if I purchase Thomson products from other retailers?"} answer={"Certainly! We accept purchase receipts from anywhere in Singapore as long as the submission image captures these details: date and place of purchase, receipt/invoice number, items purchased and amount spent"} />

            <SingleFAQ question={"Why are the points not reflected immediately after submission?"} answer={"For any product purchase and testimonial/survey submission, the points will be verified and approved by us before points are accorded. Kindly allow us 3-7 working days to process your submission."} />

            <SingleFAQ question={"When do my collected points expire?"} answer={"Your points expire in 2 years (last day of the 2nd year from the day it is earned)."} />

            <SingleFAQ question={"How do I earn the “Refer a Friend” points?"} answer={"Please proceed to the Refer a Friend page and provide your friend with the Referral code. Once your friend has applied the referral code, he/she would have to submit a receipt of any purchase of any Thomson SKU through his/her Thomson Family Loyalty Program and you will both be rewarded the referral points. Note: These referral points will be rewarded to you for each subsequent new referral. <br />For more info: <button class='text-tsgreen font-bold underline' onclick='document.querySelector(`#howto4`).setAttribute(`open`, ``);window.location.href = `#howto4`'> How to refer a friend <button/>. "} />

            {/* <SingleFAQ question={"How do I earn the Birthday Month 2x points?"} answer={"In the month of your birthday, you will be rewarded 2x points for your submitted purchase receipts (date of the receipt submitted has to be within the month of your birthday), i.e. if your birthday month is in July, your receipts submitted has to include Thomson purchases made in the month of July."} /> */}
          </div>
        </div>
      </section>

      <section className="loyalty-footer px-5 py-10 md:py-14 xl:py-20">
        <div className="m-auto flex max-w-screen-lg flex-col gap-4">
          <h3 className="text-3xl font-extrabold text-tsgreen">Need Further Assistance?</h3>
          <p className="text-lg">Look no further! Our friendly support team is here to help you! Just Press the following button and chat with our team with WhatsApp</p>
          <div className="button-group flex flex-wrap gap-5 sm:items-center">
            <button onClick={() => window.open("https://thomson-health-sg.eber.co/", "_blank")} className="flex items-center gap-2 rounded-[40px] bg-tsyellow px-10 py-4">
              SIGN UP NOW
            </button>

            <button onClick={() => window.open("https://wa.me/+6566121359", "_blank")} className="flex items-center gap-2 rounded-[40px] border border-black px-10 py-4">
              <Image className="h-[30px] w-[30px]" alt="whatsapp-button" width={30} height={30} src={"/images/whatsapp.svg"} />
              WHATSAPP
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Loyalty;
