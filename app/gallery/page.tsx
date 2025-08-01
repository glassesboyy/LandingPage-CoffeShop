import Image from "next/image";
import { galleryImages } from "../data/data-gallery";
import { galleryCategories } from "../data/data-kategory-gallery";
import GalleryTabs from "./_components/gallery-tabs";

// Import animation components
import { FadeIn } from "@/components/animation";

export default function GalleryPage() {
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
            <FadeIn delay={0.3}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Galeri Kami
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-amber-100">
                Jelajahi suasana hangat dan momen-momen berharga di coffee shop
                kami
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <GalleryTabs
              categories={galleryCategories}
              images={galleryImages}
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
