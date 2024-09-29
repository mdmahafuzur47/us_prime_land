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
        <Link className={`${path === link?.path ? "bg-gray-200 " : ""} py-2 px-2 rounded-md shadow-sm hover:bg-gray-200`} href={link.path} key={index}>
          <div className="text-xl flex items-center gap-2 ">
            <MenuIcon />
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
