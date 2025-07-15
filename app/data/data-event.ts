export type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
};

export const pastEvents: EventItem[] = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "15 Desember 2023",
    time: "14:00 - 16:00",
    location: "Coffee Shop Main Area",
    image: "/assets/event/event.png",
    description:
      "Workshop mencicipi dan menilai kopi yang dipandu oleh head barista kami. Peserta belajar teknik cupping profesional dan mengenal berbagai profil rasa kopi.",
    highlights: [
      "Teknik cupping profesional",
      "Analisa profil rasa",
      "Sertifikat peserta",
    ],
  },
  {
    id: 2,
    title: "Latte Art Competition",
    date: "28 Desember 2023",
    time: "10:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/event/event2.png",
    description:
      "Kompetisi latte art yang diikuti oleh barista dari berbagai coffee shop. Acara ini menampilkan kreativitas dan skill para peserta.",
    highlights: [
      "3 kategori kompetisi",
      "Hadiah total 5 juta",
      "Live demo dari juara",
    ],
  },
  {
    id: 3,
    title: "Acoustic Night",
    date: "5 Januari 2024",
    time: "19:00 - 22:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event3.jpg",
    description:
      "Malam musik akustik dengan musisi lokal. Suasana hangat dengan alunan musik dan aroma kopi yang menenangkan.",
    highlights: ["3 musisi lokal", "Repertoar jazz & folk", "Suasana intimate"],
  },
  {
    id: 4,
    title: "Coffee & Book Club",
    date: "12 Januari 2024",
    time: "15:00 - 17:00",
    location: "Reading Corner",
    image: "/assets/gallery/event/event4.jpg",
    description:
      "Diskusi buku dengan tema 'Coffee Culture Around the World' sambil menikmati kopi spesial dari berbagai negara.",
    highlights: ["Buku tema kopi", "Degustasi kopi dunia", "Diskusi mendalam"],
  },
  {
    id: 5,
    title: "Barista Training Workshop",
    date: "20 Januari 2024",
    time: "09:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/gallery/barista/barista.jpg",
    description:
      "Pelatihan intensif teknik dasar barista dari grinding hingga latte art. Peserta mendapat pengalaman hands-on dengan equipment profesional.",
    highlights: ["Teknik brewing", "Latte art basic", "Equipment training"],
  },
  {
    id: 6,
    title: "Grand Opening Celebration",
    date: "1 Desember 2023",
    time: "10:00 - 22:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event.jpg",
    description:
      "Perayaan grand opening dengan berbagai aktivitas menarik, live music, dan promo spesial untuk pengunjung.",
    highlights: ["Live music", "Promo opening", "Meet & greet"],
  },
];
