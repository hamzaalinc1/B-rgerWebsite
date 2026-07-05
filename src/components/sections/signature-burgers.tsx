"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { signatureBurgers, restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

// Hand-tuned bento placement (explicit, not auto-flow — mixed spans don't
// pack predictably otherwise): index 0 (the flagship) is large, the rest
// tile around it in a fixed 3-col grid with no gaps.
const PLACEMENT = [
  "sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-3",
  "sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2",
  "sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3",
  "sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4",
  "sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4",
  "sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5",
  "sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5",
];

export function SignatureBurgers() {
  return (
    <section id="speisekarte" className="relative bg-ink py-16 md:py-24 lg:py-28">
      <div className="container-px">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Speisekarte"
            title="Unsere Signature Burger"
            description="Eine Auswahl unserer beliebtesten Kreationen — komplette Karte inklusive Sides, Saucen und Getränken direkt bei Lieferando."
            dark
          />
          <CtaButton
            href={restaurant.links.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="shrink-0"
          >
            Volle Karte ansehen
          </CtaButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:auto-rows-[13rem] md:mt-12 lg:auto-rows-[16rem]">
          {signatureBurgers.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal sm:aspect-auto",
                  featured && "aspect-square",
                  PLACEMENT[i]
                )}
              >
                <div className="relative h-full overflow-hidden">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-transparent" />
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-warm-white"
                    >
                      {tag}
                    </span>
                  ))}

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className={cn(
                          "font-display leading-tight text-warm-white",
                          featured ? "text-3xl sm:text-4xl" : "text-xl"
                        )}
                      >
                        {item.name}
                      </h3>
                      <span
                        className={cn(
                          "shrink-0 font-display text-mustard",
                          featured ? "text-2xl" : "text-lg"
                        )}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-3 leading-relaxed text-warm-white/60",
                        featured ? "max-w-md text-sm sm:text-base" : "text-sm line-clamp-2"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
