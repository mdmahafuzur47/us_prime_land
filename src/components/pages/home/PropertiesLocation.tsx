import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React from "react";

export default function PropertiesLocation() {
  return (
    <div className="bg-[#9fdbff] py-20 mt-20 mx-5 rounded-lg">
      <Container className="flex flex-col items-center justify-center">
        <CommonHeader title="LOCATION" />
        <h1 className="text-4xl mb-10 mt-3 font-semibold">
          Properties by Cities
        </h1>

        <div className="w-full grid grid-cols-4 gap-5">
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
      </Container>
    </div>
  );
}

const PropertiesCard = () => {
  return (
    <div
      className="overflow-hidden relative text-white rounded-md"
      style={{
        background: "url('/img.png')",
        backgroundSize: "cover",
        height: "400px",
        width: "100%",
      }}
    >
      <div className="p-5">
        <h1 className="text-3xl font-semibold">Tampa</h1>
        <p>68 Properties</p>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center">
        <button className="bg-myBlue py-2 px-7 rounded-lg text-xl font-medium">
          View All
        </button>
      </div>
    </div>
  );
};