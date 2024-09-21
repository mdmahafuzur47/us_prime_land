import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React from "react";
import { LandCard } from "../properties/land/LandCard";
import PropertiesCard from "../properties/home/PropertiesCard";

export default function FeaturedProperties() {
  return (
    <div className="mx-1 md:mx-5 rounded-md py-16 mt-20  bg-secondary ">
      <Container className="flex-col justify-center flex items-center">
        <CommonHeader title="PROPERTIES" />
        <h1 className="text-2xl md:text-4xl mb-10 mt-3 font-semibold">
          Featured Properties
        </h1>

        <div className="w-full">
          <h1 className="text-start mb-3 text-xl md:text-2xl font-semibold">
            Land &gt; &gt; &gt;
          </h1> 
        </div>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <LandCard />
          <LandCard />
          <LandCard />
          <LandCard />
        </div>
        <div className="w-full mt-16">
          <h1 className="text-start mb-3 text-xl md:text-2xl font-semibold">
            Home &gt; &gt; &gt;
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
      </Container>
    </div>
  );
}
