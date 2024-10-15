import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React, { useEffect } from "react";
import { LandCard } from "../properties/land/LandCard";
import PropertiesCard from "../properties/home/PropertiesCard";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function FeaturedProperties() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smoother animation duration (1 second)
      easing: "ease-in-out", // Smooth easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="mx-1 md:mx-5 rounded-md py-16 mt-20 bg-secondary">
      <Container className="flex-col justify-center flex items-center">
        {/* Animate the CommonHeader */}
        <div data-aos="fade-up">
          <CommonHeader title="PROPERTIES" />
        </div>
        <h1 className="text-2xl md:text-4xl mb-10 mt-3 font-semibold" data-aos="fade-up">
          Featured Properties
        </h1>

        <div className="w-full">
          <h1 className="text-start mb-3 text-xl md:text-2xl font-semibold" data-aos="fade-up">
            Land &gt; &gt; &gt;
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          {/* Animate each LandCard */}
          <LandCard />
          <LandCard />
          <LandCard />
          <LandCard />
        </div>
        <div className="w-full mt-16">
          <h1 className="text-start mb-3 text-xl md:text-2xl font-semibold" data-aos="fade-up">
            Home &gt; &gt; &gt;
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          {/* Animate each PropertiesCard */}
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
      </Container>
    </div>
  );
}
