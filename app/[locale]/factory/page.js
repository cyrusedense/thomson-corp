import Image from "next/image";

function Factory({ params: { locale } }) {
  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-facilities-hero bg-cover bg-right md:min-h-[50vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl p-5">
          {/* <h1>{t("title")}</h1> */}
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Factory Facilities</h1>
          <p className="text-xl text-white">Quality Assured</p>
        </div>
      </section>

      <div className="m-auto max-w-screen-xl px-5 py-10 md:py-14 lg:py-20">
        <p className="mb-8">{locale === "en-sg" ? "At Thomson Health Singapore, our factory is GMP compliant by the Health Scient Authority. Equipped with an ISO 8 cleanroom, we are able to ensure strict standards of manufacturing cleanliness and consistency. Our facility uses state-of-the art machinery to produce health supplements of the highest quality." : "We at Thomson are Good Manufacturing Practice (GMP) certified by the Ministry of Health Malaysia. This means that Thomson must adhere to strict procedures to ensure cleanliness and consistency. Our manufacturing facility employs state-of-the-art machineries including German brands such as Fette, Bosch and Uhlmann, brands known for producing machines of the highest quality."}</p>

        <section className="gap-10 sm:flex">
          <div className="factory-left basis-1/2">
            <Image className="h-full w-full rounded-[56px] object-cover object-center" alt="thomson-lab-facilities" width={500} height={500} src="/images/thomson-lab-1.jpg" />
          </div>
          <div className="factory-right basis-1/2">
            <h1 className="mb-5 text-3xl font-bold">{locale === "en-sg" ? "Our Quality Control (QC) Laboratory Uniquely Conducts Additional Dissolution and HPLC Testing for Our Products:" : "Our Quality Control (QC) Laboratory Uniquely Conducts Dissolution And HPLC Testing:"}</h1>
            <h3 className="mb-4 text-2xl">1. Dissolution testing</h3>
            <p className="mb-5">This test ensures that our ingredients can dissolve fast enough for our body to absorb. If they are not able to dissolve, our body will not be able to absorb and benefit from these ingredients.</p>

            <h3 className="mb-4 text-2xl">2. HPLC testing</h3>
            <div>
              This test can detect <li>the identity of a natural ingredient, which determines whether any adulteration has occurred</li>
              <li>the quality of the ingredients tested</li>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Factory;
