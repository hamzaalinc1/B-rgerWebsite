"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/restaurant";

// Deliberately a uniform grid: every cell is the same square, so no
// combination of spans can ever leave an empty cell. The previous
// hand-authored bento placement left three visible black voids on desktop —
// a clean grid beats a broken fancy layout.
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

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-charcoal"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
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
