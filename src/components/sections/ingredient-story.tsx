"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Layer = {
  id: string;
  label: string;
  description: string;
  className: string;
  /** Extra inline background (e.g. sesame seeds as radial gradients). */
  style?: React.CSSProperties;
  /** Responsive size classes for the layer shape. */
  size: string;
  /** Tiny static rotation so the stack reads hand-assembled, not CAD-drawn. */
  tilt: string;
  labelSide: "left" | "right";
};

// Shared dimensionality: a soft top highlight, a darker under-edge and a
// grounded drop shadow make each layer read like a physical cross-section
// instead of a flat colored bar. Static box-shadows only — cheap to paint.
const LAYER_DEPTH =
  "shadow-[inset_0_2px_5px_rgba(255,255,255,0.22),inset_0_-4px_8px_rgba(0,0,0,0.28),0_12px_20px_-10px_rgba(0,0,0,0.65)]";

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
    className: "rounded-t-full",
    // Sesame seeds as tiny radial gradients over the crust gradient.
    style: {
      backgroundImage: [
        "radial-gradient(ellipse 7px 4px at 22% 42%, #f8e4ba 55%, transparent 62%)",
        "radial-gradient(ellipse 6px 4px at 40% 24%, #f5dcae 55%, transparent 62%)",
        "radial-gradient(ellipse 7px 4px at 58% 46%, #f8e4ba 55%, transparent 62%)",
        "radial-gradient(ellipse 6px 4px at 76% 28%, #f5dcae 55%, transparent 62%)",
        "radial-gradient(ellipse 6px 4px at 32% 68%, #f8e4ba 55%, transparent 62%)",
        "radial-gradient(ellipse 7px 4px at 68% 70%, #f5dcae 55%, transparent 62%)",
        "linear-gradient(to bottom, #eab269, #d3924a 55%, #b87c3c)",
      ].join(", "),
    },
    size: "h-12 w-36 md:h-[4.5rem] md:w-52",
    tilt: "-rotate-2",
    labelSide: "left",
  },
  {
    id: "sauce",
    label: "Hausgemachte Sauce",
    description:
      "Eigene Rezeptur — von Mayonnaise bis Whiskey-BBQ, jeden Tag frisch angerührt.",
    className: "bg-gradient-to-b from-[#eeda63] to-[#d3b52f] rounded-full",
    size: "h-3.5 w-[8.5rem] md:h-[1.4rem] md:w-50",
    tilt: "rotate-1",
    labelSide: "right",
  },
  {
    id: "cheese",
    label: "Irischer Cheddar",
    description: "Kräftig-würziger Cheddar, der genau richtig über den Patty schmilzt.",
    className:
      "bg-gradient-to-b from-[#f7c445] to-[#e59f1c] [clip-path:polygon(4%_0,96%_0,100%_100%,0_100%)]",
    size: "h-4 w-[8.5rem] md:h-[1.6rem] md:w-50",
    tilt: "-rotate-1",
    labelSide: "left",
  },
  {
    id: "patty",
    label: "Bio Beef Patty",
    description: "Regionales, bio-zertifiziertes Rindfleisch — der Kern jedes BRGRS Burgers.",
    className: "bg-gradient-to-b from-[#6b4530] via-[#4a2c1a] to-[#361f0e] rounded-full",
    size: "h-6 w-[8.5rem] md:h-9 md:w-50",
    tilt: "rotate-0",
    labelSide: "right",
  },
  {
    id: "salad",
    label: "Saisonsalat",
    description: "Knackiger Salat der Saison für den frischen Crunch in jedem Biss.",
    className: "bg-gradient-to-b from-[#84b354] to-[#5c8a33] rounded-[45%]",
    size: "h-5 w-[9.5rem] md:h-7 md:w-[13.5rem]",
    tilt: "rotate-2",
    labelSide: "left",
  },
  {
    id: "tomato",
    label: "Frische Tomate",
    description: "Dünn geschnitten, für Frische und die richtige Süße.",
    className: "bg-gradient-to-b from-[#d95c48] to-[#ab3627] rounded-full",
    size: "h-4 w-[5.5rem] md:h-[1.6rem] md:w-32",
    tilt: "-rotate-1",
    labelSide: "right",
  },
  {
    id: "bun-bottom",
    label: "Bio-Bun (Boden)",
    description: "Stabile Basis, die jeden Tropfen Sauce hält.",
    className:
      "bg-gradient-to-b from-[#e0a459] to-[#a9702f] rounded-b-3xl rounded-t-md",
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

        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-2 md:mt-14 md:gap-2.5">
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
                <div
                  className={cn(LAYER_DEPTH, layer.tilt, layer.size, layer.className)}
                  style={layer.style}
                />
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
          className="mx-auto mt-10 max-w-md text-center text-sm text-warm-white/45 md:mt-12"
        >
          Nichts wird vorproduziert — jeder Burger entsteht erst, wenn du bestellst.
        </motion.p>
      </div>
    </section>
  );
}
