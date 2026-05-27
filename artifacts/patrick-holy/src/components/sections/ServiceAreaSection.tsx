import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceAreaSection() {
  const regions = [
    "Aschaffenburg (Stadt & Landkreis)",
    "Hanau & Main-Kinzig-Kreis",
    "Miltenberg",
    "Darmstadt-Dieburg",
    "Würzburg",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
            data-testid="map-aschaffenburg"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent">
              <iframe
                title="Patrick Holy GmbH Standort Aschaffenburg"
                src="https://www.google.com/maps?q=Landkreis+Aschaffenburg,+Bayern&z=10&output=embed"
                className="w-full h-[450px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              title="Unser Einsatzgebiet"
              subtitle="Regional Verwurzelt"
              className="mb-8"
            >
              Wir sind da, wo Sie uns brauchen. Als regional verankertes Unternehmen am
              bayerischen Untermain kennen wir die lokalen Gegebenheiten und sind schnell vor
              Ort.
            </SectionHeader>

            <ul className="space-y-4">
              {regions.map((region, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-3 text-lg text-foreground font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  {region}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
