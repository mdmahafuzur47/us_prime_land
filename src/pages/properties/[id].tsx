import {
  ContactIcon,
  LoveIcon,
  ShareIcon,
} from "@/components/shared/icons/Icons";
import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import Image from "next/image";
import React from "react";

export default function PropertyDetails() {
  return (
    <Container className="mt-3">
      <SharedHeroSection />

      {/* property details images  */}
      <section className="mt-2 grid grid-cols-7 gap-2">
        <div className="col-span-2 flex flex-col gap-2">
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md"
          />
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md"
          />
        </div>
        <div className="col-span-3">
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md h-full"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md"
          />
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md"
          />
        </div>
      </section>
      <div className="mt-5 flex w-full gap-8">
        {/* properties details  */}
        <div className="flex-1 w-full">
          <div className="mb-3">
            <h1 className="text-3xl font-medium mb-1">$555,000 • 120 Acres</h1>
            <p>River Front Drive, Cordova, AL 35550 - Walker County</p>
          </div>
          <div className="flex">
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Recreational
            </button>
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Timberland
            </button>
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Hunting
            </button>
          </div>
        </div>
        {/* side section  */}
        <div className="">
          <div className="flex gap-4">
            <div className="border-2 text-gray-700 px-8 shadow py-2 border-dashed rounded-2xl flex items-center gap-1">
              <LoveIcon className="text-2xl" />
              <p className="font-medium">Save</p>
            </div>
            <div className="border-2 text-gray-700 px-8 shadow py-2 border-dashed rounded-2xl flex items-center gap-1">
              <ShareIcon className="text-2xl" />
              <p className="font-medium">Share</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center px-4 py-2 bg-[#1b3254] text-white rounded-lg mt-5">
              <ContactIcon className="text-2xl" />
              <p className="font-medium">Contact Seller</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
