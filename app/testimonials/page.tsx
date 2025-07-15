import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Coffee Enthusiast",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Tempat favorit saya untuk bekerja dan menikmati kopi berkualitas. Suasananya sangat nyaman dan barista-nya ramah sekali! Cold brew mereka adalah yang terbaik di kota.",
    date: "2 minggu yang lalu",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    role: "Freelancer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Cold brew mereka adalah yang terbaik di kota! Selalu jadi pilihan utama saat butuh caffeine boost untuk kerja. WiFi cepat dan tempat duduk nyaman.",
    date: "1 bulan yang lalu",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Mahasiswa",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Perfect place untuk study session! Kopinya enak, suasananya tenang, dan harganya student-friendly. Latte art-nya juga cantik banget!",
    date: "3 minggu yang lalu",
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Business Owner",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Sering meeting klien di sini karena suasananya profesional tapi tetap hangat. Pelayanannya excellent dan menu makanannya juga enak.",
    date: "1 minggu yang lalu",
  },
  {
    id: 5,
    name: "Rina Putri",
    role: "Designer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Interior design-nya aesthetic banget! Instagram-worthy dan kopinya juga top quality. Signature latte mereka must try!",
    date: "2 minggu yang lalu",
  },
  {
    id: 6,
    name: "Doni Pratama",
    role: "Software Developer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Coding sambil ngopi di sini adalah kombinasi sempurna. Americano-nya strong, WiFi stabil, dan ada colokan di setiap meja. Recommended!",
    date: "4 hari yang lalu",
  },
  {
    id: 7,
    name: "Lisa Anggraini",
    role: "Marketing Manager",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Event coffee cupping workshop-nya sangat edukatif! Jadi lebih paham tentang kopi berkualitas. Staff-nya knowledgeable dan friendly.",
    date: "1 bulan yang lalu",
  },
  {
    id: 8,
    name: "Eko Wijaya",
    role: "Photographer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Lighting-nya perfect untuk foto, kopinya photogenic, dan rasanya juga amazing. Sering jadiin ini sebagai lokasi photo session dengan klien.",
    date: "3 hari yang lalu",
  },
  {
    id: 9,
    name: "Sinta Dewi",
    role: "Teacher",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Tempat yang tepat untuk me-time setelah mengajar. Cappuccino-nya creamy dan croissant-nya fresh. Suasananya bikin stress hilang.",
    date: "1 minggu yang lalu",
  },
];

export default function TestimonialsPage() {
  const averageRating =
    testimonials.reduce((acc, curr) => acc + curr.rating, 0) /
    testimonials.length;

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
              Testimoni Pelanggan
            </h1>
            <p className="text-lg md:text-xl text-amber-100">
              Dengarkan pengalaman nyata dari pelanggan setia kami
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md relative"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-amber-600" />
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-amber-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
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
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Bagikan Pengalaman Anda
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sudah pernah berkunjung ke coffee shop kami? Kami ingin mendengar
              cerita Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Tulis Review
              </button>
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-md font-medium transition-colors">
                Kunjungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
