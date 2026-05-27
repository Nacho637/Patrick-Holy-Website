import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, HardHat, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { jobsData } from "@/data/jobs";
import { companyData } from "@/data/company";

export default function CareerPage() {
  const benefits = [
    { title: "Familiäres Unternehmen", desc: "Sichere Arbeitsplätze in einem gesunden Betrieb seit 1995." },
    { title: "Regionale Verwurzelung", desc: "Baustellen vorwiegend in Aschaffenburg und der direkten Umgebung." },
    { title: "Moderner Fuhrpark", desc: "Top gewartete Maschinen und Fahrzeuge dank eigener Werkstatt." },
    { title: "Gelebte Unternehmenskultur", desc: "Z.B. Freistellung für ehrenamtliche Feuerwehreinsätze bei vollem Lohn." },
    { title: "Seminare & Schulungen", desc: "Kontinuierliche Weiterbildung für alle Mitarbeiter." },
    { title: "Top Ausbildung", desc: "Fundierte Betreuung durch unseren Straßenbauermeister Alexander Sauer." },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#213d86]" />
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
          <HardHat className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Werde Teil unseres Teams</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10">
              Wir suchen Anpacker, Mitdenker und Teamplayer für spannende Bauprojekte in der Region Aschaffenburg.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-8">
              <a href="#offene-stellen">Offene Stellen ansehen <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Warum Patrick Holy GmbH?" subtitle="Deine Vorteile" alignment="center">
            Wir bieten mehr als nur einen Job. Wir bieten eine berufliche Heimat mit echten Werten.
          </SectionHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="offene-stellen" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader title="Offene Stellen" subtitle="Jetzt Bewerben" />
          
          <div className="space-y-6">
            {jobsData.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-primary transition-colors group">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground font-semibold text-sm rounded-full mb-3">
                    {job.type}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    Einsatzort: Aschaffenburg & Umgebung
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0 font-bold">
                  <a href={`mailto:${companyData.contact.email}?subject=Bewerbung: ${job.title}`}>
                    Jetzt bewerben <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ausbilder Highlight */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold mb-6">Ausbildung mit Zukunft</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Als Ausbildungsbetrieb legen wir besonderen Wert auf den Nachwuchs. Unter der Leitung unseres erfahrenen Straßenbauermeisters <strong>Alexander Sauer</strong> garantieren wir eine erstklassige und praxisnahe Ausbildung im Tief- und Straßenbau.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">Nichts passendes dabei?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Wir sind immer auf der Suche nach motivierten Talenten. Sende uns einfach deine Initiativbewerbung.
          </p>
          <Button asChild size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 px-10 text-lg">
            <a href={`mailto:${companyData.contact.email}?subject=Initiativbewerbung`}>
              Initiativbewerbung senden <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
