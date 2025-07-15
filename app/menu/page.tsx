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

const menuItems = {
  coffee: [
    {
      name: "Espresso",
      price: "Rp 25.000",
      description: "Shot espresso murni dengan crema sempurna",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Americano",
      price: "Rp 28.000",
      description: "Espresso dengan air panas, rasa kopi yang kuat",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Cappuccino",
      price: "Rp 30.000",
      description: "Espresso dengan steamed milk dan foam tebal",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Flat White",
      price: "Rp 33.000",
      description: "Double shot espresso dengan microfoam",
      image: "/assets/menu/menu.jpg",
      category: "coffee",
      signature: false,
    },
  ],
  nonCoffee: [
    {
      name: "Hot Chocolate",
      price: "Rp 30.000",
      description: "Cokelat panas premium dengan whipped cream",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Matcha Latte",
      price: "Rp 32.000",
      description: "Matcha premium dengan steamed milk",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Earl Grey Tea",
      price: "Rp 25.000",
      description: "Teh Earl Grey dengan aroma bergamot",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Iced Chocolate",
      price: "Rp 28.000",
      description: "Cokelat dingin dengan es dan whipped cream",
      image: "/assets/menu/menu3.jpg",
      category: "nonCoffee",
      signature: false,
    },
  ],
  food: [
    {
      name: "Croissant Butter",
      price: "Rp 20.000",
      description: "Croissant segar dengan butter premium",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
    {
      name: "Sandwich Club",
      price: "Rp 45.000",
      description: "Sandwich dengan ayam, sayuran segar, dan saus special",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: true,
    },
    {
      name: "Cheesecake",
      price: "Rp 35.000",
      description: "Cheesecake lembut dengan berry sauce",
      image: "/assets/menu/menu5.jpg",
      category: "food",
      signature: false,
    },
  ],
  signature: [
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/assets/menu/menu4.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/assets/menu/menu4.jpg",
      category: "coffee",
      signature: true,
    },
    {
      name: "Affogato Delight",
      price: "Rp 38.000",
      description: "Es krim vanilla dengan espresso shot",
      image: "/assets/menu/menu4.jpg",
      category: "signature",
      signature: true,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/assets/menu/menu4.jpg",
      category: "food",
      signature: true,
    },
  ],
};

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  signature: boolean;
};

export default function MenuPage() {
  const [sortBy, setSortBy] = useState("name");
  const [activeTab, setActiveTab] = useState("coffee");

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
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-amber-50">
              <TabsTrigger
                value="coffee"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Coffee
              </TabsTrigger>
              <TabsTrigger
                value="nonCoffee"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Non-Coffee
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Food
              </TabsTrigger>
              <TabsTrigger
                value="signature"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Signature
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortItems(menuItems.coffee).map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nonCoffee">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortItems(menuItems.nonCoffee).map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortItems(menuItems.food).map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="signature">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortItems(menuItems.signature).map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>
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
