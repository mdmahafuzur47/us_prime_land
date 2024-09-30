import AboutOurPrimeProperties from "@/components/pages/home/AboutOurPrimeProperties";
import ClientSays from "@/components/pages/home/ClientSays";
import FeaturedProperties from "@/components/pages/home/FeaturedProperties";
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
      <FeaturedProperties />
      <AboutOurPrimeProperties />
      <HowItWorks />
      <WhyChooseUs />
      <PropertiesLocation />
      <ClientSays />
      <ReadOurLatestNews />
    </div>
  );
}
