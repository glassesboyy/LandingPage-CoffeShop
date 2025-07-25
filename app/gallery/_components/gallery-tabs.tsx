"use client";

import type { GalleryImage } from "@/app/data/data-gallery";
import type { GalleryCategory } from "@/app/data/data-kategory-gallery";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

// Import animation components
import { FadeIn, ScaleIn, StaggerContainer } from "@/components/animation";

type GalleryTabsProps = {
  categories: GalleryCategory[];
  images: GalleryImage[];
};

const categoryDetails: Record<
  number,
  { badge: string; title: string; desc: string }
> = {
  1: {
    badge: "Interior",
    title: "Interior & Eksterior",
    desc: "Nikmati suasana hangat dan desain interior yang nyaman di coffee shop kami",
  },
  2: {
    badge: "Barista",
    title: "Aktivitas Barista",
    desc: "Saksikan keahlian barista kami dalam menciptakan kopi berkualitas tinggi",
  },
  3: {
    badge: "Pelanggan",
    title: "Suasana Pelanggan",
    desc: "Momen-momen berharga pelanggan yang menikmati waktu di coffee shop kami",
  },
  4: {
    badge: "Event",
    title: "Dokumentasi Event",
    desc: "Berbagai kegiatan dan event menarik yang telah kami selenggarakan",
  },
};

export default function GalleryTabs({ categories, images }: GalleryTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id.toString());

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <FadeIn delay={0.1}>
        <TabsList className="grid w-full grid-cols-4 mb-12 bg-amber-50">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id.toString()}
              className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </FadeIn>
      {categories.map((cat) => (
        <TabsContent value={cat.id.toString()} key={cat.id}>
          <FadeIn delay={0.2}>
            <div className="mb-8">
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
                  {categoryDetails[cat.id]?.badge || cat.name}
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  {categoryDetails[cat.id]?.title || cat.name}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-600 text-lg">
                  {categoryDetails[cat.id]?.desc || ""}
                </p>
              </FadeIn>
            </div>
          </FadeIn>
          <StaggerContainer delay={0.3}>
            <GalleryGrid
              images={images.filter((img) => img.category === cat.id)}
            />
          </StaggerContainer>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <ScaleIn key={index} delay={0.1 + index * 0.1} scale={0.95}>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl pt-12 px-4">
              <ScaleIn delay={0.1} scale={0.9}>
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </ScaleIn>
              <FadeIn delay={0.2}>
                <div className="space-y-2">
                  <DialogTitle className="text-amber-900 font-semibold text-4xl">
                    {image.title}
                  </DialogTitle>
                  <p className="text-gray-600 text-lg">{image.description}</p>
                </div>
              </FadeIn>
            </DialogContent>
          </Dialog>
        </ScaleIn>
      ))}
    </div>
  );
}
