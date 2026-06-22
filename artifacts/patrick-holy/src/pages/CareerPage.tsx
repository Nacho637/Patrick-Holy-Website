import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Flame,
  Heart,
  Gift,
  Banknote,
  CalendarDays,
  Utensils,
  ShieldCheck,
  Users,
  Dog,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { jobsData } from "@/data/jobs";
import { companyData } from "@/data/company";

const benefits = [
  {
    icon: Banknote,
    title: "Tarifvertrag Bauhauptgewerbe",
    desc: "Faire Bezahlung nach Tarif – mit in der Regel großzügiger Eingruppierung.",
  },
  {
    icon: CalendarDays,
    title: "30 Tage Urlaub & 13. Gehalt",
    desc: "Volle 30 Urlaubstage und ein 13. Monatsgehalt, das zu 100 % im November ausgezahlt wird.",
  },
  {
    icon: Gift,
    title: "Mitarbeiter werben Mitarbeiter",
    desc: "750 € nach bestandener Probezeit + 750 € nach einem Jahr. Für Stahlschweißer 2 × 2.000 €.",
  },
  {
    icon: Utensils,
    title: "Verpflegung bei Bereitschaft",
    desc: "Bei Nacht- und Bereitschaftsdiensten sorgen wir für deine Verpflegung – Wertschätzung, die ankommt.",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Auftragslage",
    desc: "Langfristige Verträge mit großen Auftraggebern (u. a. AVG) bedeuten einen sicheren Arbeitsplatz.",
  },
  {
    icon: Flame,
    title: "Ehrenamt wird unterstützt",
    desc: "Unser Chef ist selbst bei der Feuerwehr – Ausrückzeiten fürs Ehrenamt werden bezahlt freigestellt.",
  },
  {
    icon: Users,
    title: "Flache Hierarchien",
    desc: "Kurze Wege, gute Teamchemie und ein familiäres Miteinander statt anonymer Konzernstrukturen.",
  },
  {
    icon: Globe,
    title: "Integration & Vielfalt",
    desc: "Wir unterstützen ausländische Mitarbeitende aktiv – auch durch den bürokratischen Dschungel.",
  },
  {
    icon: Dog,
    title: "Angenehmes Arbeitsumfeld",
    desc: "Klimatisiertes Büro und ein Bürohund inklusive – bei uns stimmt auch das Drumherum.",
  },
];

export default function CareerPage() {
  const urgent = jobsData.find((j) => j.urgent);

  return (
    <div className="w-full">
      {/* Hero with team photo */}
      <section data-hero className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/team-fuhrpark.jpg"
            alt="Team und Fuhrpark der Patrick Holy GmbH"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#213d86]/95 from-30% via-[#213d86]/40 via-60% to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Werde Teil unseres Teams
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl drop-shadow">
              Wir suchen Anpacker, Mitdenker und Teamplayer für spannende Bauprojekte in der
              Region Aschaffenburg.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-8"
              data-testid="button-hero-jobs"
            >
              <a href="#offene-stellen">
                Offene Stellen ansehen <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Urgent Position Banner */}
      {urgent && (
        <section className="bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider mb-2">
                  <Flame className="w-4 h-4" />
                  Dringend gesucht
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  {urgent.title}
                </h2>
                {urgent.tagline && (
                  <p className="mt-2 font-medium opacity-90 max-w-2xl">{urgent.tagline}</p>
                )}
              </div>
              <Button
                asChild
                size="lg"
                className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 px-8"
                data-testid="button-urgent-apply"
              >
                <a
                  href={`mailto:${companyData.contact.email}?subject=Bewerbung: ${urgent.title}`}
                  className="flex items-center gap-2"
                >
                  Jetzt bewerben <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Deine Vorteile bei uns"
            subtitle="Was wir bieten"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.08 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                  data-testid={`card-benefit-${idx}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referral Bonus Highlight */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Gift className="w-4 h-4" />
              Prämie sichern
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Mitarbeiter werben Mitarbeiter
            </h2>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
              Du kennst jemanden, der zu uns passt? Empfiehl uns weiter – wir bedanken uns
              doppelt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-accent mb-2">750 €</div>
              <p className="text-blue-50 font-semibold">nach bestandener Probezeit</p>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold text-accent mb-2">+ 750 €</div>
              <p className="text-blue-50 font-semibold">nach einem Jahr Betriebszugehörigkeit</p>
            </div>
            <div className="bg-accent text-accent-foreground rounded-2xl p-8 text-center shadow-xl">
              <div className="text-4xl font-extrabold mb-2">2 × 2.000 €</div>
              <p className="font-semibold">Sonderprämie für Stahlschweißer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gesellschaftliche Verantwortung */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-accent-foreground bg-accent px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                <Heart className="w-4 h-4" />
                Gesellschaftliche Verantwortung
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Wir unterstützen dein Ehrenamt
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Bei uns endet Verantwortung nicht am Werkstor. Wer sich neben dem Beruf für die
                  Allgemeinheit einsetzt, hat unsere volle Rückendeckung — fachlich, organisatorisch
                  und finanziell.
                </p>
                <p>
                  Ob <strong>Freiwillige Feuerwehr</strong>, <strong>THW</strong>,{" "}
                  <strong>Rettungsdienst</strong> oder <strong>Vereinsarbeit</strong> in der Region:
                  Einsätze und Übungen werden bei vollem Lohnausgleich freigestellt. So konnten unsere
                  Mitarbeiter z.B. bei der Ahrtal-Katastrophe vor Ort helfen.
                </p>
              </div>
              <div className="mt-8 p-5 bg-primary/5 border-l-4 border-accent rounded-r-lg">
                <p className="italic text-foreground">
                  „Die Firma Patrick Holy fördert die Feuerwehr weit über das übliche Maß hinaus."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  — Kreisbrandrat Frank Wissel, anlässlich der Auszeichnung „Partner der Feuerwehr"
                  durch den Landesfeuerwehrverband Bayern, September 2023.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/patrick-holy-auszeichnung.jpg"
                alt="Patrick Holy erhält die Auszeichnung Partner der Feuerwehr"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-xl max-w-[200px]">
                <div className="text-3xl font-extrabold leading-none">2023</div>
                <div className="text-sm font-bold mt-1">Partner der Feuerwehr</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="offene-stellen" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader title="Offene Stellen" subtitle="Jetzt Bewerben" />

          <div className="space-y-6 mt-12">
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

      {/* Mitarbeiterstimmen Placeholder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader title="Stimmen aus dem Team" subtitle="Bald hier" alignment="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 flex flex-col items-center justify-center text-center min-h-[180px]"
                data-testid={`placeholder-quote-${i}`}
              >
                <Users className="w-8 h-8 text-primary/30 mb-3" />
                <p className="font-bold text-foreground/70">Mitarbeiter-Statement</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Echte Stimmen unserer Kollegen folgen in Kürze.
                </p>
              </div>
            ))}
          </div>
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
