import { useEffect, useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, Map } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const MAPS_CONSENT_KEY = "ph-maps-consent";
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Landkreis+Aschaffenburg,+Bayern&z=10&output=embed";

export default function ServiceAreaSection() {
  const regions = [
    "Aschaffenburg (Stadt & Landkreis)",
    "Hanau & Main-Kinzig-Kreis",
    "Miltenberg",
    "Darmstadt-Dieburg",
    "Würzburg",
  ];

  const [mapsConsent, setMapsConsent] = useState(false);

  useEffect(() => {
    try {
      setMapsConsent(localStorage.getItem(MAPS_CONSENT_KEY) === "1");
    } catch {
      setMapsConsent(false);
    }
  }, []);

  function acceptMaps() {
    try {
      localStorage.setItem(MAPS_CONSENT_KEY, "1");
    } catch {
      /* private mode / blocked storage */
    }
    setMapsConsent(true);
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
            data-testid="map-aschaffenburg"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent min-h-[450px] bg-gray-100">
              {mapsConsent ? (
                <iframe
                  title="Patrick Holy GmbH Einsatzgebiet Aschaffenburg"
                  src={MAP_EMBED_SRC}
                  className="w-full h-[450px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center gap-4 px-6 py-16 h-[450px] bg-gradient-to-br from-slate-100 to-slate-200">
                  <Map className="w-12 h-12 text-primary/70" aria-hidden />
                  <p className="text-foreground font-semibold text-lg max-w-sm">
                    Interaktive Karte (Google Maps)
                  </p>
                  <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                    Beim Laden der Karte werden Daten an Google übertragen. Details finden
                    Sie in unserer{" "}
                    <Link href="/datenschutz" className="text-primary underline underline-offset-2">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                  <Button
                    type="button"
                    onClick={acceptMaps}
                    className="mt-2"
                    data-testid="button-load-maps"
                  >
                    Karte laden
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              title="Unser Einsatzgebiet"
              className="mb-6 md:mb-8"
            >
              Als regional verankertes Unternehmen am bayerischen Untermain sind unsere Teams
              wohnortnah unterwegs – kurze Anfahrten statt wochenlanger Montage fernab der Heimat.
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
