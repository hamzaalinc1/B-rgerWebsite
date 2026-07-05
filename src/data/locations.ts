import { restaurant } from "./restaurant";

export type RestaurantLocation = {
  /**
   * URL-ready identifier — anticipates future detail routes like
   * /friedrichshain, /mitte, /prenzlauer-berg (not built yet).
   */
  slug: string;
  district: string;
  /**
   * Only `true` for locations with confirmed, published address + hours.
   * Unverified locations render as "In Vorbereitung" — never with invented
   * address/hours data.
   */
  verified: boolean;
  address?: string;
  /** Short summary line, e.g. "Mo–Do 11:30–21:45 · Fr–So 11:30–22:45". */
  hoursSummary?: string;
  mapsHref?: string;
};

export const locations: RestaurantLocation[] = [
  {
    slug: "friedrichshain",
    district: "Friedrichshain",
    verified: true,
    address: restaurant.address.full,
    hoursSummary: "Mo–Do 11:30–21:45 · Fr–So 11:30–22:45",
    mapsHref: restaurant.links.googleMaps,
  },
  {
    slug: "mitte",
    district: "Mitte",
    verified: false,
    // TODO: add real address/hours once confirmed
  },
  {
    slug: "prenzlauer-berg",
    district: "Prenzlauer Berg",
    verified: false,
    // TODO: add real address/hours once confirmed
  },
];
