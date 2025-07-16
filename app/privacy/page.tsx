"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Ketentuan Privasi
            </h1>
            <p className="text-lg md:text-xl text-amber-100">
              Kebijakan privasi Noir Coffee untuk perlindungan data pelanggan
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Pengumpulan Data
              </h2>
              <p className="text-gray-700">
                Kami mengumpulkan data seperti nama, email, dan nomor telepon
                saat Anda melakukan reservasi atau menghubungi kami.
              </p>
              <h2 className="text-3xl font-bold text-amber-900 mt-8 mb-4">
                Penggunaan Data
              </h2>
              <p className="text-gray-700">
                Data yang dikumpulkan digunakan untuk keperluan pelayanan,
                komunikasi, dan promosi terkait Noir Coffee.
              </p>
              <h2 className="text-3xl font-bold text-amber-900 mt-8 mb-4">
                Perlindungan Data
              </h2>
              <p className="text-gray-700">
                Kami berkomitmen menjaga kerahasiaan data pelanggan dan tidak
                membagikan data kepada pihak ketiga tanpa izin.
              </p>
              <h2 className="text-3xl font-bold text-amber-900 mt-8 mb-4">
                Hak Pelanggan
              </h2>
              <p className="text-gray-700">
                Anda berhak meminta akses, perubahan, atau penghapusan data
                pribadi dengan menghubungi kami melalui halaman kontak.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
