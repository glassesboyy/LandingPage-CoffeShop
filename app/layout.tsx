import RootClient from "@/components/layout/root-client";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noir Coffee | Rasakan Pengalaman Ngopi Terbaik",
  description:
    "Noir Coffee adalah coffee shop modern dengan suasana hangat, kopi berkualitas, dan komunitas menyenangkan. Temukan pengalaman ngopi terbaik di tempat kami.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
