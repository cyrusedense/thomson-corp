"use client";
import Image from "next/image";
import Button from "../components/Button";
import PersonCard from "../components/PersonCard";
import TextBox from "../components/TextBox";
import Timeline from "../components/Timeline";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const leaderList = [
  {
    name: "Benjamin Lim",
    title: "CEO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
  {
    name: "Ivy Gan",
    title: "CFO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
  {
    name: "Benjamin Lim",
    title: "CMO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
];

function AboutUs() {
  const aboutWaveAnimation = useRef();

  useGSAP(() => {
    gsap.to(aboutWaveAnimation.current, {
      width: "100vw",
      autoAlpha: 1,
      duration: 2,
    });
  });

  return (
    <main>
      <section className="relative min-h-[50vh] bg-about-hero bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">About Us</h1>
          <p className="text-xl text-white">Where Health Matters</p>
        </div>
      </section>

      <section className="timeline relative m-auto mb-20 max-w-screen-lg py-10 md:py-14 xl:py-20">
        <Timeline />
      </section>

      <section className="relative px-5 py-10 md:py-14 xl:py-20">
        <div
          ref={aboutWaveAnimation}
          className="absolute top-[-200px] h-[300px] w-0 scale-[125%] opacity-0"
        >
          <Image
            className="object-contain"
            alt="wave"
            fill
            src={"/images/solid-wave.webp"}
          />
        </div>
        <h1 className="mb-4 text-center text-2xl md:text-3xl">
          Mission & Vision
        </h1>

        <div className="mission-wrapper grid-col-1 m-auto grid max-w-[750px] gap-5 md:grid-cols-2">
          <TextBox
            title={"Mission"}
            subtitle={"Subtitle for Mission"}
            color={"yellow"}
            para={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu"
            }
          />
          <TextBox
            title={"Vision"}
            subtitle={"Subtitle for Vision"}
            para={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu"
            }
          />
        </div>
      </section>

      <section>
        <h1 className="mb-4 text-center text-2xl md:text-3xl">Our Leaders</h1>
        <p className="mb-5 px-5 text-center">
          We are led by a team of qualified experts, passionate about building a
          healthy society
        </p>
        <div className="leader-wrapper my-10 flex flex-wrap gap-6">
          {leaderList.map((leader) => (
            <PersonCard
              key={leader.title}
              name={leader.name}
              image={leader.profilePic}
              title={leader.title}
            />
          ))}
        </div>
        <div className="m-auto my-6 w-fit">
          <Button color={"yellow"} text={"Read More"} />
        </div>
      </section>

      <section className="about-us relative flex min-h-[90vh] justify-end bg-factory-bg bg-cover px-5 py-10 lg:py-20">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/0 to-white/80"></div>{" "}
        {/* White gradient overlay */} {/* White gradient overlay */}
        <div className="about-us-content relative z-10 my-20 flex flex-col items-start gap-5 rounded-l-[56px] rounded-r-[56px] rounded-t-[56px] rounded-br-[0px] bg-[#ffffff79] p-10 sm:w-[50%] sm:max-w-[500px]">
          <h1 className="text-3xl text-tsdarkgreen md:text-4xl">
            FACTORY FACILITIES
          </h1>
          <p className="text-sm">
            At Thomson, we are dedicated to improving the health and well-being
            of our customers through natural solutions. For over 30 years, we
            have been a trusted name, helping customers to enhance their overall
            quality of life. Our customers consistently share stories of relief
            from chronic issues and improved vitality, with many recommending
            our products to friends and family. We are proud to be a part of
            countless journeys toward better health, offering reliable, natural
            support for everyday wellness.
          </p>
          <Button
            clickFunction={() => router.push("/about-us")}
            color={"yellow"}
            text={"Read More"}
          />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
