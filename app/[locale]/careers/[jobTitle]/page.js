import Button from "@/app/components/Button";

import { FiArrowLeftCircle } from "react-icons/fi";

import { jobs } from "@/data/jobListings";

import { Link } from "@/i18n/routing";

import JobDetailSection from "@/app/components/JobDetailSection";

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
      <section className="relative flex min-h-[50vh] items-center bg-careers-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">
            {jobDetail.title}
          </h1>
        </div>
      </section>

      <div className="m-auto max-w-screen-xl pt-10">
        <Link
          className="group flex items-center gap-5 text-xl"
          href={"/careers"}
        >
          <div className="transition-transform group-hover:scale-110">
            <FiArrowLeftCircle size={45} color="#004414" />
          </div>
          <p className="transition-all group-hover:underline">
            View All Job Openings
          </p>
        </Link>
      </div>

      <div className="job-content m-auto max-w-screen-lg px-5 py-10 md:py-14 xl:py-20">
        <section className="mb-5">
          <h1 className="mb-5 text-4xl text-tsdarkgreen">{jobDetail.title}</h1>
          <h3>{jobDetail.description}</h3>
        </section>

        <JobDetailSection title="Highlights" list={jobDetail.highlights} />

        <JobDetailSection title="Job Description" list={jobDetail.jobDesc} />

        <JobDetailSection title="Job Requirements" list={jobDetail.jobReq} />

        <JobDetailSection title="Other" list={jobDetail.other} />

        {jobDetail.email && (
          <button className="mr-4 rounded-lg bg-tsdarkgreen px-4 py-2 text-white hover:bg-tsyellow">
            <a
              href={`mailto:${jobDetail.email}?subject=Application for ${jobDetail.title}`}
              class="button"
            >
              Apply via Email
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

export default JobDetails;

//  const handleSendEmail = () => {
//    window.location.href = `mailto:${email}?subject=Inquiry about ${title}`;
//  };
