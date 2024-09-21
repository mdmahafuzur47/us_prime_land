import {
  EmailIcon,
  LocationIcon,
  PhoneCallIcon,
} from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Container>
        <SharedHeroSection title="Contact Us" />

        <div className="flex flex-col items-center justify-center mt-10">
          <CommonHeader title="Get In Touch" />
          <h1 className="text-2xl md:text-4xl mb-10 mt-3 font-semibold">
            Our Contact Information
          </h1>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="bg-myBlue flex items-center gap-5 text-white rounded-xl px-5 py-4">
              <div className="bg-white text-black text-3xl p-3 rounded-full">
                <LocationIcon />
              </div>
              <div>
                <h1 className="text-xl font-medium mb-1">Our Address</h1>
                <p>7509 LUPINE DR 33610, Tampa, FL.</p>
              </div>
            </div>
            <div className="bg-myBlue flex items-center gap-5 text-white rounded-xl px-5 py-4">
              <div className="bg-white text-black text-3xl p-3 rounded-full">
                <PhoneCallIcon />
              </div>
              <div>
                <h1 className="text-xl font-medium mb-1">Phone Number</h1>
                <p>(941) 284-9653</p>
              </div>
            </div>
            <div className="bg-myBlue flex items-center gap-5 text-white rounded-xl px-5 py-4">
              <div className="bg-white text-black text-3xl p-3 rounded-full">
                <EmailIcon />
              </div>
              <div>
                <h1 className="text-xl font-medium mb-1">Email Address</h1>
                <p>usprimeland@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="mx-1 rounded-xl overflow-hidden mt-20 md:mx-5 flex">
        <div
          className="w-1/2 relative"
          style={{
            backgroundImage: "url('/img.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full bg-[#0000008e]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-10 py-8 rounded-md w-fit h-fit shadow size-5">
            <h1 className="text-2xl font-semibold mb-6">Schedule A Visit</h1>
            <form className="w-full flex flex-col gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="searchInput outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="searchInput outline-none"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="searchInput outline-none"
              />
              <textarea
                rows={6}
                cols={5}
                id=""
                className="searchInput"
                placeholder="your Message"
              ></textarea>
              <input
                className="bg-myBlue px-8 py-2 w-fit text-white font-semibold rounded-md mt-4"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58476.15199141296!2d88.80759087843323!3d23.648782482063684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9313db856084b%3A0x7f08064ccfe08eb0!2sChuadanga!5e0!3m2!1sen!2sbd!4v1726746169940!5m2!1sen!2sbd"
              className="w-full"
              height="650"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto mt-20">
        <CommonHeader title="Get In Touch" />
        <h1 className="text-2xl text-center md:text-4xl mb-10 mt-3 font-semibold">
          Schedule A Visit
        </h1>
        <form className="w-full flex flex-col gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="searchInput outline-none"
          />
          <input
            type="text"
            placeholder="Your Role"
            className="searchInput outline-none"
          />
          <input
            className="bg-myBlue p-2 text-white font-semibold rounded-md mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}
