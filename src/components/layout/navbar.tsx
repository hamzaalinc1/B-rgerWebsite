"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { CtaButton } from "@/components/ui/cta-button";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Warum BRGRS", href: "#warum-brgrs" },
  { label: "Lieferung", href: "#lieferung" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Standorte", href: "#standorte" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <a href="#top" className="z-10">
          <Logo className="text-2xl text-warm-white" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-warm-white/85 hover:text-warm-white transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaButton
            href={restaurant.links.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs"
          >
            Jetzt bestellen
          </CtaButton>
        </div>

        <button
          aria-label="Menü öffnen"
          className="lg:hidden z-10 text-warm-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden overflow-hidden bg-ink"
      >
        <ul className="container-px flex flex-col gap-1 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg font-medium text-warm-white/90 border-b border-warm-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-px pb-8">
          <CtaButton
            href={restaurant.links.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Jetzt bestellen
          </CtaButton>
        </div>
      </motion.div>
    </header>
  );
}
