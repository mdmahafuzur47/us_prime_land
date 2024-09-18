import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React from "react";
import PropertiesCard from "../properties/PropertiesCard";

export default function FeaturedProperties() {
  return (
    <div className="mx-5 rounded-md py-16 mt-20  bg-secondary ">
      <Container className="flex-col justify-center flex items-center">
        <CommonHeader title="PROPERTIES" />
        <h1 className="text-4xl mb-10 mt-3 font-semibold">
          Featured Properties
        </h1>
        <div className="grid grid-cols-4 gap-5">
         <PropertiesCard />
         <PropertiesCard />
         <PropertiesCard />
         <PropertiesCard />
        </div>
      </Container>
    </div>
  );
}



