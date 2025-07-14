"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const menuItems = {
  coffee: [
    {
      name: "Espresso",
      price: "Rp 25.000",
      description: "Shot espresso murni dengan crema sempurna",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: false,
    },
    {
      name: "Americano",
      price: "Rp 28.000",
      description: "Espresso dengan air panas, rasa kopi yang kuat",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: false,
    },
    {
      name: "Cappuccino",
      price: "Rp 30.000",
      description: "Espresso dengan steamed milk dan foam tebal",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: false,
    },
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: true,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: true,
    },
    {
      name: "Flat White",
      price: "Rp 33.000",
      description: "Double shot espresso dengan microfoam",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: false,
    },
  ],
  nonCoffee: [
    {
      name: "Hot Chocolate",
      price: "Rp 30.000",
      description: "Cokelat panas premium dengan whipped cream",
      image: "/placeholder.svg?height=200&width=200",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Matcha Latte",
      price: "Rp 32.000",
      description: "Matcha premium dengan steamed milk",
      image: "/placeholder.svg?height=200&width=200",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Earl Grey Tea",
      price: "Rp 25.000",
      description: "Teh Earl Grey dengan aroma bergamot",
      image: "/placeholder.svg?height=200&width=200",
      category: "nonCoffee",
      signature: false,
    },
    {
      name: "Iced Chocolate",
      price: "Rp 28.000",
      description: "Cokelat dingin dengan es dan whipped cream",
      image: "/placeholder.svg?height=200&width=200",
      category: "nonCoffee",
      signature: false,
    },
  ],
  food: [
    {
      name: "Croissant Butter",
      price: "Rp 20.000",
      description: "Croissant segar dengan butter premium",
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      signature: false,
    },
    {
      name: "Sandwich Club",
      price: "Rp 45.000",
      description: "Sandwich dengan ayam, sayuran segar, dan saus special",
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      signature: false,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      signature: true,
    },
    {
      name: "Cheesecake",
      price: "Rp 35.000",
      description: "Cheesecake lembut dengan berry sauce",
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      signature: false,
    },
  ],
  signature: [
    {
      name: "Signature Latte",
      price: "Rp 35.000",
      description: "Latte premium dengan latte art cantik",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: true,
    },
    {
      name: "Cold Brew Special",
      price: "Rp 32.000",
      description: "Cold brew 12 jam dengan rasa smooth",
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      signature: true,
    },
    {
      name: "Affogato Delight",
      price: "Rp 38.000",
      description: "Es krim vanilla dengan espresso shot",
      image: "/placeholder.svg?height=200&width=200",
      category: "signature",
      signature: true,
    },
    {
      name: "Pasta Carbonara",
      price: "Rp 55.000",
      description: "Pasta dengan saus carbonara creamy dan bacon",
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      signature: true,
    },
  ],
}

export default function MenuPage() {
  const [sortBy, setSortBy] = useState("name")
  const [activeTab, setActiveTab] = useState("coffee")

  const sortItems = (items: any[]) => {
    return [...items].sort((a, b) => {
      if (sortBy === "price") {
        const priceA = Number.parseInt(a.price.replace(/\D/g, ""))
        const priceB = Number.parseInt(b.price.replace(/\D/g, ""))
        return priceA - priceB
      }
      return a.name.localeCompare(b.name)
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Menu Kami</h1>
            <p className="text-xl md:text-2xl text-amber-100">
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
            <h2 className="text-3xl font-bold text-amber-900">Pilih Kategori</h2>
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-amber-50">
              <TabsTrigger value="coffee" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Coffee
              </TabsTrigger>
              <TabsTrigger
                value="nonCoffee"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Non-Coffee
              </TabsTrigger>
              <TabsTrigger value="food" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
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
  )
}

function MenuCard({ item }: { item: any }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.signature && <Badge className="absolute top-4 right-4 bg-amber-600 text-white">Signature</Badge>}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-amber-700">{item.price}</span>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Pesan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
