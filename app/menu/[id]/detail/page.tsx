"use client";

import { menuCategories } from "@/app/data/data-kategory-menu";
import { menuItems } from "@/app/data/data-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// Import animation components
import { FadeIn, ScaleIn, StaggerContainer } from "@/components/animation";

export default function MenuDetailPage() {
  const params = useParams();
  const menuId = Number(params.id);
  const menu = menuItems.find((item) => item.id === menuId);

  if (!menu) {
    notFound();
  }

  const category = menuCategories.find((cat) => cat.id === menu.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 text-white mb-0">
        <div className="absolute inset-0">
          <Image
            src={menu.image || "/placeholder.svg"}
            alt={menu.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-800 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn delay={0.3}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow">
                {menu.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-amber-100 mb-2">
                {menu.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detail Card Section */}
      <section className="pb-10 bg-gradient-to-t from-white to-amber-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScaleIn delay={0.2}>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 flex flex-col md:flex-row gap-10 items-center">
                {/* Kiri: Gambar */}
                <div className="md:w-1/2 w-full flex flex-col items-center">
                  <div className="relative w-full h-72 overflow-hidden shadow-lg mb-4">
                    <Image
                      src={menu.image || "/placeholder.svg"}
                      alt={menu.name}
                      fill
                      className="object-cover"
                    />
                    {menu.signature && (
                      <ScaleIn delay={0.4}>
                        <Badge className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 shadow">
                          Signature
                        </Badge>
                      </ScaleIn>
                    )}
                  </div>
                </div>
                {/* Kanan: Detail Menu + Nutrisi */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                  <FadeIn delay={0.6}>
                    <h2 className="text-3xl font-bold text-amber-900">
                      {menu.name}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.7}>
                    <span className="text-xl text-amber-700 font-semibold block">
                      {menu.price}
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.8}>
                    <p className="text-gray-700 mb-2 text-sm">
                      {menu.description}
                    </p>
                  </FadeIn>
                  <StaggerContainer delay={0.9}>
                    <FadeIn delay={0.1}>
                      <div className="text-xs">
                        <span className="text-gray-500">Kategori: </span>
                        <span className="font-medium text-amber-900">
                          {category?.name || "Tidak diketahui"}
                        </span>
                      </div>
                    </FadeIn>
                    {menu.origin && (
                      <FadeIn delay={0.2}>
                        <div className="text-xs">
                          <span className="text-gray-500">Asal: </span>
                          <span className="font-medium text-amber-900">
                            {menu.origin}
                          </span>
                        </div>
                      </FadeIn>
                    )}
                    {menu.prepTime && (
                      <FadeIn delay={0.3}>
                        <div className="text-xs ">
                          <span className="text-gray-500">
                            Waktu Penyajian:{" "}
                          </span>
                          <span className="font-medium text-amber-900">
                            {menu.prepTime}
                          </span>
                        </div>
                      </FadeIn>
                    )}
                    {typeof menu.rating === "number" && (
                      <FadeIn delay={0.4}>
                        <div className="text-xs">
                          <span className="text-gray-500">Rating: </span>
                          <span className="font-semibold  text-amber-900">
                            {menu.rating} / 5
                          </span>
                        </div>
                      </FadeIn>
                    )}
                  </StaggerContainer>
                  {/* Informasi Nutrisi di bawah detail menu */}
                  {menu.nutrition && (
                    <FadeIn delay={1.0}>
                      <div className="mt-2">
                        <h2 className="text-lg font-semibold mb-1 text-amber-900">
                          Informasi Nutrisi
                        </h2>
                        <table className="w-full text-xs text-left border border-amber-200 overflow-hidden">
                          <tbody>
                            {Object.entries(menu.nutrition).map(
                              ([key, value]) => (
                                <tr
                                  key={key}
                                  className="border-b last:border-b-0"
                                >
                                  <td className="py-1 px-4 capitalize text-gray-700">
                                    {key}
                                  </td>
                                  <td className="py-1 px-4 text-gray-900 font-medium">
                                    {value ?? "-"}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </CardContent>
            </Card>
          </ScaleIn>
          <div className="my-10">
            <ScaleIn delay={1.1}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-600 bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 font-semibold px-8 py-3 transition-all w-full"
              >
                <Link href="/menu">Kembali ke Menu</Link>
              </Button>
            </ScaleIn>
          </div>
        </div>
      </section>
    </div>
  );
}
