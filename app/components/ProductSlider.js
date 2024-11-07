"use client"; // Mark as client component

import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { productSliderScenes } from "@/data/productSliderData";

import useAnchorPosition from "../hooks/useAnchorPosition";

export default function ProductSlider() {
  //to do anchoring
  const productImageRef = useRef(null); // Ref for the product image to be used as the anchor

  const anchorPosition = useAnchorPosition(productImageRef); // Collect anchor positions

  //to do sliding

  const [currentScene, setCurrentScene] = useState(0); // Track active scene
  const sceneRefs = useRef([]); // initiate an empty array to hold references to the total scene divs

  const [isAnimating, setIsAnimating] = useState(false);

  // Render a function that tracks the next scene and the previous scene, based on the state of the currently tracked scene

  const nextScene = () => {
    const next = (currentScene + 1) % productSliderScenes.length; // Loop back to the first scene this is an index that is based on state
    playSceneAnimation(next, 1); // Forward direction (right)
  };

  const prevScene = () => {
    const prev =
      (currentScene - 1 + productSliderScenes.length) %
      productSliderScenes.length; // Loop back to the last scene
    playSceneAnimation(prev, -1); // Backward direction (left)
  };

  // render a function that plays the scene animation
  const goToScene = (index) => {
    if (index !== currentScene) {
      const direction = index > currentScene ? 1 : -1; // Determine animation direction
      playSceneAnimation(index, direction);
    }
  };

  // Function to play the timeline animation for each scene
  const playSceneAnimation = (nextIndex, direction) => {
    const currentElement = sceneRefs.current[currentScene];
    const nextElement = sceneRefs.current[nextIndex];

    setIsAnimating(true);

    const ctx = gsap.context(() => {
      //set up timeline
      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false), // Reset animation state on complete
      });
      // Initial setup - only set opacity for container, not children
      // i set my nextElement, which is based on the nextIndex state that is passed into the playScene
      // the argument is passed in when i click the button, it runs the function prevScene or nextScene, which runs playScene

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
          [
            currentElement.querySelector(".text-container"),
            currentElement.querySelector(".human-image"),
          ],
          {
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "<+=0.2",
        )
        //i set the nextElement to be visible
        .add(() => {
          setCurrentScene(nextIndex);

          // Make next element visible
        });

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
          [
            nextElement.querySelector(".product-circular"),
            nextElement.querySelector(".product-banner"),
          ],
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

  // Initialize the first scene (make sure it's visible) and create context for animations
  useEffect(() => {
    console.log(`useEffect fired, current scene is ${currentScene}`);
    const ctx = gsap.context(() => {
      gsap.set(sceneRefs.current[currentScene], { opacity: 1 });
    });

    return () => ctx.revert(); // Clean up on component unmount
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Slider Container */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          alt="stage-ring"
          className="stage-ring absolute left-[50%] top-[53%] z-[16] translate-x-[-50%] translate-y-[-80%] lg:top-[55%] xl:top-[58%] 2xl:top-[55%]"
          width={800}
          height={800}
          src={"/images/stage-ring.png"}
          style={{
            width: anchorPosition.width * 1.05,
          }}
        />
        <Image
          alt="stage-shadow"
          className="stage-shadow absolute bottom-0 z-[18] h-[48%] w-full object-cover object-top sm:h-[45%] 2xl:h-[48%]"
          width={2000}
          height={1000}
          src={"/images/stage-shadow.png"}
        />

        {productSliderScenes.map((scene, index) => {
          return (
            <div
              key={scene.id}
              ref={(el) => (sceneRefs.current[index] = el)} // on first render, I map through the scenes and add it to the sceneRefs array, which is a ref
              className="absolute top-0 flex h-full w-full justify-center opacity-0" // Initially hidden
            >
              {/* Product Banner */}
              <Image
                className="product-banner absolute left-[8%] top-[50%] z-20 overflow-hidden md:left-[8%] md:block lg:left-[16%] xl:left-[25%] 2xl:left-[31%]"
                width={300}
                height={300}
                alt="product-banner"
                src={
                  "/images/product-animations/activated-ginko/activated-ginkgo-banner.png"
                }
                style={{
                  width: anchorPosition.width * 0.5,
                }}
              />

              {/* Circular */}

              <Image
                className="product-circular absolute right-[25%] top-[30%] z-20 overflow-hidden sm:right-[30%] sm:top-[28%] md:right-[27%] md:top-[25%] md:block lg:right-[30%] 2xl:right-[37%]"
                src={scene.images.circular}
                alt="circular"
                width={200}
                height={200}
                style={{
                  width: anchorPosition.width * 0.3,
                }}
              />

              {/* Product Image */}
              <Image
                ref={productImageRef}
                src={scene.images.product}
                alt="product"
                width={800}
                height={800}
                className="product-image z-20 w-[60vw] object-contain lg:w-[550px]"
              />

              {/* Background Image */}
              <Image
                width={2000}
                height={800}
                alt="background"
                src={scene.images.bg}
                className="bg-image absolute h-full w-full object-cover"
              />
              {/* Human Image */}
              <Image
                src={scene.images.human}
                alt="human"
                width={500}
                height={600}
                className="human-image absolute right-[-15%] top-[45%] z-20 sm:right-[-10%] sm:top-[33%] md:right-[-20%] lg:right-[-10%] xl:right-[-5%] 2xl:right-[2%]"
                style={{
                  width: anchorPosition.width,
                  // top: anchorPosition.top,
                  // // left: anchorPosition.left - 0.5 * anchorPosition.width,
                  // left: anchorPosition.left,
                }}
              />

              {/* Text Container */}
              <div className="text-container absolute left-[5%] top-[10%] z-20 w-[30%]">
                <h1 className="text-2xl text-tsdarkgreen xl:text-4xl">
                  {scene.title}
                </h1>
                <h3 className="text-sm text-tsdarkgreen md:text-2xl">
                  {scene.description}
                </h3>
              </div>
            </div>
          ); // Anchor to the product image
        })}
      </div>

      {/* Product List with Featured Images */}
      <div className="product-indicators-wrapper absolute bottom-0 left-[50%] z-[30] mb-6 flex w-fit translate-x-[-50%] items-center justify-center gap-10 rounded-full bg-tsdarkgreen px-2 py-2">
        {/* Previous Button with Arrow Image */}
        <button onClick={prevScene} className="left-6 cursor-pointer">
          <Image
            src="/images/prev-arrow.png" // Path to your left arrow image
            alt="Previous"
            width={40}
            height={40}
          />
        </button>
        <div className="product-indicators mt-2 flex justify-center space-x-4">
          {productSliderScenes.map((scene, index) => (
            <div
              key={scene.id}
              onClick={() => goToScene(index)} // Navigate to the selected product
              className={`relative cursor-pointer rounded-[56px] bg-green-600 p-2 transition-all duration-300 ${
                currentScene === index ? "scale-110" : "scale-90"
              }`}
              style={{
                width: currentScene === index ? "60px" : "40px",
                height: currentScene === index ? "60px" : "40px",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white">
                <Image
                  src={scene.images.featured} // Featured image for each product
                  alt={scene.title}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Next Button with Arrow Image */}
        <button onClick={nextScene} className="right-6 cursor-pointer">
          <Image
            src="/images/next-arrow.png" // Path to your right arrow image
            alt="Next"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
