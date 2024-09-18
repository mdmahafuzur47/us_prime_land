/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef } from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function Slider({ children }: { children: any }) {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // Stop autoplay on mouse enter
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // Restart autoplay on mouse leave
    }
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        speed={1800}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },

          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {/* <SwiperSlide></SwiperSlide> */}
        {children}
      </Swiper>
    </div>
  );
}
