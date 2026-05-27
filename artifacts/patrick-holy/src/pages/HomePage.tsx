import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import PressSection from "@/components/sections/PressSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ServiceAreaSection />
      <ReferencesSection />
      <PressSection />
    </div>
  );
}
