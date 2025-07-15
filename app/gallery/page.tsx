"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

const galleryImages = {
  interior: [
    {
      src: "/assets/gallery/interior/interior.jpg",
      alt: "Interior Coffee Shop - Seating Area",
      title: "Area Duduk Utama",
    },
    {
      src: "/assets/gallery/interior/interior2.jpg",
      alt: "Interior Coffee Shop - Counter",
      title: "Counter & Bar Area",
    },
    {
      src: "/assets/gallery/interior/interior3.jpg",
      alt: "Interior Coffee Shop - Cozy Corner",
      title: "Sudut Nyaman",
    },
    {
      src: "/assets/gallery/interior/interior4.jpg",
      alt: "Interior Coffee Shop - Work Space",
      title: "Area Kerja",
    },
    {
      src: "/assets/gallery/interior/interior5.jpg",
      alt: "Interior Coffee Shop - Decoration",
      title: "Dekorasi Interior",
    },
    {
      src: "/assets/gallery/interior/interior6.jpg",
      alt: "Interior Coffee Shop - Lighting",
      title: "Pencahayaan Hangat",
    },
  ],
  barista: [
    {
      src: "/assets/gallery/barista/barista.jpg",
      alt: "Barista Making Coffee",
      title: "Proses Pembuatan Kopi",
    },
    {
      src: "/assets/gallery/barista/barista2.jpg",
      alt: "Latte Art Creation",
      title: "Pembuatan Latte Art",
    },
    {
      src: "/assets/gallery/barista/barista3.jpg",
      alt: "Coffee Grinding",
      title: "Proses Grinding Biji Kopi",
    },
    {
      src: "/assets/gallery/barista/barista4.jpg",
      alt: "Espresso Extraction",
      title: "Ekstraksi Espresso",
    },
    {
      src: "/assets/gallery/barista/barista5.jpg",
      alt: "Coffee Beans Selection",
      title: "Seleksi Biji Kopi",
    },
    {
      src: "/assets/gallery/barista/barista6.jpg",
      alt: "Brewing Process",
      title: "Proses Brewing",
    },
  ],
  customers: [
    {
      src: "/assets/gallery/pelanggan/pelanggan.jpg",
      alt: "Customers Enjoying Coffee",
      title: "Pelanggan Menikmati Kopi",
    },
    {
      src: "/assets/gallery/pelanggan/pelanggan2.jpg",
      alt: "Business Meeting",
      title: "Meeting Bisnis",
    },
    {
      src: "/assets/gallery/pelanggan/pelanggan3.jpg",
      alt: "Study Session",
      title: "Sesi Belajar",
    },
    {
      src: "/assets/gallery/pelanggan/pelanggan4.jpg",
      alt: "Friends Gathering",
      title: "Kumpul Teman",
    },
    {
      src: "/assets/gallery/pelanggan/pelanggan5.jpg",
      alt: "Solo Work",
      title: "Kerja Mandiri",
    },
    {
      src: "/assets/gallery/pelanggan/pelanggan6.jpg",
      alt: "Coffee Tasting",
      title: "Coffee Tasting",
    },
  ],
  events: [
    {
      src: "/assets/gallery/event/event.jpg",
      alt: "Coffee Workshop",
      title: "Workshop Kopi",
    },
    {
      src: "/assets/gallery/event/event2.jpg",
      alt: "Latte Art Competition",
      title: "Kompetisi Latte Art",
    },
    {
      src: "/assets/gallery/event/event3.jpg",
      alt: "Music Performance",
      title: "Pertunjukan Musik",
    },
    {
      src: "/assets/gallery/event/event4.jpg",
      alt: "Book Reading",
      title: "Acara Baca Buku",
    },
    {
      src: "/assets/gallery/event/event5.jpg",
      alt: "Community Gathering",
      title: "Gathering Komunitas",
    },
    {
      src: "/assets/gallery/event/event6.jpg",
      alt: "Coffee Cupping",
      title: "Coffee Cupping Session",
    },
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("interior");

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Galeri Kami</h1>
            <p className="text-lg md:text-xl text-amber-100">
              Jelajahi suasana hangat dan momen-momen berharga di coffee shop
              kami
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-amber-50">
              <TabsTrigger
                value="interior"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Interior
              </TabsTrigger>
              <TabsTrigger
                value="barista"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Barista
              </TabsTrigger>
              <TabsTrigger
                value="customers"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Pelanggan
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Event
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interior">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Interior & Eksterior
                </h2>
                <p className="text-gray-600 text-lg">
                  Nikmati suasana hangat dan desain interior yang nyaman di
                  coffee shop kami
                </p>
              </div>
              <GalleryGrid images={galleryImages.interior} />
            </TabsContent>

            <TabsContent value="barista">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Aktivitas Barista
                </h2>
                <p className="text-gray-600 text-lg">
                  Saksikan keahlian barista kami dalam menciptakan kopi
                  berkualitas tinggi
                </p>
              </div>
              <GalleryGrid images={galleryImages.barista} />
            </TabsContent>

            <TabsContent value="customers">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Suasana Pelanggan
                </h2>
                <p className="text-gray-600 text-lg">
                  Momen-momen berharga pelanggan yang menikmati waktu di coffee
                  shop kami
                </p>
              </div>
              <GalleryGrid images={galleryImages.customers} />
            </TabsContent>

            <TabsContent value="events">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Dokumentasi Event
                </h2>
                <p className="text-gray-600 text-lg">
                  Berbagai kegiatan dan event menarik yang telah kami
                  selenggarakan
                </p>
              </div>
              <GalleryGrid images={galleryImages.events} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function GalleryGrid({ images }: { images: any[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-amber-900">
                  {image.title}
                </h3>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
