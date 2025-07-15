"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const heroImages = [
    "/assets/random/hero.jpeg",
    "/assets/random/hero2.jpeg",
    "/assets/random/hero3.jpeg",
    "/assets/random/hero4.jpeg",
  ];

  const heroContent = {
    title: "Rasakan Pengalaman",
    subtitle: "Ngopi Terbaik",
    description:
      "Lebih dari sekadar secangkir kopi — nikmati setiap tegukan dalam suasana yang hangat, penuh cerita, dan dibuat dengan cinta.",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const { coffee, nonCoffee, food, signature } =
    require("./data/data-menu").menuItems;
  const signatureMenuItems = [
    ...coffee,
    ...nonCoffee,
    ...food,
    ...signature,
  ].filter((item) => item.signature);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Fade Carousel */}
      <section className="relative h-screen overflow-hidden shadow-lg">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-amber-900/60 to-amber-950/90" />
          </div>
        ))}

        {/* Static Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroContent.title}
              <span className="block text-amber-300">
                {heroContent.subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
              >
                <Link href="/menu">Lihat Menu</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/contact">Kunjungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-amber-400 ${
                index === currentSlide
                  ? "bg-amber-400 scale-110 shadow"
                  : "bg-white/60 hover:bg-amber-200"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
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
                Tentang Kami
              </Badge>
              <h2 className="text-5xl font-bold text-amber-900 mb-6">
                Cerita Kami
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dimulai dari kecintaan terhadap kopi berkualitas, kami hadir
                untuk menciptakan ruang hangat di mana setiap tegukan kopi
                menjadi momen berharga. Dengan biji kopi pilihan dari petani
                lokal dan barista berpengalaman, kami berkomitmen menghadirkan
                pengalaman ngopi terbaik.
              </p>
              <p className="text-lg text-gray-700 mb-10">
                Lebih dari sekadar coffee shop, kami adalah rumah kedua bagi
                komunitas pecinta kopi yang menghargai kualitas dan kehangatan.
              </p>
              <Button
                asChild
                className="bg-amber-700 hover:bg-amber-800 font-semibold px-7 py-3 transition-all"
              >
                <Link href="/about">Baca Selengkapnya</Link>
              </Button>
            </div>
            <div className="relative w-full h-[400px] min-w-[320px]">
              {/* Layered Images - 4 gambar */}
              <div
                className="absolute top-0 left-0 w-2/3 h-2/3 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
                style={{
                  zIndex: hoveredImage === 0 ? 4 : 1,
                  rotate: "4deg",
                }}
                onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/assets/random/hero.jpeg"
                  alt="Coffee Shop Story 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>
              <div
                className="absolute top-0 right-0 w-2/5 h-2/5 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
                style={{
                  zIndex: hoveredImage === 1 ? 4 : 2,
                  rotate: "-2deg",
                }}
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/assets/gallery/interior/interior.jpg"
                  alt="Coffee Shop Story 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 w-2/5 h-2/5 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
                style={{
                  zIndex: hoveredImage === 2 ? 4 : 3,
                  rotate: "-2deg",
                }}
                onMouseEnter={() => setHoveredImage(2)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/assets/gallery/interior/interior2.jpg"
                  alt="Coffee Shop Story 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 w-2/3 h-2/3 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
                style={{
                  zIndex: hoveredImage === 3 ? 4 : 0,
                  rotate: "4deg",
                }}
                onMouseEnter={() => setHoveredImage(3)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/assets/gallery/interior/interior3.jpg"
                  alt="Coffee Shop Story 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Unggulan Section */}
      <section className="py-24 bg-white">
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
              Menu Unggulan
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Menu Signature Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nikmati kreasi kopi terbaik yang telah menjadi favorit pelanggan
              setia kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {signatureMenuItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 shadow">
                      Signature
                    </Badge>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-700">
                        {item.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 font-semibold transition-all"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent font-semibold px-8 py-3 transition-all"
            >
              <Link href="/menu">Lihat Menu Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Terkini Section */}
      <section className="py-24 bg-amber-50">
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
              Kegiatan Terbaru
            </h2>
            <p className="text-xl text-gray-600">
              Lihat dokumentasi kegiatan-kegiatan menarik yang telah kami
              selenggarakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: "Coffee Cupping Workshop",
                date: "15 Desember 2023",
                image: "/assets/event/event.png",
                description:
                  "Workshop mencicipi dan menilai kopi yang dipandu oleh head barista kami dengan teknik profesional",
              },
              {
                title: "Latte Art Competition",
                date: "28 Desember 2023",
                image: "/assets/event/event2.png",
                description:
                  "Kompetisi latte art dengan peserta dari berbagai coffee shop yang menampilkan kreativitas tinggi",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-amber-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {event.description}
                    </p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 font-semibold transition-all">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent font-semibold px-8 py-3 transition-all"
            >
              <Link href="/event">Lihat Semua Kegiatan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-24 bg-white">
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
              Testimoni
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Kata Mereka
            </h2>
            <p className="text-xl text-gray-600">
              Testimoni dari pelanggan setia yang telah merasakan pengalaman
              terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Wijaya",
                role: "Coffee Enthusiast",
                comment:
                  "Tempat favorit saya untuk bekerja dan menikmati kopi berkualitas. Suasananya sangat nyaman dan barista-nya ramah sekali!",
                rating: 5,
                avatar: "/placeholder-user.jpg",
              },
              {
                name: "Ahmad Rizki",
                role: "Freelancer",
                comment:
                  "Cold brew mereka adalah yang terbaik di kota! Selalu jadi pilihan utama saat butuh caffeine boost untuk kerja.",
                rating: 5,
                avatar: "/placeholder-user.jpg",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg h-full group transition-all duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex items-center gap-5 mb-5">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={72}
                      height={72}
                    />
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic flex-grow text-base">
                    &quot;{testimonial.comment}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent font-semibold px-8 py-3 transition-all"
            >
              <Link href="/testimonials">Lihat Semua Testimoni</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
