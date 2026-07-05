"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { locations } from "@/data/locations";
import { cn } from "@/lib/utils";

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
          title="Gestartet in Friedrichshain. Berlin ist dran."
          description="Unser Original steht in der Pettenkoferstraße — zwei weitere Kieze sind in Vorbereitung."
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
              className={cn(
                "flex flex-col justify-between gap-10 rounded-3xl p-8",
                location.verified
                  ? "bg-charcoal"
                  : "border border-dashed border-warm-white/15"
              )}
            >
              <div>
                {location.verified ? (
                  <span className="inline-flex w-fit items-center rounded-full bg-orange/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange">
                    Geöffnet
                  </span>
                ) : (
                  <span className="inline-flex w-fit items-center rounded-full border border-mustard/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-mustard/80">
                    In Vorbereitung
                  </span>
                )}
                <h3
                  className={cn(
                    "mt-5 font-display text-3xl leading-none",
                    location.verified ? "text-warm-white" : "text-warm-white/45"
                  )}
                >
                  {location.district}
                </h3>

                {location.verified ? (
                  <div className="mt-6 space-y-3 text-sm text-warm-white/70">
                    {location.address && (
                      <p className="flex items-start gap-2.5">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-orange" />
                        {location.address}
                      </p>
                    )}
                    {location.hoursSummary && (
                      <p className="flex items-start gap-2.5">
                        <Clock size={16} className="mt-0.5 shrink-0 text-orange" />
                        {location.hoursSummary}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="mt-6 text-sm leading-relaxed text-warm-white/40">
                    Neuer Standort in Planung — Adresse und Öffnungszeiten folgen.
                  </p>
                )}
              </div>

              {location.verified ? (
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
                <p className="text-xs uppercase tracking-[0.16em] text-warm-white/30">
                  Demnächst
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
