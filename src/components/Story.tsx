import { motion } from "framer-motion";
import { Flame, Heart, Clock } from "lucide-react";
import SmartImage from "./SmartImage";

const pillars = [
  {
    icon: Flame,
    title: "Smoked Low & Slow",
    body: "Real wood smoke and patience. No shortcuts — just bark, bite, and bold flavor.",
  },
  {
    icon: Heart,
    title: "Family-Owned",
    body: "A Southern-proud family kitchen feeding Cassopolis one plate at a time.",
  },
  {
    icon: Clock,
    title: "Made Fresh Daily",
    body: "Sides from scratch and meats smoked through the night. When it's gone, it's gone.",
  },
];

const STORY_IMG =
  "https://images.unsplash.com/photo-1558030089-02acba3c214e?auto=format&fit=crop&w=1200&q=80";

export default function Story() {
  return (
    <section id="story" className="relative grain bg-smoke-900 py-24 sm:py-32">
      <div className="max-content section-pad grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <SmartImage
              src={STORY_IMG}
              alt="A loaded plate of smoked barbecue with classic Southern sides"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rotate-2 rounded-2xl bg-gold px-6 py-4 shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-800 leading-none text-smoke-950">#1</p>
            <p className="font-heading text-xs font-600 uppercase tracking-wider text-smoke-800">
              BBQ in Town
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-heading text-sm font-600 uppercase tracking-[0.22em] text-ember-light">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl text-balance">
            Barbecue the way it's meant to be.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            At O'Neals Smokehouse, barbecue isn't a side hustle — it's a calling. We're a
            family-owned, Southern-proud spot turning out brisket, ribs, pulled pork and burnt ends
            that locals drive across Michiana for.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Smoked overnight, sauced just right, and served with made-from-scratch sides. Good food,
            helping people — one plate at a time.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="rounded-2xl border border-white/10 bg-smoke-800/60 p-5"
              >
                <p.icon className="h-7 w-7 text-gold-light" />
                <h3 className="mt-3 font-heading text-base font-600 uppercase tracking-wide text-cream">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/65">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
