import { motion } from "framer-motion";

const words = [
  "Brisket",
  "Pulled Pork",
  "Spare Ribs",
  "Rib Tips",
  "Burnt Ends",
  "Mac & Cheese",
  "Sweet Potatoes",
  "Carnitas",
];

export default function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ember-gradient py-4">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {loop.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-heading text-lg font-600 uppercase tracking-[0.2em] text-cream/95"
          >
            {w}
            <span className="text-cream/50">✶</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
