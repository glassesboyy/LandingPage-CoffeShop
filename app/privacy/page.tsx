import Image from "next/image";
import PrivacyAccordion from "./_components/privacy-accordion";

// Import animation components
import { FadeIn, ScaleIn } from "@/components/animation";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/random/headline-background.png"
            alt="Privacy Background"
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
                Ketentuan Privasi
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-amber-100">
                Kebijakan privasi Noir Coffee untuk perlindungan data pelanggan
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Privacy Content with Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScaleIn delay={0.2}>
            <PrivacyAccordion />
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
