import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews, business } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="relative grain bg-smoke-900 py-24 sm:py-32">
      <div className="max-content section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-gold-light text-gold-light" />
            ))}
          </div>
          <p className="mt-4 font-heading text-sm font-600 uppercase tracking-[0.22em] text-ember-light">
            {business.rating}★ · Ranked {business.ranking}
          </p>
          <h2 className="mt-3 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl text-balance">
            Folks can't stop talking
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="flex flex-col rounded-3xl border border-white/10 bg-smoke-800/60 p-8"
            >
              <Quote className="h-9 w-9 text-ember/60" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-cream/85">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-heading text-sm font-600 uppercase tracking-wide text-cream">
                  {r.author}
                </p>
                <p className="text-sm text-cream/50">via {r.source}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
