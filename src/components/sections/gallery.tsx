"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/restaurant";
import { cn } from "@/lib/utils";

// Mobile uses a plain 2-col grid — only "wide" items take the full row,
// everything else is a single square cell so nothing leaves gaps.
const MOBILE_CLASSES: Record<string, string> = {
  wide: "col-span-2",
  tall: "col-span-1",
  normal: "col-span-1",
};

// Explicit desktop placement (4 columns) — hand-tuned so the bento grid
// has no gaps, since auto-placement with mixed 1x1/1x2/2x1 spans doesn't
// pack predictably even with `grid-flow-dense`.
const DESKTOP_PLACEMENT = [
  "sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2",
  "sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3",
  "sm:col-start-4 sm:col-end-5 sm:row-start-1 sm:row-end-2",
  "sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3",
  "sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-4",
  "sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4",
  "sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-5",
  "sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5",
];

export function Gallery() {
  return (
    <section id="galerie" className="relative bg-ink py-16 md:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Einblicke"
          title="Vom Grill auf den Teller"
          description="Ein Blick in unsere Küche — offenes Feuer, frische Zutaten und der Moment, auf den alles hinausläuft."
          dark
        />

        <div className="mt-10 md:mt-12 grid grid-cols-2 auto-rows-[10rem] gap-4 sm:grid-cols-4 sm:auto-rows-[8rem] lg:auto-rows-[9rem]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-charcoal",
                MOBILE_CLASSES[image.size],
                DESKTOP_PLACEMENT[i]
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
