import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const baustellenPosts = [
  {
    id: "fuhrpark",
    src: "/images/baustelle-fuhrpark.png",
    alt: "Patrick Holy Fuhrpark mit LKW und Bagger auf dem Betriebshof",
  },
  {
    id: "bagger",
    src: "/images/baustelle-bagger.png",
    alt: "Patrick Holy Bagger bei Aushubarbeiten vor historischem Gebäude",
  },
  {
    id: "erdarbeiten",
    src: "/images/baustelle-erdarbeiten.png",
    alt: "Patrick Holy Bagger und Team bei Erdarbeiten im Waldgebiet",
  },
];

export default function SocialSection() {
  return (
    <section className="py-14 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Aktuelles von unseren Baustellen"
          alignment="center"
          className="mb-8 md:mb-10"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {baustellenPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]"
              data-testid={`placeholder-social-${i}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
