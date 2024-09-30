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
      className={`fixed  md:static top-0 left-0 z-50 h-full md:h-auto transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-80 bg-red-100 md:bg-transparent md:w-full px-5 py-3`}
    >
      <Link href={"/"} className="flex gap-2 mt-10 md:mt-0 items-center mb-8">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={90}
          height={90}
          className="w-16 md:w-20"
        />
        <div className="uppercase">
          <h1 className="text-xl tracking-tighter font-semibold">
            US Prime Properties
          </h1>
          <p className="md:text-md text-sm font-medium">
            Powered by US Prime Land
          </p>
        </div>
      </Link>
      <div className="px-4">
        <AdminLinks />
      </div>
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
