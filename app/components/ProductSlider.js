"use client"; // Mark as client component

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function ProductSlider() {
  const [currentScene, setCurrentScene] = useState(0); // Track active scene
  const sceneRefs = useRef([]); // Holds references to each scene

  // Scenes data (you can dynamically render this with data)
  const scenes = [
    {
      id: 0,
      title: "Activated Ginkgo",
      description: "Traditionally Used To Promote Blood Circulation & Health",
      images: {
        bg: "/images/product-animations/activated-ginko/activated-ginkgo-bg.png",
        product:
          "/images/product-animations/activated-ginko/activated_ginko.png",
        human:
          "/images/product-animations/activated-ginko/activated-ginkgo-human.png",
        featured:
          "/images/product-animations/activated-ginko/activated_ginko.png", // New featured image
      },
    },
    {
      id: 1,
      title: "Circulon",
      description: "Traditionally Used To Promote Blood Circulation & Health",
      images: {
        bg: "/images/product-animations/probiogut/probiogut-bg.jpg",
        product: "/images/product-animations/probiogut/probiogut.png",
        human: "/images/product-animations/probiogut/probiogut-human.png",
        featured: "/images/product-animations/probiogut/probiogut.png", // New featured image
      },
    },
    // Add more scenes as needed...
  ];

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
        duration: 1,
        onComplete: () => {
          setCurrentScene(nextIndex); // Update current scene index after out animation
          gsap.set(nextElement, { opacity: 0 }); // Prepare the next scene

          // In animation for the next scene (sequential element animations)
          tl.to(nextElement, { opacity: 1, duration: 1 }) // Fade in the container
            .from(nextElement.querySelector(".bg-image"), {
              x: direction * 100 + "%",
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
            ) // Product image fades in with slight delay
            .from(
              nextElement.querySelector(".human-image"),
              {
                x: direction * -100 + "%",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              "-=0.7",
            ) // Human image slides in from opposite side
            .from(
              nextElement.querySelector(".text-container"),
              {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              "-=0.8",
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
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            ref={(el) => (sceneRefs.current[index] = el)} // Store each scene ref
            className="absolute left-0 top-0 h-full w-full opacity-0" // Initially hidden
          >
            <Image
              alt="stage-ring"
              className="absolute z-[18] w-[50%] translate-x-[50%]"
              width={300}
              height={300}
              src={"/images/product-animations/stage-ring.png"}
            />
            <Image
              alt="stage-shadow"
              className="absolute bottom-0 z-[16] max-h-[300px] w-full object-cover object-top"
              width={300}
              height={300}
              src={"/images/product-animations/stage-with-shadow.png"}
            />

            {/* Background Image */}
            <Image
              fill
              alt="background"
              src={scene.images.bg}
              className="bg-image object-cover"
            />

            {/* Product Image */}
            <Image
              src={scene.images.product}
              alt="product"
              width={300}
              height={300}
              className="product-image absolute left-[50%] z-20 h-[50%] w-[40%] translate-x-[-50%] translate-y-[20%] object-cover"
            />
            {/* Human Image */}
            <Image
              src={scene.images.human}
              alt="human"
              width={300}
              height={400}
              className="human-image absolute right-[-50px] z-20 h-[50%] w-[40%] translate-y-[50%] object-cover"
            />
            {/* Text Container */}
            <div className="text-container absolute left-[5%] z-20 w-[30%]">
              <h1 className="text-3xl text-tsdarkgreen xl:text-4xl">
                {scene.title}
              </h1>
              <h3 className="text-tsdarkgreen md:text-2xl">
                {scene.description}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Product List with Featured Images */}
      <div className="product-indicators-wrapper absolute bottom-0 left-[50%] z-[30] flex w-fit translate-x-[-50%] items-center justify-center gap-10 rounded-full bg-tsdarkgreen px-6 py-6">
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
                width: currentScene === index ? "100px" : "80px",
                height: currentScene === index ? "100px" : "80px",
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
