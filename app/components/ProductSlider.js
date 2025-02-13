"use client"; // Mark as client component

import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { productSliderScenes } from "@/data/productSliderData";
import WaveAnimation from "./waveAnimation";

export default function ProductSlider() {
  //to do sliding

  const [currentScene, setCurrentScene] = useState(0); // Track active scene

  //to track is animating or not, so that we don't play animation while animating

  const [isAnimating, setIsAnimating] = useState(false);

  const sceneRefs = useRef([]); // initiate an empty array to hold references to the total scene divs

  // Function to handle the previous set of indicators

  //to handle next scene and previous scene

  // Render a function that tracks the next scene and the previous scene, based on the state of the currently tracked scene

  const goToScene = (index) => {
    if (!isAnimating) {
      renderScene(index);
    }
  };

  const goToNextScene = () => {
    if (!isAnimating) {
      const next = (currentScene + 1) % productSliderScenes.length;
      renderScene(next);
    }
  };

  const goToPrevScene = () => {
    if (!isAnimating) {
      const prev = (currentScene - 1 + productSliderScenes.length) % productSliderScenes.length;
      renderScene(prev);
    }
  };

  // Function to play the timeline animation for each scene
  const renderScene = (nextIndex) => {
    const currentElement = sceneRefs.current[currentScene];
    const nextElement = sceneRefs.current[nextIndex];

    setIsAnimating(true);

    setCurrentScene(nextIndex);

    const ctx = gsap.context(() => {
      //set up timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          fixRender();
        }, // Reset animation state on complete
      });
      // Initial setup - only set opacity for container, not children
      // i set my nextElement, which is based on the nextIndex state that is passed into the playScene
      // the argument is passed in when i click the button, it runs the function goToPrevScene or goToNextScene, which runs playScene

      //I first set next element to be invisible since by default it is not
      gsap.set(nextElement, {
        autoAlpha: 1,
      });
      // gsap.set(nextElement, {
      //   opacity: 0,
      //   visibility: "visible",
      // });

      //i fade out the current animations with a timeline

      // Exit animations
      tl.fromTo(
        [
          // currentElement.querySelector(".stage-ring"),
          // currentElement.querySelector(".stage-shadow"),
          currentElement.querySelector(".product-circular"),
          currentElement.querySelector(".product-banner"),
          currentElement.querySelector(".bg-image"),
        ],
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
        },
      )
        .fromTo(
          currentElement.querySelector(".product-image"),
          {
            autoAlpha: 1,
            yPercent: 0,
          },
          {
            autoAlpha: 0,
            yPercent: 10,
            duration: 0.8,
            ease: "power2.out",
          },
        )
        .to(
          [currentElement.querySelector(".text-container"), currentElement.querySelector(".human-image")],
          {
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "<+=0.2",
        );
      //i set the nextElement to be visible
      // .add(() => {
      //   // Make next element visible
      // });

      // Entrance animations
      // tl.fromTo(
      //   [
      //     nextElement.querySelector(".stage-ring"),
      //     nextElement.querySelector(".stage-shadow"),
      //   ],
      //   {
      //     autoAlpha: 0,
      //   },
      //   {
      //     autoAlpha: 1,
      //     duration: 1,
      //   },
      // );
      tl.fromTo(
        nextElement.querySelector(".bg-image"),
        {
          autoAlpha: 0,
        },

        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        },
      )
        .fromTo(
          nextElement.querySelector(".product-image"),
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // Synchronized spring animation for circular and banner
        .fromTo(
          [nextElement.querySelector(".product-circular"), nextElement.querySelector(".product-banner")],
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            transformOrigin: "center",
          },

          "<+=0.8",
        )
        .fromTo(
          nextElement.querySelector(".human-image"),
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          },

          "<+=0.2",
        )
        .fromTo(
          nextElement.querySelector(".text-container"),
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          },

          "<+=0.2",
        );
    });

    return () => {
      ctx.revert();
      // Ensure elements are visible after animation cleanup
    };
  };

  function fixRender() {
    document.querySelectorAll(".human-image").forEach((el) => {
      el.style.transform = "";
    });

    document.querySelectorAll(".bg-image").forEach((el) => {
      el.style.transform = "";
    });

    document.querySelectorAll(".product-image").forEach((el) => {
      el.style.transform = "";
    });

    document.querySelectorAll(".product-circular").forEach((el) => {
      el.style.transform = "";
    });

    document.querySelectorAll(".product-banner").forEach((el) => {
      el.style.transform = "";
    });

    document.querySelectorAll(".text-container").forEach((el) => {
      el.style.transform = "";
    });
  }

  // Initialize the first scene (make sure it's visible) and create context for animations

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sceneRefs.current[currentScene], { opacity: 1 });
    });

    window.addEventListener("resize", fixRender);

    return () => ctx.revert(); // Clean up on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative w-screen overflow-hidden pb-[60%]">
        <Image alt="stage-ring" className="stage-ring absolute left-0 top-0 z-[16] w-1/3 translate-x-full translate-y-[60%]" width={1745} height={1074} src={"/images/stage-ring.png"} />
        <Image alt="stage-shadow" className="stage-shadow absolute top-0 z-[18] w-full translate-y-3/4" width={2814} height={1018} src={"/images/stage-shadow.png"} />

        {productSliderScenes.map((scene, index) => {
          return (
            <div
              key={scene.id}
              ref={(el) => (sceneRefs.current[index] = el)} // on first render, I map through the scenes and add it to the sceneRefs array, which is a ref
              className="absolute h-screen w-screen opacity-0" // Initially hidden
            >
              {/* Product Banner */}
              <Image className="product-banner absolute left-0 top-0 z-20 w-1/4 translate-x-full translate-y-[220%] scale-75" width={948} height={364} alt="product-banner" src={"/images/product-animations/activated-ginko/activated-ginkgo-banner.png"} />

              {/* Circular */}
              <Image className="product-circular absolute right-0 top-0 z-[24] w-1/6 -translate-x-[180%] translate-y-1/2 scale-75" src={scene.images.circular} alt="circular" width={601} height={588} />

              {/* Product Image */}
              <Image src={scene.images.product} alt="product" width={1000} height={1000} className="product-image absolute top-0 z-[22] w-1/3 translate-x-full translate-y-1/2 scale-90" />

              {/* Background Image */}
              <Image width={2691} height={2485} alt="background" src={scene.images.bg} className="bg-image absolute z-[14] w-full object-cover" />

              {/* Human Image */}
              <Image src={scene.images.human} alt="human" width={1813} height={1675} className="human-image absolute right-0 top-0 z-[24] w-1/3 -translate-x-[45%] translate-y-1/2 scale-75" />

              {/* Text Container */}
              <div className="text-container absolute left-0 top-0 z-20 w-[22%] translate-x-[10%] translate-y-[30%] sm:translate-y-[20%] md:translate-y-[30%] lg:translate-y-[40%] xl:translate-y-[70%] 2xl:translate-y-[90%]">
                <div className="flex flex-col gap-1 md:gap-5">
                  <h1 className="text-lg leading-4 text-tsdarkgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{scene.title}</h1>
                  <p className="w-fit text-[0.5rem] leading-3 text-tsdarkgreen sm:text-xs md:text-xs lg:text-base">{scene.description}</p>
                </div>
              </div>
            </div>
          ); // Anchor to the product image
        })}

        <div className="absolute bottom-0 z-30 w-full -translate-y-[100%]">
          <div className="mx-auto flex h-auto w-4/5 flex-row items-center justify-between">
            <button onClick={goToPrevScene} className="z-[31] text-tsdarkgreen">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 lg:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            {productSliderScenes.map((scene, index) => (
              <div
                onClick={() => {
                  goToScene(index);
                }}
                key={index}
                className="cursor-pointer"
              >
                <Image src={scene.images.featured} alt={scene.title} width={192} height={192} className={`mx-auto transform rounded-full object-cover transition-all duration-150 ease-in-out ${currentScene === index ? "scale-150" : "opacity-85 blur-[1px] brightness-90"}`} />
              </div>
            ))}
            <button onClick={goToNextScene} className="z-[31] text-tsdarkgreen">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 lg:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
