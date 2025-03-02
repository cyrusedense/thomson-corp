import { roadshowEvents } from "@/data/roadshowEvents";

import Image from "next/image";
import BlogCard from "@/app/components/BlogCard";
import Button from "@/app/components/Button";

function Community({ params: { locale } }) {
  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-community-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Resources</h1>
          {/* <p className="text-xl text-white">Thomson&apos;s commitment to society</p> */}
        </div>
      </section>
      <section className="bg-flower-bg-1 bg-cover bg-center bg-no-repeat sm:py-14">
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
