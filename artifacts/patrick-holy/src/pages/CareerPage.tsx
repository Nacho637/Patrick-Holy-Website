import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Home,
  MapPin,
  Truck,
  Flame,
  BookOpen,
  Award,
  Heart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { jobsData } from "@/data/jobs";
import { companyData } from "@/data/company";

const benefits = [
  {
    icon: Home,
    title: "Familiäres Unternehmen",
    desc: "Sichere Arbeitsplätze in einem gesunden Betrieb seit 1995.",
  },
  {
    icon: MapPin,
    title: "Regionale Verwurzelung",
    desc: "Baustellen vorwiegend in Aschaffenburg und der direkten Umgebung.",
  },
  {
    icon: Truck,
    title: "Moderner Fuhrpark",
    desc: "Top gewartete Maschinen und Fahrzeuge dank eigener Werkstatt.",
  },
  {
    icon: Flame,
    title: "Gelebte Unternehmenskultur",
    desc: "Z.B. Freistellung für ehrenamtliche Feuerwehreinsätze bei vollem Lohn.",
  },
  {
    icon: BookOpen,
    title: "Seminare & Schulungen",
    desc: "Kontinuierliche Weiterbildung für alle Mitarbeiter.",
  },
  {
    icon: Award,
    title: "Top Ausbildung",
    desc: "Fundierte Betreuung durch unseren Straßenbauermeister Alexander Sauer.",
  },
];

export default function CareerPage() {
  return (
    <div className="w-full">
      {/* Hero with team photo */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden">
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

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Warum Patrick Holy GmbH?" subtitle="Deine Vorteile" alignment="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
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
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-primary hover:shadow-md transition-all group"
                data-testid={`card-job-${job.id}`}
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground font-semibold text-sm rounded-full mb-3">
                    {job.type}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">Einsatzort: Aschaffenburg & Umgebung</p>
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
