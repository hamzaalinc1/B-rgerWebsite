import { MapPin } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { BioSeal } from "@/components/ui/bio-seal";
import { restaurant, deliveryPlatforms } from "@/data/restaurant";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Warum BRGRS", href: "#warum-brgrs" },
  { label: "Lieferung", href: "#lieferung" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Standorte", href: "#standorte" },
];

const LEGAL_LINKS = [
  { label: "Impressum", href: restaurant.links.impressum },
  { label: "Datenschutz", href: restaurant.links.datenschutz },
  { label: "AGB", href: restaurant.links.agb },
];

export function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="container-px py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Logo className="text-4xl" />
              <BioSeal className="hidden h-16 w-16 shrink-0 text-warm-white/40 sm:block" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-white/60">
              Handgemachte Burger aus bio-zertifiziertem Rindfleisch (DE-Öko-006) —
              frisch zubereitet in {restaurant.district}, Berlin.
            </p>
            <a
              href={restaurant.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-warm-white/80 hover:text-orange transition-colors"
            >
              <InstagramIcon size={18} />
              @brgrsbrgrs
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/50">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-white/75 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/50">
              Kontakt & Öffnungszeiten
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-warm-white/75">
              {restaurant.address.street}
              <br />
              {restaurant.address.zip} {restaurant.address.city}
            </address>
            <p className="mt-4 text-sm text-warm-white/75">
              Mo–Do 11:30–21:45
              <br />
              Fr–So 11:30–22:45
            </p>
            <a
              href={restaurant.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:text-mustard transition-colors"
            >
              <MapPin size={16} />
              Route planen
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/50">
              Bestellen
            </h3>
            <ul className="mt-5 space-y-3">
              {deliveryPlatforms.filter((p) => p.verified).map((platform) => (
                <li key={platform.id}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-white/75 hover:text-warm-white transition-colors"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-warm-white/10 pt-8 text-xs text-warm-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {restaurant.name} Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
