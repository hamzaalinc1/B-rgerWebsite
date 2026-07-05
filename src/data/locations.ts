import { restaurant } from "./restaurant";

export type RestaurantLocation = {
  /**
   * URL-ready identifier — anticipates future detail routes like
   * /friedrichshain, /mitte, /prenzlauer-berg (not built yet).
   */
  slug: string;
  district: string;
  /** Confirmed public address. All three are real, operating locations. */
  address: string;
  /**
   * The original Friedrichshain store — the only one with full on-page
   * details (hours table, map embed) in the #standort section.
   */
  flagship?: boolean;
  /**
   * Confirmed opening hours summary. Deliberately optional: an address can
   * be verified while hours are not. When absent the UI shows
   * "Öffnungszeiten folgen" — never invented times.
   */
  hoursSummary?: string;
  mapsHref: string;
};

// Live Google Maps search link derived from the real address — same URL
// pattern as restaurant.links.googleMaps.
const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const locations: RestaurantLocation[] = [
  {
    slug: "friedrichshain",
    district: "Friedrichshain",
    address: restaurant.address.full,
    flagship: true,
    hoursSummary: "Mo–Do 11:30–21:45 · Fr–So 11:30–22:45",
    mapsHref: restaurant.links.googleMaps,
  },
  {
    slug: "mitte",
    district: "Mitte",
    address: "Brückenstraße 1A", // TODO: add zip + opening hours once confirmed
    mapsHref: mapsSearch("BRGRS Brückenstraße 1A Berlin"),
  },
  {
    slug: "prenzlauer-berg",
    district: "Prenzlauer Berg",
    address: "Greifswalder Straße 37", // TODO: add zip + opening hours once confirmed
    mapsHref: mapsSearch("BRGRS Greifswalder Straße 37 Berlin"),
  },
];
