"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    productTitle: "Activated Ginkgo",
    benefitList: [
      "40mg of Activated Ginkgo Biloba Extract",
      "Improve poor blood circulation may cause fingers and toes, and fatigue",
      "Using Japanese Activated technology.",
    ],
    productUrl: "/",
    textColor: "#004414",
    productImage: "/images/product-page/product-page-img/product-AGE.webp",
    productBg: "/images/product-page/product_single_banner_AGE bg.webp",
  },
  {
    id: 2,
    productTitle: "Circulon125",
    benefitList: [
      "125mg of Ginkgo Biloba extract",
      "Improve poor blood circulation may cause numb fingers,toes and fatigue,",
      "Using Japanese Activated technology",
    ],
    productUrl: "/",
    textColor: "#5A702A",
    productImage: "/images/product-page/product-page-img/product-CCL.webp",
    productBg: "/images/product-page/product single banner_CCL bg.webp",
  },
  {
    id: 3,
    productTitle: "Calmilax",
    benefitList: [
      "Combination of ingredients: Rafuma Extract, Kanna Extract, Ginkgo Biloba Extract, Brewer's Yeast",
      "To help improve sleep quality",
      "Vegetarian-friendly and made from natural, plant-based ingredients",
    ],
    textColor: "",
    productUrl: "/",
    productImage: "/images/product-page/product-page-img/product-CML.webp",
    productBg: "/images/product-page/product single banner_CML bg.webp",
  },
  {
    id: 4,
    productTitle: "Livrin300",
    benefitList: ["300mg Milk Thistle extract to support liver health"],
    productUrl: "/",
    textColor: "",
    productImage: "/images/product-page/product-page-img/product-LVR.webp",
    productBg: "/images/product-page/product single banner_LVR bg.webp",
  },
  {
    id: 5,
    productTitle: "OsteoPro",
    benefitList: [
      "Non-shellfish",
      "Glucosamine sulfate for adjunct therapy for osteoarthritis",
      "Enhanced by patented Fully Reacted Technology.",
    ],
    productUrl: "/",
    textColor: "",
    productImage: "/images/product-page/product-page-img/product-OTP.webp",
    productBg: "/images/product-page/product single banner_OTP bg.webp",
  },
  {
    id: 6,
    productTitle: "ProbioGut",
    benefitList: [
      "A unique & synergistic combination of min",
      "7 billion CFUs from two clinically supported HRB probiotics",
      "Two prebiotics to help gut function, immunity and get into shape",
    ],
    productUrl: "/",
    textColor: "#144C68",
    productImage: "/images/product-page/product-page-img/product-PBG.webp",
    productBg: "/images/product-page/product single banner_PBG bg.webp",
  },
  {
    id: 7,
    productTitle: "Xbido",
    benefitList: [
      "Tongkat Ali, a primary ingredient in Thomson Xbido",
      "Traditional functions that support overall health and well-being.",
      "Regain vitality and is designed to support men’s daily health improving quality of life.",
    ],
    productUrl: "/",
    textColor: "#EACC1B",
    productImage: "/images/product-page/product-page-img/product-XBD.webp",
    productBg: "/images/product-page/product single banner_XBD bg.webp",
  },
];

function Page() {
  const router = useRouter();

  return (
    <div>
      <section className="bg-product-bg relative min-h-[50vh] bg-cover bg-right md:min-h-[90vh]">
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

      <section className="py-10 md:py-14 xl:py-20">
        <h1 className="text-center text-4xl">Hear it from them</h1>
      </section>
    </div>
  );
}

export default Page;
