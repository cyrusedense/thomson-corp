"use client";

import Image from "next/image";
import Button from "../../components/Button";
import { partnerList } from "@/data/partnerList";

import { useRouter } from "@/i18n/routing";

function Collaborations({ params: { locale } }) {
  console.log(locale);
  const localizedPartnerList = partnerList[locale] || partnerList["en-my"];

  console.log(localizedPartnerList);

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-collab-bg bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto ml-10 w-screen max-w-screen-2xl">
          <h1 className="mb-8 max-w-[500px] text-4xl text-white md:text-6xl">Collaborations and Partnerships</h1>
          <p className="text-xl text-white">Thomson&apos;s commitment to society</p>
        </div>
      </section>
      <section className="m-auto max-w-screen-xl py-10 md:py-14 xl:py-20">
        <h2 className="mb-20 text-center text-3xl text-tsdarkgreen lg:text-4xl">Our Partners</h2>
        <div className="client-logo-wrapper grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-items-center gap-10">
          {localizedPartnerList.map((logo) => (
            <div key={logo} className="relative h-[150px] w-[150px]">
              <Image className="object-contain" alt="logo" fill src={logo} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-10 md:py-14 xl:py-20">
        <div className="m-auto max-w-screen-xl md:flex md:items-center md:gap-x-20">
          <div className="partnership-right basis-[40%]">
            <h2 className="mb-5 text-center text-3xl text-tsdarkgreen md:text-left md:text-5xl">Become a Partner</h2>
            <p className="mb-5">We welcome new business partnerships to help us take our brand to greater heights</p>
          </div>
          <div className="partnership-left basis-[60%] text-white">
            <div className="outer-div h-full rounded-l-[56px] rounded-tr-[56px] bg-tsdarkgreen p-2">
              <div className="inner-div h-full w-full rounded-l-[48px] rounded-tr-[48px] border-[1px] border-white py-10 pl-10 pr-5 sm:pl-14 sm:pr-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <h1 className="text-3xl text-tsyellow md:text-4xl">Stay Updated with Thomson Health</h1>
                    <Image className="h-[80px] object-cover" alt="thomson-cross" width={56} height={80} src={"/images/CI-icon.png"} />
                  </div>

                  <h3>Subscribe to Our Newsletter</h3>

                  <p className="text-sm md:text-lg">Be the first to know about new promotions, exclusive events, and product launches. Get health tips, wellness insights, and special offers delivered straight to your inbox. Stay connected with Thomson Health!</p>

                  <form action="">
                    <div className="flex justify-between rounded-[10px] bg-white p-2">
                      <input type="text" className="w-[70%] p-2 text-tsdarkgreen" />
                      <label htmlFor="email"></label>
                      <div className="">
                        {" "}
                        <Button color="yellow" text={"Subscribe"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collaborations;
