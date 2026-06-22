import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Gift, Banknote, CalendarDays, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobsData } from "@/data/jobs";

const teaserBenefits = [
  { icon: Banknote, text: "Tarifvertrag Bau – großzügige Eingruppierung" },
  { icon: CalendarDays, text: "30 Tage Urlaub & 13. Monatsgehalt" },
  { icon: Gift, text: "Mitarbeiter-werben-Mitarbeiter-Prämie" },
  { icon: ShieldCheck, text: "Sichere Auftragslage durch Großauftraggeber" },
];

export default function CareerHighlightSection() {
  const urgent = jobsData.find((j) => j.urgent);
  const otherJobs = jobsData.filter((j) => !j.urgent);

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0 1px, transparent 1px 16px)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-5">
              Wir stellen ein
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Komm in unser Team
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Wir suchen Anpacker, Mitdenker und Fachkräfte für den Tief- und Straßenbau in der
              Region Aschaffenburg. Bei uns erwarten dich ein sicherer Arbeitsplatz und echte
              Wertschätzung.
            </p>

            <ul className="space-y-4 mb-10">
              {teaserBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex items-center gap-3 text-blue-50">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-medium">{b.text}</span>
                  </li>
                );
              })}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-8"
              data-testid="button-home-careers"
            >
              <Link href="/karriere" className="flex items-center gap-2">
                Alle Benefits & Stellen ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {urgent && (
              <Link
                href="/karriere#offene-stellen"
                className="block bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl hover:scale-[1.01] transition-transform"
                data-testid="card-urgent-job"
              >
                <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider mb-2">
                  <Flame className="w-4 h-4" />
                  Dringend gesucht
                </div>
                <h3 className="text-2xl font-extrabold leading-tight">{urgent.title}</h3>
                {urgent.tagline && (
                  <p className="mt-2 font-medium opacity-90">{urgent.tagline}</p>
                )}
              </Link>
            )}

            <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                Weitere offene Stellen
              </p>
              <ul className="divide-y divide-white/10">
                {otherJobs.map((job) => (
                  <li key={job.id}>
                    <Link
                      href="/karriere#offene-stellen"
                      className="flex items-center justify-between gap-4 py-3 text-blue-50 hover:text-white transition-colors group"
                    >
                      <span className="font-semibold">{job.title}</span>
                      <ArrowRight className="w-4 h-4 shrink-0 opacity-60 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
