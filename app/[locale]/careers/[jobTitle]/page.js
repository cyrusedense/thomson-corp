import React from "react";
import Button from "@/app/components/Button";

import { jobs } from "@/data/jobListings";

function normalizeString(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
}

function JobDetails({ params: { locale, jobTitle } }) {
  const localizedjobList = jobs[locale] || jobs["en-my"];

  const normalizedJobTitle = normalizeString(jobTitle);

  const filteredList = localizedjobList.filter(
    (job) => normalizeString(job.title) === normalizedJobTitle,
  );

  const jobDetail = filteredList[0];

  if (!jobDetail) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h1 className="text-2xl text-red-500">Job not found.</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-community-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">
            {jobDetail.title}
          </h1>
        </div>
      </section>
      <section className="job-content m-auto max-w-screen-xl py-10 md:py-14 xl:py-20">
        <section className="mb-5">
          <h1 className="mb-5 text-3xl text-tsdarkgreen">{jobDetail.title}</h1>
          <h3>{jobDetail.description}</h3>
        </section>

        {jobDetail.highlights && (
          <section className="mb-5">
            <h1 className="mb-5 text-3xl text-tsdarkgreen">Job Highlights</h1>
            {jobDetail.highlights?.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </section>
        )}

        {jobDetail.jobDesc && (
          <section className="mb-5">
            <h1 className="mb-5 text-3xl text-tsdarkgreen">Job Description</h1>
            {jobDetail.jobDesc?.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </section>
        )}

        {jobDetail.jobReq && (
          <section className="mb-5">
            <h1 className="mb-5 text-3xl text-tsdarkgreen">Job Requirements</h1>
            {jobDetail.jobReq?.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </section>
        )}

        {jobDetail.other && (
          <section className="mb-5">
            <h1 className="mb-5 text-3xl text-tsdarkgreen">Other</h1>
            {jobDetail.other?.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </section>
        )}

        {jobDetail.email && (
          <button className="mr-4 rounded-lg bg-tsdarkgreen px-4 py-2 text-white hover:bg-tsyellow">
            Send Email
          </button>
        )}
      </section>
    </div>
  );
}

export default JobDetails;

//  const handleSendEmail = () => {
//    window.location.href = `mailto:${email}?subject=Inquiry about ${title}`;
//  };
