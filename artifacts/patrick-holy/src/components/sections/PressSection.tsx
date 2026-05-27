import SectionHeader from "@/components/shared/SectionHeader";
import PressCard from "@/components/shared/PressCard";
import { pressData } from "@/data/press";

export default function PressSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Das sagt die Presse" 
          subtitle="Auszeichnungen"
          alignment="center"
          className="mb-16"
        >
          Die Patrick Holy GmbH ist nicht nur ein Bauunternehmen, sondern engagiert sich auch für das Gemeinwohl in der Region.
        </SectionHeader>

        <div className="max-w-4xl mx-auto">
          {pressData.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
