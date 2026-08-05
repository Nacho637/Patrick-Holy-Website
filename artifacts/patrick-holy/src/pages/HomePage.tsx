import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CareerHighlightSection from "@/components/sections/CareerHighlightSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import SocialSection from "@/components/sections/SocialSection";
import PressSection from "@/components/sections/PressSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <CareerHighlightSection />
      <ServicesSection />
      <ServiceAreaSection />
      <SocialSection />
      <PressSection />
    </div>
  );
}
