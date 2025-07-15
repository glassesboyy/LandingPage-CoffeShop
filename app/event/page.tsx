"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pastEvents } from "../data/data-event"; // import data event

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

      {/* Social Media Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Tetap Terhubung
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ikuti media sosial kami untuk melihat update terbaru tentang
              kegiatan dan suasana harian coffee shop
            </p>

            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-pink-600 hover:bg-pink-700"
              >
                <Link href="#" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="#" className="flex items-center gap-2">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-neutral-800"
              >
                <Link href="#" className="flex items-center gap-2">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="#" className="flex items-center gap-2">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600"
              >
                <Link href="#" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
              </Button>
            </div>

            <p className="text-gray-600">
              Atau kunjungi langsung coffee shop kami untuk merasakan suasana
              hangat dan kopi berkualitas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
