"use client";

import Image from "next/image";
import { useState } from "react";

export default function LayeredImages() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[400px] min-w-[320px]">
      <div
        className="absolute top-0 left-0 w-2/3 h-2/3 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
        style={{
          zIndex: hoveredImage === 0 ? 4 : 1,
          rotate: "4deg",
        }}
        onMouseEnter={() => setHoveredImage(0)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Image
          src="/assets/random/hero.jpeg"
          alt="Coffee Shop Story 1"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </div>
      <div
        className="absolute top-0 right-0 w-2/5 h-2/5 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
        style={{
          zIndex: hoveredImage === 1 ? 4 : 2,
          rotate: "-2deg",
        }}
        onMouseEnter={() => setHoveredImage(1)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Image
          src="/assets/gallery/interior/interior.jpg"
          alt="Coffee Shop Story 2"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-2/5 h-2/5 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
        style={{
          zIndex: hoveredImage === 2 ? 4 : 3,
          rotate: "-2deg",
        }}
        onMouseEnter={() => setHoveredImage(2)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Image
          src="/assets/gallery/interior/interior2.jpg"
          alt="Coffee Shop Story 3"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 w-2/3 h-2/3 shadow-xl overflow-hidden hover:w-full hover:h-full transition-all duration-500"
        style={{
          zIndex: hoveredImage === 3 ? 4 : 0,
          rotate: "4deg",
        }}
        onMouseEnter={() => setHoveredImage(3)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Image
          src="/assets/gallery/interior/interior3.jpg"
          alt="Coffee Shop Story 4"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
    </div>
  );
}
