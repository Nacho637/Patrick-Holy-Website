import { Service } from "@/types";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 transition-colors z-10 duration-500" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-accent z-20" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-primary mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
