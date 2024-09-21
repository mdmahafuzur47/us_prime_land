import Image from "next/image";
import React from "react";

export default function SharedHeroSection({title}:{title:string}) {
  return (
    <div className="bg-gradient-to-t h-[200px] relative rounded-xl from-[#ffffff] to-[#1111114b] to-50% flex justify-center items-center">
      <h1 className="text-white font-bold text-center text-3xl md:text-5xl relative z-10">
       {title}
      </h1>
      <div className="absolute w-full bottom-4 px-3 md:px-16">
        <Image
          src={"/US PRIME PROPERTIES.png"}
          alt="US PRIME PROPERTIES"
          width={2000}
          height={150}
          className="xl:h-[90px] lg:h-[60px] h-[40px]"
        />
      </div>
    </div>
  );
}
