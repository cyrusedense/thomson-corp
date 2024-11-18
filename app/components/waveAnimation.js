import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const WaveAnimation = ({
  duration = 3,
  ease = "power4.Out",
  src = "/images/hero-wave-1.png",
  width = "100vw",
}) => {
  const waveRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      waveRef.current,
      { width: "0px", autoAlpha: 0 },
      { width, duration, autoAlpha: 1, ease },
    );
  }, [duration, ease, width]);

  return (
    <div
      ref={waveRef}
      className="absolute bottom-0 z-20 translate-y-[35%] overflow-hidden opacity-0"
    >
      <Image
        src={src}
        width={1000}
        height={300}
        className="wave-animation w-full bg-center object-cover"
        alt="wave"
      />
    </div>
  );
};

export default WaveAnimation;
