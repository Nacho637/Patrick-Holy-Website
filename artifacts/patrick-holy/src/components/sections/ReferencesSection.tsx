import SectionHeader from "@/components/shared/SectionHeader";
import ReferenceCard from "@/components/shared/ReferenceCard";
import { referencesData } from "@/data/references";

export default function ReferencesSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Erfolgreich realisierte Projekte" 
          subtitle="Referenzen"
          alignment="center"
          className="mb-16"
        >
          Ein Auszug unserer aktuellen Bauprojekte in der Region.
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referencesData.map((ref, idx) => (
            <ReferenceCard key={ref.id} reference={ref} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
