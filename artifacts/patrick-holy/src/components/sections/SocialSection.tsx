import { motion } from "framer-motion";
import { Facebook, Camera } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function SocialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Aktuelles von unseren Baustellen"
          subtitle="Social Media"
          alignment="center"
          className="mb-16"
        >
          Bald teilen wir hier regelmäßig Fotos und kurze Berichte direkt von unseren Projekten –
          eingebunden von unserer Facebook-Seite.
        </SectionHeader>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 flex flex-col items-center justify-center text-center min-h-[220px]"
              data-testid={`placeholder-social-${i}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 mb-4">
                <Camera className="w-7 h-7" />
              </div>
              <p className="font-bold text-foreground/70">Baustellen-Beitrag</p>
              <p className="text-sm text-muted-foreground mt-1">Inhalt folgt in Kürze</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
            <Facebook className="w-4 h-4 text-primary" />
            Facebook-Einbindung wird vorbereitet
          </span>
        </div>
      </div>
    </section>
  );
}
