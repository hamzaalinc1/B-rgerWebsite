"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { BioSeal } from "@/components/ui/bio-seal";
import { restaurant } from "@/data/restaurant";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-20"
    >
      {/* Ambient background glow. Radial gradients instead of blur() filters:
          large-radius CSS blurs are a known Safari GPU/memory hog and were a
          prime suspect for mobile-Safari tab crashes. Same look, ~zero cost. */}
      <div className="pointer-events-none absolute -left-56 top-1/4 h-[46rem] w-[46rem] bg-[radial-gradient(circle_closest-side,rgba(242,98,46,0.17),transparent)]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[38rem] w-[38rem] bg-[radial-gradient(circle_closest-side,rgba(232,169,58,0.09),transparent)]" />

      {/* oversized outlined wordmark, pure background texture */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        aria-hidden
        className="text-stroke-2 pointer-events-none absolute left-1/2 top-1/2 -z-0 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[26vw] leading-none text-transparent md:block"
        style={{ WebkitTextStrokeColor: "rgba(255,248,238,0.06)" }}
      >
        BRGRS
      </motion.span>

      <div className="container-px relative z-10 grid w-full grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-warm-white/70"
          >
            {restaurant.certification}
          </motion.p>

          <h1 className="font-display text-warm-white leading-[0.88] tracking-tight text-[clamp(3.2rem,9vw,7rem)]">
            {["FRISCH.", "BIO.", "UNVERSCHÄMT", "GUT."].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease: easeOut }}
                >
                  {word === "UNVERSCHÄMT" ? (
                    <span className="text-orange">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-warm-white/70"
          >
            Handgemachte Burger aus bio-zertifiziertem Rindfleisch, frisch belegt
            an drei Standorten in Berlin. Kein Kompromiss, keine Abkürzung — nur ehrliches Handwerk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <CtaButton href="#lieferung">Jetzt bestellen</CtaButton>
            <CtaButton href="#speisekarte" variant="outline">
              Speisekarte
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeOut }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md lg:-mr-6 lg:max-w-none xl:-mr-16"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-ink via-transparent to-transparent z-10" />
          <Image
            src="/images/hero/hero-burger.jpg"
            alt="Signature BRGRS Burger"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="rounded-[2.5rem] object-cover shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1, ease: easeOut }}
            className="absolute -bottom-6 -left-6 z-20 h-28 w-28 rounded-full bg-ink/95 text-warm-white shadow-xl sm:h-32 sm:w-32"
          >
            <BioSeal className="h-full w-full p-3" />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#warum-brgrs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-warm-white/50"
        aria-label="Nach unten scrollen"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        {/* CSS keyframes (globals.css) instead of an infinite Framer loop —
            keeps the main thread idle. See BioSeal for the same reasoning. */}
        <span className="animate-[scroll-hint_1.6s_ease-in-out_infinite] motion-reduce:animate-none">
          <ChevronDown size={18} />
        </span>
      </motion.a>
    </section>
  );
}
