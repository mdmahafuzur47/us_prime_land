import { PhoneCallIcon } from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <Container className="mt-20 flex gap-8">
        <div className="flex-1">
          <CommonHeader title="WHY CHOOSE US" />
          <h1 className="text-5xl mb-5 mt-3 font-semibold">
            Let&apos;s Find the Right Selling Option for you
          </h1>
          <p>
            Placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
            Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
            placerat odio vitae fringilla lorem. maximus laoreet venenatis at,
            vitae elit. sed diam tincidunt lobortis,
          </p>

          <div className="mt-8 flex  flex-col gap-3">
            <div className="flex gap-3">
              <Image
                src={"/why/Verified.png"}
                alt="Img"
                width={30}
                height={25}
              />
              <p className="text-xl font-medium">Find Excellent Deals</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/why/Verified.png"}
                alt="Img"
                width={30}
                height={25}
              />
              <p className="text-xl font-medium">
                Friendly Host & Fast Support
              </p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/why/Verified.png"}
                alt="Img"
                width={30}
                height={25}
              />
              <p className="text-xl font-medium">List Your Own Property</p>
            </div>
          </div>

          <button className="bg-myBlue mt-6 text-white py-2 px-14 rounded-lg text-xl font-medium">
            Read More
          </button>
        </div>
        <div className="relative flex-1 flex gap-4">
          <Image
            src={"/why/Rectangle 78.png"}
            alt="Img"
            width={300}
            height={500}
            className="mt-20"
          />
          <Image
            src={"/why/Rectangle 78.png"}
            alt="Img"
            width={300}
            height={500}
            className="mb-10"
          />
          <div className="absolute -bottom-5 w-full flex justify-center">
            <div className="w-60 p-5 rounded-lg shadow-lg bg-primary flex flex-col items-center text-white">
              <p className="text-[17px] font-medium text-center">
                100K+ Happy Clients
              </p>
              <div className="mt-5 flex">
                <Image
                  src={"/why/Ellipse 26.png"}
                  alt="Img"
                  width={50}
                  height={50}
                  className="-mr-3 drop-shadow-md rounded-full ring-4 ring-primary"
                />
                <Image
                  src={"/why/Ellipse 26.png"}
                  alt="Img"
                  width={50}
                  height={50}
                  className="-mr-3 drop-shadow-md rounded-full ring-4 ring-primary"
                />
                <Image
                  src={"/why/Ellipse 26.png"}
                  alt="Img"
                  width={50}
                  height={50}
                  className="-mr-3 drop-shadow-md rounded-full ring-4 ring-primary"
                />
                <Image
                  src={"/why/Ellipse 26.png"}
                  alt="Img"
                  width={50}
                  height={50}
                  className="-mr-3 drop-shadow-md rounded-full ring-4 ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CTA />
    </>
  );
}

const CTA = () => {
  return (
    <Container className="mt-20 w-full items-center bg-secondary flex justify-between px-16 py-10 rounded-2xl shadow-md gap-10">
      <div className="flex-1">
        <h1 className="text-myBlue text-4xl font-semibold">
          Need Help? Talk to Our Expert.
        </h1>
        <p className="mt-2">
          Placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
          Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
          placerat odio vitae fringilla lorem.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center rounded-md ring-2 px-4 py-2 bg-white ">
          <PhoneCallIcon className="text-xl" />
          <p className="font-medium text-gray-600">(941) 284-9653</p>
        </div>
        <button className="bg-myBlue text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </div>
    </Container>
  );
};
