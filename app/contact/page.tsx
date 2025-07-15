"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (dummy)
    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-amber-100">
              Kami siap melayani Anda dengan sepenuh hati. Kunjungi atau hubungi
              kami kapan saja
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Informasi Kontak
              </h2>

              <div className="space-y-4">
                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-t-2xl">
                        <MapPin className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900 mb-1">
                          Alamat
                        </h3>
                        <p className="text-gray-700 text-sm">
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

                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-t-2xl">
                        <Phone className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900 mb-1">
                          Telepon
                        </h3>
                        <p className="text-gray-700 text-sm">
                          +62 341 123 4567
                          <br />
                          WhatsApp: +62 812 3456 7890
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-t-2xl">
                        <Mail className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900 mb-1">
                          Email
                        </h3>
                        <p className="text-gray-700 text-sm">
                          info@coffeeshop.com
                          <br />
                          order@coffeeshop.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-t-2xl">
                        <Clock className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900 mb-1">
                          Jam Operasional
                        </h3>
                        <div className="text-gray-700 text-sm">
                          <p>Senin - Jumat: 07:00 - 22:00</p>
                          <p>Sabtu - Minggu: 08:00 - 23:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Ikuti Kami di Berbagai Platfrom
                </h3>
                <div className="flex gap-4">
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button size="sm" className="bg-sky-500 hover:bg-sky-600">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Kirim Pesan
              </h2>

              <Card className="p-8 border-0 shadow-lg">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukkan alamat email Anda"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tulis pesan Anda di sini..."
                        rows={6}
                        required
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                    >
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Temukan kami di jantung kota Malang yang mudah dijangkau
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Google Maps Embed Placeholder */}
                <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">
                      Google Maps akan ditampilkan di sini
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Jl. Sudirman No. 123, Malang, Jawa Timur 65145
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Parkir tersedia di area sekitar coffee shop. Akses mudah dengan
                transportasi umum.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Buka di Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
