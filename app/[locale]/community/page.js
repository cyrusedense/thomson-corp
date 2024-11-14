import Button from "../../components/Button";
import Image from "next/image";
import BlogCard from "../../components/BlogCard";

function Community() {
  return (
    <div>
      <section className="relative min-h-[50vh] bg-community-hero bg-cover bg-right md:min-h-[70vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Community</h1>
          <p className="text-xl text-white">
            Thomson&apos;s commitment to society
          </p>
        </div>
      </section>
      <section className="bg-flower-bg-1 bg-cover bg-center bg-no-repeat sm:py-14">
        <div className="loyalty-summary mx-auto max-w-screen-lg overflow-hidden sm:flex sm:pt-0">
          <div className="flex flex-col items-center justify-center gap-5 bg-tsdarkgreen p-10 text-center text-white sm:rounded-tl-[56px]">
            <h1 className="text-center text-4xl">EBER LOYALTY AWARDS</h1>
            <p className="text-xl">Exclusive perks for our loyal customers!</p>
            <Button color="yellow" intLink={"/loyalty"} text="Learn More" />
          </div>

          <Image
            className="z-10 max-h-[400px] w-full basis-1/2 rounded-none object-cover sm:rounded-r-[56px] sm:object-cover"
            alt="family-health"
            width="500"
            height="500"
            src="/images/eber-banner-img.webp"
          />
        </div>

        <div className="m-auto max-w-screen-lg py-10 md:py-14 lg:py-20">
          <h1 className="mb-6 text-center text-4xl">ROADSHOW & EVENTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            magni quidem, sit fuga illum mollitia, dolorum aperiam facere eum
            rem esse? Est obcaecati nemo nostrum, magnam culpa quaerat a iste?
          </p>
        </div>

        <div className="blog-wrapper m-auto grid max-w-screen-lg gap-6 text-white md:grid-cols-3">
          <BlogCard
            extUrl={"/"}
            color={"green"}
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />

          <BlogCard
            extUrl={"/"}
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />

          <BlogCard
            color="green"
            extUrl={"/"}
            title="Why Gut Health Matters: Thomson Health’s Probiotic Solutions"
            author="Benjamin Lim"
            featuredImage={"/images/test-blog-img.png"}
          />
        </div>
      </section>
      <section className="relative aspect-[16/9] w-full">
        <Image
          className="object-cover"
          fill
          src={"/images/promo-banner.webp"}
        />
      </section>
    </div>
  );
}

export default Community;
