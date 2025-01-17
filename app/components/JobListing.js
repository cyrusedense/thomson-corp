"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useRouter } from "@/i18n/routing";

function JobListing({ job }) {
  const { jobId, title, description, highlights, jobDesc, jobReq, other, email } = job;

  const router = useRouter();

  const handleButtonClick = () => {
    const locale = router.locale || "en-my"; // Fallback to a default locale if not set
    const normalizedTitle = title.trim().toLowerCase().replace(/\s+/g, "-"); // Normalize title for URL

    router.push(`/careers/${normalizedTitle}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 p-2 sm:p-6">
        <div className="space-y-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
        </div>

        <button className="flex-shrink-0 rounded-lg bg-tsdarkgreen px-3 py-2 text-white hover:bg-tsyellow" onClick={handleButtonClick}>
          View More
        </button>
      </div>
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

// {
//   isModalOpen && (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-3/4 max-w-lg rounded-lg bg-white p-8 shadow-lg">
//         <h2 className="mb-4 text-xl font-bold">{title}</h2>
//         <p className="mb-6">{description}</p>

//         {/* Render Additional Sections if Available */}
//         {highlights && (
//           <div className="mb-4">
//             <h3 className="font-semibold">Highlights</h3>
//             <ul className="ml-5 list-disc">
//               {highlights.map((highlight, index) => (
//                 <li key={index}>{highlight}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {jobDesc && (
//           <div className="mb-4">
//             <h3 className="font-semibold">Job Description</h3>
//             <ul className="ml-5 list-disc">
//               {jobDesc.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {jobReq && (
//           <div className="mb-4">
//             <h3 className="font-semibold">Requirements</h3>
//             <ul className="ml-5 list-disc">
//               {jobReq.map((req, index) => (
//                 <li key={index}>{req}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {other && (
//           <div className="mb-4">
//             <h3 className="font-semibold">Other Information</h3>
//             <ul className="ml-5 list-disc">
//               {other.map((item, index) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {email && (
//           <button
//             onClick={handleSendEmail}
//             className="mr-4 rounded-lg bg-tsdarkgreen px-4 py-2 text-white hover:bg-tsyellow"
//           >
//             Send Email
//           </button>
//         )}
//         <button
//           onClick={handleCloseModal}
//           className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
