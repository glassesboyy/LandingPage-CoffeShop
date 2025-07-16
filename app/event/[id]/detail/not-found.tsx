import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-amber-900">
          Event tidak ditemukan
        </h2>
        <p className="text-gray-600 mb-6">
          Event yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-amber-600 bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 font-semibold px-8 py-3 transition-all w-full"
        >
          <Link href="/event">Kembali ke Event</Link>
        </Button>
      </div>
    </div>
  );
}
