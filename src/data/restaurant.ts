// Single source of truth for all real BRGRS. content.
// Sourced from the live ordering site (brgrsbrgrs-organicburgers.de) and
// confirmed public listings (Lieferando, Uber Eats, Wolt, Google).
// Opening hours are aggregator-sourced (not published on any official
// BRGRS channel) — correct here if the real hours differ.

export const restaurant = {
  name: "BRGRS.",
  legalName: "BRGRS.",
  tagline: "Bio Beef Burger",
  city: "Berlin",
  district: "Friedrichshain",
  address: {
    street: "Pettenkoferstraße 2b",
    zip: "10247",
    city: "Berlin",
    full: "Pettenkoferstraße 2b, 10247 Berlin",
  },
  certification: "Bio-zertifiziertes Rindfleisch · DE-Öko-006",
  googleRating: 4.7,
  hours: [
    { day: "Montag", time: "11:30 – 21:45" },
    { day: "Dienstag", time: "11:30 – 21:45" },
    { day: "Mittwoch", time: "11:30 – 21:45" },
    { day: "Donnerstag", time: "11:30 – 21:45" },
    { day: "Freitag", time: "11:30 – 22:45" },
    { day: "Samstag", time: "11:30 – 22:45" },
    { day: "Sonntag", time: "11:30 – 22:45" },
  ],
  links: {
    lieferando: "https://www.lieferando.de/speisekarte/brgrs-1",
    uberEats:
      "https://ubereats.com/de-en/store/brgrs-brgrs-pettenkoferstr/yUCZYK2TRqudoh-_UcQDyQ",
    wolt: "https://wolt.com/en/deu/berlin/restaurant/brgrs-brgrs-friedrichshain",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=BRGRS+Pettenkoferstra%C3%9Fe+2b+10247+Berlin",
    googleMapsEmbed:
      "https://www.google.com/maps?q=Pettenkoferstra%C3%9Fe+2b,+10247+Berlin&output=embed",
    instagram: "https://www.instagram.com/brgrsbrgrs/",
    legacySite: "https://www.brgrsbrgrs-organicburgers.de",
    impressum: "https://www.brgrsbrgrs-organicburgers.de/impressum",
    agb: "https://www.brgrsbrgrs-organicburgers.de/agb",
    datenschutz: "https://www.brgrsbrgrs-organicburgers.de/datenschutz",
  },
} as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

// Full real menu, verbatim from the live site.
export const menu: MenuCategory[] = [
  {
    id: "burger",
    title: "Burger",
    items: [
      {
        name: "Maple Bacon BBQ Burger",
        description:
          "mit Bio Beef, Tomate, hausgemachter Whiskey-Barbecuesauce, Schmorzwiebeln, frische rote Zwiebeln, Gewürzgurke, irischem Cheddar und karamellisiertem Maple-Bacon",
        price: "12,90 €",
        image: "/images/menu/maple-bacon-bbq.jpg",
      },
      {
        name: "Brgrs Brgrs Burger",
        description:
          "mit Bio-Brot, Bio Beef, Burgers-Burgers-Sauce, Saisonsalat, roten Zwiebeln, Gewürzgurken, Bacon, Uckermärkischem Spiegelei, irischem Cheddar, Schmorzwiebeln und hausgemachter Mayonnaise",
        price: "12,90 €",
        image: "/images/menu/brgrs-flagship.jpg",
        tags: ["Signature"],
      },
      {
        name: "Classic Burger",
        description:
          "mit Bio Brot, Bio Beef, Saisonsalat, Ketchup, Senf, roten Zwiebeln, Gewürzgurken und hausgemachter Mayonnaise",
        price: "9,90 €",
        image: "/images/menu/classic.jpg",
      },
      {
        name: "Bella Italia Burger",
        description:
          "mit Bio Bun, Bio Beef, Basilikum-Mayonnaise, roten Zwiebeln, Salat, Bacon, gegrillter Aubergine und Zucchini, Mozzarella und Pesto Rosso",
        price: "12,90 €",
      },
      {
        name: "Dark Beer Honey Boom Burger",
        description:
          "mit Bio Bun, Bio Beef, Dark-Beer-Honey-Sauce, roten Zwiebeln, Saison Salat, karamellisiertem Apfel-Rosmarin-Kompott, Bacon und irischem Cheddar",
        price: "12,90 €",
      },
      {
        name: "Bacon Burger",
        description:
          "mit Bio Brot, Bio Beef, Saisonsalat, Ketchup, Senf, roten Zwiebeln, Gewürzgurken, Bacon und hausgemachter Mayonnaise",
        price: "10,20 €",
        image: "/images/menu/bacon-burger.jpg",
      },
      {
        name: "Breakfast Burger",
        description:
          "mit Bio Bun, Ketchup, roten Zwiebeln, doppelt Bacon, doppelt irischem Cheddar und zwei Spiegeleiern aus der Uckermark",
        price: "9,90 €",
      },
      {
        name: "Double Cheeseburger",
        description:
          "mit 250g Bio Beef, Double Irish Cheddar, Bio Brot, Saisonsalat, Ketchup, Senf, roten Zwiebeln, Gewürzgurken und hausgemachter Mayonnaise",
        price: "14,90 €",
        image: "/images/menu/double-cheeseburger.jpg",
      },
      {
        name: "Chili Cheese Burger",
        description:
          "mit Bio Brot, Bio Beef, Saisonsalat, Barbecue-Salsa, roten Zwiebeln, Jalapenos, Chiliflocken, irischem Cheddar und Knoblauch-Mayonnaise",
        price: "10,90 €",
        image: "/images/menu/chili-cheese.jpg",
        tags: ["Spicy"],
      },
      {
        name: "Cheeseburger",
        description:
          "mit Bio Brot, Bio Beef, Saisonsalat, Ketchup, Senf, roten Zwiebeln, Gewürzgurken, hausgemachter Mayonnaise und irischem Cheddar",
        price: "10,50 €",
      },
    ],
  },
  {
    id: "vegetarisch-vegan",
    title: "Vegetarisch & Vegan",
    items: [
      {
        name: "Homemade Veganer Burger",
        description:
          "Ein veganes Meisterwerk: hausgemachtes Patty aus Haferflocken, Wurzelgemüse, gebrannten Erdnüssen und orientalischen Gewürzen. Frische Lollo Bionda, rote und gelbe Paprika sowie eine hausgemachte Tomaten-Salsa verleihen diesem Burger eine frische und würzige Note.",
        price: "10,90 €",
        image: "/images/menu/vegan.jpg",
        tags: ["Vegan"],
      },
      {
        name: "Veggie Burger",
        description:
          "Der handgemachte Patty aus karamellisierten Erdnüssen, Haferflocken und saisonalem Wurzelgemüse vereint aromatische orientalische Gewürze, Senf und Paprika zu einer geschmacklichen Explosion. Frische Tomaten und ein weiches Bio-Bun runden diesen Burger perfekt ab.",
        price: "10,90 €",
        image: "/images/menu/veggie.jpg",
        tags: ["Vegetarisch"],
      },
      {
        name: "Sprout Veggie Burger",
        description:
          "Saftiges Veggie Patty trifft auf knackige Gurke, rote Zwiebeln, Saisonsalat und Radiesschensprossen. Der Sweet Chili Peanut Crunch bringt eine süß-würzige Note, während hausgemachte Mayonnaise für eine cremige Textur sorgt.",
        price: "10,90 €",
        tags: ["Vegetarisch"],
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      {
        name: "Süßkartoffeln",
        description:
          "Süß, nahrhaft und vielseitig — mit einer perfekten Mischung aus natürlicher Süße und zartem Biss.",
        price: "5,50 €",
        image: "/images/sides/sweet-potato.jpg",
      },
      {
        name: "Pommes",
        description:
          "Kross und goldbraun — in hochwertigem Erdnussöl frittiert, für eine besonders knusprige Textur.",
        price: "4,50 €",
        image: "/images/sides/fries.jpg",
      },
      {
        name: "Coleslaw",
        description:
          "Frisch, knackig und cremig — fein geschnittenes Gemüse mit milder, hausgemachter Mayonnaise.",
        price: "5,00 €",
      },
      {
        name: "Homemade Onion Rings (5 Stück)",
        description:
          "Im hausgemachten Bierteig frisch frittiert — außen knackig, innen zart.",
        price: "6,50 €",
        image: "/images/sides/onion-rings.jpg",
      },
      {
        name: "Homemade Mozzarella Sticks",
        description:
          "Gefüllt mit regionalem Mozzarella, in hausgemachter Panade goldbraun frittiert.",
        price: "4,60 €",
      },
    ],
  },
  {
    id: "saucen",
    title: "Saucen & Dips",
    items: [
      { name: "Sweet-Chili-Sauce", description: "Süß und pikant zugleich — asiatisch inspiriert.", price: "1,50 €" },
      { name: "Sweet Apple Barbecuesauce", description: "Fruchtig, mit süßen Apfelnoten und rauchiger Tiefe.", price: "1,50 €" },
      { name: "Homemade Marinara", description: "Tomatenmarinara mit italienischen Kräutern, Zitrone und Knoblauch.", price: "1,50 €" },
      { name: "5er-Saucenkombo", description: "5 köstliche Saucen deiner Wahl.", price: "6,00 €" },
      { name: "Wasabi-Mayonnaise", description: "Würzig mit feuriger Wasabi-Note.", price: "1,50 €" },
      { name: "Homemade Basilikum-Mayonnaise", description: "Cremig, mit aromatischem Basilikum.", price: "1,50 €" },
      { name: "Homemade BBQ-Salsa", description: "Rauchig, mit einem Hauch von Süße.", price: "1,50 €" },
      { name: "Homemade Limetten-Creme-fraiche", description: "Frisch und leicht, mit spritziger Limette.", price: "1,50 €" },
      { name: "Homemade Mayonnaise", description: "Cremig und fein gewürzt.", price: "1,00 €" },
      { name: "Homemade Knoblauch-Mayonnaise", description: "Mit intensivem Knoblauchgeschmack.", price: "1,50 €" },
      { name: "Ketchup", description: "Klassisch und fruchtig.", price: "1,00 €" },
    ],
  },
  {
    id: "getraenke",
    title: "Softdrinks & Bier",
    items: [
      { name: "Fritz Kola 0,33l", description: "Erfrischend anders.", price: "3,50 €" },
      { name: "Fritz Kola Ohne Zucker 0,33l", description: "Kalorienarmes Erfrischungsgetränk.", price: "3,50 €" },
      { name: "Fritz Apfelschorle 0,33l", description: "", price: "3,50 €" },
      { name: "Spreequell Classic / Naturell 0,25l", description: "", price: "3,00 €" },
      { name: "Capri Sonne Orange 0,2l", description: "", price: "2,00 €" },
      { name: "Berliner Kindl 0,5l", description: "5% vol.", price: "4,00 €", tags: ["Bier"] },
      { name: "Gösser Natur Radler 0,5l", description: "5% vol.", price: "4,50 €", tags: ["Bier"] },
      { name: "Bayreuther Hell 0,5l", description: "5% vol.", price: "4,50 €", tags: ["Bier"] },
    ],
  },
];

// Curated subset shown in the "Signature Burgers" section
export const signatureBurgerNames = [
  "Brgrs Brgrs Burger",
  "Maple Bacon BBQ Burger",
  "Chili Cheese Burger",
  "Double Cheeseburger",
  "Bacon Burger",
  "Classic Burger",
  "Homemade Veganer Burger",
] as const;

const allMenuItems = menu.flatMap((c) => c.items);

// Preserves the curated order above (flagship first) rather than menu order.
export const signatureBurgers: MenuItem[] = signatureBurgerNames
  .map((name) => allMenuItems.find((item) => item.name === name))
  .filter((item): item is MenuItem => Boolean(item));

export type DeliveryPlatform = {
  id: string;
  name: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
  /**
   * Only `true` for live, manually confirmed ordering links. Entries with
   * `verified: false` must never render an active CTA — the UI shows a
   * clearly disabled "Bald verfügbar" state instead.
   */
  verified: boolean;
};

export const deliveryPlatforms: DeliveryPlatform[] = [
  {
    id: "lieferando",
    name: "Lieferando",
    description: "Direkt online bestellen — die komplette Karte, frisch aus unserer Küche.",
    cta: "Jetzt bei Lieferando bestellen",
    href: restaurant.links.lieferando,
    accent: "#FF8000",
    verified: true,
  },
  {
    id: "ubereats",
    name: "Uber Eats",
    description: "Bestellen über die Uber Eats App oder Website.",
    cta: "Bei Uber Eats öffnen",
    href: restaurant.links.uberEats,
    accent: "#06C167",
    verified: true,
  },
  {
    id: "wolt",
    name: "Wolt",
    description: "Schnelle Lieferung in der ganzen Nachbarschaft.",
    cta: "Bei Wolt öffnen",
    href: restaurant.links.wolt,
    accent: "#00C2E8",
    verified: true,
  },
  {
    id: "pickup",
    name: "Abholung",
    description: `Selbst abholen in der ${restaurant.address.street}, ${restaurant.district} — mit Google Maps direkt zur Tür.`,
    cta: "Route planen",
    href: restaurant.links.googleMaps,
    accent: "#4285F4",
    verified: true,
  },
];

export const faqs = [
  {
    question: "Woher kommt euer Rindfleisch?",
    answer:
      "Unser Beef ist bio-zertifiziert (DE-Öko-006) und stammt aus regionaler, kontrollierter Aufzucht — für vollen Geschmack und reines Gewissen.",
  },
  {
    question: "Habt ihr vegetarische oder vegane Optionen?",
    answer:
      "Ja. Unser Homemade Veganer Burger und der Veggie Burger basieren auf einem hausgemachten Patty aus Haferflocken, Wurzelgemüse und orientalischen Gewürzen — komplett pflanzlich bzw. vegetarisch zubereitet.",
  },
  {
    question: "Wie bestelle ich am schnellsten?",
    answer:
      "Am schnellsten geht's über Lieferando, Uber Eats oder Wolt — alle drei liefern direkt aus unserer Küche in der Pettenkoferstraße. Alternativ holst du deine Bestellung einfach selbst ab.",
  },
  {
    question: "In welchem Öl werden Pommes & Onion Rings frittiert?",
    answer:
      "In hochwertigem Erdnussöl — das sorgt für die knusprige Textur und den leicht nussigen Geschmack, für den wir bekannt sind.",
  },
  {
    question: "Wo genau befindet ihr euch?",
    // Addresses inline (not imported from locations.ts) to avoid a circular
    // import — locations.ts already imports this file.
    answer:
      `Dreimal in Berlin: unser Original in der ${restaurant.address.full} (Friedrichshain), außerdem in der Brückenstraße 1A (Mitte) und der Greifswalder Straße 37 (Prenzlauer Berg).`,
  },
] as const;

// TODO: swap for real restaurant photography when available — these are
// curated, on-theme stock placeholders (grill/patty/ingredients/hands),
// not meant to represent this specific location. Rendered as a uniform
// square grid (see gallery.tsx), so no size/span metadata is needed.
// Array order = display order (2-col mobile / 4-col desktop grid). Strongest,
// most appetizing shots lead; the most generic-looking one (04) sits last.
export const galleryImages = [
  { src: "/images/gallery/07-holding2.jpg", alt: "Burger mit Sesam-Bun in der Hand" },
  { src: "/images/gallery/01-grillfire.jpg", alt: "Offene Flamme auf dem Grill" },
  { src: "/images/gallery/02-holding.jpg", alt: "Burger wird in die Kamera gehalten" },
  { src: "/images/gallery/05-fries.jpg", alt: "Knusprige Pommes in Nahaufnahme" },
  { src: "/images/gallery/03-bun-texture.jpg", alt: "Nahaufnahme eines Sesam-Bio-Buns" },
  { src: "/images/gallery/08-tables.jpg", alt: "Cheese Fries neben einem Bacon Burger" },
  { src: "/images/gallery/06-onion-alt.jpg", alt: "Hausgemachte Onion Rings mit Sweet-Chili-Sauce" },
  { src: "/images/gallery/04-patty-grill.jpg", alt: "Bio Beef Patty frisch vom Grill" },
] as const;

export type CustomerQuote = {
  name: string;
  quote: string;
  // e.g. "Stammgast" or a neighborhood — never label these as "Google-Bewertung"
  // unless the text is copied verbatim from an actual Google review.
  context?: string;
};

// TODO: fill in with real, manually-provided customer quotes. Leave empty
// until then — <CustomerVoices /> renders nothing when this is empty, so
// no placeholder/fake content ever reaches the page.
export const customerQuotes: CustomerQuote[] = [];
