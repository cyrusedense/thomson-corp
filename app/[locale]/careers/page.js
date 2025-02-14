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
        <p className="text-xl">Click &ldquo;View More&rdquo; for application details</p>
        <div className="mt-3 flex flex-row gap-1">
          <p className="italic">Showing job openings based in</p>
          <select onChange={(e) => (window.location.href = `/${e.target.value}/careers`)}>
            {/* set selected value based on locale */}
            <option value="en-my" selected={locale === "en-my"}>
              Malaysia
            </option>
            <option value="en-sg" selected={locale === "en-sg"}>
              Singapore
            </option>
          </select>
        </div>

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
