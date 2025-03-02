"use client";

import { faqs } from "@/data/faqs";
import { useState } from "react";

import Image from "next/image";
import BlogCard from "@/app/components/BlogCard";
import Button from "@/app/components/Button";

const FAQItem = ({ index, question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={index} className="py-6 first:pt-0 last:pb-0">
      <dt>
        <button onClick={() => setIsExpanded(!isExpanded)} type="button" className="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
          <span className="text-xl font-semibold">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isExpanded ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </span>
        </button>
      </dt>
      {isExpanded && (
        <dd className="mt-2 pr-12" id="faq-0">
          <p className="text-xl text-gray-600">{answer}</p>
        </dd>
      )}
    </div>
  );
};

function FAQs({ params: { locale } }) {
  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-community-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl px-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">FAQs</h1>
          {/* <p className="text-xl text-white">Thomson&apos;s commitment to society</p> */}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <dl className="divide-y divide-gray-900/10">
            {faqs.map((faq, index) => {
              return <FAQItem key={index} question={faq.question} answer={faq.answer} />;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
