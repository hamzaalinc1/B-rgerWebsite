"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Reduced motion: no Lenis at all. Anchor clicks fall through to the
    // browser's native (instant) jump, which respects scroll-margin-top.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Touch-first devices: skip Lenis entirely. Lenis doesn't smooth native
    // touch scrolling anyway (smoothTouch is off), so on phones/tablets it was
    // pure overhead — a permanent rAF loop competing with Safari's compositor
    // for the whole session, and a likely contributor to iOS Safari's
    // "webpage was reloaded" memory kills. Anchor clicks fall back to the
    // native jump, which respects the same scroll-margin-top offsets.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Route same-page anchor clicks through Lenis. Left to the browser, the
    // native anchor scroll fights Lenis' virtualized scroll position, which
    // showed up as headings clipped under the fixed navbar. Lenis' scrollTo
    // reads the target's CSS `scroll-margin-top` (see globals.css), so the
    // navbar offset is respected without any hardcoded pixel value here.
    function onAnchorClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
      const url = new URL(link.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return;
      }
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      // Deferred one frame so UI reacting to the same click (e.g. the mobile
      // menu unlocking body overflow) settles before the scroll starts.
      requestAnimationFrame(() => lenis.scrollTo(target));
    }
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
