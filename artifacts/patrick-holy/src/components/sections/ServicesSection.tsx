import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import { servicesData } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Das machen wir" 
          subtitle="Unsere Gewerke" 
          alignment="center"
          className="mb-16"
        >
          Vom Rohrleitungsbau bis zum Straßenbau – das sind die Bereiche, in denen du bei uns mit anpackst.
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
