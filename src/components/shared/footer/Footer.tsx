import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneCallIcon,
  RightArrow,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-1 lg:mx-5 relative mt-36">
      <footer className="bg-myBlue pt-20 pb-8 rounded-md text-white">
        <Container className="mt-28 sm:mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-12 lg:gap-5 items-center">
            <div className="flex flex-col items-center">
              <Image
                src={"/Group 29.png"}
                alt="logo"
                width={180}
                height={50}
              />
              <p className="text-center text-[12px] mt-3 text-gray-200">
                Quisque porta sed non ex orci quis ac nibh diam scelerisque quis
                consectetur odio. Vestibulum enim nisl quis ultrices nibh.
              </p>
            </div>
            <div className="flex flex-col lg:items-center">
              <h1 className="mb-5 font-semibold text-xl">Contact Info</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 font-medium">
                  <LocationIcon className="text-xl" />
                  <p>7509 LUPINE DR 33610, Tampa, FL.</p>
                </div>
                <div className="flex items-center gap-1 font-medium">
                  <PhoneCallIcon className="text-xl" />
                  <p>(941) 284-9653</p>
                </div>
                <div className="flex items-center gap-1 font-medium">
                  <EmailIcon className="text-xl" />
                  <p>usprimeland@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:ml-20 lg:items-start md:items-center">
              <h1 className="mb-5 font-semibold lg:text-start md:text-center text-xl">Quick Links</h1>
              <div className="flex flex-col gap-2">
                {["Home", "About Us", "Properties", "Testimonials"].map(link => (
                  <div key={link} className="flex items-center gap-1 font-medium">
                    <RightArrow className="text-xl" />
                    <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                      <p>{link}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:ml-8 lg:items-start md:items-center">
              <h1 className="mb-5 font-semibold text-xl lg:text-start md:text-center">Legal</h1>
              <div className="flex flex-col gap-2">
                {["Contact Us", "Blogs / News", "Gallery", "FAQs"].map(link => (
                  <div key={link} className="flex items-center gap-1 font-medium">
                    <RightArrow className="text-xl" />
                    <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                      <p>{link}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex md:flex-row flex-col gap-5 items-center justify-between">
            <div className="flex gap-3 text-3xl md:text-4xl">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <YoutubeIcon />
            </div>
            <Image
              src={"/Mask group.png"}
              alt="logo"
              width={180}
              height={50}
            />
          </div>
        </Container>
      </footer>
      <div className="text-primary py-2 px-3 lg:px-10 flex md:flex-row flex-col gap-2 items-center justify-between text-sm">
        <p className="text-center">
          Copyright (c) 2024 US Prime Properties. All rights reserved. This
          website design & developed by Paradise Solution.
        </p>
        <div className="font-medium">
          <p>
            <Link href={"/privacy-policy"} className="underline">Privacy Policy</Link>{" "}
            |{" "}
            <Link href={"/terms-and-conditions"} className="underline">Terms & Conditions</Link>
          </p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full flex justify-center absolute -top-[8%] md:-top-[13%] ">
        <div className="max-w-4xl mx-4 md:mx-3 xl:max-w-5xl w-full items-center gap-2 md:gap-5 bg-secondary flex md:flex-row flex-col justify-between px-3 py-8 md:px-10 md:py-7 rounded-2xl shadow-md">
          <div>
            <h1 className="text-myBlue text-xl text-center sm:text-start sm:text-2xl xl:text-4xl font-semibold">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-center sm:text-start">For updated news, blogs & property information.</p>
          </div>
          <div className="flex items-center sm:flex-row flex-col gap-2 sm:gap-0">
            <input
              type="email" // Changed to 'email' for better semantics
              placeholder="Your Email Address"
              className="border-2 border-primary px-4 py-2 rounded-md w-full"
              required // Added required attribute
            />
            <button className="bg-myBlue text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
