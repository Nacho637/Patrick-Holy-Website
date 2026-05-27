import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">Ihr Partner in Aschaffenburg seit 1995</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Tiefbau. Straßenbau. Rohrleitung.
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Wir realisieren Ihre Bauprojekte zuverlässig, termingerecht und mit höchster Qualität. Mit 365 Tage 24/7 Notfallbereitschaft.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-14 px-8"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="destructive"
              className="w-full sm:w-auto font-bold text-lg h-14 px-8 shadow-lg shadow-red-500/20"
            >
              <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Notfall? Jetzt anrufen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
