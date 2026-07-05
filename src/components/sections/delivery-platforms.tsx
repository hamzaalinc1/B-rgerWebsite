"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { deliveryPlatforms, restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

const [featured, ...secondary] = deliveryPlatforms;

const deliveryNames = deliveryPlatforms
  .filter((p) => p.verified && p.id !== "pickup")
  .map((p) => p.name);
const deliveryNamesSentence =
  deliveryNames.length > 1
    ? `${deliveryNames.slice(0, -1).join(", ")} und ${deliveryNames.at(-1)}`
    : deliveryNames.join("");

export function DeliveryPlatforms() {
  return (
    <section id="lieferung" className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-28">
      {/* oversized background word, same texture trick as why-brgrs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 select-none font-display text-[13rem] leading-none text-ink/[0.03] md:text-[19rem]"
      >
        HUNGRIG?
      </span>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Bestellen"
          title="Dein Burger ist drei Klicks entfernt."
          description={`Frisch aus der ${restaurant.address.street} — geliefert über ${deliveryNamesSentence}, oder du holst selbst ab.`}
        />

        {/* Featured channel — Lieferando */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 overflow-hidden rounded-3xl bg-ink p-8 md:mt-14 md:p-12"
        >
          <div className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] bg-[radial-gradient(circle_closest-side,rgba(242,98,46,0.22),transparent)]" />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[8rem] leading-none text-warm-white/[0.04] md:text-[11rem]"
          >
            01
          </span>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mustard">
                Unser Hauptkanal
              </p>
              <h3 className="mt-3 font-display text-4xl leading-none text-warm-white md:text-6xl">
                {featured.name}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-warm-white/65">
                {featured.description}
              </p>
            </div>
            {featured.verified ? (
              <CtaButton
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                {featured.cta}
                <ArrowUpRight size={16} />
              </CtaButton>
            ) : (
              <span className="inline-flex shrink-0 items-center rounded-full border border-warm-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-warm-white/50">
                Bald verfügbar
              </span>
            )}
          </div>
        </motion.div>

        {/* Secondary channels */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {secondary.map((platform, i) => (
            <motion.article
              key={platform.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "group flex flex-col justify-between gap-8 rounded-3xl p-7",
                platform.verified
                  ? "border border-ink/10 bg-warm-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(11,11,12,0.3)]"
                  : "border border-dashed border-ink/20"
              )}
            >
              <div>
                <span
                  aria-hidden
                  className="block h-[3px] w-8 rounded-full"
                  style={{ backgroundColor: platform.verified ? platform.accent : "rgba(11,11,12,0.2)" }}
                />
                <h3
                  className={cn(
                    "mt-5 font-display text-2xl leading-none",
                    platform.verified ? "text-ink" : "text-ink/45"
                  )}
                >
                  {platform.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    platform.verified ? "text-ink/60" : "text-ink/40"
                  )}
                >
                  {platform.description}
                </p>
              </div>

              {platform.verified ? (
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 group-hover:text-orange"
                >
                  {platform.cta}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : (
                <span className="inline-flex w-fit items-center rounded-full border border-ink/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink/45">
                  Bald verfügbar
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
