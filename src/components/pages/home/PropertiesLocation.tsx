/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

export default function PropertiesLocation() {
  return (
    <div
      className="bg-[#9fdbff] py-20 mt-20 mx-1 md:mx-5 rounded-lg"
      data-aos="fade-up"
    >
      <Container className="flex flex-col items-center justify-center">
        <CommonHeader title="LOCATION" />
        <h1 className="text-2xl md:text-4xl mb-10 mt-3 font-semibold">
          Properties by Cities
        </h1>

        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <PropertiesByCityCard
            cityName="Tampa"
            propertiesCount={68}
            imageUrl="/img.png"
          />
          <PropertiesByCityCard
            cityName="Orlando"
            propertiesCount={45}
            imageUrl="/img.png"
          />
          <PropertiesByCityCard
            cityName="Miami"
            propertiesCount={32}
            imageUrl="/img.png"
          />
          <PropertiesByCityCard
            cityName="Jacksonville"
            propertiesCount={50}
            imageUrl="/img.png"
          />
        </div>
      </Container>
    </div>
  );
}

const PropertiesByCityCard = ({ cityName, propertiesCount, imageUrl }: any) => {
  return (
    <Link
      href={"/"}
      className="overflow-hidden relative text-white rounded-md"
      style={{
        background: `url('${imageUrl}')`,
        backgroundSize: "cover",
        height: "400px",
        width: "100%",
      }}
      data-aos="zoom-in"
    >
      <div className="p-5">
        <h1 className="text-3xl font-semibold">{cityName}</h1>
        <p>{propertiesCount} Properties</p>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center">
        <button className="bg-myBlue py-2 px-7 rounded-lg text-xl font-medium">
          View All
        </button>
      </div>
    </Link>
  );
};
