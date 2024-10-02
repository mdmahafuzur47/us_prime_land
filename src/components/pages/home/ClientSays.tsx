/* eslint-disable @typescript-eslint/no-explicit-any */
import { StarIcons } from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ClientSays() {
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
    <Container className="mt-20 flex flex-col justify-center items-center">
      <CommonHeader title="Why Choose Us" />
      <h1 className="text-3xl md:text-4xl mb-10 mt-3 font-semibold">
        What My Client Says
      </h1>
      {/* <div className="grid mb-20 grid-cols-3 gap-10 items-center">
        <ClientSaysCard />
        <ClientSaysCard />
        <ClientSaysCard />
      </div> */}

      <div className="w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
          <SwiperSlide className="pb-20 pt-5">
            <ClientSaysCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

const ClientSaysCard = () => {
  return (
    <div className="w-full cursor-pointer relative rounded-md text-gray-200 transition-all duration-300 bg-[#3284c0] hover:bg-[#1b3254] px-4 pt-8 pb-12">
      <div className="text-4xl mb-3 flex justify-center gap-1 items-center">
        <StarIcons />
        <StarIcons />
        <StarIcons />
        <StarIcons />
        <StarIcons />
      </div>
      <p className="text-center">
        placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
        Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc placerat
        odio vitae fringilla lorem. maximus laoreet venenatis at, vitae elit.
        sed
      </p>
      <h1 className="mb-3 mt-4 text-center">-Md Mahafuzur Rahaman</h1>

      <div className="absolute -bottom-[18%] border-4 left-1/2 -translate-x-1/2 size-24 rounded-full overflow-hidden">
        <Image
          src={"/img.png"}
          alt="img"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
