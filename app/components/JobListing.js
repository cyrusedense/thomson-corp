"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter, useSearchParams } from "next/navigation";

function JobListing({ jobId, title, description }) {
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
    window.location.href = `mailto:?subject=Inquiry about ${title}`;
  };

  useEffect(() => {
    const paramJobId = searchParams.get("jobId");
    console.log("URL jobId:", paramJobId);
    console.log("Component jobId:", jobId);
    console.log("Is Modal Open before:", isModalOpen);
    // Ensure the modal opens if the `jobId` in URL matches the component's jobId
    if (searchParams.get("jobId") == jobId) {
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
            <button
              onClick={handleSendEmail}
              className="mr-4 rounded-lg bg-tsdarkgreen px-4 py-2 text-white hover:bg-tsyellow"
            >
              Send Email
            </button>
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
  jobId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JobListing;
