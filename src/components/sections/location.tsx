"use client";

import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { restaurant } from "@/data/restaurant";

export function Location() {
  return (
    <section id="standort" className="relative border-t border-warm-white/10 bg-ink py-16 md:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Friedrichshain"
          title="Finde uns in der Pettenkoferstraße"
          dark
        />

        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="h-[24rem] overflow-hidden rounded-3xl bg-charcoal lg:h-auto"
          >
            <iframe
              title="BRGRS. Standort auf Google Maps"
              src={restaurant.links.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl bg-charcoal p-8 md:p-10"
          >
            <div>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-orange" />
                <div>
                  <p className="font-display text-xl text-warm-white">
                    {restaurant.address.street}
                  </p>
                  <p className="text-warm-white/60">
                    {restaurant.address.zip} {restaurant.address.city} ·{" "}
                    {restaurant.district}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <Clock size={22} className="mt-1 shrink-0 text-orange" />
                <table className="w-full text-sm text-warm-white/75">
                  <tbody>
                    {restaurant.hours.map((entry) => (
                      <tr key={entry.day}>
                        <td className="py-1 pr-4 font-medium text-warm-white">
                          {entry.day}
                        </td>
                        <td className="py-1 text-warm-white/60">{entry.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <CtaButton
              href={restaurant.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full"
            >
              Jetzt navigieren
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
