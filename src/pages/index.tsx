import HeroSection from "@/components/pages/home/HeroSection";
import HowItWorks from "@/components/pages/home/HowItWorks";
import PropertiesLocation from "@/components/pages/home/PropertiesLocation";
import PropertyTypes from "@/components/pages/home/PropertyTypes";
import ReadOurLatestNews from "@/components/pages/home/ReadOurLatestNews";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PropertyTypes />
      <HowItWorks />
      <WhyChooseUs />
      <PropertiesLocation />
      <ReadOurLatestNews />
    </div>
  );
}
