import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { business, hours } from "../data";

// Today's index (0=Sun) for highlighting current day. Computed at render.
function todayIndex() {
  try {
    return new Date().getDay();
  } catch {
    return -1;
  }
}

export default function Visit() {
  const today = todayIndex();

  return (
    <section id="visit" className="relative bg-smoke-950 py-24 sm:py-32">
      <div className="max-content section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-600 uppercase tracking-[0.22em] text-ember-light">
            Come & Get It
          </p>
          <h2 className="mt-3 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl text-balance">
            Find us in Cassopolis
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-3xl border border-white/10 bg-smoke-800/60 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember/15">
                  <MapPin className="h-5 w-5 text-ember-light" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-cream/60">
                    Address
                  </h3>
                  <p className="mt-1 font-display text-xl font-700 text-cream">{business.address}</p>
                  <p className="text-cream/70">{business.cityState}</p>
                  <a
                    href={business.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 font-heading text-sm font-600 uppercase tracking-wide text-gold-light hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-smoke-800/60 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15">
                  <Phone className="h-5 w-5 text-gold-light" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-cream/60">
                    Order by Phone
                  </h3>
                  <a
                    href={business.phoneHref}
                    className="mt-1 block font-display text-xl font-700 text-cream transition-colors hover:text-gold-light"
                  >
                    {business.phone}
                  </a>
                  <p className="text-cream/60">Takeout &amp; delivery available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-3xl border border-white/10 bg-smoke-800/60 p-7"
          >
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-ember-light" />
              <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-cream/60">
                Hours
              </h3>
            </div>
            <ul className="mt-5 divide-y divide-white/10">
              {hours.map((h, i) => {
                const isToday = i === today;
                return (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 ${
                      isToday ? "bg-ember/10" : ""
                    }`}
                  >
                    <span
                      className={`font-heading text-sm font-600 uppercase tracking-wide ${
                        isToday ? "text-gold-light" : "text-cream/80"
                      }`}
                    >
                      {h.day}
                      {isToday && <span className="ml-2 text-[10px] text-ember-light">• Today</span>}
                    </span>
                    <span
                      className={`text-sm ${
                        h.closed ? "text-cream/40" : isToday ? "text-cream" : "text-cream/70"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 rounded-xl bg-smoke-700/50 px-4 py-3 text-center text-sm text-cream/55">
              Hours can change for holidays &amp; private events — call ahead to be sure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
