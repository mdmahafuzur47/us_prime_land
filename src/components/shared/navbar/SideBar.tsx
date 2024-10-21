/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import {
  CloseIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneCallIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/Icons";

export default function SideBar({ close,open }: any) {
  return (
    <section className={`fixed z-[999] top-0 right-0 max-w-[400px] overflow-auto h-screen  bg-white w-full duration-500 transition-all ${open ? "translate-x-0": "translate-x-full"}`}>
      <div className="px-5 py-3 flex flex-col items-center">
        <div className="flex justify-end w-full px-5 py-3">
          <div
            onClick={close}
            className="text-3xl rounded-full border shadow bg-gray-50"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="flex pt-5 items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={90}
            height={90}
            className="w-16 md:w-20"
          />
          <div className="uppercase text-center">
            <h1 className="text-xl lg:text-2xl tracking-tighter font-semibold">
              US Prime Properties
            </h1>
            <p className="md:text-[17px] text-sm font-medium">
              Powered by us prime land
            </p>
            <p className="md:text-[17px] text-sm font-medium">Est. 2006</p>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h1 className="text-2xl font-semibold text-primary">About US</h1>
          <p className="my-5 text-justify text-sm">
            placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
            Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
            placerat odio vitae fringilla lorem. maximus laoreet venenatis at,
            vitae elit. sed diam tincidunt lobortis,{" "}
          </p>
          <button className="bg-primary font-medium mt-2 px-5 py-2 rounded-2xl text-white">
            Contact Us
          </button>
        </div>

        <div className="mt-8 w-full">
          <h1 className="text-2xl font-semibold text-primary">Contact Info</h1>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <LocationIcon className="text-2xl font-medium text-primary" />
              <p className="font-medium">7509 LUPINE DR 33610, Tampa, FL.</p>
            </div>
            <div className="flex items-center gap-1">
              <PhoneCallIcon className="text-2xl font-medium text-primary" />
              <p className="font-medium">(941) 284-9653</p>
            </div>
            <div className="flex items-center gap-1">
              <EmailIcon className="text-2xl font-medium text-primary" />
              <p className="font-medium">usprimeland@yahoo.com</p>
            </div>
          </div>
          <div className="mt-8 flex gap-2 text-2xl">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
