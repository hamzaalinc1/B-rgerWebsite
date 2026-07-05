"use client";

import { motion } from "motion/react";
import { Beef, Leaf, MapPinned, Timer } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { restaurant } from "@/data/restaurant";

const FEATURES = [
  {
    icon: Beef,
    title: "Bio-zertifiziertes Beef",
    description: `${restaurant.certification}. Kein Kompromiss beim wichtigsten Teil des Burgers.`,
  },
  {
    icon: Leaf,
    title: "Handwerk statt Fließband",
    description:
      "Hausgemachte Saucen, frisch belegte Buns, jeden Tag neu zubereitet — nichts kommt aus der Tüte.",
  },
  {
    icon: MapPinned,
    title: "Regional & ehrlich",
    description:
      "Zutaten aus der Region, transparent ausgezeichnet. Wenn wir es nicht selbst essen würden, servieren wir es nicht.",
  },
  {
    icon: Timer,
    title: "Schnell auf dem Tisch",
    description:
      "Über Lieferando, Uber Eats und Wolt in Minuten bei dir — ohne Abstriche bei der Qualität.",
  },
];

export function WhyBrgrs() {
  return (
    <section id="warum-brgrs" className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-24 select-none font-display text-[16rem] leading-none text-ink/[0.03]"
      >
        BIO
      </span>

      <div className="container-px relative grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Warum BRGRS."
            title="Ehrliche Zutaten. Unehrlich gut."
            description="Kein austauschbarer Systemburger. Wir stehen für bio-zertifiziertes Rindfleisch, hausgemachte Saucen und ein Handwerk, das man schmeckt."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 inline-flex items-baseline gap-3 border-t border-ink/10 pt-6"
          >
            <span className="font-display text-6xl text-orange">100%</span>
            <span className="max-w-[10rem] text-sm leading-snug text-ink/60">
              Bio-zertifiziertes Rindfleisch, jeden Tag.
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-6 border-b border-ink/10 py-7 first:pt-0 last:border-b-0"
            >
              <feature.icon
                size={30}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-orange transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65 sm:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
