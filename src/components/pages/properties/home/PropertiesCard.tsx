import { HomeSearchIcon } from "@/components/shared/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PropertiesCard() {
  return (
    <Link
      href={"/properties/home/12345"}
      className="overflow-hidden rounded-lg text-white bg-primary"
      data-aos="fade-up" // Add AOS attribute for animation
    >
      <Image
        src={"/img.png"}
        alt="Property"
        width={300}
        height={250}
        className="h-[200px] w-full"
      />
      <div className="px-5 py-2">
        <div className="flex justify-between mb-2 items-center">
          <p className="text-xl font-medium">$150,000</p>
          <p className="font-medium">View Property</p>
        </div>
        <p className="text-sm mb-4">New York City, CA, USA</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2 border-r-2 border-b-2 p-[6px]">
            <HomeSearchIcon className="text-xl text-black" />
            <p className="text-sm">4 Bedrooms</p> {/* Corrected spelling from "Bedsroom" to "Bedrooms" */}
          </div>
          <div className="flex items-center gap-2 border-b-2 p-[6px]">
            <HomeSearchIcon className="text-xl text-black" />
            <p className="text-sm">2 Bathrooms</p> {/* Changed for better variety */}
          </div>
          <div className="flex items-center gap-2 border-r-2 p-[6px]">
            <HomeSearchIcon className="text-xl text-black" />
            <p className="text-sm">1500 sqft</p> {/* Added property size */}
          </div>
          <div className="flex items-center gap-2 p-[6px]">
            <HomeSearchIcon className="text-xl text-black" />
            <p className="text-sm">Year Built: 2022</p> {/* Added year built */}
          </div>
        </div>
      </div>
    </Link>
  );
}
