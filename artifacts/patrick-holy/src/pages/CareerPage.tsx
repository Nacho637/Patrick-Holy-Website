import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Flame,
  Gift,
  Banknote,
  CalendarDays,
  Utensils,
  ShieldCheck,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { jobsData } from "@/data/jobs";
import { companyData } from "@/data/company";

const benefits = [
  {
    icon: Banknote,
    title: "Tarifvertrag Bauhauptgewerbe",
    description:
      "Faire Bezahlung nach Tarif – transparente Eingruppierung und verlässliche Konditionen.",
    variant: "light" as const,
  },
  {
    icon: CalendarDays,
    title: "30 Tage Urlaub & 13. Gehalt",
    description:
      "Mehr Freizeit für Familie und Erholung – plus ein Extra am Jahresende.",
    variant: "dark" as const,
  },
  {
    icon: Gift,
    title: "Mitarbeiter werben Mitarbeiter",
    description:
      "Gute Leute empfehlen und dafür belohnt werden – so wächst unser Team.",
    variant: "light" as const,
  },
  {
    icon: ShieldCheck,
    title: "Sichere Auftragslage",
    description:
      "Solide Projekte und verlässliche Beschäftigung in der Region Aschaffenburg.",
    variant: "dark" as const,
  },
  {
    icon: Smile,
    title: "Angenehmes Arbeitsumfeld",
    description:
      "Ein Team, in dem man sich aufeinander verlassen kann – und gerne zur Arbeit kommt.",
    variant: "light" as const,
  },
  {
    icon: Utensils,
    title: "Verpflegung bei Bereitschaft",
    description:
      "Wenn's länger dauert, sorgen wir für dich – fair und unkompliziert.",
    variant: "dark" as const,
  },
];

export default function CareerPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section data-hero className="bg-primary text-white pt-24 pb-14 md:pt-32 md:pb-20 relative overflow-hidden flex items-center min-h-[340px] md:min-h-[380px]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay">
          <img
            src="/images/team-fuhrpark.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-4 md:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-5"
          >
            Werde Teil unseres Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Wir suchen Anpacker, Mitdenker und Teamplayer für spannende Bauprojekte in der
            Region Aschaffenburg.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Deine Vorteile bei uns" alignment="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10 md:mt-14 items-stretch">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isDark = benefit.variant === "dark";

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.08, duration: 0.45 }}
                  className={`rounded-[2rem] p-8 md:p-9 flex flex-col gap-5 ${
                    isDark
                      ? "bg-primary text-white"
                      : "bg-[hsl(224_40%_94%)] text-foreground"
                  }`}
                  data-testid={`card-benefit-${idx}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isDark ? "bg-accent text-accent-foreground" : "bg-primary text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3
                      className={`text-xl md:text-2xl font-extrabold leading-tight mb-3 ${
                        isDark ? "text-accent" : "text-primary"
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className={`text-sm md:text-[15px] leading-relaxed ${
                        isDark ? "text-blue-100/90" : "text-muted-foreground"
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="offene-stellen" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Offene Stellen" alignment="center" />

          <div className="space-y-6 mt-12 max-w-5xl mx-auto">
            {jobsData.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all group ${
                  job.urgent
                    ? "border-2 border-accent"
                    : "border border-gray-200 hover:border-primary"
                }`}
                data-testid={`card-job-${job.id}`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {job.urgent && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground font-bold text-sm rounded-full">
                        <Flame className="w-3.5 h-3.5" />
                        Dringend gesucht
                      </span>
                    )}
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">Einsatzort: Aschaffenburg & Umgebung</p>
                  {job.highlights && (
                    <ul className="mt-3 space-y-1">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-xs text-muted-foreground italic mt-3">
                    Ausführliche Stellenbeschreibung (Aufgaben, Anforderungen, Gehalt) folgt in
                    Kürze.
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
            Als Ausbildungsbetrieb legen wir besonderen Wert auf den Nachwuchs. Unter der Leitung
            unseres erfahrenen Straßenbauermeisters <strong>Alexander Sauer</strong> garantieren wir
            eine erstklassige und praxisnahe Ausbildung im Tief- und Straßenbau.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">Nichts passendes dabei?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Wir sind immer auf der Suche nach motivierten Talenten. Sende uns einfach deine
            Initiativbewerbung.
          </p>
          <Button
            asChild
            size="lg"
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 px-10 text-lg"
          >
            <a href={`mailto:${companyData.contact.email}?subject=Initiativbewerbung`}>
              Initiativbewerbung senden <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
