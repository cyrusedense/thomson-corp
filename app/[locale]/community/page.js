import { roadshowEvents } from "@/data/roadshowEvents";

import Image from "next/image";
import BlogCard from "@/app/components/BlogCard";
import Button from "@/app/components/Button";

function Community({ params: { locale } }) {
  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-community-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Community</h1>
          <p className="text-xl text-white">Thomson&apos;s commitment to society</p>
        </div>
      </section>
      <section className="bg-flower-bg-1 bg-cover bg-center bg-no-repeat sm:py-14">
        {locale === "en-sg" ? (
          <div className="loyalty-summary mx-auto max-w-screen-lg overflow-hidden sm:flex sm:pt-0">
            <div className="flex flex-col items-center justify-center gap-5 bg-tsdarkgreen p-10 text-center text-white sm:rounded-tl-[56px]">
              <h1 className="text-center text-4xl">Thomson Family Rewards</h1>
              <p className="text-xl">Enjoy exclusive perks for our loyal customers!</p>
              <Button color="yellow" extLink={"/" + locale + "/loyalty"} text="Learn More" />
            </div>

            <Image className="z-10 max-h-[400px] w-full basis-1/2 rounded-none object-cover sm:rounded-r-[56px] sm:object-cover" alt="family-health" width="500" height="500" src="/images/eber-banner-img.webp" />
          </div>
        ) : (
          ""
        )}

        <div className="m-auto max-w-screen-lg py-10 md:py-14 lg:py-20">
          <h1 className="mb-6 text-center text-4xl">ROADSHOW & EVENTS</h1>
          {/* <p className="text-center text-2xl">
            Check out our{" "}
            <a href="https://www.instagram.com/thomsonhealth_sg/" className="underline">
              Instagram
            </a>{" "}
            page for information on our latest and upcoming roadshow and events
          </p> */}
          <iframe src="https://www.instagram.com/thomsonhealth_sg/embed" className="mx-auto" width="100%" height="500" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
        </div>

        <div className="m-auto max-w-screen-lg py-10 md:py-14 lg:py-20">
          <h1 className="mb-6 text-center text-4xl">ARTICLES THAT MAY INTEREST YOU</h1>
        </div>
        <div className="blog-wrapper m-auto grid max-w-screen-lg gap-6 text-white md:grid-cols-3">
          {roadshowEvents.map((roadshowEvent) => (
            <BlogCard extUrl={roadshowEvent.extUrl} color={roadshowEvent.color} title={roadshowEvent.title} author={roadshowEvent.author} featuredImage={roadshowEvent.featuredImage} key={roadshowEvent.title} />
          ))}
        </div>
      </section>
      {/* <section className="relative aspect-[16/9] w-full">
        <Image
          className="object-cover"
          fill
          src={"/images/promo-banner.webp"}
        />
      </section> */}
    </div>
  );
}

export default Community;
