import OurGallery from "@/components/pages/aboutUs/OurGallery";
import AboutOurPrimeProperties from "@/components/pages/home/AboutOurPrimeProperties";
import ClientSays from "@/components/pages/home/ClientSays";
import { CTA } from "@/components/pages/home/WhyChooseUs";
import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import React from "react";

export default function AboutUs() {
  return (
    <Container className="">
      <SharedHeroSection title="About Us" />
      <AboutOurPrimeProperties />
      <OurGallery />
      <CTA />
      <ClientSays />
    </Container>
  );
}
