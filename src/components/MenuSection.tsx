import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu, business } from "../data";

const tagStyles: Record<string, string> = {
  Signature: "bg-ember/20 text-ember-light border-ember/40",
  "Fan Favorite": "bg-gold/20 text-gold-light border-gold/40",
  Limited: "bg-white/10 text-cream/80 border-white/20",
};

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative bg-smoke-950 py-24 sm:py-32">
      <div className="max-content section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.22em] text-ember-light">
            The Menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl text-balance">
            Pick your plate
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Sold by the plate or by the pound. Live prices are on our online ordering page.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {menu.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`cursor-pointer rounded-full border px-5 py-2.5 font-heading text-sm font-600 uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "border-ember bg-ember text-cream shadow-lg shadow-ember/30"
                    : "border-white/15 bg-white/5 text-cream/70 hover:border-gold-light hover:text-gold-light"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-12"
          >
            <p className="mb-8 text-center text-cream/60">{current.blurb}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {current.items.map((item, i) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-smoke-800/50 p-6 transition-colors duration-200 hover:border-gold/40 hover:bg-smoke-800"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-700 text-cream transition-colors group-hover:text-gold-light">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 font-heading text-[10px] font-600 uppercase tracking-wider ${
                          tagStyles[item.tag]
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-cream/65">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 text-center">
          <a
            href={business.orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ember-gradient px-8 py-4 font-heading text-base font-600 uppercase tracking-wider text-cream shadow-xl shadow-ember/25 transition-transform duration-200 hover:brightness-110"
          >
            Order Online for Pickup
          </a>
          <p className="mt-3 text-sm text-cream/50">
            Or call us at{" "}
            <a href={business.phoneHref} className="text-gold-light hover:underline">
              {business.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
