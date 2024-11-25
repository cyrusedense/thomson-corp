"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useRouter, useSearchParams } from "next/navigation";

function JobListing({ job }) {
  const {
    jobId,
    title,
    description,
    highlights,
    jobDesc,
    jobReq,
    other,
    email,
  } = job;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleViewMoreClick = () => {
    setIsModalOpen(true);
    // Add ?jobId=<jobId> to the URL without refreshing the page
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("jobId", jobId);
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Remove jobId from the URL without refreshing the page
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("jobId");
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}?subject=Inquiry about ${title}`;
  };

  useEffect(() => {
    console.log(searchParams);

    const paramJobId = searchParams.get("jobId");

    console.log(`logging ${paramJobId}`);
    // Open modal if the jobId in URL matches the component's jobId
    if (paramJobId == jobId) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams, jobId]);

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 p-2 sm:p-6">
        <h1 className="text-2xl">{title}</h1>
        <button
          className="rounded-lg bg-tsdarkgreen px-3 py-2 text-white hover:bg-tsyellow"
          onClick={handleViewMoreClick}
        >
          View More
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4 max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">{title}</h2>
            <p className="mb-6">{description}</p>

            {/* Render Additional Sections if Available */}
            {highlights && (
              <div className="mb-4">
                <h3 className="font-semibold">Highlights</h3>
                <ul className="ml-5 list-disc">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {jobDesc && (
              <div className="mb-4">
                <h3 className="font-semibold">Job Description</h3>
                <ul className="ml-5 list-disc">
                  {jobDesc.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}

            {jobReq && (
              <div className="mb-4">
                <h3 className="font-semibold">Requirements</h3>
                <ul className="ml-5 list-disc">
                  {jobReq.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {other && (
              <div className="mb-4">
                <h3 className="font-semibold">Other Information</h3>
                <ul className="ml-5 list-disc">
                  {other.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {email && (
              <button
                onClick={handleSendEmail}
                className="mr-4 rounded-lg bg-tsdarkgreen px-4 py-2 text-white hover:bg-tsyellow"
              >
                Send Email
              </button>
            )}
            <button
              onClick={handleCloseModal}
              className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

JobListing.propTypes = {
  job: PropTypes.shape({
    jobId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.array,
    jobDesc: PropTypes.array,
    jobReq: PropTypes.array,
    other: PropTypes.array,
    email: PropTypes.string,
  }).isRequired,
};

export default JobListing;
