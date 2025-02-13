"use client";

import { jobs } from "@/data/jobListings";
import JobListing from "@/app/components/JobListing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const careersImages = ["/images/career-flower.png", "/images/career-flower.png", "/images/career-flower.png", "/images/career-flower.png", "/images/career-flower.png", "/images/career-flower.png"];

function Careers({ params: { locale } }) {
  console.log(locale);
  const localizedjobList = jobs[locale] || jobs["en-my"];

  console.log(localizedjobList);

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-careers-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 max-w-[500px] text-4xl text-white md:text-6xl">Careers</h1>
        </div>
      </section>

      <section className="careers m-auto max-w-screen-xl px-5 py-10 md:pb-14 xl:pb-20">
        {/* <section className="careers m-auto max-w-screen-xl px-5 pb-10 md:pb-14 xl:pb-20"> */}
        <h1 className="mb-5 text-4xl">Job Openings</h1>
        <p className="text-xl">Click "View More" for application details</p>
        <p className="mt-3 italic">Showing job openings based in: {locale === "en-sg" ? "Singapore" : "Malaysia"}</p>

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
