import CommonHeader from "@/components/ui/CommonHeader";
import Image from "next/image";
import React from "react";

export default function OurGallery() {
  return (
    <div className="w-full flex flex-col items-center">
      <CommonHeader left={true} title="Gallery" />
      <h1 className="text-3xl md:text-5xl mb-5 mt-4 font-semibold">
        Our Photo Gallery
      </h1>

      <div className="mt-10 grid grid-cols-4 gap-5">
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
        <Image
          src={"/img.png"}
          alt="logo"
          width={1000}
          height={600}
          className="shadow rounded-xl object-cover w-full h-[250px]"
        />
      </div>
    </div>
  );
}
