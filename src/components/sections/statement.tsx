"use client";

import { motion } from "motion/react";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-orange py-20 md:py-28">
      <span className="pointer-events-none absolute -left-10 -top-16 font-display text-[14rem] leading-none text-warm-white/10 select-none">
        .
      </span>
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Keine Abkürzungen. Keine Füllstoffe.
          <br />
          Nur echtes Bio Beef.
        </motion.p>
      </div>
    </section>
  );
}
