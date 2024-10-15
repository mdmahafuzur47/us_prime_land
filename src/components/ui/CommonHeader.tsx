import Image from "next/image";
import React from "react";

interface CommonHeaderProps {
  title?: string;
  left?: boolean;
  logoSrc?: string; // Optional logo source prop
}

export default function CommonHeader({ title = "Default Title", left = false, logoSrc = "/logo.png" }: CommonHeaderProps) {
  return (
    <div className={`${left ? "justify-start" : "justify-center"} flex gap-2 items-center`}>
      <Image src={logoSrc} alt="Logo" width={40} height={40} />
      <h1 className="md:text-xl text-gray-600 uppercase font-semibold" aria-label={title}>
        {title}
      </h1>
    </div>
  );
}
