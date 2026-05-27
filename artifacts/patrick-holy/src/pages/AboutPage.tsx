import { motion } from "framer-motion";
import { Users, Truck, CheckCircle2, Award } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { companyData } from "@/data/company";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay">
           <img src="/images/hero-baustelle.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
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
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center font-bold text-lg md:text-xl">
            <div>Seit {companyData.founded}</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/30 my-auto" />
            <div>{companyData.stats.employees} Mitarbeiter</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/30 my-auto" />
            <div>365 Tage Bereitschaft</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/30 my-auto" />
            <div>DVGW + TÜV</div>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="Unsere Geschichte" subtitle="Entwicklung">
              Die Patrick Holy GmbH ist tief in Aschaffenburg-Schweinheim verwurzelt. Was 1995 aus der BMS Baubetreuung GmbH hervorging, hat sich zu einem der verlässlichsten Baupartner der Region entwickelt.
            </SectionHeader>
            <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed max-w-none">
              <p>
                Seit über zwei Jahrzehnten stehen wir für kompetente und fachgerechte Ausführung in den Bereichen Tiefbau, Straßenbau, Rohrleitungsbau und Fernwärme. Unser beständiges Wachstum verdanken wir dem Vertrauen unserer Kunden und dem unermüdlichen Einsatz unserer rund 40 Mitarbeiterinnen und Mitarbeiter.
              </p>
              <p>
                Um unsere hohe Qualität stets garantieren zu können, investieren wir kontinuierlich in unseren modernen Fuhrpark, der in unserer eigenen Fachwerkstatt in Schweinheim gewartet wird. So sind wir nicht nur für große Projekte optimal gerüstet, sondern gewährleisten auch unsere 365 Tage / 24 Stunden Notfallbereitschaft für Aschaffenburg und die umliegenden Gemeinden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile: Patrick Holy */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/images/patrick-holy-auszeichnung.jpg" 
                alt="Patrick Holy erhält Auszeichnung Partner der Feuerwehr" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center italic">
                Patrick Holy (Geschäftsführer) erhält die Auszeichnung "Partner der Feuerwehr"
              </p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-primary">Geschäftsführung & Verantwortung</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Patrick Holy</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Als Geschäftsführer leitet Patrick Holy das Unternehmen nicht nur mit wirtschaftlichem Geschick, sondern auch mit großem sozialem Engagement. Er selbst ist seit Jahrzehnten aktiver Feuerwehrmann in Aschaffenburg.
                </p>
                <p>
                  Im September 2023 wurde die Patrick Holy GmbH vom Landesfeuerwehrverband Bayern als <strong>"Partner der Feuerwehr"</strong> ausgezeichnet. Mitarbeiter, die sich ehrenamtlich engagieren, werden bei Einsätzen (wie z.B. bei der Ahrtal-Katastrophe) selbstverständlich bei vollem Lohnausgleich freigestellt.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-xl font-medium text-foreground bg-white p-4 shadow-sm rounded-r-lg">
                  "Die Firma Patrick Holy fördert die Feuerwehr weit über das übliche Maß hinaus."
                  <footer className="text-base text-muted-foreground mt-2 not-italic">— Kreisbrandrat Frank Wissel</footer>
                </blockquote>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-2">Reiner Reisnecker</h3>
                <p className="text-muted-foreground">Zweiter Geschäftsführer der Patrick Holy GmbH.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Unser Team" subtitle="Gemeinsam stark" alignment="center">
            Hinter jedem erfolgreichen Bauprojekt stehen Menschen, die ihr Handwerk verstehen.
          </SectionHeader>
          <div className="max-w-5xl mx-auto">
            <img 
              src="/images/team-fuhrpark.jpg" 
              alt="Das Team der Patrick Holy GmbH vor dem Fuhrpark" 
              className="w-full rounded-2xl shadow-xl mb-12"
            />
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ein starkes Kollektiv</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Unsere rund 40 Mitarbeiter bilden das Herzstück des Unternehmens. Durch regelmäßige Schulungen und ein familiäres Arbeitsklima sorgen wir dafür, dass Fachwissen erhalten bleibt und weitergegeben wird.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-xl mb-2">Ausbildung mit Perspektive</h4>
                    <p className="text-muted-foreground">
                      Unter der Leitung von <strong>Alexander Sauer</strong> (Straßenbauermeister & Ausbilder) bilden wir die Fachkräfte von morgen aus und geben jungen Talenten eine sichere Perspektive in der Region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuhrpark */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Unser Fuhrpark" subtitle="Modernste Technik" className="text-white">
                <p className="text-blue-100">
                  Um für jede Anforderung gerüstet zu sein, unterhalten wir einen modernen und umfangreichen Maschinen- und Fuhrpark.
                </p>
              </SectionHeader>
              <ul className="space-y-4 mb-8 text-lg text-blue-50">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  Markante blaue Mercedes-Benz LKW
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  Moderne Bagger und Spezialmaschinen für den Tiefbau
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  Eigene voll ausgestattete Reparaturwerkstatt
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  Spezialfahrzeuge für den Winterdienst
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/fuhrpark.jpg" 
                alt="Fuhrpark der Patrick Holy GmbH" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
