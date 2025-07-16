"use client";

import { pastEvents } from "@/app/data/data-event";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = Number(params.id);
  const event = pastEvents.find((ev) => ev.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 text-white mb-0">
        <div className="absolute inset-0">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-800 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center items-center mb-4 text-amber-100">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </span>
            </div>
            {event.price && (
              <div className="text-xl font-bold text-amber-300 mb-2">
                {event.price}
              </div>
            )}
            <p className="text-lg md:text-xl text-amber-100 mb-2">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detail Card Section */}
      <section className="pb-10 bg-gradient-to-t from-white to-amber-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {/* Highlights */}
              {event.highlights?.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                    Highlights
                  </h2>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    {event.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                    Galeri Event
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {event.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-40 rounded-lg overflow-hidden shadow"
                      >
                        <Image
                          src={img}
                          alt={`Event Gallery ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Schedule */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                    Jadwal Acara
                  </h2>
                  <table className="w-full text-sm border border-amber-200 rounded overflow-hidden">
                    <tbody>
                      {event.schedule.map((sch, i) => (
                        <tr key={i} className="border-b last:border-b-0">
                          <td className="py-1 px-4 text-gray-700 font-medium w-24">
                            {sch.time}
                          </td>
                          <td className="py-1 px-4 text-gray-900">
                            {sch.activity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Guests */}
              {event.guests && event.guests.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                    Tamu & Pengisi Acara
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {event.guests.map((guest, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-amber-50 rounded-lg p-3 shadow"
                      >
                        {guest.photo && (
                          <Image
                            src={guest.photo}
                            alt={guest.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        )}
                        <div>
                          <div className="font-bold text-amber-900 flex items-center gap-1">
                            {guest.name}
                          </div>
                          <div className="text-xs text-gray-700">
                            {guest.bio}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {event.faq && event.faq.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                    FAQ
                  </h2>
                  <div>
                    {/* Accordion FAQ */}
                    <Accordion type="single" collapsible>
                      {event.faq.map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              )}

              {/* Map */}
              {event.mapUrl && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">
                    Lokasi Event
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                          <iframe
                            title="Lokasi Event"
                            src={event.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <div className="mt-4 text-center">
                      <Button
                        className="bg-amber-600 hover:bg-amber-700"
                        asChild
                      >
                        <a
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buka di Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          {/* Back Button */}
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 font-semibold px-8 py-3 transition-all w-full"
            >
              <Link href="/event">Kembali ke Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
