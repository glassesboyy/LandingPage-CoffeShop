"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { pastEvents } from "../data/data-event"; // import data event
import { socialMedias } from "../data/data-social-media"; // import social media

export default function EventPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/random/headline-background.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Event & Kegiatan
            </h1>
            <p className="text-lg md:text-xl text-amber-100">
              Dokumentasi berbagai kegiatan menarik yang pernah kami
              selenggarakan
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              className="mb-1 pl-1 pr-2.5 bg-amber-200 text-amber-900 border-amber-900"
              icon={
                <Image
                  src="/assets/random/logo.png"
                  alt="Logo"
                  width={13.7}
                  height={13.7}
                />
              }
            >
              Event
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Kegiatan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai event dan workshop yang telah kami selenggarakan untuk
              membangun dan mengedukasi komunitas kopi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm flex-grow">
                      {event.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-amber-900 mb-2">
                        Highlights:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => alert(`Detail event: ${event.title}`)}
                      className="w-full bg-amber-600 hover:bg-amber-700 mt-auto"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              className="mb-1 pl-1 pr-2.5 bg-amber-200 text-amber-900 border-amber-900"
              icon={
                <Image
                  src="/assets/random/logo.png"
                  alt="Logo"
                  width={13.7}
                  height={13.7}
                />
              }
            >
              Social Media
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Terhubung dengan Kami di Media Sosial
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bagikan pengalaman Anda menikmati kopi di tempat kami melalui
              media sosial dan tag akun kami! Kami senang melihat cerita dan
              momen spesial Anda bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {socialMedias.map((media) => (
                <a
                  key={media.id}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-white px-8 py-3 rounded-md font-medium transition-colors ${media.colorClass}`}
                >
                  <media.icon className="w-5 h-5" />
                  {media.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
