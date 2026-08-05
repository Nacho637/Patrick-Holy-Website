import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Gift,
  Banknote,
  CalendarDays,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobsData } from "@/data/jobs";

const teaserBenefits = [
  { icon: Banknote, text: "Tarifvertrag Bau – großzügige Eingruppierung" },
  { icon: CalendarDays, text: "30 Tage Urlaub & 13. Monatsgehalt" },
  { icon: Gift, text: "Mitarbeiter-werben-Mitarbeiter-Prämie" },
  { icon: ShieldCheck, text: "Sichere Auftragslage durch Großauftraggeber" },
];

export default function CareerHighlightSection() {
  return (
    <section className="py-14 md:py-16 bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0 1px, transparent 1px 16px)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
              className="w-72 sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-14 px-8"
              data-testid="button-home-careers"
            >
              <Link href="/karriere" className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Alle Benefits & Stellen ansehen
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
                Offene Stellen
              </p>
              <ul className="space-y-1">
                {jobsData.map((job) => (
                  <li key={job.id}>
                    <Link
                      href="/karriere#offene-stellen"
                      className="flex items-center justify-between gap-4 rounded-xl px-4 py-4 text-blue-50 hover:bg-white/10 hover:text-white transition-colors group"
                    >
                      <div className="min-w-0">
                        <span className="block text-lg md:text-xl font-bold leading-snug">
                          {job.title}
                        </span>
                        <span className="block text-sm text-blue-200/80 mt-0.5">{job.type}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0 opacity-60 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-white/15">
                <Link
                  href="/karriere"
                  className="flex items-center gap-3 rounded-xl px-4 py-4 text-blue-50 hover:bg-white/10 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20 text-accent shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-lg md:text-xl font-bold leading-snug">
                      Ausbildung im Tief- & Straßenbau
                    </span>
                    <span className="block text-sm text-blue-200/80 mt-0.5">
                      Wir bilden aus – starte deine Karriere bei uns
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 shrink-0 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
