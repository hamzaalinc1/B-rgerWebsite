import { Star } from "lucide-react";
import { restaurant, deliveryPlatforms } from "@/data/restaurant";

// Static trust strip under the hero — deliberately no marquee/scrolling.
// Everything here is derived from src/data/restaurant.ts.
const platformNames = deliveryPlatforms
  .filter((p) => p.verified && p.id !== "pickup")
  .map((p) => p.name)
  .join(" · ");

const ITEMS: React.ReactNode[] = [
  <span key="rating" className="flex items-center gap-1.5 text-warm-white/85 normal-case tracking-normal">
    <Star size={14} className="fill-mustard text-mustard" aria-hidden />
    <span className="font-semibold">{restaurant.googleRating.toFixed(1)}</span>
    <span className="text-warm-white/55">bei Google</span>
  </span>,
  restaurant.certification.split(" · ")[0],
  `${restaurant.district}, Berlin`,
  platformNames,
  "Frisch zubereitet",
];

export function TrustBar() {
  return (
    <div className="border-y border-warm-white/10 bg-ink">
      <ul className="container-px flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 py-5 lg:justify-between lg:gap-x-8">
        {ITEMS.map((item, i) => (
          <li
            key={i}
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-warm-white/50 sm:text-xs"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
