"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

function Page() {
  const router = useRouter();

  return (
    <div>
      <section className="relative min-h-[50vh] bg-product-bg bg-cover bg-right md:min-h-[70vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Our Products</h1>
          <p className="text-xl text-white">
            Everything you need to supercharge your health
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14 xl:py-20">
        <h1 className="mb-5 text-center text-4xl">Products</h1>

        {products.map((product, index) => (
          <section
            className="relative min-h-[600px] bg-cover bg-center px-5 py-10 sm:min-h-[400px] md:py-20"
            key={product.id}
            style={{ backgroundImage: `url('${product.productBg}')` }}
          >
            <Image
              alt="shelf"
              className="absolute bottom-0 left-0 z-10 h-[30%] w-full object-cover"
              width={1000}
              height={300}
              src={"/images/shelf.png"}
            />
            <div
              className={`absolute bottom-[5%] z-20 flex w-[300px] flex-col-reverse items-center justify-center sm:left-[50%] sm:w-[700px] sm:translate-x-[-50%] sm:flex-row sm:gap-10 ${index % 2 ? "sm:flex-row-reverse" : ""} sm:justify-between`}
            >
              <Image
                className="aspect-square object-cover transition sm:w-[500px]"
                alt={product.productTitle}
                width={300}
                height={300}
                src={product.productImage}
              />
              <div
                style={{
                  color: product.textColor ? product.textColor : "white",
                }}
              >
                <h2 className="mb-5 text-2xl sm:text-4xl">
                  {product.productTitle}
                </h2>
                <ul className="mb-5 ml-4">
                  {product.benefitList.map((benefit) => (
                    <li
                      className="mb-1 list-outside list-disc text-sm"
                      key={benefit}
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="group relative">
                  <button
                    onClick={() => router.push(product.productUrl)}
                    className="flex items-center justify-center rounded-full bg-tsyellow px-4 py-2 transition-transform group-hover:scale-105"
                  >
                    <h4 className="text-black">Read More</h4>
                    {/* Arrow (hidden initially, appears on hover) */}
                    <span className="button-arrow ml-2 hidden text-black opacity-0 transition-all duration-200 ease-in-out group-hover:block group-hover:opacity-100">
                      <FiArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="px-5 py-10 md:py-14 xl:py-20">
        <h1 className="mb-8 text-center text-4xl">Customer Testimonials</h1>

        <div className="slider m-auto max-w-screen-xl grid-cols-3 gap-6 sm:grid">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="over p-l-6 relative mb-5 flex w-full flex-col justify-between rounded-l-[56px] rounded-tr-[56px] bg-tsyellow pt-8"
            >
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
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill={index < review.outOfFive ? "#FFD700" : "#E5E7EB"}
                      />
                    </svg>
                  ))}
                </div>
                <h3 className="text-2xl font-bold">{review.reviewTitle}</h3>
                <div>{review.reviewBody}</div>
              </div>

              <div className="flex w-full gap-5 rounded-bl-[56px] rounded-tr-[56px] bg-tsgreen px-4 py-7">
                <div className="mx-auto flex w-[80%] items-center gap-5">
                  <Image
                    alt={review.reviewName}
                    className="object-contain"
                    width={40}
                    height={40}
                    src={
                      review.reviewPic === ""
                        ? "/images/user-ph.png"
                        : review.reviewPic
                    }
                  />
                  <div className="flex">
                    <h4 className="text-xl text-white">{review.reviewName}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
