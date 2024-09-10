/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ children }: { children: any }) {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide></SwiperSlide> */}
        {children}
      </Swiper>
    </>
  );
}
