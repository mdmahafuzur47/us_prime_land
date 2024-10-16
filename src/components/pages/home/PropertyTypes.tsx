import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Slider from "@/components/ui/Slider";
import Image from "next/image";
import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function PropertyTypes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  

  return (
    <div className="mx-1">
      <Container className="mt-20 flex flex-col justify-center items-center">
        {/* Apply fade-up animation to the header */}
        <div data-aos="fade-up">
          <CommonHeader title="Property types" />
          <h1 className="text-2xl text-center md:text-4xl mb-10 mt-3 font-semibold">
            Explore Properties Types
          </h1>
        </div>
      </Container>

      {/* Apply animation to each property card */}
      <Slider>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
      </Slider>
    </div>
  );
}

const PropertyCard = () => {
  return (
    <div
      className="bg-primary px-5 py-4 rounded-lg text-center"
      data-aos="zoom-in" // Zoom-in animation for each card
    >
      <div className="flex justify-center">
        <div className="bg-white w-fit p-4 rounded-full">
          <Image
            src={"/propertiesImg/Capa_1.png"}
            alt="property"
            width={35}
            height={35}
          />
        </div>
      </div>
      <h1 className="md:text-xl mt-3 mb-1 font-semibold text-white">Ranches</h1>
      <p className="text-gray-200 text-sm md:text-md">42 Properties</p>
    </div>
  );
};
