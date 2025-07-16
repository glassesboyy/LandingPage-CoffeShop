import { socialMedias } from "@/app/data/data-social-media"; // import social media
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-1">
              {/* Logo image */}
              <Image
                src="/assets/random/logo.png"
                alt="Noir Coffee Logo"
                width={50}
                height={50}
              />
              <span className="text-3xl font-serif font-bold">Noir Coffee</span>
            </div>
            <p className="text-amber-100 mb-4">
              Menciptakan pengalaman kopi terbaik dengan suasana hangat dan
              pelayanan ramah untuk setiap pelanggan.
            </p>
            <div className="flex space-x-4">
              {/* ...replace hardcoded icons with mapped data... */}
              {socialMedias.map((media) => (
                <Link
                  key={media.name}
                  href={media.url}
                  className="text-amber-200 hover:text-white transition-colors"
                  aria-label={media.name}
                >
                  <media.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/event"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Non-Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Signature Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-amber-200">
                  Jl. Sudirman No. 123
                  <br />
                  Malang, Jawa Timur 65145
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200">+62 341 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200">info@coffeeshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
