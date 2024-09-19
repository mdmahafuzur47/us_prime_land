import React, { useState } from "react";
import Container from "@/components/ui/Container";
import TopNavBar from "./TopNavBar";
import Image from "next/image";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { DownArrow, MenuIcon } from "../icons/Icons";
import SideBar from "./SideBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="">
        {/* top navbar  */}
        <TopNavBar />
        {/* main navbar  */}
        <div>
          <Container className="py-4 flex justify-between items-center">
            {/* logo section  */}
            <div className="flex gap-2 items-center">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={90}
                height={90}
                className="w-16 md:w-20"
              />
              <div className="uppercase">
                <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tighter font-semibold">
                  US Prime Properties
                </h1>
                <p className="md:text-md text-sm font-medium">
                  Powered by us prime land
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="hidden lg:block">
                <ul className="flex gap-5 font-medium text-primary">
                  {navLinks?.map((navLink, i: number) => (
                    <li key={i} className="">
                      {navLink?.children ? (
                        <div className="flex relative group items-center gap-[1px]">
                          <Link href={navLink?.path}>{navLink?.name}</Link>
                          <DownArrow className="text-xl mt-1" />
                          {/* children dropdown */}
                          <div className="fixed top-[90px]  w-[200px] bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-10">
                            <ul className="py-2">
                              {navLink?.children.map((child, index) => (
                                <li key={index}>
                                  <Link
                                    href={child.path}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <Link href={navLink?.path}>{navLink?.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-primary sm:block hidden px-7 py-1 rounded-2xl text-white">
                  Contact Us
                </button>
                <div
                  onClick={toggleMenu}
                  className="border w-fit p-3 rounded-full text-2xl"
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>
      {/* side bar navigation  */}
      {open && <SideBar close={toggleMenu} />}
    </>
  );
}
