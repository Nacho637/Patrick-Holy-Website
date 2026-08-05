import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  "Seit 1995 am Markt",
  "DVGW + TÜV zertifiziert",
  "Eigene Werkstatt",
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section data-hero className="bg-primary text-white pt-24 pb-14 md:pt-32 md:pb-20 relative overflow-hidden flex items-center min-h-[340px] md:min-h-[380px]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay">
          <img src="/images/hero-baustelle.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-4 md:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-5"
          >
            Über uns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Tradition, Qualität und regionale Verbundenheit seit 1995.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-9 flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {STATS.map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(0,0,0,0.12)] border border-accent bg-white/15 backdrop-blur-md"
              >
                {stat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
              >
                Unsere Geschichte
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 flex flex-1 flex-col justify-between gap-6 text-lg text-muted-foreground leading-relaxed"
              >
                <p>
                  Die Patrick Holy GmbH ist tief in Aschaffenburg-Schweinheim verwurzelt. Was 1995
                  aus der BMS Baubetreuung GmbH hervorging, ist heute ein bodenständiger Arbeitgeber
                  mit rund 40 Kolleginnen und Kollegen.
                </p>
                <p>
                  Seit über zwei Jahrzehnten arbeiten wir in den Bereichen Tiefbau, Straßenbau,
                  Rohrleitungsbau und Fernwärme. Unser beständiges Wachstum verdanken wir vor allem
                  einem: dem unermüdlichen Einsatz und Zusammenhalt unserer rund 40 Mitarbeiterinnen
                  und Mitarbeiter.
                </p>
                <p>
                  Um unsere hohe Qualität stets garantieren zu können, investieren wir kontinuierlich
                  in unseren modernen Fuhrpark, der in unserer eigenen Fachwerkstatt in Schweinheim
                  gewartet wird. So sind wir für große Projekte in Aschaffenburg und den umliegenden
                  Gemeinden optimal gerüstet – und bieten unserem Team einen sicheren, modern
                  ausgestatteten Arbeitsplatz.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="min-h-[280px] lg:min-h-0"
            >
              <img
                src="/images/aschaffenburg-schloss.jpg"
                alt="Schloss Johannisburg in Aschaffenburg am Main"
                width={4351}
                height={2764}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile: Patrick Holy */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col min-h-[280px] lg:min-h-0">
              <img
                src="/images/patrick-holy-auszeichnung.jpg"
                alt="Patrick Holy erhält Auszeichnung Partner der Feuerwehr"
                className="w-full flex-1 min-h-0 object-cover rounded-xl"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center italic">
                Patrick Holy (Geschäftsführer) erhält die Auszeichnung „Partner der Feuerwehr"
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Wir tragen Verantwortung
              </h2>
              <div className="mt-6 flex flex-1 flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Im September 2023 wurde die Patrick Holy GmbH vom Landesfeuerwehrverband Bayern
                  als <strong className="text-foreground">„Partner der Feuerwehr"</strong>{" "}
                  ausgezeichnet. Mitarbeiter, die sich ehrenamtlich engagieren, werden bei Einsätzen
                  (wie z.B. bei der Ahrtal-Katastrophe) selbstverständlich bei vollem Lohnausgleich
                  freigestellt.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-xl font-medium text-foreground bg-white p-4 shadow-sm rounded-r-lg">
                  „Die Firma Patrick Holy fördert die Feuerwehr weit über das übliche Maß hinaus."
                  <footer className="text-base text-muted-foreground mt-2 not-italic">
                    — Kreisbrandrat Frank Wissel
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Ein starkes Kollektiv
              </h2>
              <div className="mt-6 flex flex-1 flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Unsere rund 40 Mitarbeiter bilden das Herzstück des Unternehmens. Durch
                  regelmäßige Schulungen und ein familiäres Arbeitsklima sorgen wir dafür, dass
                  Fachwissen erhalten bleibt und weitergegeben wird. Unter der Leitung von{" "}
                  <strong className="text-foreground">Alexander Sauer</strong> (Straßenbauermeister
                  & Ausbilder) bilden wir außerdem die Fachkräfte von morgen aus.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold self-start"
                  data-testid="button-team-karriere"
                >
                  <Link href="/karriere" className="flex items-center gap-2">
                    Werde Teil unseres Teams
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="min-h-[280px] lg:min-h-0">
              <img
                src="/images/team-fuhrpark.jpg"
                alt="Das Team der Patrick Holy GmbH vor dem Fuhrpark"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fuhrpark */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="min-h-[280px] lg:min-h-0">
              <img
                src="/images/fuhrpark.jpg"
                alt="Fuhrpark der Patrick Holy GmbH"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Unser Fuhrpark
              </h2>
              <div className="mt-6 flex flex-1 flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Um für jede Anforderung gerüstet zu sein, unterhalten wir einen modernen und
                  umfangreichen Maschinen- und Fuhrpark.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    Markante blaue Mercedes-Benz LKW
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    Moderne Bagger und Spezialmaschinen für den Tiefbau
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    Eigene voll ausgestattete Reparaturwerkstatt
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    Spezialfahrzeuge für den Winterdienst
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
