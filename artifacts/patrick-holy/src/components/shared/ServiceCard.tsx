import { Service } from "@/types";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const SERVICE_FORM_VALUE: Record<string, string> = {
  tiefbau: "Tiefbau",
  strassenbau: "Straßenbau",
  rohrleitungsbau: "Rohrleitungsbau/Fernwärme",
  pflasterarbeiten: "Pflasterarbeiten",
  winterdienst: "Winterdienst",
  abbrucharbeiten: "Erd-/Abbrucharbeiten",
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const formValue = SERVICE_FORM_VALUE[service.id] ?? "Sonstiges";
  const href = `/kontakt?service=${encodeURIComponent(formValue)}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block group">
        <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-white">
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-foreground transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {service.description}
            </p>
            <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent-foreground transition-colors mt-auto">
              <span>Jetzt anfragen</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
