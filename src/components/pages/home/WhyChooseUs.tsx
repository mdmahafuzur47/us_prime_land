import { PhoneCallIcon } from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <Container className="mt-20 flex lg:flex-row flex-col items-center gap-8">
        <div className="flex-1" data-aos="fade-right">
          <CommonHeader title="WHY CHOOSE US" />
          <h1 className="text-3xl md:text-5xl mb-5 mt-3 font-semibold">
            Let&apos;s Find the Right Selling Option for you
          </h1>
          <p>
            Placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
            Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
            placerat odio vitae fringilla lorem. maximus laoreet venenatis at,
            vitae elit. sed diam tincidunt lobortis.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {/** Card items generated dynamically for scalability */}
            {[
              { text: "Find Excellent Deals", aos: "fade-up" },
              { text: "Friendly Host & Fast Support", aos: "fade-up" },
              { text: "List Your Own Property", aos: "fade-up" },
            ].map((item, index) => (
              <div className="flex gap-3" key={index} data-aos={item.aos}>
                <Image
                  src={"/why/Verified.png"}
                  alt="Verified Icon"
                  width={30}
                  height={25}
                />
                <p className="text-xl font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="bg-myBlue mt-6 text-white py-2 px-14 rounded-lg text-xl font-medium">
            Read More
          </button>
        </div>
        
        <div className="relative flex-1 flex gap-4" data-aos="fade-left">
          {/** Images stacked with space for the testimonial box */}
          <Image
            src={"/why/Rectangle 78.png"}
            alt="Property Image"
            width={300}
            height={500}
            className="mt-20"
          />
          <Image
            src={"/why/Rectangle 78.png"}
            alt="Property Image"
            width={300}
            height={500}
            className="mb-10"
          />
          <div className="absolute -bottom-5 w-full flex justify-center">
            <div className="w-60 p-5 rounded-lg shadow-lg bg-primary flex flex-col items-center text-white">
              <p className="text-[17px] font-medium text-center">
                100K+ Happy Clients
              </p>
              <div className="mt-5 flex">
                {/** Generate client images dynamically for cleaner code */}
                {Array(4)
                  .fill("/why/Ellipse 26.png")
                  .map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt="Client Image"
                      width={50}
                      height={50}
                      className="-mr-3 drop-shadow-md rounded-full ring-4 ring-primary"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CTA />
    </>
  );
}

export const CTA = () => {
  return (
    <Container>
      <div
        className="mt-20 w-full items-center bg-secondary flex md:flex-row flex-col justify-between rounded-2xl shadow-md gap-3 sm:gap-5 lg:gap-10 px-16 py-10"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <h1 className="text-myBlue text-center md:text-start sm:text-2xl lg:text-4xl font-semibold">
            Need Help? Talk to Our Expert.
          </h1>
          <p className="mt-2 text-sm lg:text-md text-center md:text-start">
            Placerat lacus, at hendrerit faucibus urna. dui. amet, felis, elit.
            Lorem non. Lorem massa viverra ipsum Ut placerat sodales. Nunc
            placerat odio vitae fringilla lorem.
          </p>
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-5">
          <div className="flex gap-2 items-center rounded-md ring-2 px-4 py-2 bg-white ">
            <PhoneCallIcon className="text-xl" />
            <p className="font-medium text-gray-600">(941) 284-9653</p>
          </div>
          <button className="bg-myBlue text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </Container>
  );
};
