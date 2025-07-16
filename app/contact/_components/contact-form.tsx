"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <h2 className="text-3xl font-bold text-amber-900 mb-2">Kirim Pesan</h2>
      <p className="text-base text-gray-600 mb-8">
        Kirimkan pertanyaan, saran, atau pesan Anda melalui formulir berikut.
        Kami akan membalas secepat mungkin.
      </p>

      <Card className="p-8 border-0 shadow-lg">
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-serif font-semibold text-amber-900 mb-2"
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
                className="block text-lg font-serif font-semibold text-amber-900 mb-2"
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
                className="block text-lg font-serif font-semibold text-amber-900 mb-2"
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
  );
}
