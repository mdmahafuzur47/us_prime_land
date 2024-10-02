import Image from "next/image";
import React from "react";

export default function CommonHeader({ title,left }: { title?: string,left?: boolean }) {
  return (
    <div className={`${left ? "justify-start" : "justify-center"} flex gap-2 items-center`}>
      <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
      <h1 className="md:text-xl text-gray-600 uppercase font-semibold">
        {title}
      </h1>
    </div>
  );
}
