import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-12 bg-[#213d86] relative -mt-10 z-20 mx-4 md:mx-auto max-w-7xl rounded-xl md:rounded-2xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {/* DVGW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center p-6 text-center gap-3"
            data-testid="badge-dvgw"
          >
            <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center shadow-sm">
              <img src="/images/dvgw-logo.png" alt="DVGW Zertifizierung GW 301" className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide">DVGW GW 301</h3>
            <p className="text-blue-200 text-xs">Rohrleitungsbau zertifiziert</p>
          </motion.div>

          {/* TÜV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-6 text-center gap-3"
            data-testid="badge-tuv"
          >
            <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center shadow-sm">
              <img src="/images/tuv-logo.png" alt="TÜV Rheinland Prüfung" className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide">TÜV Geprüft</h3>
            <p className="text-blue-200 text-xs">Geprüfte Qualität & Sicherheit</p>
          </motion.div>

          {/* 24h Bereitschaft */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 text-center gap-3"
            data-testid="badge-bereitschaft"
          >
            <div className="bg-accent rounded-xl w-24 h-24 flex flex-col items-center justify-center shadow-sm">
              <Clock className="w-8 h-8 text-accent-foreground" />
              <span className="font-extrabold text-accent-foreground text-lg mt-1">365 / 24</span>
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide">Bereitschaft</h3>
            <p className="text-blue-200 text-xs">365 Tage, 24 Stunden erreichbar</p>
          </motion.div>

          {/* Google Reviews */}
          <motion.a
            href="https://www.google.com/search?q=Patrick+Holy+GmbH+Aschaffenburg"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center justify-center p-6 text-center gap-3 group cursor-pointer"
            data-testid="badge-google"
          >
            <div className="bg-white rounded-xl w-24 h-24 flex flex-col items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-7 h-7 mb-1" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <div className="flex items-center gap-0.5">
                <span className="font-extrabold text-foreground text-lg">4,8</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide">Google Bewertung</h3>
            <p className="text-blue-200 text-xs underline-offset-2 group-hover:underline">
              Bewertungen ansehen →
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
