import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import TopNavBar from "./TopNavBar";
import Image from "next/image";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { DownArrow, MenuIcon } from "../icons/Icons";
import SideBar from "./SideBar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS animations

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Handle scroll event to toggle navbar fixed position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true); // Fix the navbar after scrolling 200px
      } else {
        setIsScrolled(false); // Reset navbar to normal
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="md:h-[128px]">
        {/* top navbar  */}
        <TopNavBar />
        {/* main navbar  */}
        <div
          className={`${
            isScrolled ? "fixed top-0 z-[999] shadow-lg " : "translate-y-0"
          } bg-white w-full transition-all duration-300`}
        >
          <Container className="py-4 flex justify-between items-center">
            {/* logo section  */}
            <Link href={"/"}>
              <div
                className="flex gap-2 items-center"
                data-aos="fade-right" // AOS animation for logo and title
              >
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
            </Link>
            <div data-aos="fade-left" className="flex items-center gap-5">
              <div className="hidden lg:block">
                <ul className="flex gap-5 font-medium text-primary">
                  {navLinks?.map((navLink, i: number) => (
                    <li key={i} className="relative group">
                      <div className="flex items-center gap-[1px]">
                        <Link href={navLink?.path}>{navLink?.name}</Link>
                        {navLink?.children && (
                          <DownArrow className="text-xl mt-1" />
                        )}
                      </div>
                      {/* children dropdown */}
                      {navLink?.children && (
                        <ul className="absolute z-[999] hidden group-hover:block w-[200px] bg-white rounded-b-md shadow pt-2">
                          {navLink?.children.map((child, index) => (
                            <li key={index}>
                              <Link
                                href={child.path}
                                className="block px-4 py-2 hover:bg-secondary hover:text-white transition-all duration-200"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-5">
                <Link href={"/contactUs"}>
                  <button className="bg-primary sm:block hidden px-7 py-1 rounded-2xl text-white">
                    Contact Us
                  </button>
                </Link>
                <div
                  onClick={toggleMenu}
                  className="border w-fit p-3 rounded-full text-2xl"
                  data-aos="zoom-in" // AOS animation for menu icon
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>
      {/* side bar navigation  */}
      <SideBar open={open} close={toggleMenu} />
    </>
  );
}
