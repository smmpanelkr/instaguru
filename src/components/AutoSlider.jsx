import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const mobileBanners = [
  {
    id: 1,
    src: "/ic/banner.avif",
    alt: "Banner 1",
  },
  {
    id: 2,
    src: "/ic/banner.avif",
    alt: "Banner 2",
  },
  {
    id: 3,
    src: "/ic/banner.avif",
    alt: "Banner 3",
  },
];

const AutoSlider = () => {
  return (
    <div className="w-full max-w-[calc(100vw-2rem)] mx-auto mt-6">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="rounded-xl overflow-hidden"
      >
        {mobileBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-[200px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
