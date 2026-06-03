import { motion } from "framer-motion";
import { Star, MapPin, ChevronDown } from "lucide-react";
import { business } from "../data";
import SmartImage from "./SmartImage";

const HERO_IMG =
  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Background photo */}
      <SmartImage
        src={HERO_IMG}
        alt="Slow-smoked barbecue brisket and ribs resting on the cutting board"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Darkening + warmth overlays for legible text */}
      <div className="absolute inset-0 bg-gradient-to-b from-smoke-950/80 via-smoke-900/75 to-smoke-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-smoke-950/90 via-transparent to-transparent" />

      {/* Drifting smoke wisps */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[15, 38, 62, 85].map((left, i) => (
          <span
            key={left}
            className="absolute bottom-1/3 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-smoke-rise"
            style={{ left: `${left}%`, animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="max-content section-pad w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 fill-gold-light text-gold-light" />
            <span className="font-heading text-xs font-600 uppercase tracking-[0.18em] text-gold-light sm:text-sm">
              {business.rating}★ · {business.ranking}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-4xl font-display text-5xl font-800 leading-[1.02] tracking-tight text-cream text-balance sm:text-7xl lg:text-8xl"
          >
            Real-deal <span className="text-ember-light">barbecue</span>,
            <br className="hidden sm:block" /> smoked to perfection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl"
          >
            {business.blurb} Family-owned in Cassopolis, Michigan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={business.orderHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 font-heading text-base font-600 uppercase tracking-wider text-cream shadow-xl shadow-ember/30 transition-all duration-200 hover:bg-ember-dark"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/5 px-8 py-4 font-heading text-base font-600 uppercase tracking-wider text-cream backdrop-blur-sm transition-all duration-200 hover:border-gold-light hover:text-gold-light"
            >
              See the Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-sm text-cream/70"
          >
            <MapPin className="h-4 w-4 text-ember-light" />
            <span>
              {business.address}, {business.cityState}
            </span>
          </motion.div>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-cream/50 transition-colors hover:text-gold-light sm:block"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
