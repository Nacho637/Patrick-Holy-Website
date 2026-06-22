import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section data-hero className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-baustelle.png"
          alt="Bauarbeiten Patrick Holy Aschaffenburg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#213d86]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-stretch mb-8 shadow-xl shadow-black/30 rounded-md overflow-hidden border border-white/15 backdrop-blur-md">
            <div
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 6px, transparent 6px 12px)",
              }}
            >
              <span className="text-[11px] md:text-xs font-extrabold tracking-[0.18em] uppercase text-white">
                Dein Arbeitgeber in Aschaffenburg
              </span>
              <span className="h-3.5 w-px bg-white/40" />
              <span className="text-[11px] md:text-xs font-extrabold tracking-[0.18em] uppercase text-accent">
                seit 1995
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Bau mit uns deine Zukunft.
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sichere Arbeitsplätze, faire Bezahlung nach Tarif und ein echtes Team im Tief- und
            Straßenbau. Werde Teil der Patrick Holy GmbH.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-72 sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-14 px-8"
            >
              <Link href="/karriere#offene-stellen" className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Offene Stellen ansehen
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-72 sm:w-auto font-bold text-lg h-14 px-8 bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <Link href="/ueber-uns" className="flex items-center gap-2">
                Über uns
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
