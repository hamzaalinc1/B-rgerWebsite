import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display tracking-tight leading-none select-none inline-flex items-baseline",
        className
      )}
    >
      BRGRS
      <span className="text-orange">.</span>
    </span>
  );
}
