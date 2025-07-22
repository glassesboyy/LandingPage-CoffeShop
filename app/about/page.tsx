import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "../data/data-team";
import LayeredImages from "./_components/layered-images";

// Import animation components
import {
  FadeIn,
  ScaleIn,
  SlideIn,
  StaggerContainer,
} from "@/components/animation";
import {
  AnimatedBadge,
  AnimatedCard,
} from "@/components/animation/ui-animations";

export default function AboutPage() {
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
                Tentang Kami
              </h1>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-amber-100">
                Perjalanan kami dalam menciptakan pengalaman kopi terbaik untuk
                Anda
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                  Tentang Kami
                </AnimatedBadge>
                <FadeIn delay={0.3} direction="up">
                  <h2 className="text-4xl font-bold text-amber-900 mb-6">
                    Cerita Kami
                  </h2>
                </FadeIn>
                <FadeIn delay={0.5} direction="up">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Berawal dari kecintaan mendalam terhadap kopi berkualitas,
                    kami mendirikan coffee shop ini pada tahun 2020 dengan visi
                    sederhana: menciptakan ruang hangat di mana setiap orang
                    dapat menikmati kopi terbaik sambil membangun koneksi yang
                    bermakna.
                  </p>
                </FadeIn>
                <FadeIn delay={0.7} direction="up">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Kami percaya bahwa kopi bukan hanya minuman, tetapi juga
                    jembatan yang menghubungkan orang-orang dari berbagai latar
                    belakang. Setiap cangkir yang kami sajikan adalah hasil dari
                    dedikasi untuk kualitas dan kehangatan pelayanan.
                  </p>
                </FadeIn>
                <FadeIn delay={0.9} direction="up">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dengan menggunakan biji kopi pilihan dari petani lokal dan
                    teknik brewing yang tepat, kami berkomitmen untuk terus
                    menghadirkan pengalaman ngopi yang tak terlupakan.
                  </p>
                </FadeIn>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.4} distance={60}>
              <LayeredImages />
            </SlideIn>
          </div>

          {/* Vision & Mission */}
          <StaggerContainer
            delay={0.3}
            staggerDelay={0.2}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            <ScaleIn delay={0.1} scale={0.95}>
              <Card className="p-8 border-0 shadow-lg bg-amber-50">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-amber-600 rounded-t-2xl ">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-900">
                      Visi Kami
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadi coffee shop terdepan yang tidak hanya menyajikan
                    kopi berkualitas tinggi, tetapi juga menciptakan komunitas
                    hangat di mana setiap orang merasa diterima dan
                    terinspirasi.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
            <ScaleIn delay={0.3} scale={0.95}>
              <Card className="p-8 border-0 shadow-lg bg-amber-50">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-amber-600 rounded-t-2xl ">
                      <Coffee className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-900">
                      Misi Kami
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Menghadirkan pengalaman kopi terbaik melalui biji kopi
                    berkualitas, pelayanan yang ramah, dan suasana yang nyaman
                    untuk bekerja, bersantai, dan bersosialisasi.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2} direction="up">
            <div className="text-center mb-16">
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
                Tim Kami
              </AnimatedBadge>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">
                Tim Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bertemu dengan orang-orang hebat di balik setiap cangkir kopi
                yang sempurna
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            delay={0.4}
            staggerDelay={0.15}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <Badge className="bg-amber-600 text-white">
                    {member.role}
                  </Badge>
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-md mb-4">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-4 mt-2">
                    {member.socials?.instagram && (
                      <a
                        href={member.socials.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        className={
                          member.socials.instagram.colorClass +
                          " text-2xl transition-colors"
                        }
                      >
                        <member.socials.instagram.icon className="w-6 h-6" />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Twitter`}
                        className={
                          member.socials.twitter.colorClass +
                          " text-2xl transition-colors"
                        }
                      >
                        <member.socials.twitter.icon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Uniqueness Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2} direction="up">
            <div className="text-center mb-16">
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
                Keunikan
              </AnimatedBadge>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">
                Keunikan Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hal-hal istimewa yang membuat pengalaman di coffee shop kami
                berbeda
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            delay={0.4}
            staggerDelay={0.15}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Coffee,
                title: "Biji Kopi Lokal Premium",
                description:
                  "Kerjasama langsung dengan petani kopi lokal untuk kualitas terbaik",
              },
              {
                icon: Heart,
                title: "Suasana Homey",
                description:
                  "Interior hangat dengan sentuhan kayu dan tanaman yang menenangkan",
              },
              {
                icon: Users,
                title: "Pelayanan Ramah",
                description:
                  "Tim barista berpengalaman yang siap memberikan rekomendasi terbaik",
              },
              {
                icon: Award,
                title: "Kualitas Terjamin",
                description:
                  "Standar brewing yang konsisten untuk setiap cangkir kopi",
              },
            ].map((feature, index) => (
              <ScaleIn key={index} delay={0.1 + index * 0.1} scale={0.9}>
                <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-4 bg-amber-50 rounded-t-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <feature.icon className="w-20 h-20 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
