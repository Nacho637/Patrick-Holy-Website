import { PressArticle } from "@/types";
import { ExternalLink, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface PressCardProps {
  article: PressArticle;
}

export default function PressCard({ article }: PressCardProps) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="block group max-w-4xl mx-auto"
      data-testid={`press-card-${article.id}`}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
        {/* Newspaper-style header bar */}
        <div className="bg-[#01649d] text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/main-echo-logo.png"
              alt="Main-Echo"
              className="h-7 md:h-8 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-xs md:text-sm text-white/90 font-medium hidden sm:inline">
              Online-Ausgabe · {article.date}
            </span>
          </div>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
            Pressebericht
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {/* Image */}
          <div className="md:col-span-2 relative aspect-video md:aspect-auto md:min-h-[280px] overflow-hidden bg-gray-100">
            <img
              src="/images/patrick-holy-auszeichnung.jpg"
              alt="Auszeichnung Partner der Feuerwehr"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Auszeichnung 2023
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Lokales · Feuerwehr Waldaschaff
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight font-serif group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="relative pl-8 border-l-2 border-accent mb-6">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-accent bg-white" />
                <p className="text-lg italic text-foreground/80 leading-relaxed">
                  „{article.excerpt}"
                </p>
                <p className="text-sm text-muted-foreground mt-3 font-medium">
                  — Kreisbrandrat Frank Wissel
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-sm text-muted-foreground">{article.source} · {article.date}</span>
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Original-Artikel lesen
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
