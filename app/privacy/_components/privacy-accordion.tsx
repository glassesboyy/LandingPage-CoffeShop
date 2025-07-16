"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PrivacyAccordion() {
  return (
    <>
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
          Privacy
        </Badge>
        <h2 className="text-3xl font-bold text-amber-900 mb-4">
          Kebijakan Privasi
        </h2>
        <p className="text-lg text-gray-600">
          Berikut adalah kebijakan privasi untuk perlindungan data Anda.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="pengumpulan">
          <AccordionTrigger className="text-md font-bold text-amber-900">
            Pengumpulan Data
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Noir Coffee mengumpulkan data pribadi seperti nama, alamat email,
              dan nomor telepon ketika Anda melakukan reservasi, berlangganan
              newsletter, atau menghubungi layanan pelanggan kami. Data ini
              dikumpulkan secara langsung melalui formulir online, aplikasi,
              maupun komunikasi langsung. Kami memastikan bahwa proses
              pengumpulan data dilakukan secara transparan dan hanya untuk
              keperluan yang telah diinformasikan kepada Anda.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="penggunaan">
          <AccordionTrigger className="text-md font-bold text-amber-900">
            Penggunaan Data
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Data yang kami kumpulkan digunakan untuk meningkatkan kualitas
              layanan, memproses reservasi, mengirimkan informasi terkait
              promosi, serta menanggapi pertanyaan atau keluhan pelanggan. Kami
              juga dapat menggunakan data Anda untuk analisis internal guna
              memahami kebutuhan pelanggan dan mengembangkan produk serta
              layanan yang lebih baik. Noir Coffee tidak akan menggunakan data
              Anda untuk tujuan lain tanpa persetujuan terlebih dahulu.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="perlindungan">
          <AccordionTrigger className="text-md font-bold text-amber-900">
            Perlindungan Data
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Kami berkomitmen untuk menjaga kerahasiaan dan keamanan data
              pribadi pelanggan dengan menerapkan standar perlindungan data yang
              tinggi. Seluruh data yang tersimpan di sistem kami dilindungi
              dengan teknologi enkripsi dan akses terbatas hanya kepada pihak
              yang berwenang. Noir Coffee tidak akan membagikan, menjual, atau
              memperdagangkan data pribadi Anda kepada pihak ketiga tanpa izin
              tertulis dari Anda, kecuali diwajibkan oleh hukum.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hak">
          <AccordionTrigger className="text-md font-bold text-amber-900">
            Hak Pelanggan
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Anda memiliki hak penuh atas data pribadi yang telah diberikan
              kepada kami. Jika Anda ingin mengakses, memperbarui, memperbaiki,
              atau menghapus data pribadi Anda, silakan ajukan permintaan
              melalui halaman kontak di website kami. Kami akan memproses
              permintaan Anda sesuai dengan prosedur dan ketentuan yang berlaku,
              serta memastikan bahwa hak privasi Anda tetap terlindungi.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
