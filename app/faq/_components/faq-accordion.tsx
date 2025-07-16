"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
          <AccordionTrigger className="text-md font-bold text-amber-900">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-xs">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
