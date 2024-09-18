import { HomeSearchIcon } from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

export default function AboutOurPrimeProperties() {
  return (
    <Container className="mt-20 mb-40">
      <div className="flex lg:flex-row flex-col items-center gap-14 xl:gap-5">
        <div className="relative overflow-hidden lg:overflow-visible flex-1">
          <Image
            src={"/aboutOur/logo-logo.png"}
            alt="logo"
            width={250}
            height={180}
            className="absolute object-cover top-0 left-0 w-[150px] md:w-[250px]"
          />
          <Image
            src={"/aboutOur/Rectangle 57.png"}
            alt="logo"
            width={450}
            height={500}
            className="w-[480px] object-cover relative top-14 left-16 md:left-28"
          />
          <Image
            src={"/aboutOur/Rectangle 58.png"}
            alt="logo"
            width={250}
            height={180}
            className="w-[150px] md:w-[250px] object-cover absolute bottom-5 lg:-bottom-8 left-0"
          />
        </div>
        <div className="flex-1">
          <CommonHeader title="About US PRIME PROPERTIES" />
          <h1 className="text-3xl md:text-5xl mb-5 mt-3 font-semibold">
            The Leading Real Estate About Marketplace.
          </h1>
          <p>
            placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
            Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
            placerat odio vitae fringilla lorem. maximus laoreet venenatis at,
            vitae elit. sed diam tincidunt lobortis,{" "}
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-full text-xl">
                <HomeSearchIcon />
              </div>
              <p className="text-xl font-medium">Customize Planning</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-full text-xl">
                <HomeSearchIcon />
              </div>
              <p className="text-xl font-medium">Beautiful Scene Around</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-full text-xl">
                <HomeSearchIcon />
              </div>
              <p className="text-xl font-medium">Exception al Lifestyle</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-full text-xl">
                <HomeSearchIcon />
              </div>
              <p className="text-xl font-medium">Fully Secure Investment</p>
            </div>
          </div>
          <button className="bg-myBlue mt-6 text-white py-2 px-14 rounded-lg text-xl font-medium">
            Read More
          </button>
        </div>
      </div>
    </Container>
  );
}
