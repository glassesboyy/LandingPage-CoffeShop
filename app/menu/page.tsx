"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { menuCategories } from "../data/data-kategory-menu";
import { MenuItem, menuItems } from "../data/data-menu";

export default function MenuPage() {
  const [sortBy, setSortBy] = useState("name");
  const [activeTab, setActiveTab] = useState(menuCategories[0].id.toString());

  const sortItems = (items: MenuItem[]) => {
    return [...items].sort((a, b) => {
      if (sortBy === "price") {
        const priceA = Number.parseInt(a.price.replace(/\D/g, ""));
        const priceB = Number.parseInt(b.price.replace(/\D/g, ""));
        return priceA - priceB;
      }
      return a.name.localeCompare(b.name);
    });
  };

  // Filter menu berdasarkan kategori
  const getMenuByCategory = (categoryId: string) => {
    if (categoryId === "4") {
      // Signature tab
      return menuItems.filter((item) => item.signature);
    }
    const idNum = Number(categoryId);
    return menuItems.filter(
      (item) => item.category === idNum && !item.signature
    );
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Menu Kami</h1>
            <p className="text-lg md:text-xl text-amber-100">
              Jelajahi koleksi kopi premium dan makanan lezat yang kami tawarkan
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex flex-col items-start">
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
                Menu
              </Badge>
              <h2 className="text-3xl font-bold text-amber-900">
                Pilih Kategori
              </h2>
              <p className="text-base text-gray-600 mt-2">
                Temukan minuman dan makanan favoritmu dari berbagai kategori
                yang tersedia di coffee shop kami.
              </p>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Urutkan berdasarkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nama A-Z</SelectItem>
                <SelectItem value="price">Harga Terendah</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList
              className={`grid w-full grid-cols-${menuCategories.length} mb-12 bg-amber-50`}
            >
              {menuCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id.toString()}
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((cat) => (
              <TabsContent value={cat.id.toString()} key={cat.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortItems(getMenuByCategory(cat.id.toString())).map(
                    (item, index) => (
                      <MenuCard key={index} item={item} />
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={100}
            height={100}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.signature && (
            <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
              Signature
            </Badge>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-extrabold text-amber-900 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-amber-700">
              {item.price}
            </span>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Lihat Detail
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
