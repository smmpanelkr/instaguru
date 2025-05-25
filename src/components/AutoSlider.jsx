import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "./ui/Skeleton";

const mobileBanners = [
  {
    id: 1,
    src: "/banner/banner-1.webp",
    alt: "Banner 1",
    width: 1000,
    height: 367
  },
  {
    id: 2,
    src: "/banner/banner-2.webp",
    alt: "Banner 2",
    width: 1000,
    height: 367
  },
  {
    id: 3,
    src: "/banner/banner-3.webp",
    alt: "Banner 3",
    width: 1000,
    height: 367
  },
];

const AutoSlider = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

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
            <div className="relative">
              {!loadedImages[banner.id] && (
                <Skeleton className="absolute inset-0 w-full aspect-[2000/734]" />
              )}
              <LazyLoadImage
                src={banner.src}
                alt={banner.alt}
                width={banner.width}
                height={banner.height}
                className="w-full object-cover rounded-xl aspect-[2000/734]"
                afterLoad={() => handleImageLoad(banner.id)}
                loading={banner.id === 1 ? "eager" : "lazy"}
                fetchpriority={banner.id === 1 ? "high" : "auto"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;