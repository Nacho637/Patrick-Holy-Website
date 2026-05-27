import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-14 bg-[#213d86] relative -mt-10 z-20 mx-4 md:mx-auto max-w-7xl rounded-xl md:rounded-2xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* DVGW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center gap-3"
            data-testid="badge-dvgw"
          >
            <div
              className="h-28 md:h-32 flex items-center md:items-end justify-center"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.4))" }}
            >
              <img
                src="/images/dvgw-logo.png"
                alt="DVGW Zertifizierung GW 301"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide min-h-[1.75rem] md:min-h-0 flex items-start justify-center">DVGW GW 301</h3>
            <p className="text-blue-200 text-xs">Rohrleitungsbau zertifiziert</p>
          </motion.div>

          {/* TÜV — larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center justify-center text-center gap-3"
            data-testid="badge-tuv"
          >
            <div
              className="h-28 md:h-32 flex items-center md:items-end justify-center"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.4))" }}
            >
              <img
                src="/images/tuv-logo.png"
                alt="TÜV Rheinland Prüfung"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide min-h-[1.75rem] md:min-h-0 flex items-start justify-center">TÜV Geprüft</h3>
            <p className="text-blue-200 text-xs">Geprüfte Qualität & Sicherheit</p>
          </motion.div>

          {/* 365/24 — custom design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center gap-3"
            data-testid="badge-bereitschaft"
          >
            <div className="relative h-28 md:h-32 flex items-center md:items-end justify-center">
              <div className="relative h-20 w-20 md:h-24 md:w-24">
                <span className="absolute inset-0 inline-flex rounded-full bg-accent/20 animate-ping" />
              <div
                className="relative h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, #ffd84a 0%, #febf05 55%, #c89500 100%)",
                  boxShadow:
                    "inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -3px 8px rgba(0,0,0,0.25), 0 6px 18px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-center leading-none">
                  <div className="font-extrabold text-[22px] md:text-[26px] text-[#213d86] tracking-tight">365</div>
                  <div className="w-10 h-px bg-[#213d86]/60 mx-auto my-1" />
                  <div className="font-extrabold text-[18px] md:text-[20px] text-[#213d86] tracking-tight">24h</div>
                </div>
              </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide min-h-[1.75rem] md:min-h-0 flex items-start justify-center">Notfall-Bereitschaft</h3>
            <p className="text-blue-200 text-xs">Wir sind immer für Sie da</p>
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
            className="flex flex-col items-center justify-center text-center gap-3 group cursor-pointer"
            data-testid="badge-google"
          >
            <div
              className="h-28 md:h-32 flex items-center md:items-end justify-center gap-3 group-hover:scale-105 transition-transform md:pb-1"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.35))" }}
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14" aria-hidden="true">
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
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-white text-3xl md:text-4xl leading-none">4,8</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-blue-200 text-[10px] uppercase tracking-wider mt-1">Google</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide min-h-[1.75rem] md:min-h-0 flex items-start justify-center">Top Bewertungen</h3>
            <p className="text-blue-200 text-xs underline-offset-2 group-hover:underline">
              Bewertungen ansehen →
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
