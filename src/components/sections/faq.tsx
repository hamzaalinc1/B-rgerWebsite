import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/restaurant";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-cream py-16 md:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="FAQ" title="Häufige Fragen" align="center" />

        <Accordion className="mx-auto mt-10 md:mt-12 max-w-2xl" defaultValue={[faqs[0].question]}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-b border-ink/10"
            >
              <AccordionTrigger className="py-6 font-display text-lg text-ink hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="!pb-6 text-base leading-relaxed text-ink/65">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
