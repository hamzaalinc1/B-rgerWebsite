"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Layer = {
  id: string;
  label: string;
  description: string;
  className: string;
  /** Responsive size classes for the layer shape. */
  size: string;
  /** Tiny static rotation so the stack reads hand-assembled, not CAD-drawn. */
  tilt: string;
  labelSide: "left" | "right";
};

// Statically composed "exploded burger" diagram. The previous version was a
// 320vh scroll-scrubbed animation (7 layers × continuous useTransform/
// useSpring recalculation per frame) — a Safari performance risk and hard to
// read. Same content, now a compact diagram with one whileInView reveal per
// layer.
const LAYERS: Layer[] = [
  {
    id: "bun-top",
    label: "Bio-Bun",
    description: "Weiches Bio-Brot, frisch aufgebacken für den perfekten Biss.",
    className: "bg-gradient-to-b from-[#e3a75c] to-[#c4823a] rounded-t-full",
    size: "h-12 w-36 md:h-[4.5rem] md:w-52",
    tilt: "-rotate-2",
    labelSide: "left",
  },
  {
    id: "sauce",
    label: "Hausgemachte Sauce",
    description:
      "Eigene Rezeptur — von Mayonnaise bis Whiskey-BBQ, jeden Tag frisch angerührt.",
    className: "bg-[#e2c94a] rounded-full",
    size: "h-3.5 w-[8.5rem] md:h-[1.4rem] md:w-50",
    tilt: "rotate-1",
    labelSide: "right",
  },
  {
    id: "cheese",
    label: "Irischer Cheddar",
    description: "Kräftig-würziger Cheddar, der genau richtig über den Patty schmilzt.",
    className: "bg-[#f2b632] [clip-path:polygon(4%_0,96%_0,100%_100%,0_100%)]",
    size: "h-4 w-[8.5rem] md:h-[1.6rem] md:w-50",
    tilt: "-rotate-1",
    labelSide: "left",
  },
  {
    id: "patty",
    label: "Bio Beef Patty",
    description: "Regionales, bio-zertifiziertes Rindfleisch — der Kern jedes BRGRS Burgers.",
    className: "bg-gradient-to-b from-[#5a3826] to-[#3d2416] rounded-full",
    size: "h-6 w-[8.5rem] md:h-9 md:w-50",
    tilt: "rotate-0",
    labelSide: "right",
  },
  {
    id: "salad",
    label: "Saisonsalat",
    description: "Knackiger Salat der Saison für den frischen Crunch in jedem Biss.",
    className: "bg-[#6b9b3f] rounded-[45%]",
    size: "h-5 w-[9.5rem] md:h-7 md:w-[13.5rem]",
    tilt: "rotate-2",
    labelSide: "left",
  },
  {
    id: "tomato",
    label: "Frische Tomate",
    description: "Dünn geschnitten, für Frische und die richtige Süße.",
    className: "bg-[#c94a3a] rounded-full",
    size: "h-4 w-[5.5rem] md:h-[1.6rem] md:w-32",
    tilt: "-rotate-1",
    labelSide: "right",
  },
  {
    id: "bun-bottom",
    label: "Bio-Bun (Boden)",
    description: "Stabile Basis, die jeden Tropfen Sauce hält.",
    className: "bg-gradient-to-b from-[#d99a52] to-[#b87b3a] rounded-b-3xl rounded-t-md",
    size: "h-9 w-36 md:h-[3.2rem] md:w-52",
    tilt: "rotate-1",
    labelSide: "left",
  },
];

export function IngredientStory() {
  return (
    <section id="zubereitung" className="relative overflow-hidden bg-charcoal py-16 md:py-24 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-12 top-4 select-none font-display text-[12rem] leading-none text-warm-white/[0.03] md:text-[18rem]"
      >
        FRISCH
      </span>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Jede Schicht zählt"
          title="So bauen wir jeden Burger"
          description="Sieben Schichten, kein Füllstoff — frisch zusammengesetzt, sobald deine Bestellung reinkommt."
          align="center"
          dark
        />

        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-3 md:mt-16 md:gap-4">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-[9.5rem_1fr] items-center gap-x-6 md:grid-cols-[1fr_14rem_1fr] md:gap-x-10"
            >
              {/* shape */}
              <div className="flex justify-center md:col-start-2 md:row-start-1">
                <div className={cn("shadow-lg", layer.tilt, layer.size, layer.className)} />
              </div>

              {/* label */}
              <div
                className={cn(
                  "md:row-start-1",
                  layer.labelSide === "left"
                    ? "md:col-start-1 md:text-right"
                    : "md:col-start-3 md:text-left"
                )}
              >
                <p className="font-display text-base text-warm-white md:text-xl">
                  {layer.label}
                </p>
                <p
                  className={cn(
                    "mt-1 max-w-xs text-xs leading-relaxed text-warm-white/55 md:text-sm",
                    layer.labelSide === "left" && "md:ml-auto"
                  )}
                >
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-md text-center text-sm text-warm-white/45 md:mt-16"
        >
          Nichts wird vorproduziert — jeder Burger entsteht erst, wenn du bestellst.
        </motion.p>
      </div>
    </section>
  );
}
