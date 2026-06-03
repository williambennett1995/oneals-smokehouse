import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

// Placeholder food photography — swap these URLs for O'Neals' own photos.
const shots = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Rack of smoked spare ribs glazed with barbecue sauce",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    alt: "Smoked barbecue served with classic sides",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    alt: "Sliced smoked beef brisket showing the smoke ring",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1626323107927-008ae2828ab6?auto=format&fit=crop&w=800&q=80",
    alt: "Barbecue meats fresh off the grill",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504564321107-4aa3efddb5bd?auto=format&fit=crop&w=800&q=80",
    alt: "A loaded plate of smoked barbecue",
    span: "row-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-smoke-900 py-20 sm:py-24">
      <div className="max-content section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-heading text-sm font-600 uppercase tracking-[0.22em] text-ember-light">
            Straight Off the Smoker
          </p>
          <h2 className="mt-3 font-display text-4xl font-800 text-cream sm:text-5xl">
            A taste of the pit
          </h2>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {shots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${s.span}`}
            >
              <SmartImage
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoke-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
