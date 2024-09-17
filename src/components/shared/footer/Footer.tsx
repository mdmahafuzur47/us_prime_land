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
    <div className="mx-5 relative mt-36">
      <footer className="bg-myBlue  pt-20 pb-8 rounded-md text-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center">
            <div className="flex flex-col items-center">
              <Image
                src={"/Group 29.png"}
                alt="logo logo"
                width={180}
                height={50}
              />
              {/* <h4 className="flex mt-1 uppercase italic text-center flex-col text-xl">
              US Prime Properties
              <br />
              Powered by us prime land
              <br />
              EST. 2006
            </h4> */}
              <p className="text-center text-[12px] mt-3 text-gray-200">
                Quisque porta sed non ex orci quis ac nibh diam scelerisque quis
                consectetur odio Vestibulum enim. nisl. quis ultrices nibh
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full ml-5">
                <h1 className="mb-5 font-semibold text-xl">Contact Info</h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center  gap-1 font-medium">
                  <LocationIcon className="text-xl" />
                  <p>7509 LUPINE DR 33610, Tampa, FL.</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <PhoneCallIcon className="text-xl" />
                  <p>(941) 284-9653</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <EmailIcon className="text-xl" />
                  <p>usprimeland@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:ml-20">
              <div className="w-full">
                <h1 className="mb-5 font-semibold text-xl">Quick Links</h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Home</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>About Us</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Properties</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Testimonials</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:ml-8">
              <div className="w-full">
                <h1 className="mb-5 font-semibold text-xl">Legal</h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Contact Us</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Blogs / News</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>Gallery</p>
                </div>
                <div className="flex items-center  gap-1 font-medium">
                  <RightArrow className="text-xl" />
                  <p>FAQs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-3 text-4xl">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <YoutubeIcon />
            </div>
            <Image
              src={"/Mask group.png"}
              alt="logo logo"
              width={180}
              height={50}
            />
          </div>
        </Container>
      </footer>
      <div className="text-primary py-2 px-10 flex gap-2 items-center justify-between text-sm">
        <p className="">
          Copyright (c) 2024 US Prime Properties. All rights reserved. This
          website design & developed by Paradise Solution
        </p>
        <div className="font-medium">
          <p>
            <Link href={"/"} className="underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href={"/"} className="underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>

      {/* Subscribe Section  */}
      <div className="w-full flex justify-center absolute -top-[13%] ">
        <div className="max-w-5xl w-full items-center gap-5 bg-secondary flex justify-between px-10 py-7 rounded-2xl shadow-md">
          <div>
            <h1 className="text-myBlue text-4xl font-semibold">
              Subscribe Our Newsletter
            </h1>
            <p>For updated news, blogs & property information</p>
          </div>
          <div className="flex ">
            <input
              type="text"
              placeholder="Your Email Address"
              className="border-2 border-primary px-4 py-2 rounded-md w-full"
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
