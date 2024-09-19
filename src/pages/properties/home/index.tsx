import PropertiesCard from "@/components/pages/properties/home/PropertiesCard";
import SearchPropertiesHome from "@/components/pages/properties/home/SearchPropertiesHome";

import Container from "@/components/ui/Container";
import React from "react";

export default function PropertiesHome() {
  return (
    <Container className="mt-5">
      {/* search properties  */}
      <SearchPropertiesHome />

      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Property&apos;s Home</h1>
        <div className="w-full mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Location :</h1>
        <div className="mt-4">
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

      <div className="mt-20">
        <div className="w-full mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
        <div className="w-full mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
          <PropertiesCard />
        </div>
      </div>
    </Container>
  );
}
