import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  icon: ReactNode;
  title: string;
  index: number;
}

export default function TrustBadge({ icon, title, index }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-4 shrink-0 shadow-sm border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <div className="relative z-10 w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">{title}</h3>
    </motion.div>
  );
}
