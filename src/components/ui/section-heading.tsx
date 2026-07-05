"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.25em]",
            dark ? "text-mustard" : "text-orange"
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          // Mobile gets a slightly smaller size with looser leading — Anton at
          // text-4xl/0.95 reads cramped on 375–414px screens with long titles.
          "font-display text-[2rem] leading-[1.06] sm:text-5xl sm:leading-[0.95] md:text-6xl tracking-tight",
          dark ? "text-warm-white" : "text-ink"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "mt-4 md:mt-5 text-base md:text-lg leading-relaxed",
            dark ? "text-warm-white/70" : "text-ink/70"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
