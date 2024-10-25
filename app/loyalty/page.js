"use client";

import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";

function Loyalty() {
  return (
    <>
      <section className="loyalty-hero py-10 md:py-14 xl:py-20">
        <div className="relative grid min-h-[80vh] gap-5 md:grid-cols-4 md:grid-rows-6">
          <div className="hidden-grid-block hidden md:block"></div>
          <div className="text-center md:col-start-2 md:row-span-6 md:row-start-1">
            <Image
              className="m-auto w-[200px] md:w-full"
              alt="ts-family"
              width={481}
              height={214}
              src={"/images/thomson-family-logo.png"}
            />
            <h4 className="text-2xl font-extrabold text-tsgreen">
              Be Part of the Family
            </h4>
            <p className="text-tsgreen">Now with our new Loyalty Program!</p>
            <p className="font-medium text-tsgreen">
              Sign up today to enjoy our benefits!
            </p>
            <button
              onClick={() => router.push(product.productUrl)}
              className="group m-auto my-5 flex items-center justify-center rounded-full bg-tsyellow px-4 py-2 transition-transform group-hover:scale-105"
            >
              <h4 className="font-bold uppercase text-tsgreen">Sign Up Now</h4>
              {/* Arrow (hidden initially, appears on hover) */}
              <span className="button-arrow ml-2 hidden text-black opacity-0 transition-all duration-200 ease-in-out group-hover:block group-hover:opacity-100">
                <FiArrowRight />
              </span>
            </button>
            <p className="text-center text-tsgreen">It&apos;s 100% Free!</p>
          </div>
          <Image
            className="h-full w-full object-cover object-left md:col-span-2 md:col-start-3 md:row-span-6 md:row-start-1"
            alt="thomson-loyalty-discounts"
            width={800}
            height={800}
            src={"/images/hero-bgs/loyalty-hero-img.webp"}
          />
          <div className="md:col-span-4 md:col-start-1 md:row-start-6">
            <p className="px-5 text-center text-sm text-tsgreen md:text-lg">
              Earn points when you buy Thomson products, anywhere! <br /> No
              membership fee. Long point expiry. No downgrades!
            </p>
          </div>
          <div className="absolute bottom-[28%] right-[10%] w-fit rounded-3xl bg-[#01715D] p-4 text-white md:bottom-[10%] md:left-[47%] md:translate-y-[-50%]">
            Join now to earn <br />{" "}
            <span className="text-2xl font-extrabold text-tsyellow">
              +100 points
            </span>
          </div>
        </div>

        {/* <div className="m-auto flex max-w-screen-lg flex-wrap justify-center gap-10">
          <Image width={300} height={700} src={"/videos/3-2.gif"} />
          <Image width={300} height={700} src={"/videos/1-3.gif"} />
          <Image width={300} height={700} src={"/videos/2-1.gif"} />
        </div> */}
      </section>

      <section className="loyalty-footer">
        <div>
          <h3>Need Further Assistance?</h3>
          <p>
            Look no further! Our friendly support team is here to help you! Just
            Press the following button and chat with our team with WhatsApp
          </p>
          <div className="button-group">
            <button>Sign Up</button>
            <button>GET HELP via WHATSAPP</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loyalty;
