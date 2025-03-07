"use client";
import Image from "next/image";
import Button from "@/app/components/Button";
import PersonCard from "@/app/components/PersonCard";
import TextBox from "@/app/components/TextBox";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Milestones from "@/app/components/sliderTimeline";
import { useTranslations } from "next-intl";
gsap.registerPlugin(useGSAP);

import { teamMembers } from "@/data/teamMembers";
import TeamMemberCard from "@/app/components/TeamMemberCard";
import Wave from "@/app/components/Wave";

function AboutUs() {
  const featuredTeamMembers = teamMembers.filter((member) => member.featured).sort((a, b) => a.id - b.id);

  const t = useTranslations("AboutUs");

  return (
    <main>
      <section className="relative flex min-h-[50vh] items-center bg-about-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl p-5">
          {/* <h1>{t("title")}</h1> */}
          <h1 className="mb-4 text-4xl text-white md:text-6xl">About Us</h1>
          <p className="text-xl text-white">Where Health Matters</p>
        </div>
      </section>

      <section className="timeline relative">
        <div className="m-auto mb-20 max-w-screen-lg py-10 md:py-14 xl:py-20">
          <Milestones />
        </div>
      </section>

      <section className="relative px-4 pb-[15%]">
        <h2 className="mb-8 text-center text-4xl text-tsdarkgreen">Our Awards</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <Image src="/images/Unity SG.jpg" alt="Unity SG" width={3867} height={2304} className="h-96 w-auto object-cover" />
          <Image src="/images/Watson SG.jpg" alt="Unity SG" width={4016} height={2304} className="h-96 w-auto object-cover" />
        </div>
      </section>

      <Wave />

      <section className="relative mt-[5%] px-5 py-10 md:py-14 xl:py-20">
        <h2 className="mb-8 text-center text-4xl text-tsdarkgreen">Mission & Vision</h2>

        <div className="mission-wrapper grid-col-1 m-auto grid max-w-[750px] gap-5 md:grid-cols-2">
          <TextBox title={"Mission"} subtitle={"Subtitle for Mission"} color={"yellow"} para={"To deliver premier health solutions that make a genuine difference in the health journeys of our customers. We harmonize age-old herbal insights with cutting-edge scientific discoveries, ensuring our offerings are not just products, but partners in wellness."} />
          <TextBox title={"Core Values"} subtitle={"Subtitle for Vision"} para={"Unwavering quality, relentless innovation, and an unwavering focus on customer well-being guides every step we take."} />
        </div>
      </section>

      <section className="pb-[15%]">
        <h2 className="mb-8 text-center text-4xl text-tsdarkgreen">Our Leaders</h2>
        <p className="mb-5 px-5 text-center">We are led by a team of qualified experts, passionate about building a healthy society.</p>
        <div className="leader-wrapper m-auto my-10 grid max-w-screen-xl gap-10 sm:grid-cols-3">
          {featuredTeamMembers.map((member) => (
            <TeamMemberCard key={member.id} teamMember={member} />
          ))}
        </div>
        <div className="m-auto my-6 w-fit">
          <Button intLink={"/leadership-team"} color={"yellow"} text={"Read More"} />
        </div>
      </section>

      <Wave />

      <section className="about-us relative min-h-[90vh] bg-factory-bg bg-cover py-10 lg:py-20">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/0 to-white/80"></div> {/* White gradient overlay */} {/* White gradient overlay */}
        <div className="m-auto flex max-w-screen-xl justify-end">
          <div className="about-us-content relative z-10 my-20 flex flex-col items-start gap-5 rounded-l-[56px] rounded-r-[56px] rounded-t-[56px] rounded-br-[0px] bg-white p-10 sm:w-[50%] sm:max-w-[500px]">
            <h1 className="text-3xl text-tsdarkgreen md:text-4xl">FACTORY FACILITIES</h1>
            <p className="">
              At Thomson, we are GMP certified by the Ministry of Health Malaysia, ensuring strict standards for cleanliness and consistency. Our facility uses state-of-the-art German machinery from Fette, Bosch, and Uhlmann, known for superior quality. <br />
            </p>
            <Button intLink={"/factory"} color={"yellow"} text={"Read More"} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
