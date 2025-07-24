import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { socialMedias } from "../data/data-social-media";
import ContactForm from "./_components/contact-form";

// Import animation components
import {
  FadeIn,
  ScaleIn,
  SlideIn,
  StaggerContainer,
} from "@/components/animation";
import { AnimatedBadge } from "@/components/animation/ui-animations";

export default function ContactPage() {
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
                Hubungi Kami
              </h1>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-amber-100">
                Kami siap melayani Anda dengan sepenuh hati. Kunjungi atau
                hubungi kami kapan saja
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <SlideIn direction="left" delay={0.2} distance={60}>
              <div>
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
                  Kontak
                </AnimatedBadge>
                <FadeIn delay={0.3} direction="up">
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">
                    Informasi Kontak
                  </h2>
                </FadeIn>
                <FadeIn delay={0.5} direction="up">
                  <p className="text-base text-gray-600 mb-8">
                    Hubungi kami melalui alamat, telepon, email, atau media
                    sosial berikut untuk pertanyaan, reservasi, atau kerjasama.
                  </p>
                </FadeIn>

                <StaggerContainer
                  delay={0.7}
                  staggerDelay={0.15}
                  className="space-y-3"
                >
                  <ScaleIn delay={0.1} scale={0.95}>
                    <Card className="p-6 border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-t-2xl">
                            <MapPin className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-amber-900 mb-1">
                              Alamat
                            </h3>
                            <p className="text-gray-700 text-xs">
                              Jl. Sudirman No. 123
                              <br />
                              Malang, Jawa Timur 65145
                              <br />
                              Indonesia
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleIn>

                  <ScaleIn delay={0.25} scale={0.95}>
                    <Card className="p-6 border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-t-2xl">
                            <Phone className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-amber-900 mb-1">
                              Telepon
                            </h3>
                            <p className="text-gray-700 text-xs">
                              +62 341 123 4567
                              <br />
                              WhatsApp: +62 812 3456 7890
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleIn>

                  <ScaleIn delay={0.4} scale={0.95}>
                    <Card className="p-6 border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-t-2xl">
                            <Mail className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-amber-900 mb-1">
                              Email
                            </h3>
                            <p className="text-gray-700 text-xs">
                              info@coffeeshop.com
                              <br />
                              order@coffeeshop.com
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleIn>

                  <ScaleIn delay={0.55} scale={0.95}>
                    <Card className="p-6 border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-t-2xl">
                            <Clock className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-amber-900 mb-1">
                              Jam Operasional
                            </h3>
                            <div className="text-gray-700 text-xs">
                              <p>Senin - Jumat: 07:00 - 22:00</p>
                              <p>Sabtu - Minggu: 08:00 - 23:00</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleIn>
                </StaggerContainer>
              </div>
            </SlideIn>
            {/* Contact Form */}
            <SlideIn direction="right" delay={0.4} distance={60}>
              <ContactForm />
            </SlideIn>
          </div>
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
                Social Media
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

      {/* Map Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2} direction="up">
            <div className="text-center mb-12">
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
                Lokasi
              </AnimatedBadge>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Lokasi Kami
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Temukan kami di jantung kota Malang yang mudah dijangkau. Lihat
                peta di bawah untuk lokasi lengkap.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <ScaleIn delay={0.4} scale={0.95}>
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Google Maps Embed */}
                  <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                    <iframe
                      title="Lokasi Coffee Shop"
                      src="https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>

            <FadeIn delay={0.6} direction="up">
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Parkir tersedia di area sekitar coffee shop. Akses mudah
                  dengan transportasi umum.
                </p>
                <ScaleIn delay={0.2} scale={0.95}>
                  <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                    <a
                      href="https://maps.app.goo.gl/ptPcg77JSMqYYx5q9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buka di Google Maps
                    </a>
                  </Button>
                </ScaleIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
