"use client"; // Mark as client component

import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import useAnchorPosition from "../hooks/useAnchorPosition";

const scenes = [
  {
    id: 0,
    title: "Activated Ginkgo",
    description: "Traditionally Used To Promote Blood Circulation & Health",
    images: {
      bg: "/images/product-animations/activated-ginko/activated-ginkgo-bg.png",
      circular:
        "/images/product-animations/activated-ginko/activated-ginkgo-blood.png",
      product: "/images/product-animations/activated-ginko/activated_ginko.png",
      human:
        "/images/product-animations/activated-ginko/activated-ginkgo-human.png",
      banner:
        "/images/product-animations/activated-ginko/activated-ginkgo-banner.png",
      featured:
        "/images/product-animations/activated-ginko/activated_ginko.png", // New featured image
    },
  },
  {
    id: 1,
    title: "ProBioGut",
    description: "Fix Your Gut",
    images: {
      bg: "/images/product-animations/probiogut/probiogut-bg.png",
      product: "/images/product-animations/probiogut/probiogut.png",
      circular: "/images/product-animations/probiogut/probiogut-circular.png",
      human: "/images/product-animations/probiogut/probiogut-human.png",
      banner: "/images/product-animations/probiogut/probiogut-banner.png",
      featured: "/images/product-animations/probiogut/probiogut.png", // New featured image
    },
  },
  {
    id: 2,
    title: "Circulon125",
    description: "Circulon",
    images: {
      bg: "/images/product-animations/circulon-125/circulon-bg.png",
      product: "/images/product-animations/circulon-125/circulon.png",
      circular: "/images/product-animations/circulon-125/circulon-circular.png",
      human: "/images/product-animations/circulon-125/circulon-human.png",
      banner: "/images/product-animations/circulon-125/circulon-banner.png",
      featured: "/images/product-animations/circulon-125/circulon.png", // New featured image
    },
  },
  {
    id: 3,
    title: "Osteopro",
    description: "Osteopro Description",
    images: {
      bg: "/images/product-animations/osteopro/osteo-bg.png",
      product: "/images/product-animations/osteopro/osteo.png",
      circular: "/images/product-animations/osteopro/osteo-circular.png",
      human: "/images/product-animations/osteopro/osteo-human.png",
      banner: "/images/product-animations/osteopro/osteo-banner.png",
      featured: "/images/product-animations/osteopro/osteo.png", // New featured image
    },
  },
  {
    id: 4,
    title: "Livrin",
    description: "Livrin",
    images: {
      bg: "/images/product-animations/livrin-300/livrin-bg.png",
      product: "/images/product-animations/livrin-300/livrin.png",
      circular: "/images/product-animations/livrin-300/livrin-circular.png",
      human: "/images/product-animations/livrin-300/livrin-human.png",
      banner: "/images/product-animations/livrin-300/livrin-banner.png",
      featured: "/images/product-animations/livrin-300/livrin.png", // New featured image
    },
  },
  {
    id: 5,
    title: "Calmilax",
    description: "Calmilax Desc",
    images: {
      bg: "/images/product-animations/calmilax/cml-bg.png",
      product: "/images/product-animations/calmilax/cml.png",
      circular: "/images/product-animations/calmilax/cml-circular.png",
      human: "/images/product-animations/calmilax/cml-human.png",
      banner: "/images/product-animations/calmilax/cml-banner.png",
      featured: "/images/product-animations/calmilax/cml.png", // New featured image
    },
  },
  {
    id: 5,
    title: "Xbido",
    description: "Xbido Desc",
    images: {
      bg: "/images/product-animations/xbido/xbd-bg.png",
      product: "/images/product-animations/xbido/xbd.png",
      circular: "/images/product-animations/xbido/xbd-circular.png",
      human: "/images/product-animations/xbido/xbd-human.png",
      banner: "/images/product-animations/xbido/xbd-banner.png",
      featured: "/images/product-animations/xbido/xbd.png", // New featured image
    },
  },
  // Add more scenes as needed...
];

export default function ProductSlider() {
  const [currentScene, setCurrentScene] = useState(0); // Track active scene
  const sceneRefs = useRef([]); // Holds references to each scene

  const productImageRef = useRef(null); // Ref for the product image

  const anchorPosition = useAnchorPosition(productImageRef);

  // Collect anchor positions using useEffect

  // Scenes data (you can dynamically render this with data)

  // Slide to next scene
  const nextScene = () => {
    const next = (currentScene + 1) % scenes.length; // Loop back to the first scene
    playSceneAnimation(next, 1); // Forward direction (right)
  };

  // Slide to previous scene
  const prevScene = () => {
    const prev = (currentScene - 1 + scenes.length) % scenes.length; // Loop back to the last scene
    playSceneAnimation(prev, -1); // Backward direction (left)
  };

  // Navigate to a specific scene when a product is clicked
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

    const ctx = gsap.context(() => {
      // Out animation for the current scene
      const tl = gsap.timeline();

      tl.to(currentElement, {
        opacity: 0,
        duration: 0.2,

        //the animation that happens when timeline of fade out

        onComplete: () => {
          setCurrentScene(nextIndex); // Update current scene index after out animation
          // gsap.set(nextElement, { opacity: 0 }); // Prepare the next scene

          // In animation for the next scene (sequential element animations)
          tl.to(nextElement, { opacity: 1, duration: 1 }) // Fade in the container
            .from(nextElement.querySelector(".bg-image"), {
              autoAlpha: 0,
              // x: direction * 100 + "%",
              duration: 1,
              ease: "power2.out",
            }) // Background image slides in
            .from(
              nextElement.querySelector(".product-image"),
              {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              "-=0.5",
            )
            .from(
              nextElement.querySelector(".product-banner"),
              {
                width: 0,
                transformOrigin: "right",
                duration: 1,
              },
              "0.5",
            )

            .from(nextElement.querySelector(".product-circular"), {})

            // Product image fades in with slight delay
            .from(
              nextElement.querySelector(".human-image"),
              {
                // y: -direction * -100 + "%",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              ">-2.0",
            ) // Human image slides in from opposite side
            .from(
              nextElement.querySelector(".text-container"),
              {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              "+=0.8",
            ); // Text fades in from below
        },
      });
    });

    return () => ctx.revert(); // Clean up animations when the component is unmounted
  };

  // Initialize the first scene (make sure it's visible) and create context for animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sceneRefs.current[currentScene], { opacity: 1 });
    });

    return () => ctx.revert(); // Clean up on component unmount
  }, [currentScene]);

  return (
    <div className="relative h-full w-full">
      {/* Slider Container */}
      <div className="relative h-full w-full overflow-hidden">
        {scenes.map((scene, index) => {
          return (
            <div
              key={scene.id}
              ref={(el) => (sceneRefs.current[index] = el)} // Store each scene ref
              className="absolute top-0 flex h-full w-full justify-center opacity-0" // Initially hidden
            >
              <Image
                alt="stage-ring"
                className="absolute top-[53%] z-[16] translate-y-[-80%] lg:top-[55%] xl:top-[58%] 2xl:top-[55%]"
                width={800}
                height={800}
                src={"/images/stage-ring.png"}
                style={{
                  width: anchorPosition.width * 1.05,
                }}
              />
              <Image
                alt="stage-shadow"
                className="absolute bottom-0 z-[18] h-[48%] w-full object-cover object-top sm:h-[45%] 2xl:h-[48%]"
                width={2000}
                height={1000}
                src={"/images/stage-shadow.png"}
              />

              {/* Product Banner */}
              <Image
                className="product-banner absolute left-[8%] top-[50%] z-20 md:left-[8%] md:block lg:left-[16%] xl:left-[25%] 2xl:left-[31%]"
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
                className="product-circular absolute right-[25%] top-[30%] z-20 sm:right-[30%] sm:top-[28%] md:right-[27%] md:top-[25%] md:block lg:right-[30%] 2xl:right-[37%]"
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
          {scenes.map((scene, index) => (
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
