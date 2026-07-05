"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { customerQuotes } from "@/data/restaurant";

// Renders nothing until real quotes are added to `customerQuotes` in
// src/data/restaurant.ts — safe to keep mounted in page.tsx permanently.
export function CustomerVoices() {
  if (customerQuotes.length === 0) return null;

  return (
    <section className="relative bg-ink py-16 md:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="Kundenstimmen" title="Stimmen unserer Gäste" align="center" dark />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {customerQuotes.map((entry, i) => (
            <motion.figure
              key={entry.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-warm-white/10 bg-charcoal p-6"
            >
              <blockquote className="text-sm leading-relaxed text-warm-white/80">
                &ldquo;{entry.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium uppercase tracking-wide text-warm-white/40">
                {entry.name}
                {entry.context ? ` · ${entry.context}` : ""}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
