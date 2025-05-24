import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const mobileBanners = [
  {
    id: 1,
    src: "/banner/banner-1.webp",
    alt: "Banner 1",
  },
  {
    id: 2,
    src: "/banner/banner-2.webp",
    alt: "Banner 2",
  },
  {
    id: 3,
    src: "/banner/banner-3.webp",
    alt: "Banner 3",
  },
];

const AutoSlider = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full max-w-[calc(100vw-2rem)] mx-auto mt-6">
      {isLoading && (
        <div className="animate-pulse">
          <div className="w-full h-48 bg-gray-200 rounded-xl"></div>
        </div>
      )}
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className={`rounded-xl overflow-hidden ${isLoading ? 'hidden' : ''}`}
        onImagesReady={() => setIsLoading(false)}
      >
        {mobileBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <LazyLoadImage
              src={banner.src}
              alt={banner.alt}
              effect="blur"
              className="w-full object-cover rounded-xl"
              loading="lazy"
              width="100%"
              height="auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};