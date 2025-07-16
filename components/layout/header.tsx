"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Event", href: "/event" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo image */}
            <Image
              src="/assets/random/logo.png"
              alt="Noir Coffee Logo"
              width={47}
              height={47}
            />
            <span className="text-2xl font-bold font-serif text-amber-900">
              Noir Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === item.href
                    ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              {/* Tambahkan SheetTitle untuk aksesibilitas */}
              <SheetTitle className="sr-only">Main Navigation</SheetTitle>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/assets/random/logo.png"
                    alt="Noir Coffee Logo"
                    width={47}
                    height={47}
                  />
                  <span className="text-2xl font-bold font-serif text-amber-900">
                    Noir Coffee
                  </span>
                </div>
              </div>
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all hover:scale-105 hover:bg-amber-600 hover:text-white py-2 px-2 ${
                      pathname === item.href
                        ? "text-amber-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
