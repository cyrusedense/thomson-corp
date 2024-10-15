"use client";

import { useState, useEffect, useRef } from "react";

const years = [
  { year: 2010, content: "This is content for 2010" },
  { year: 2012, content: "This is content for 2012" },
  { year: 2014, content: "This is content for 2014" },
  { year: 2016, content: "This is content for 2016" },
  { year: 2018, content: "This is content for 2018" },
  { year: 2020, content: "This is content for 2020" },
  { year: 2022, content: "This is content for 2022" },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRefs = useRef([]);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === years.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Auto-change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Handler for manually selecting a dot
  const handleDotClick = (index) => {
    setActiveIndex(index);
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
              className={`relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "bg-yellow-500"
                  : index < activeIndex
                    ? "bg-green-500"
                    : "bg-gray-300"
              }`}
            >
              <span className="text-white">{index + 1}</span>
            </div>

            {/* Line connecting the dots (placed from the edge of the dot) */}
            {index < years.length - 1 && (
              <div
                className={`absolute top-1/2 h-1 -translate-y-1/2 transform ${
                  index < activeIndex ? "bg-green-500" : "bg-gray-300"
                }`}
                style={{
                  left: "100%",
                  width: `${calculateLineWidth(index)}px`,
                }} // Start from the edge of the dot and span
              />
            )}

            {/* Year below the dot */}
            <span
              className={`mt-2 text-sm ${
                index === activeIndex
                  ? "text-yellow-500"
                  : index < activeIndex
                    ? "text-green-500"
                    : "text-gray-500"
              }`}
            >
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Active Year Content */}
      <div className="rounded-md bg-gray-100 p-4 shadow">
        <h2 className="text-xl font-bold">Year: {years[activeIndex].year}</h2>
        <p className="mt-2 text-base">{years[activeIndex].content}</p>
      </div>
    </div>
  );
}
