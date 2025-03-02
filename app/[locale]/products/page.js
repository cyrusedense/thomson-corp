"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { myProducts, sgProducts } from "@/data/products";
import { reviews } from "@/data/reviews";
import Wave from "@/app/components/Wave";

function Page({ params: { locale } }) {
  const router = useRouter();

  const products = locale === "en-my" ? myProducts : sgProducts;

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-product-bg bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-6xl text-white lg:text-8xl">Our Products</h1>
          <p className="text-xl text-white lg:text-3xl">{locale === "en-sg" ? "Everything you need to supercharge your health" : "Made for your health and wellness"}</p>
        </div>
      </section>
      <section>
        {/* <h1 className="mb-5 text-center text-5xl">Products</h1> */}

        {products.map((product, index) => (
          <section className="relative bg-cover bg-center" style={{ backgroundImage: `url('${product.productBg}')` }} key={product.id}>
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className={"relative flex items-center lg:col-span-5 " + (index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
                <div className="w-full">
                  <Image className="mx-auto aspect-square h-auto w-full max-w-[500px]" alt={product.productTitle} width={300} height={300} src={product.productImage} />
                </div>
              </div>
              <div className={"px-6 pb-12 pt-6 sm:pb-16 lg:col-span-7 lg:px-0 lg:pb-24 lg:pt-24 " + (index % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                <div className="mx-auto max-w-lg lg:mx-0">
                  <div
                    style={{
                      color: product.textColor ? product.textColor : "white",
                    }}
                  >
                    <h1 className="mt-12 text-pretty text-4xl font-semibold tracking-tight sm:mt-10 sm:text-6xl">{product.productTitle}</h1>
                    <small>MAL {product.mal}</small>
                    <ul className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
                      {product.benefitList.map((benefit) => (
                        <li className="list-outside list-disc" key={benefit}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a href={product.productUrl} target="_blank" className="rounded-md bg-tsyellow px-3.5 py-2.5 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="relative pb-[15%] pt-10 md:pt-14 xl:pt-20">
        <div className="px-5">
          <h1 className="mb-8 text-center text-4xl">Customer Testimonials</h1>

          <div className="slider m-auto max-w-screen-xl grid-cols-3 gap-6 sm:grid">
            {reviews.map((review) => (
              <div key={review.id} className="over p-l-6 relative mb-5 flex w-full flex-col justify-between rounded-l-[56px] rounded-tr-[56px] bg-tsyellow pt-8">
                <div className="mx-auto mb-6 flex w-[80%] flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {/* Display stars */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        width="18"
                        height="17"
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < review.outOfFive ? "#FFD700" : "#E5E7EB"} // Yellow for filled, gray/white for unfilled
                        viewBox="0 0 18 17"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill={index < review.outOfFive ? "#FFD700" : "#E5E7EB"} />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{review.reviewTitle}</h3>
                  <div>{review.reviewBody}</div>
                </div>

                <div className="flex w-full gap-5 rounded-bl-[56px] rounded-tr-[56px] bg-tsgreen px-4 py-7">
                  <div className="mx-auto flex w-[80%] items-center gap-5">
                    <Image alt={review.reviewName} className="object-contain" width={40} height={40} src={review.reviewPic === "" ? "/images/user-ph.png" : review.reviewPic} />
                    <div className="flex">
                      <h4 className="text-xl text-white">{review.reviewName}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave />
    </div>
  );
}

export default Page;
