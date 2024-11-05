"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

const years = [
  {
    year: 2018,
    content: "This is content for 2010",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2019,
    content: "This is content for 2012",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2020,
    content: "This is content for 2014",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2021,
    content: "This is content for 2016",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2022,
    content: "This is content for 2018",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2023,
    content: "This is content for 2020",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
  {
    year: 2024,
    content: "This is content for 2022",
    imageUrl: "/images/placeholder-profile.jpeg",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  const intervalDuration = 7000; // 7 seconds for each interval

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === years.length - 1 ? 0 : prevIndex + 1,
      );
      setProgress(0); // Reset progress on each dot change
    }, intervalDuration); // Auto-change every 7 seconds

    const progressInterval = setInterval(() => {
      setProgress(
        (prevProgress) => prevProgress + 100 / (intervalDuration / 100),
      );
    }, 100); // Progress increment every 100ms

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  // Handler for manually selecting a dot
  const handleDotClick = (index) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress when clicking manually
  };

  // Function to dynamically calculate the distance between dots
  const calculateLineWidth = (index) => {
    if (dotRefs.current[index] && dotRefs.current[index + 1]) {
      const currentDot = dotRefs.current[index].getBoundingClientRect();
      const nextDot = dotRefs.current[index + 1].getBoundingClientRect();
      return nextDot.left - currentDot.left - 32; // Distance minus dot width (32px for w-8)
    }
    return 0;
  };

  return (
    <div className="p-4">
      {/* Timeline Dots and Years */}
      <div className="relative mb-6 flex items-center justify-between">
        {years.map((item, index) => (
          <div key={item.year} className="relative flex flex-col items-center">
            {/* Dot */}
            <div
              ref={(el) => (dotRefs.current[index] = el)} // Store the ref for each dot
              onClick={() => handleDotClick(index)}
              className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "border-4 border-tsyellow bg-white"
                  : index < activeIndex
                    ? "bg-tsdarkgreen"
                    : "bg-gray-300"
              }`}
            ></div>

            {/* Line connecting the dots (placed from the edge of the dot) */}
            {index < years.length - 1 && (
              <div
                className={`absolute top-1/4 h-1 -translate-y-1/2 transform ${
                  index < activeIndex || index === activeIndex
                    ? "bg-tsdarkgreen"
                    : "bg-gray-300"
                }`}
                style={{
                  left: "100%",
                  width: `${
                    index === activeIndex
                      ? (progress / 100) * calculateLineWidth(index) // Active dot line grows
                      : index < activeIndex
                        ? calculateLineWidth(index) // Previous dots keep the full width
                        : 0
                  }px`,
                  transition: "width 100ms linear", // Smooth progress bar effect
                }} // Start from the edge of the dot and span
              />
            )}

            {/* Year below the dot */}
            <span
              className={`mt-2 text-sm ${
                index === activeIndex
                  ? "text-yellow-500"
                  : index < activeIndex
                    ? "text-tsdarkgreen"
                    : "text-gray-500"
              }`}
            >
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Active Year Content */}
      <div className="m-auto max-w-screen-lg rounded-md bg-gray-100 p-4 shadow">
        <div className="timeline-content-wrapper flex justify-center gap-20">
          <div className="timeline-content-left">
            <h2 className="text-4xl font-bold text-tsdarkgreen">
              Year: {years[activeIndex].year}
            </h2>
            <p className="mt-2 text-base">{years[activeIndex].content}</p>
          </div>
          <div className="timeline-content-right">
            <Image width={300} height={300} src={years[activeIndex].imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
