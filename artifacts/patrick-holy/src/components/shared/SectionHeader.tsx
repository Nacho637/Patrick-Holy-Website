import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = "left",
  children,
  className = "",
}: SectionHeaderProps) {
  const isCenter = alignment === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 font-semibold uppercase tracking-wider text-primary mb-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-8 h-1 bg-accent inline-block rounded-full"></span>
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-6 text-lg text-muted-foreground max-w-3xl ${
            isCenter ? "mx-auto text-center" : ""
          }`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
