import { ReferenceProject } from "@/types";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface ReferenceCardProps {
  reference: ReferenceProject;
  index: number;
}

export default function ReferenceCard({ reference, index }: ReferenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-none shadow-md group h-full">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={reference.image} 
            alt={reference.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold px-3 py-1 text-sm rounded shadow-sm">
            {reference.year}
          </div>
        </div>
        <CardContent className="p-6 bg-white">
          <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
            {reference.title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mt-3">
            <MapPin className="w-4 h-4 mr-1.5 text-primary" />
            <span>Aschaffenburg & Umgebung</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
