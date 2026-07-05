"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { deliveryPlatforms, menu, restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

const [featured, ...secondary] = deliveryPlatforms;

// Real menu categories — shown as chips in the featured panel so the card
// reads "food you can order right now", not an abstract platform tile.
const menuCategories = menu.map((category) => category.title);

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
          className="relative mt-10 overflow-hidden rounded-3xl bg-ink md:mt-14"
        >
          <div className="pointer-events-none absolute -left-32 -top-40 z-10 h-[30rem] w-[30rem] bg-[radial-gradient(circle_closest-side,rgba(242,98,46,0.18),transparent)]" />

          <div className="relative grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mustard">
                Empfohlen — der schnellste Weg
              </p>
              <h3 className="mt-3 font-display text-4xl leading-none text-warm-white md:text-6xl">
                {featured.name}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-warm-white/65">
                {featured.description}
              </p>

              <ul className="mt-6 flex max-w-md flex-wrap gap-2">
                {menuCategories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-warm-white/15 px-3 py-1 text-xs font-medium text-warm-white/70"
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                {featured.verified ? (
                  <CtaButton
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featured.cta}
                    <ArrowUpRight size={16} />
                  </CtaButton>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-warm-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-warm-white/50">
                    Bald verfügbar
                  </span>
                )}
              </div>
            </div>

            {/* Real product photo — the panel should make you hungry, not
                remind you of a pricing table. */}
            <div className="relative order-first min-h-[14rem] md:order-none md:min-h-0">
              <Image
                src="/images/menu/brgrs-flagship.jpg"
                alt="Brgrs Brgrs Burger — unser Signature Burger"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent md:bg-gradient-to-r md:from-ink md:via-ink/25 md:to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Secondary channels. Mobile: three compact "auch verfügbar über"
            chips side by side (name + short CTA, no description) so the
            section stays short. sm+ keeps the full descriptive cards. */}
        <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-4">
          {secondary.map((platform, i) => (
            <motion.article
              key={platform.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "group flex flex-col justify-between gap-4 rounded-2xl p-4 sm:gap-8 sm:rounded-3xl sm:p-7",
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
                    "mt-3 font-display text-base leading-none sm:mt-5 sm:text-2xl",
                    platform.verified ? "text-ink" : "text-ink/45"
                  )}
                >
                  {platform.name}
                </h3>
                <p
                  className={cn(
                    "hidden text-sm leading-relaxed sm:mt-3 sm:block",
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
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-ink transition-colors duration-300 group-hover:text-orange sm:gap-2 sm:text-sm"
                >
                  {/* Full CTA copy needs more width than a third of a phone
                      screen — mobile gets a short generic label instead. */}
                  <span className="sm:hidden">Öffnen</span>
                  <span className="hidden sm:inline">{platform.cta}</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : (
                <span className="inline-flex w-fit items-center rounded-full border border-ink/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink/45 sm:px-4 sm:py-1.5 sm:text-xs">
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
