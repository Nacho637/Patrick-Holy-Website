import SectionHeader from "@/components/shared/SectionHeader";
import { MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceAreaSection() {
  const regions = [
    "Aschaffenburg (Stadt & Landkreis)",
    "Hanau & Main-Kinzig-Kreis",
    "Miltenberg",
    "Darmstadt-Dieburg",
    "Würzburg"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Abstract regional map graphic */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-secondary rounded-full opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute inset-10 bg-primary/10 rounded-full"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <MapPin className="w-12 h-12 text-accent mb-2 drop-shadow-md" />
                <span className="font-bold text-xl text-primary drop-shadow-md bg-white/80 px-4 py-1 rounded-full">Aschaffenburg</span>
              </div>
              
              {/* Satellite nodes */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-1/4 left-1/4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-foreground">Hanau</motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-1/4 left-1/5 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-foreground">Darmstadt</motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-1/3 right-1/4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-foreground">Miltenberg</motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-1/3 right-1/5 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-foreground">Würzburg</motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader 
              title="Unser Einsatzgebiet" 
              subtitle="Regional Verwurzelt"
              className="mb-8"
            >
              Wir sind da, wo Sie uns brauchen. Als regional verankertes Unternehmen am bayerischen Untermain kennen wir die lokalen Gegebenheiten und sind schnell vor Ort.
            </SectionHeader>

            <ul className="space-y-4 mb-8">
              {regions.map((region, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-lg text-foreground font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  {region}
                </motion.li>
              ))}
            </ul>

            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
              <h4 className="font-bold text-primary mb-2">Kurze Wege, schnelle Reaktionszeiten</h4>
              <p className="text-muted-foreground text-sm">
                Durch unseren zentralen Standort in Aschaffenburg-Schweinheim können wir nicht nur unsere Regelprojekte effizient abwickeln, sondern sind im Rahmen unserer 24/7 Rufbereitschaft auch im Notfall schnellstens bei Ihnen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
