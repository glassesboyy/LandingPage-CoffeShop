"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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

      {/* Terms Content with Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10 text-center">
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
              Terms
            </Badge>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Syarat & Ketentuan
            </h2>
            <p className="text-lg text-gray-600">
              Berikut adalah syarat dan ketentuan penggunaan layanan kami.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="umum">
              <AccordionTrigger className="text-md font-bold text-amber-900">
                Umum
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    Pengunjung diwajibkan untuk menjaga ketertiban, kebersihan, dan kenyamanan selama berada di area Noir Coffee. Kami mengutamakan suasana yang ramah dan kondusif agar setiap tamu dapat menikmati pengalaman terbaik. Mohon untuk tidak melakukan tindakan yang dapat mengganggu kenyamanan pengunjung lain, seperti berbicara terlalu keras, merokok di area terlarang, atau melakukan aktivitas yang tidak sesuai dengan norma yang berlaku.
                  </li>
                  <li>
                    Demi menjaga kualitas dan kebersihan, kami tidak mengizinkan pengunjung membawa makanan dan minuman dari luar ke dalam area coffee shop. Seluruh hidangan dan minuman yang disajikan telah melalui proses seleksi dan pengawasan ketat untuk memastikan standar mutu Noir Coffee.
                  </li>
                  <li>
                    Fasilitas Wi-Fi gratis tersedia bagi seluruh pengunjung dengan ketentuan penggunaan yang berlaku. Kami mengimbau untuk tidak menggunakan jaringan Wi-Fi untuk aktivitas ilegal, seperti mengakses situs terlarang atau melakukan tindakan yang melanggar hukum. Noir Coffee berhak membatasi atau memutus akses Wi-Fi apabila ditemukan pelanggaran.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reservasi">
              <AccordionTrigger className="text-md font-bold text-amber-900">
                Reservasi & Pembayaran
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    Reservasi tempat dapat dilakukan melalui kontak resmi Noir Coffee, baik melalui telepon, email, maupun platform digital yang kami sediakan. Kami menyarankan untuk melakukan reservasi terlebih dahulu terutama pada jam-jam sibuk atau saat event khusus agar dapat memastikan ketersediaan tempat.
                  </li>
                  <li>
                    Pembayaran atas produk dan layanan dapat dilakukan secara tunai maupun non-tunai, termasuk melalui transfer bank, e-wallet, dan kartu debit/kredit. Kami memastikan setiap transaksi dilakukan secara aman dan transparan. Mohon simpan bukti pembayaran untuk keperluan verifikasi jika diperlukan.
                  </li>
                  <li>
                    Promo dan diskon yang kami tawarkan berlaku sesuai dengan periode dan syarat yang telah ditentukan. Informasi terkait promo dapat dilihat pada media sosial, website, atau langsung di lokasi. Noir Coffee berhak membatalkan promo apabila ditemukan penyalahgunaan atau pelanggaran terhadap ketentuan yang berlaku.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="lain-lain">
              <AccordionTrigger className="text-md font-bold text-amber-900">
                Lain-lain
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    Noir Coffee berhak untuk mengubah, menambah, atau mengurangi syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Perubahan akan diinformasikan melalui kanal resmi kami dan berlaku efektif sejak diumumkan.
                  </li>
                  <li>
                    Jika Anda memiliki pertanyaan, saran, atau membutuhkan klarifikasi lebih lanjut terkait syarat dan ketentuan, silakan hubungi kami melalui halaman kontak yang tersedia di website. Tim kami siap membantu Anda untuk mendapatkan informasi yang dibutuhkan.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
