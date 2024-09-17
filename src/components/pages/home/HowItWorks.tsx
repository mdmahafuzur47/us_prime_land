import { HomeSearchIcon } from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="bg-[#9fdbff] py-20 mt-20 mx-5 rounded-lg">
      <Container className="flex flex-col items-center justify-center">
        <CommonHeader title="HOW IT WORKS" />
        <h1 className="text-4xl mb-10 mt-3 font-semibold">
          Find a Perfect Home
        </h1>

        <div className="w-full grid grid-cols-4 gap-5">
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
        </div>
      </Container>
    </div>
  );
}

const HowItWorkCard = () => {
  return (
    <div className="bg-white flex flex-col items-center shadow rounded-md px-5 py-8 text-center">
      <div className="bg-myBlue text-white size-16 rounded-full text-4xl flex justify-center items-center mb-4">
        <HomeSearchIcon />
      </div>
      <h1 className="mb-1 text-xl font-medium">Find Property</h1>
      <p>Find your dream property with US PRIME PROPERTIES</p>
    </div>
  );
};
