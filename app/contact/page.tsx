"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { socialMedias } from "../data/data-social-media"; // import social media

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
                Kontak
              </Badge>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Informasi Kontak
              </h2>
              <p className="text-base text-gray-600 mb-8">
                Hubungi kami melalui alamat, telepon, email, atau media sosial
                berikut untuk pertanyaan, reservasi, atau kerjasama.
              </p>

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
            </div>

            {/* Contact Form */}
            <div>
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
                Pesan
              </Badge>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-base text-gray-600 mb-8">
                Kirimkan pertanyaan, saran, atau pesan Anda melalui formulir
                berikut. Kami akan membalas secepat mungkin.
              </p>

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

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
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
              Social Media
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Terhubung dengan Kami di Media Sosial
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bagikan pengalaman Anda menikmati kopi di tempat kami melalui
              media sosial dan tag akun kami! Kami senang melihat cerita dan
              momen spesial Anda bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {socialMedias.map((media) => (
                <a
                  key={media.id}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-white px-8 py-3 rounded-md font-medium transition-colors ${media.colorClass}`}
                >
                  <media.icon className="w-5 h-5" />
                  {media.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
              Lokasi
            </Badge>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Lokasi Kami
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Temukan kami di jantung kota Malang yang mudah dijangkau. Lihat
              peta di bawah untuk lokasi lengkap.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Google Maps Embed */}
                <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                  <iframe
                    title="Lokasi Coffee Shop"
                    src="https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Parkir tersedia di area sekitar coffee shop. Akses mudah dengan
                transportasi umum.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <a
                  href="https://maps.app.goo.gl/ptPcg77JSMqYYx5q9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buka di Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
