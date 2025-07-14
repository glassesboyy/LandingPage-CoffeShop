import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "25 Januari 2024",
    time: "14:00 - 16:00",
    location: "Coffee Shop Main Area",
    capacity: "15 orang",
    price: "Rp 150.000",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Pelajari cara mencicipi dan menilai kopi seperti seorang profesional. Workshop ini akan dipandu oleh head barista kami yang berpengalaman.",
    status: "available",
  },
  {
    id: 2,
    title: "Latte Art Competition",
    date: "10 Februari 2024",
    time: "10:00 - 15:00",
    location: "Coffee Shop",
    capacity: "20 peserta",
    price: "Rp 100.000",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Kompetisi latte art terbuka untuk semua level dengan hadiah menarik untuk para pemenang. Daftar sekarang!",
    status: "available",
  },
  {
    id: 3,
    title: "Acoustic Night",
    date: "17 Februari 2024",
    time: "19:00 - 22:00",
    location: "Coffee Shop",
    capacity: "50 orang",
    price: "Free",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Nikmati malam yang hangat dengan musik akustik dari musisi lokal sambil menyeruput kopi favorit Anda.",
    status: "available",
  },
  {
    id: 4,
    title: "Coffee & Book Club",
    date: "24 Februari 2024",
    time: "15:00 - 17:00",
    location: "Reading Corner",
    capacity: "12 orang",
    price: "Rp 75.000",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Diskusi buku bulanan dengan tema 'Coffee Culture Around the World' sambil menikmati kopi spesial.",
    status: "limited",
  },
  {
    id: 5,
    title: "Barista Training Basic",
    date: "3 Maret 2024",
    time: "09:00 - 15:00",
    location: "Coffee Shop",
    capacity: "8 orang",
    price: "Rp 500.000",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Pelatihan dasar menjadi barista profesional. Termasuk sertifikat dan starter kit.",
    status: "soldout",
  },
  {
    id: 6,
    title: "Coffee Farm Visit",
    date: "10 Maret 2024",
    time: "06:00 - 18:00",
    location: "Kebun Kopi Malang",
    capacity: "25 orang",
    price: "Rp 350.000",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Kunjungan ke kebun kopi untuk melihat langsung proses dari biji hingga cangkir. Termasuk transportasi dan makan siang.",
    status: "available",
  },
];

const pastEvents = [
  {
    title: "Grand Opening Celebration",
    date: "15 Desember 2023",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Perayaan grand opening dengan berbagai doorprize dan diskon spesial.",
  },
  {
    title: "Christmas Coffee Special",
    date: "24 Desember 2023",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Menu kopi spesial Natal dengan cita rasa unik dan dekorasi meriah.",
  },
  {
    title: "New Year Coffee Toast",
    date: "31 Desember 2023",
    image: "/placeholder.svg?height=200&width=300",
    description: "Menyambut tahun baru dengan coffee toast bersama komunitas.",
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
              Bergabunglah dengan komunitas kami dalam berbagai kegiatan menarik
              dan edukatif
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Event Mendatang
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk mengikuti berbagai kegiatan
              menarik kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {event.status === "available" && (
                        <Badge className="bg-green-600 text-white">
                          Tersedia
                        </Badge>
                      )}
                      {event.status === "limited" && (
                        <Badge className="bg-yellow-600 text-white">
                          Terbatas
                        </Badge>
                      )}
                      {event.status === "soldout" && (
                        <Badge className="bg-red-600 text-white">
                          Sold Out
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
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
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">
                      {event.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-700">
                        {event.price}
                      </span>
                      <Button
                        className={`${
                          event.status === "soldout"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-amber-600 hover:bg-amber-700"
                        }`}
                        disabled={event.status === "soldout"}
                      >
                        {event.status === "soldout" ? "Sold Out" : "Daftar"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Event Sebelumnya
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat dokumentasi kegiatan-kegiatan menarik yang telah kami
              selenggarakan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-amber-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Tetap Terhubung
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ikuti media sosial kami untuk mendapatkan update terbaru tentang
              event dan promo menarik
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
              Atau kunjungi langsung coffee shop kami untuk informasi lebih
              lanjut tentang event mendatang
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
