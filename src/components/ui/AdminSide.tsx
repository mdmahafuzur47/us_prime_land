import Image from "next/image";
import React from "react";
import AdminLinks from "../shared/navbar/AdminLinks";
import Link from "next/link";

export default function AdminSide({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      className={`fixed  md:static top-0 left-0 z-[999] bg-white h-full md:h-auto transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-80 md:w-full py-3`}
    >
      <Link href={"/"} className="flex px-3 gap-1 mt-10 md:mt-0 items-center mb-8">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={90}
          height={90}
          className="w-16"
        />
        <div className="uppercase">
          <h1 className="text-[18px] tracking-tighter font-semibold">
            US Prime Properties
          </h1>
          <p className="text-[13px] font-medium">
            Powered by US Prime Land
          </p>
        </div>
      </Link>
 
        <AdminLinks />
      
      {/* Add close button for mobile */}
      <button
        className="md:hidden absolute top-4 right-4 text-2xl"
        onClick={toggleSidebar}
      >
        ✕
      </button>
    </div>
  );
}
