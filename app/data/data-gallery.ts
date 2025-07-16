import type { GalleryCategory } from "./data-kategory-gallery";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: GalleryCategory["id"];
};

export const galleryImages: GalleryImage[] = [
  // Interior (id: 1)
  {
    src: "/assets/gallery/interior/interior.jpg",
    alt: "Interior Coffee Shop - Seating Area",
    title: "Area Duduk Utama",
    description: "Area duduk yang nyaman dengan pencahayaan hangat.",
    category: 1,
  },
  {
    src: "/assets/gallery/interior/interior2.jpg",
    alt: "Interior Coffee Shop - Counter",
    title: "Counter & Bar Area",
    description:
      "Counter tempat barista menyajikan kopi dengan penuh keahlian.",
    category: 1,
  },
  {
    src: "/assets/gallery/interior/interior3.jpg",
    alt: "Interior Coffee Shop - Cozy Corner",
    title: "Sudut Nyaman",
    description: "Sudut nyaman untuk bersantai dengan secangkir kopi.",
    category: 1,
  },
  {
    src: "/assets/gallery/interior/interior4.jpg",
    alt: "Interior Coffee Shop - Work Space",
    title: "Area Kerja",
    description: "Area kerja yang nyaman untuk bekerja atau belajar.",
    category: 1,
  },
  {
    src: "/assets/gallery/interior/interior5.jpg",
    alt: "Interior Coffee Shop - Decoration",
    title: "Dekorasi Interior",
    description: "Dekorasi yang menciptakan suasana hangat dan nyaman.",
    category: 1,
  },
  {
    src: "/assets/gallery/interior/interior6.jpg",
    alt: "Interior Coffee Shop - Lighting",
    title: "Pencahayaan Hangat",
    description: "Pencahayaan yang menciptakan suasana hangat dan nyaman.",
    category: 1,
  },
  // Barista (id: 2)
  {
    src: "/assets/gallery/barista/barista.jpg",
    alt: "Barista Making Coffee",
    title: "Proses Pembuatan Kopi",
    description: "Barista sedang menyeduh kopi dengan penuh perhatian.",
    category: 2,
  },
  {
    src: "/assets/gallery/barista/barista2.jpg",
    alt: "Latte Art Creation",
    title: "Pembuatan Latte Art",
    description: "Barista sedang membuat latte art yang indah.",
    category: 2,
  },
  {
    src: "/assets/gallery/barista/barista3.jpg",
    alt: "Coffee Grinding",
    title: "Proses Grinding Biji Kopi",
    description: "Barista sedang menggiling biji kopi segar untuk penyeduhan.",
    category: 2,
  },
  {
    src: "/assets/gallery/barista/barista4.jpg",
    alt: "Espresso Extraction",
    title: "Ekstraksi Espresso",
    description:
      "Barista sedang mengekstrak espresso dengan teknik yang tepat.",
    category: 2,
  },
  {
    src: "/assets/gallery/barista/barista5.jpg",
    alt: "Coffee Beans Selection",
    title: "Seleksi Biji Kopi",
    description: "Barista memilih biji kopi berkualitas untuk disajikan.",
    category: 2,
  },
  {
    src: "/assets/gallery/barista/barista6.jpg",
    alt: "Brewing Process",
    title: "Proses Brewing",
    description:
      "Barista sedang melakukan proses brewing kopi dengan hati-hati.",
    category: 2,
  },
  // Customers (id: 3)
  {
    src: "/assets/gallery/pelanggan/pelanggan.jpg",
    alt: "Customers Enjoying Coffee",
    title: "Pelanggan Menikmati Kopi",
    description: "Pelanggan menikmati kopi di area duduk yang nyaman.",
    category: 3,
  },
  {
    src: "/assets/gallery/pelanggan/pelanggan2.jpg",
    alt: "Business Meeting",
    title: "Meeting Bisnis",
    description: "Pelanggan melakukan meeting bisnis sambil menikmati kopi.",
    category: 3,
  },
  {
    src: "/assets/gallery/pelanggan/pelanggan3.jpg",
    alt: "Study Session",
    title: "Sesi Belajar",
    description: "Pelanggan belajar sambil menikmati kopi di coffee shop.",
    category: 3,
  },
  {
    src: "/assets/gallery/pelanggan/pelanggan4.jpg",
    alt: "Friends Gathering",
    title: "Kumpul Teman",
    description: "Pelanggan berkumpul bersama teman-teman menikmati kopi.",
    category: 3,
  },
  {
    src: "/assets/gallery/pelanggan/pelanggan5.jpg",
    alt: "Solo Work",
    title: "Kerja Mandiri",
    description: "Pelanggan menikmati waktu sendiri sambil bekerja.",
    category: 3,
  },
  {
    src: "/assets/gallery/pelanggan/pelanggan6.jpg",
    alt: "Coffee Tasting",
    title: "Coffee Tasting",
    description: "Pelanggan mencicipi berbagai jenis kopi yang kami tawarkan.",
    category: 3,
  },
  // Events (id: 4)
  {
    src: "/assets/gallery/event/event.jpg",
    alt: "Coffee Workshop",
    title: "Workshop Kopi",
    description: "Workshop tentang teknik penyeduhan kopi yang benar.",
    category: 4,
  },
  {
    src: "/assets/gallery/event/event2.jpg",
    alt: "Latte Art Competition",
    title: "Kompetisi Latte Art",
    description: "Kompetisi seni latte dengan berbagai peserta.",
    category: 4,
  },
  {
    src: "/assets/gallery/event/event3.jpg",
    alt: "Music Performance",
    title: "Pertunjukan Musik",
    description: "Pertunjukan musik akustik oleh musisi lokal.",
    category: 4,
  },
  {
    src: "/assets/gallery/event/event4.jpg",
    alt: "Book Reading",
    title: "Acara Baca Buku",
    description: "Acara baca buku dengan penulis lokal.",
    category: 4,
  },
  {
    src: "/assets/gallery/event/event5.jpg",
    alt: "Community Gathering",
    title: "Gathering Komunitas",
    description: "Gathering komunitas untuk berbagi pengalaman dan cerita.",
    category: 4,
  },
  {
    src: "/assets/gallery/event/event6.jpg",
    alt: "Coffee Cupping",
    title: "Coffee Cupping Session",
    description: "Sesi cupping kopi untuk mencicipi berbagai jenis kopi.",
    category: 4,
  },
];
