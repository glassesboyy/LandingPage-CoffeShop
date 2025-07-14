import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-900/90 to-amber-800/90">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Coffee Shop Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rasakan Pengalaman
            <span className="block text-amber-200">Ngopi Terbaik</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Temukan suasana hangat, kopi berkualitas, dan komunitas menyenangkan di tempat kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
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
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Cerita Kami</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dimulai dari kecintaan terhadap kopi berkualitas, kami hadir untuk menciptakan ruang hangat di mana
                setiap tegukan kopi menjadi momen berharga. Dengan biji kopi pilihan dari petani lokal dan barista
                berpengalaman, kami berkomitmen menghadirkan pengalaman ngopi terbaik.
              </p>
              <p className="text-gray-600 mb-8">
                Lebih dari sekadar coffee shop, kami adalah rumah kedua bagi komunitas pecinta kopi yang menghargai
                kualitas dan kehangatan.
              </p>
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/about">Baca Selengkapnya</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Coffee Shop Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Unggulan Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Menu Signature Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nikmati kreasi kopi terbaik yang telah menjadi favorit pelanggan setia kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Signature Latte",
                price: "Rp 35.000",
                image: "/placeholder.svg?height=300&width=300",
                description: "Espresso premium dengan steamed milk dan latte art cantik",
              },
              {
                name: "Cold Brew Special",
                price: "Rp 32.000",
                image: "/placeholder.svg?height=300&width=300",
                description: "Cold brew 12 jam dengan rasa smooth dan aroma khas",
              },
              {
                name: "Cappuccino Klasik",
                price: "Rp 30.000",
                image: "/placeholder.svg?height=300&width=300",
                description: "Perpaduan sempurna espresso, steamed milk, dan foam",
              },
              {
                name: "Affogato Delight",
                price: "Rp 38.000",
                image: "/placeholder.svg?height=300&width=300",
                description: "Es krim vanilla premium disiram espresso panas",
              },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-amber-600 text-white">Signature</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        Pesan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              <Link href="/menu">Lihat Menu Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Terkini Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Event Mendatang</h2>
            <p className="text-xl text-gray-600">Bergabunglah dengan komunitas kami dalam berbagai kegiatan menarik</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Coffee Cupping Workshop",
                date: "25 Januari 2024",
                time: "14:00 - 16:00",
                image: "/placeholder.svg?height=300&width=400",
                description: "Pelajari cara mencicipi dan menilai kopi seperti seorang profesional",
              },
              {
                title: "Latte Art Competition",
                date: "10 Februari 2024",
                time: "10:00 - 15:00",
                image: "/placeholder.svg?height=300&width=400",
                description: "Kompetisi latte art terbuka untuk semua level dengan hadiah menarik",
              },
            ].map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-amber-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Daftar Sekarang</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              <Link href="/event">Lihat Semua Event</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Kata Mereka</h2>
            <p className="text-xl text-gray-600">
              Testimoni dari pelanggan setia yang telah merasakan pengalaman terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Wijaya",
                role: "Coffee Enthusiast",
                comment:
                  "Tempat favorit saya untuk bekerja dan menikmati kopi berkualitas. Suasananya sangat nyaman dan barista-nya ramah sekali!",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Ahmad Rizki",
                role: "Freelancer",
                comment:
                  "Cold brew mereka adalah yang terbaik di kota! Selalu jadi pilihan utama saat butuh caffeine boost untuk kerja.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              <Link href="/testimonials">Lihat Semua Testimoni</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
