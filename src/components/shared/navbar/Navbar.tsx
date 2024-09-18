import React from "react";
import Container from "@/components/ui/Container";
import TopNavBar from "./TopNavBar";
import Image from "next/image";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { MenuIcon } from "../icons/Icons";

export default function Navbar() {
  return (
    <nav className="">
      {/* top navbar  */}
      <TopNavBar />
      {/* main navbar  */}
      <div>
        <Container className="py-4 flex justify-between items-center">
          {/* logo section  */}
          <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt="Logo" width={90} height={90} className="w-16 md:w-20" />
            <div className="uppercase">
              <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tighter font-semibold">US Prime Properties</h1>
              <p className="md:text-md text-sm font-medium">Powered by us prime land</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden lg:block">
            <ul className="flex gap-5 font-medium text-primary">
              {navLinks?.map((navLinks, i: number) => {
                return (
                  <li key={i}>
                    <Link href={navLinks?.path}>{navLinks?.name}</Link>
                  </li>
                );
              })}
            </ul>
            </div>
            <div className="flex items-center gap-5">
                <button className="bg-primary sm:block hidden px-7 py-1 rounded-2xl text-white">Contact Us</button>
                <div className="border w-fit p-3 rounded-full text-2xl">
                    <MenuIcon />
                </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
