import { Shield, Award, Clock, Star } from "lucide-react";
import TrustBadge from "@/components/shared/TrustBadge";

export default function TrustSection() {
  const badges = [
    { icon: <Shield className="w-full h-full" />, title: "DVGW Zertifiziert" },
    { icon: <Award className="w-full h-full" />, title: "TÜV Geprüft" },
    { icon: <Clock className="w-full h-full" />, title: "365 Tage / 24h Bereitschaft" },
    { icon: <Star className="w-full h-full fill-accent" />, title: "⭐ 4,8 Google-Bewertung" },
  ];

  return (
    <section className="py-12 bg-[#213d86] relative -mt-10 z-20 mx-4 md:mx-auto max-w-7xl rounded-xl md:rounded-2xl shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {badges.map((badge, idx) => (
            <TrustBadge key={idx} icon={badge.icon} title={badge.title} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
