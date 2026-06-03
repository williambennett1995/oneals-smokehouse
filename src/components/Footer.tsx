import { Facebook, MapPin, Phone } from "lucide-react";
import { business } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-smoke-950">
      <div className="max-content section-pad py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember-gradient font-heading text-lg font-700 text-cream">
                O
              </span>
              <span className="font-display text-xl font-700 text-cream">
                O'Neals <span className="text-gold-light">Smokehouse</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {business.tagline} Family-owned barbecue in Cassopolis, Michigan.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-cream/50">
              Visit
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={business.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-cream/75 transition-colors hover:text-gold-light"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-light" />
                  <span>
                    {business.address}, {business.cityState}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2.5 text-cream/75 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-ember-light" />
                  {business.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-cream/50">
              Order &amp; Follow
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={business.orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-ember px-5 py-2.5 font-heading text-sm font-600 uppercase tracking-wide text-cream transition-colors hover:bg-ember-dark"
              >
                Order Online
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
              >
                <Facebook className="h-4 w-4" />
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} O'Neals Smokehouse. All rights reserved.</p>
          <p>Slow-smoked in Cassopolis, Michigan.</p>
        </div>
      </div>
    </footer>
  );
}
