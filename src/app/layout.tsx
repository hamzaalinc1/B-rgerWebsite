import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const display = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "BRGRS. — Bio Beef Burger in Berlin",
  description:
    "Handgemachte Burger aus bio-zertifiziertem Rindfleisch (DE-Öko-006) — dreimal in Berlin: Friedrichshain, Mitte und Prenzlauer Berg. Jetzt bestellen über Lieferando, Uber Eats oder Wolt.",
  metadataBase: new URL("https://www.brgrsbrgrs-organicburgers.de"),
  openGraph: {
    title: "BRGRS. — Bio Beef Burger in Berlin",
    description:
      "Handgemachte Burger aus bio-zertifiziertem Rindfleisch — dreimal in Berlin: Friedrichshain, Mitte und Prenzlauer Berg.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
