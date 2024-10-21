import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import LocationInfo from "../components/Locations";
import Image from "next/image";

function Contact() {
  return (
    <main className="text-[#004414]">
      <section className="relative min-h-[50vh] bg-contact-us bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Contact Us</h1>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing
          </p>
        </div>
      </section>

      <section className="mt-7 py-10 md:py-20 xl:mt-[20px] xl:py-20">
        <h1 className="mb-10 text-center text-[30px] underline md:text-[35px]">
          CONTACT INFO
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:justify-evenly">
          <div className="mb-6 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaPhone className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Phone</h3>
              <div className="flex flex-col md:flex-row md:space-x-9">
                <div className="mb-2 flex flex-col leading-[14px]">
                  <p className="text-[15px]">(office)</p>
                  <p className="text-[15px]">+603-6150 5818</p>
                </div>
                <div className="flex flex-col leading-[14px]">
                  <p className="text-[15px]">(factory)</p>
                  <p className="text-[15px]">+603-6157 4818</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaWhatsapp className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px] md:mb-1">Whatsapp</h3>
              <p className="text-[15px]">+6012-878 6438</p>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center text-center md:w-auto md:flex-row md:items-center">
            <div className="mb-2 mr-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F9B002] md:h-[67px] md:w-[68.39px]">
              <FaEnvelope className="h-[25px] w-[25px] text-white md:h-[35px] md:w-[35px]" />
            </div>
            <div className="md:ml-4 md:text-start">
              <h3 className="text-[20px]">Email</h3>
              <p className="text-[15px] md:mb-3">enquiry@thomson.com.my</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[5%]">
        <ContactForm />
      </section>

      <section className="mb-[5%]">
        <LocationInfo />
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-center md:text-center">
          <div className="flex flex-col items-center justify-center gap-8 sm:basis-1/2 md:mb-[3%] md:items-center md:text-center">
            <h1 className="text-[30px] text-tsdarkgreen underline sm:text-[35px]">
              CAREER OPPORTUNITIES
            </h1>
            <p className="max-w-[80%] text-center text-tsdarkgreen md:max-w-[100%] md:text-center md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>

        <div className="my-3 flex flex-col items-center justify-center p-5">
          <h2 className="mb-8 text-center text-[30px] font-bold text-[#004414] md:text-[35px]">
            Work with us
          </h2>

          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#F9B002] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Product Manager
                </h3>
                <p className="text-white">Senior with 5 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-[#2C5F2D]">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#004414] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Sales Executive
                </h3>
                <p className="text-white">Senior with 3 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-[#2C5F2D]">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="flex h-[170px] w-[330px] flex-col justify-between rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#F9B002] p-6 md:w-[350px]">
              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Data Specialist
                </h3>
                <p className="text-white">Senior with 5 years experience</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-white">
                  <span>📍</span> Malaysia
                </p>
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-[#2C5F2D]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[60px]">
            <button className="rounded-[15px] bg-[#F9B002] px-[50px] py-2 font-semibold text-white">
              See More
            </button>
          </div>
        </div>
      </section>

      <section className="mt-[10%] flex flex-col items-center justify-center">
        <h1 className="mb-[5%] p-1 text-center text-[25px] underline md:text-[35px]">
          COLLABORATIONS & PARTNERSHIPS
        </h1>

        <div className="m-auto flex max-w-screen-xl flex-col items-center md:flex-row">
          <div className="grid-left flex flex-col items-center gap-6 sm:basis-1/2 md:mb-[15%] md:items-start md:px-20 md:text-left">
            <h3 className="text-[15px] text-tsdarkgreen md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </h3>
            <p className="px-2 text-center text-[10px] text-tsdarkgreen md:px-0 md:text-left md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu
            </p>
            <div className="mb-10 flex w-[80%] gap-4 text-[10px] md:w-full md:flex-row md:text-[15px]">
              <button className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-bold text-white transition hover:bg-yellow-600 md:w-[45%]">
                Join Now
              </button>
              <button className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-bold text-white transition hover:bg-yellow-600 md:w-[45%]">
                Read More
              </button>
            </div>
          </div>
          <div className="grid-right z-10 mb-10 w-full px-10 md:relative md:right-[5%] md:mb-[75px] md:mt-0 md:w-[1000px] md:px-0 lg:relative lg:right-[-10%]">
            <div className="flex flex-col justify-center md:flex-row">
              <Image
                width={682}
                height={430}
                src={"/images/career-flower.png"}
                alt="Career Flower"
              />
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}

export default Contact;
