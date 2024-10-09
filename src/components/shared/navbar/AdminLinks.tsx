import React from "react";
import { MenuIcon } from "../icons/Icons";
import Link from "next/link";
import { adminNavLinks } from "./navLinks";
import { useRouter } from "next/router";

export default function AdminLinks() {
    const path = useRouter().pathname;
  return (
    <div className="flex flex-col gap-3">
      {adminNavLinks.map((link, index) => (
        <Link className={`${path === link?.path ? "bg-blue-600 text-white" : "text-black"} py-2 px-4 hover:bg-blue-500 hover:text-white transition-all duration-100`} href={link.path} key={index}>
          <div className="text-[17px] font-medium flex items-center gap-2 ">
            <MenuIcon />
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
