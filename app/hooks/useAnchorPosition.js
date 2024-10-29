"use client";
import { useEffect, useState } from "react";

const useAnchorPosition = (anchorRef, resize = true) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    right: 0,
  });

  useEffect(() => {
    if (!anchorRef.current) return;

    const updatePosition = () => {
      const rect = anchorRef.current.getBoundingClientRect();

      console.log(rect);
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        right: rect.right + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    };

    updatePosition(); // Initial position calculation

    // Add event listeners for scroll/resize only if resize is enabled
    if (resize) {
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      if (resize) {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      }
    };
  }, [anchorRef, resize]);

  return position;
};

export default useAnchorPosition;
