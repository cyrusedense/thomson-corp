import { GrLocation } from "react-icons/gr";

function LocationInfo() {
  return (
    <main>
      <section className="addresses m-auto flex max-w-screen-xl items-start gap-5 px-5 py-10">
        <div className="w-fit rounded-full bg-tsyellow p-4">
          <GrLocation size={35} color="white" />{" "}
        </div>
        <div className="address-wrapper">
          <h3 className="text-2xl">Location</h3>

          <div className="w-screen sm:flex sm:gap-20">
            <div className="mb-5">
              <h4 className="text-xl">Sales and Marketing Office</h4>
              <p>
                {" "}
                C-06-07, Sunway Nexis, <br /> No. 1, Jalan PJU 5/1, <br />
                Kota Damansara, <br />
                47810 Petaling Jaya, Malaysia
              </p>
            </div>

            <div>
              <h4 className="text-xl">Factory</h4>
              <p>
                No. 5 & 7, Jalan TSB 6, <br />
                Taman Industri Sungai Buloh, <br /> 47000 Sungai Buloh, Malaysia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="flex justify-center p-4">
        <iframe
          className="rounded-[8%] border shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4104487225254!2d101.60505231582855!3d3.1601664546127685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb39b0730d6d3%3A0x1234abcd5678efgh!2sC-06-07%2C%20Sunway%20Nexis%2C%20No.%201%2C%20Jalan%20PJU%205%2F1%2C%20Kota%20Damansara%2C%2047810%20Petaling%20Jaya%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1642312025608!5m2!1sen!2sus"
          width="1126"
          height="495"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}

export default LocationInfo;

{
  /* Apply centering styles only for mobile */
}
<section className="m-auto flex w-full max-w-screen-xl flex-col items-center p-5 md:flex-row md:items-start md:p-5">
  <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:mb-0 md:h-[67px] md:w-[68.39px]"></div>
  <div className="flex w-[80%] flex-col md:ml-5 md:flex-row md:items-start md:space-x-16">
    <div className="mb-5 flex w-full flex-col text-center md:mb-0 md:max-w-[50%] md:text-left">
      <h1 className="text-[30px] md:text-[30px]">Location</h1>
      <h2 className="text-[16px] md:text-[20px]">Sales & Marketing Office:</h2>
      <p className="px-4 text-[14px] md:px-0 md:text-[15px]">
        C-06-07, Sunway Nexis, No. 1, Jalan PJU 5/1, Kota Damansara, 47810
        Petaling Jaya, Malaysia
      </p>
    </div>

    <div className="flex w-full flex-col text-center md:text-left">
      <h2 className="text-[16px] md:text-[20px]">Factory:</h2>
      <p className="px-4 text-[14px] md:px-0 md:text-[15px]">
        No. 5 & 7, Jalan TSB 6, Taman Industri Sungai Buloh, 47000 Sungai Buloh,
        Malaysia
      </p>
    </div>
  </div>
</section>;
