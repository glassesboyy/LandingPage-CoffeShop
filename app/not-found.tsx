import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">
          Halaman tidak ditemukan
        </h2>
        <p className="text-gray-600 mb-6">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-amber-600 bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 font-semibold px-8 py-3 transition-all w-full"
        >
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </div>
  );
}
