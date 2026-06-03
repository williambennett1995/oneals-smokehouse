import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { business } from "../data";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`max-content section-pad flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "my-2 rounded-2xl border border-white/10 bg-smoke-900/85 py-3 shadow-2xl shadow-black/40 backdrop-blur-md sm:mx-4"
            : "py-5"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember-gradient font-heading text-lg font-700 text-cream shadow-lg shadow-ember/30">
            O
          </span>
          <span className="font-display text-lg font-700 tracking-tight text-cream sm:text-xl">
            O'Neals <span className="text-gold-light">Smokehouse</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm font-500 uppercase tracking-wider text-cream/80 transition-colors duration-200 hover:text-gold-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-ember px-5 py-2.5 font-heading text-sm font-600 uppercase tracking-wider text-cream shadow-lg shadow-ember/30 transition-all duration-200 hover:bg-ember-dark"
          >
            <Phone className="h-4 w-4" />
            Call to Order
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-cream transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-smoke-900/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 font-heading text-base font-500 uppercase tracking-wide text-cream/85 transition-colors hover:bg-white/10 hover:text-gold-light"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={business.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-ember px-4 py-3 font-heading text-base font-600 uppercase tracking-wide text-cream"
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
