import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import TermsAccordion from "./_components/terms-accordion";

// Import animation components
import { FadeIn, ScaleIn } from "@/components/animation";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/random/headline-background.png"
            alt="Terms Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn delay={0.3}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Syarat dan Ketentuan
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-amber-100">
                Ketentuan penggunaan layanan dan fasilitas Noir Coffee
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Terms Content with Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10 text-center">
            <FadeIn delay={0.1}>
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
                Terms
              </Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Syarat & Ketentuan
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-600">
                Berikut adalah syarat dan ketentuan penggunaan layanan kami.
              </p>
            </FadeIn>
          </div>
          <ScaleIn delay={0.4}>
            <TermsAccordion />
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
