"use client";

import { jobs } from "@/data/jobListings";
import JobListing from "@/app/components/JobListing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const careersImages = [
  "/images/career-flower.png",
  "/images/career-flower.png",
  "/images/career-flower.png",
  "/images/career-flower.png",
  "/images/career-flower.png",
  "/images/career-flower.png",
];

function Careers({ params: { locale } }) {
  console.log(locale);
  const localizedjobList = jobs[locale] || jobs["en-my"];

  console.log(localizedjobList);

  return (
    <div>
      <section className="relative min-h-[50vh] bg-careers-hero bg-cover bg-right md:min-h-[70vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 max-w-[500px] text-4xl text-white md:text-6xl">
            Careers
          </h1>
        </div>
      </section>

      <section className="m-auto max-w-screen-xl px-5 py-10 md:py-14 xl:py-20">
        <h1 className="mb-5 text-center text-4xl">Company Profile</h1>
        <p className="m-auto max-w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          amet tempora consectetur expedita recusandae fuga mollitia odit
          placeat maiores laboriosam nam blanditiis, quas incidunt est facere
          voluptas consequuntur. Nobis.
        </p>
        <div className="my-10">
          <Swiper
            id="sliderWithPagination"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
            }}
            navigation
            loop={true} // Enable infinite looping
            pagination={{
              clickable: true,
              // el: ".timeline-pagination", // Custom pagination element
              // renderBullet: (index, className) =>
              //   `<div class="${className} bullet-container"><span class="bullet"></span><span class="year">${milestones[index].year}</span></div>`,
            }}
            //   breakpoints={{
            //     0: {
            //       direction: "vertical", // Vertical layout on smaller screens
            //     },
            //     768: {
            //       direction: "horizontal", // Horizontal layout on larger screens
            //     },
            //   }}
            // onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {careersImages.map((image, index) => (
              <SwiperSlide key={index} className="image-card p-6">
                <Image
                  className="aspect-video w-full object-contain object-center"
                  alt={image.split("/").pop().split(".").slice(0, -1).join(".")}
                  width="500"
                  height="500"
                  src={image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="careers m-auto max-w-screen-xl px-5 pb-10 md:pb-14 xl:pb-20">
        <h1 className="mb-5 text-4xl">Job Openings</h1>
        <p className="text-xl">Click for application details</p>
        <div className="joblistings mt-10">
          {localizedjobList.map((job) => {
            return <JobListing key={job.id} job={job} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Careers;
