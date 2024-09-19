import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full px-2 relative h-[88vh] flex flex-col justify-center items-center"
      >
        {/* wrapper  */}
        <div className="absolute  w-full h-full bg-gradient-to-t from-[#ffffff] to-[#1111114b] to-50%" />
        {/* content  */}
        <div className="z-10 flex flex-col w-full h-full items-center justify-center text-white text-center">
          <div className="flex gap-1 items-center">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={50}
              height={50}
              className="w-10 md:w-11"
            />
            <h1 className="md:text-xl font-semibold">
              WELCOME TO US PRIME PROPERTIES
            </h1>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-5 font-semibold">
            Invest Today in
            <br />
            Your Dream Properties
          </h3>
          <div className="">
            <p className="xl:w-[80ch]">
              placerat lacus, at hendrerit faucibus urna. dui. amet, felis,
              elit. Lorem non. Lorem massa viverra ipsum Ut placerat sodales.
              Nunc placerat odio vitae fringilla lorem. maximus laoreet
              venenatis at, vitae elit. sed diam tincidunt lobortis,
            </p>
          </div>

          <div className="mt-10 flex md:flex-row flex-col items-center gap-5">
            <button className="bg-myBlue text-white px-9 py-2 rounded-md">
              View Properties
            </button>
            <button className="bg-white text-black px-9 py-2 rounded-md">
              View Properties
            </button>
          </div>
        </div>
      </div>

      {/* text arrow  */}
      <Container className="">
        <Image
          src={"/US PRIME PROPERTIES.png"}
          alt="US PRIME PROPERTIES"
          width={2000}
          height={150}
          className="xl:h-[90px] lg:h-[60px] h-[40px]"
        />
      </Container>
    </>
  );
}
