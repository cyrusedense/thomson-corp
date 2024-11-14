// components/Milestones.js
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import milestones from "@/data/milestones";
import Image from "next/image";

const Milestones = () => {
  const swiperRef = useRef(null);

  return (
    <section className="milestones">
      <h2 className="mb-8 text-4xl text-tsdarkgreen">Our Story</h2>
      <div className="swiper-arranger">
        <div className="timeline-pagination"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          navigation
          loop={true} // Enable infinite looping
          pagination={{
            clickable: true,
            el: ".timeline-pagination", // Custom pagination element
            renderBullet: (index, className) =>
              `<div class="${className} bullet-container"><span class="bullet"></span><span class="year">${milestones[index].year}</span></div>`,
          }}
          //   breakpoints={{
          //     0: {
          //       direction: "vertical", // Vertical layout on smaller screens
          //     },
          //     768: {
          //       direction: "horizontal", // Horizontal layout on larger screens
          //     },
          //   }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {milestones.map((milestone, index) => (
            <SwiperSlide key={index} className="milestone-card p-6">
              <h3 className="text-tsdarkgreen">{milestone.year}</h3>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="m-auto mb-6 max-w-[700px] text-justify"
              >
                {milestone.description}
              </p>
              <Image
                className="aspect-video w-full object-contain object-center"
                alt={milestone.imageUrl
                  .split("/")
                  .pop()
                  .split(".")
                  .slice(0, -1)
                  .join(".")}
                width="500"
                height="500"
                src={milestone.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Timeline Pagination */}
    </section>
  );
};

export default Milestones;
