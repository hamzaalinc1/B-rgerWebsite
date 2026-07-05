"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { restaurant } from "@/data/restaurant";

// TODO: once real customer quotes are provided, render them via
// <CustomerVoices /> (src/components/sections/customer-voices.tsx) below
// this section — do not invent placeholder quotes here.

export function Reviews() {
  return (
    <section id="bewertungen" className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-28">
      <div className="container-px flex flex-col items-center text-center">
        <SectionHeading
          eyebrow="Bewertungen"
          title="Was Gäste über uns sagen"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center sm:mt-10"
        >
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[4.5rem] leading-none text-ink sm:text-[7rem]">
              {restaurant.googleRating.toFixed(1)}
            </span>
            <span className="font-display text-xl text-ink/30 sm:text-2xl">/5</span>
          </div>
          {/* True fractional fill — 4.7/5 shows 4.7 stars, not 5. */}
          <div className="relative mt-3" role="img" aria-label={`${restaurant.googleRating.toFixed(1)} von 5 Sternen`}>
            <div className="flex gap-1 text-ink/15">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="fill-current" />
              ))}
            </div>
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${(restaurant.googleRating / 5) * 100}%` }}
            >
              <div className="flex gap-1 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} className="shrink-0 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm text-ink/60 sm:mt-4 sm:text-base">
            Durchschnittliche Google-Bewertung von Gästen in Friedrichshain.
          </p>
          <a
            href={restaurant.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-mustard transition-colors sm:mt-6"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
