import { cn } from "@/lib/utils";

// The rotation is a pure CSS animation (Tailwind's built-in `spin` keyframes,
// slowed down) instead of the previous Framer Motion `animate={{ rotate: 360 }}`
// loop. A JS-driven infinite transform keeps the main thread busy for the whole
// session and was a prime suspect for Safari's "this webpage was reloaded"
// memory kills — CSS transforms run on the compositor instead.
export function BioSeal({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-[spin_26s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path
            id="seal-circle"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        <text fill="currentColor" fontSize="13.5" letterSpacing="3" fontWeight="600">
          <textPath href="#seal-circle" startOffset="0%">
            BIO ZERTIFIZIERT · DE-ÖKO-006 · REGIONALES RINDFLEISCH ·
          </textPath>
        </text>
      </svg>
      <span className="absolute font-display text-lg leading-none">BIO.</span>
    </div>
  );
}
