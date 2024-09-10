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
        slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide></SwiperSlide> */}
        {children}
      </Swiper>
    </div>
  );
}
