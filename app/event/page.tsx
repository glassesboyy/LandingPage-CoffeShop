"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pastEvents = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "15 Desember 2023",
    time: "14:00 - 16:00",
    location: "Coffee Shop Main Area",
    image: "/assets/event/event.png",
    description:
      "Workshop mencicipi dan menilai kopi yang dipandu oleh head barista kami. Peserta belajar teknik cupping profesional dan mengenal berbagai profil rasa kopi.",
    highlights: [
      "Teknik cupping profesional",
      "Analisa profil rasa",
      "Sertifikat peserta",
    ],
  },
  {
    id: 2,
    title: "Latte Art Competition",
    date: "28 Desember 2023",
    time: "10:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/event/event2.png",
    description:
      "Kompetisi latte art yang diikuti oleh barista dari berbagai coffee shop. Acara ini menampilkan kreativitas dan skill para peserta.",
    highlights: [
      "3 kategori kompetisi",
      "Hadiah total 5 juta",
      "Live demo dari juara",
    ],
  },
  {
    id: 3,
    title: "Acoustic Night",
    date: "5 Januari 2024",
    time: "19:00 - 22:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event3.jpg",
    description:
      "Malam musik akustik dengan musisi lokal. Suasana hangat dengan alunan musik dan aroma kopi yang menenangkan.",
    highlights: ["3 musisi lokal", "Repertoar jazz & folk", "Suasana intimate"],
  },
  {
    id: 4,
    title: "Coffee & Book Club",
    date: "12 Januari 2024",
    time: "15:00 - 17:00",
    location: "Reading Corner",
    image: "/assets/gallery/event/event4.jpg",
    description:
      "Diskusi buku dengan tema 'Coffee Culture Around the World' sambil menikmati kopi spesial dari berbagai negara.",
    highlights: ["Buku tema kopi", "Degustasi kopi dunia", "Diskusi mendalam"],
  },
  {
    id: 5,
    title: "Barista Training Workshop",
    date: "20 Januari 2024",
    time: "09:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/gallery/barista/barista.jpg",
    description:
      "Pelatihan intensif teknik dasar barista dari grinding hingga latte art. Peserta mendapat pengalaman hands-on dengan equipment profesional.",
    highlights: ["Teknik brewing", "Latte art basic", "Equipment training"],
  },
  {
    id: 6,
    title: "Grand Opening Celebration",
    date: "1 Desember 2023",
    time: "10:00 - 22:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event.jpg",
    description:
      "Perayaan grand opening dengan berbagai aktivitas menarik, live music, dan promo spesial untuk pengunjung.",
    highlights: ["Live music", "Promo opening", "Meet & greet"],
  },
];

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

      {/* Gallery Link Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Lihat Lebih Banyak
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Jelajahi galeri foto kami untuk melihat dokumentasi lengkap dari
              berbagai kegiatan dan suasana coffee shop
            </p>

            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 mb-8"
            >
              <Link href="/gallery">Lihat Galeri Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Tetap Terhubung
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ikuti media sosial kami untuk melihat update terbaru tentang
              kegiatan dan suasana harian coffee shop
            </p>

            <div className="flex justify-center gap-6 mb-8">
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
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
                <Link href="#" className="flex items-center gap-2">
                  <Twitter className="w-5 h-5" />
                  Twitter
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
