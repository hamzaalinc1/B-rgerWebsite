"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

// Mobile-only sticky order CTA. The hero has its own "Jetzt bestellen"
// button, so the bar only appears once the hero has scrolled out — from
// then on, ordering stays one tap away on small screens.
export function MobileOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.85);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-warm-white/10 bg-ink/95 px-4 pt-3 transition-transform duration-300 ease-out lg:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
    >
      <a
        href={restaurant.links.lieferando}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-orange py-3.5 text-sm font-semibold uppercase tracking-wide text-warm-white transition-transform active:scale-[0.98]"
      >
        Jetzt bestellen
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
