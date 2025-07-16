"use client";
import { faqs } from "@/app/data/data-faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/random/headline-background.png"
            alt="FAQ Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
            <p className="text-lg md:text-xl text-amber-100">
              Pertanyaan yang sering diajukan seputar Noir Coffee
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List with Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Temukan Jawabanmu
            </h2>
            <p className="text-lg text-gray-600">
              Berikut beberapa pertanyaan umum dari pelanggan kami.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                <AccordionTrigger className="text-xl font-bold text-amber-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
