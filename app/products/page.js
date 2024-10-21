import React from "react";

function Page() {
  return (
    <div>
      <section className="bg-about-hero relative min-h-[50vh] bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Our Products</h1>
          <p className="text-xl text-white">
            Everything you need to supercharge your health
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
