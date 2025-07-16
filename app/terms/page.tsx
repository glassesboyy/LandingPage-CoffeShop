"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/random/headline-background.png"
            alt="Terms Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-amber-950/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg md:text-xl text-amber-100">
              Ketentuan penggunaan layanan dan fasilitas Noir Coffee
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Umum</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Pengunjung wajib menjaga ketertiban dan kenyamanan di area
                  coffee shop.
                </li>
                <li>Dilarang membawa makanan dan minuman dari luar.</li>
                <li>
                  Penggunaan Wi-Fi gratis tunduk pada kebijakan penggunaan yang
                  berlaku.
                </li>
              </ul>
              <h2 className="text-3xl font-bold text-amber-900 mt-8 mb-4">
                Reservasi & Pembayaran
              </h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Reservasi dapat dilakukan melalui kontak resmi Noir Coffee.
                </li>
                <li>Pembayaran dapat dilakukan secara tunai atau non-tunai.</li>
                <li>
                  Promo dan diskon berlaku sesuai periode yang ditentukan.
                </li>
              </ul>
              <h2 className="text-3xl font-bold text-amber-900 mt-8 mb-4">
                Lain-lain
              </h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Noir Coffee berhak mengubah syarat dan ketentuan
                  sewaktu-waktu.
                </li>
                <li>
                  Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui
                  halaman kontak.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
