import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { socialMedias } from "../data/data-social-media";
import { testimonials } from "../data/data-testimoni";

// Import animation components
import { FadeIn, ScaleIn, StaggerContainer } from "@/components/animation";
import {
  AnimatedBadge,
  AnimatedCard,
} from "@/components/animation/ui-animations";

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
            <FadeIn delay={0.3} direction="up">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Testimoni Pelanggan
              </h1>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-amber-100">
                Dengarkan pengalaman nyata dari pelanggan setia kami
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer
            delay={0.3}
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={testimonial.id}
                delay={index * 0.05}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md relative"
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-amber-600" />
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <ScaleIn delay={0.2 + index * 0.05} scale={0.8}>
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </ScaleIn>
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
                  <p
                    className="text-gray-700 italic leading-relaxed overflow-hidden flex-1"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    &quot;{testimonial.comment}&quot;
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn delay={0.2} direction="up">
              <AnimatedBadge
                delay={0.1}
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
              </AnimatedBadge>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Terhubung dengan Kami di Media Sosial
              </h2>
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <p className="text-xl text-gray-600 mb-8">
                Bagikan pengalaman Anda menikmati kopi di tempat kami melalui
                media sosial dan tag akun kami! Kami senang melihat cerita dan
                momen spesial Anda bersama kami.
              </p>
            </FadeIn>
            <StaggerContainer
              delay={0.8}
              staggerDelay={0.1}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {socialMedias.map((media, index) => (
                <ScaleIn key={media.id} delay={0.1 + index * 0.1} scale={0.9}>
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-white px-8 py-3 rounded-md font-medium transition-colors ${media.colorClass} hover:scale-105 transform duration-300`}
                  >
                    <media.icon className="w-5 h-5" />
                    {media.name}
                  </a>
                </ScaleIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
