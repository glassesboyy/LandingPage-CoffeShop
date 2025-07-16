import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { socialMedias } from "../data/data-social-media";
import { testimonials } from "../data/data-testimoni";

export default function TestimonialsPage() {
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
                    &quot;{testimonial.comment}&quot;
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
              Sosial Media
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
