"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { locations } from "@/data/locations";

export function LocationsOverview() {
  return (
    <section id="standorte" className="relative overflow-hidden bg-ink py-16 md:py-24 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-14 -top-16 select-none font-display text-[12rem] leading-none text-warm-white/[0.03] md:text-[17rem]"
      >
        BERLIN
      </span>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Unsere Standorte"
          title="Dreimal BRGRS. in Berlin"
          description="Friedrichshain, Mitte und Prenzlauer Berg — drei Kieze, ein Anspruch: Bio Beef, hausgemachte Saucen, ehrliches Handwerk."
          dark
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3">
          {locations.map((location, i) => (
            <motion.article
              key={location.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between gap-10 rounded-3xl bg-charcoal p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-3xl leading-none text-warm-white">
                    {location.district}
                  </h3>
                  {location.flagship && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-orange/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange">
                      Unser Original
                    </span>
                  )}
                </div>

                <div className="mt-6 space-y-3 text-sm text-warm-white/70">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-orange" />
                    {location.address}
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Clock size={16} className="mt-0.5 shrink-0 text-orange" />
                    {location.hoursSummary ?? (
                      <span className="text-warm-white/45">Öffnungszeiten folgen</span>
                    )}
                  </p>
                </div>
              </div>

              {location.flagship ? (
                <a
                  href="#standort"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-warm-white transition-colors duration-300 hover:text-orange"
                >
                  Details &amp; Anfahrt
                  <ArrowDownRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              ) : (
                <a
                  href={location.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-warm-white transition-colors duration-300 hover:text-orange"
                >
                  Route planen
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
