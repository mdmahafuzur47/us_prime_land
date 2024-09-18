import Image from "next/image";
import React from "react";

export default function CommonHeader({ title }: { title?: string }) {
  return (
    <div className="flex gap-1 items-center">
      <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
      <h1 className="md:text-xl text-gray-600 uppercase font-semibold">
        {title}
      </h1>
    </div>
  );
}
