import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CareerHighlightSection from "@/components/sections/CareerHighlightSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import SocialSection from "@/components/sections/SocialSection";
import PressSection from "@/components/sections/PressSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <CareerHighlightSection />
      <ServiceAreaSection />
      <ReferencesSection />
      <SocialSection />
      <PressSection />
    </div>
  );
}
