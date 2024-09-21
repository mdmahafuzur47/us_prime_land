import ReadOurLatestNews from "@/components/pages/home/ReadOurLatestNews";
import {
  ContactIcon,
  LoveIcon,
  ShareIcon,
} from "@/components/shared/icons/Icons";
import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import Image from "next/image";
import React from "react";

export default function PropertyDetailsHome() {
  return (
    <Container className="mt-3">
      <SharedHeroSection />

      {/* property details images  */}
      <section className="mt-2 grid md:grid-cols-5 xl:grid-cols-7 gap-2">
        <div className="md:block hidden col-span-2">
          <div className=" flex flex-col gap-2">
            <Image
              src={"/img.png"}
              alt="US PRIME PROPERTIES"
              width={2000}
              height={900}
              className="w-full rounded-md"
            />
            <Image
              src={"/img.png"}
              alt="US PRIME PROPERTIES"
              width={2000}
              height={900}
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div className="col-span-3 w-full">
          <Image
            src={"/img.png"}
            alt="US PRIME PROPERTIES"
            width={2000}
            height={900}
            className="w-full rounded-md h-full"
          />
        </div>
        <div className="hidden xl:block col-span-2">
          <div className=" flex flex-col gap-2">
            <Image
              src={"/img.png"}
              alt="US PRIME PROPERTIES"
              width={2000}
              height={900}
              className="w-full rounded-md"
            />
            <Image
              src={"/img.png"}
              alt="US PRIME PROPERTIES"
              width={2000}
              height={900}
              className="w-full rounded-md"
            />
          </div>
        </div>
      </section>
      <div className="mt-5 flex lg:flex-row items-center lg:items-start flex-col w-full gap-10">
        {/* properties details  */}
        <div className="flex-1 w-full">
          <div className="mb-3">
            <h1 className="text-3xl font-medium mb-1">$555,000 • 120 Acres</h1>
            <p>River Front Drive, Cordova, AL 35550 - Walker County</p>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Recreational
            </button>
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Timberland
            </button>
            <button className="px-5 py-1 rounded-2xl text-sm font-semibold bg-primary text-white">
              Hunting
            </button>
          </div>

          <h4 className="text-xl font-medium mt-4">
            130 acres in Walker County, Alabama
          </h4>

          <h5 className="text-2xl font-medium mt-8 mb-3">
            Dos Lobos Ranch Featuring Nearly 2 Miles Of River Frontage
          </h5>
          <p>
            Rare opportunity to own acreage on the Mulberry Fork of the Black
            Warrior River with over half a mile of river frontage! This 130 acre
            tract of timberland has been professionally managed for several
            years and offers substantial timber value. The timber consists of a
            40 +/- year old plantation that has been thinned as well as natural
            timber. There are almost 3 miles of internal roads and trails, 3
            food plots, and a river-fed pond. This is a nature lovers dream
            property!{" "}
          </p>
          <div className="mt-8">
            <h5 className="text-2xl font-medium mb-3">Highlights</h5>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-5 rounded-xl shadow bg-secondary">
                <p>
                  Prime location along the North Canadian River with almost 2
                  miles of river frontage, ideal for wildlife habitats and
                  quality bucks
                </p>
              </div>
              <div className="p-5 rounded-xl shadow bg-secondary">
                <p>
                  Prime location along the North Canadian River with almost 2
                  miles of river frontage, ideal for wildlife habitats and
                  quality bucks
                </p>
              </div>
              <div className="p-5 rounded-xl shadow bg-secondary">
                <p>
                  Prime location along the North Canadian River with almost 2
                  miles of river frontage, ideal for wildlife habitats and
                  quality bucks
                </p>
              </div>
              <div className="p-5 rounded-xl shadow bg-secondary">
                <p>
                  Prime location along the North Canadian River with almost 2
                  miles of river frontage, ideal for wildlife habitats and
                  quality bucks
                </p>
              </div>
            </div>

            <h5 className="text-2xl font-medium mt-8 mb-3">Description</h5>
            <p>
              Dos Lobos Ranch is located on the North Canadian River with almost
              2 miles of river frontage and some of the most diverse habitat you
              will ever find. The quality of good bucks on the ranch is very
              good. There are 4 creeks that traverse across the property with
              many crossings with 6ft culverts and even bridges, creating great
              access throughout the entire property. This road system, with all
              the creek crossings, makes it easy to access the many stands from
              different directions based on wind and deer movement. Many food
              plots have been created throughout the property with strategically
              placed feeders, blinds and treestands. A new 7-acre lake was
              recently built, which is 25ft deep along the 900ft dam. The lake
              was built to the specifications of a Texas company specializing in
              trophy bass lake. There are 8 aerators and 2 ultrasonic devices
              for algae control. Bait fish were first established and then
              followed up with Florida and Northern strain bass. Within just a
              few years, this lake should be outstanding for trophy bass
              fishing. There are two aluminum docks as well as an upper deck for
              grilling or hanging out which is also next to a very authentic
              Teepee. There is something special about being inside a native
              American teepee. What a great place to meditate or meet with
              family and friends and enjoy the ancient warmth of the fire while
              telling stories.There is a comfortable 4bed  2bath home, a 40x60
              insulated shop with 16ft featuring a walk-in cooler, high pressure
              washer, MacroAir ceiling fans, and 3 oversized doors. An oversized
              generator with 1000gal propane tank will more than handle the
              electric needs in an emergency. A roomy storm shelter is also
              available.Many hours of hard work and thought were put into
              creating Dos Lobos Ranch. The owner spared no expense and has done
              everything first class to create a ranch setup for producing
              trophy deer, turkey, and giant bass. This turnkey ranch is ready
              for a new family to come and enjoy and take advantage of all it
              has to offer. Give Dean a call today and he will give you a
              private tour of this top-notch recreational property.
            </p>
          </div>

          <div className="mt-8">
            <h5 className="text-2xl font-medium mb-3">Location</h5>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58476.15199141296!2d88.80759087843323!3d23.648782482063684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9313db856084b%3A0x7f08064ccfe08eb0!2sChuadanga!5e0!3m2!1sen!2sbd!4v1726746169940!5m2!1sen!2sbd"
                className="w-full rounded-md shadow"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mt-8">
            <h5 className="text-2xl font-medium mb-1">Directions</h5>
            <p>Agent must be present for showing.</p>

            <button className="px-5 py-1 mt-5 rounded-2xl font-semibold bg-primary text-white">
              Contact Seller for Directions
            </button>
          </div>

          <div className="mt-8">
            <h5 className="text-2xl font-medium mb-3">Property Video</h5>
            <div>
              <iframe
                className="w-full rounded-md shadow"
                height="450"
                src="https://www.youtube.com/embed/jPkBJY1KI_Q?si=yHD91eQekNiygLbj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* side section  */}
        <div className="w-[30%]">
          <div className="flex gap-4 justify-center">
            <div className="border-2 text-gray-700 px-8 shadow py-2 border-dashed rounded-2xl flex items-center gap-1">
              <LoveIcon className="text-2xl" />
              <p className="font-medium">Save</p>
            </div>
            <div className="border-2 text-gray-700 px-8 shadow py-2 border-dashed rounded-2xl flex items-center gap-1">
              <ShareIcon className="text-2xl" />
              <p className="font-medium">Share</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center px-4 py-2 bg-[#1b3254] text-white rounded-lg mt-5">
              <ContactIcon className="text-2xl" />
              <p className="font-medium">Contact Seller</p>
            </div>
          </div>
        </div>
      </div>

      <ReadOurLatestNews />
    </Container>
  );
}
