export type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  contact?: {
    name: string;
    phone?: string;
    email?: string;
    registrationLink?: string;
  };
  gallery?: string[];
  schedule?: { time: string; activity: string }[];
  guests?: { name: string; photo?: string; bio?: string }[];
  mapUrl?: string;
  price?: string;
  faq?: { question: string; answer: string }[];
};

export const pastEvents: EventItem[] = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "15 Desember 2023",
    time: "14:00 - 16:00",
    location: "Coffee Shop Main Area",
    image: "/assets/gallery/event/event.jpg",
    description:
      "Workshop mencicipi dan menilai kopi yang dipandu oleh head barista kami. Dalam sesi ini, peserta tidak hanya belajar teknik cupping profesional, namun juga memahami karakteristik dan profil rasa berbagai jenis kopi dari seluruh dunia. Terdapat sesi diskusi mendalam mengenai proses roasting dan pengaruhnya pada rasa kopi, serta tips praktis untuk menilai kualitas kopi secara mandiri di rumah. Peserta juga akan berkesempatan mencoba beberapa single origin dan mendapatkan feedback langsung dari instruktur berpengalaman.",
    highlights: [
      "Teknik cupping profesional",
      "Analisa profil rasa",
      "Sertifikat peserta",
    ],
    gallery: [
      "/assets/gallery/event/event.jpg",
      "/assets/gallery/event/event2.jpg",
      "/assets/gallery/event/event5.jpg",
      "/assets/gallery/event/event3.jpg",
    ],
    schedule: [
      { time: "14:00", activity: "Registrasi & pembukaan" },
      { time: "14:15", activity: "Sesi teori cupping" },
      { time: "14:45", activity: "Praktik cupping" },
      { time: "15:30", activity: "Diskusi & tanya jawab" },
    ],
    guests: [
      {
        name: "Andi Pradana",
        photo: "/placeholder-user.jpg",
        bio: "Head Barista & Q Grader.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Rp 75.000",
    faq: [
      {
        question: "Apakah peserta pemula boleh ikut?",
        answer: "Sangat boleh, semua level dipersilakan.",
      },
      {
        question: "Apakah dapat sertifikat?",
        answer: "Ya, peserta mendapat e-certificate.",
      },
      {
        question: "Apakah alat cupping disediakan panitia?",
        answer:
          "Ya, semua alat disediakan. Peserta hanya perlu membawa diri dan semangat belajar.",
      },
      {
        question: "Apakah tersedia kopi untuk dibawa pulang?",
        answer: "Peserta mendapat paket kopi single origin sebagai souvenir.",
      },
    ],
  },
  {
    id: 2,
    title: "Latte Art Competition",
    date: "28 Desember 2023",
    time: "10:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event2.jpg",
    description:
      "Kompetisi latte art antar barista dari berbagai coffee shop yang berlangsung seru dan penuh kreativitas. Acara ini menampilkan bakat terbaik dari para peserta, mulai dari pemula hingga profesional yang bersaing dalam menciptakan karya seni di atas secangkir kopi. Selain kompetisi, terdapat sesi live demo dari juara nasional serta tips dan trik membuat latte art yang menarik. Penonton juga dapat ikut voting untuk kategori favorit dan menikmati suasana khas coffee shop yang mendukung atmosfer kompetitif namun tetap hangat.",
    highlights: [
      "3 kategori kompetisi",
      "Hadiah total 5 juta",
      "Live demo dari juara",
    ],
    gallery: [
      "/assets/gallery/event/event2.jpg",
      "/assets/gallery/event/event4.jpg",
      "/assets/gallery/event/event6.jpg",
      "/assets/gallery/event/event3.jpg",
    ],
    schedule: [
      { time: "10:00", activity: "Registrasi peserta" },
      { time: "11:00", activity: "Babak penyisihan" },
      { time: "13:00", activity: "Final & penjurian" },
      { time: "14:30", activity: "Pengumuman pemenang" },
    ],
    guests: [
      {
        name: "Budi Santoso",
        photo: "/placeholder-user.jpg",
        bio: "Juara Latte Art Nasional.",
      },
      {
        name: "Vera Anggraeni",
        photo: "/placeholder-user.jpg",
        bio: "Barista Trainer.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Rp 50.000 (peserta), Gratis (penonton)",
    faq: [
      {
        question: "Apakah harus membawa alat sendiri?",
        answer: "Alat disediakan panitia, kecuali pitcher & milk jug pribadi.",
      },
      {
        question: "Siapa saja yang boleh ikut lomba?",
        answer: "Barista dari semua level dan coffee shop boleh mendaftar.",
      },
      {
        question: "Apakah ada sertifikat atau hadiah untuk pemenang?",
        answer:
          "Tersedia hadiah uang tunai dan sertifikat untuk pemenang di tiap kategori.",
      },
      {
        question: "Apakah penonton dapat mencicipi kopi selama acara?",
        answer:
          "Ya, penonton dapat menikmati kopi spesial selama kompetisi berlangsung.",
      },
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
      "Malam musik akustik yang menghadirkan musisi lokal berbakat dan suasana coffee shop yang intim dan hangat. Pengunjung bisa menikmati alunan musik jazz dan folk sembari bersantai dengan secangkir kopi spesial pilihan. Acara ini juga menjadi ajang sharing cerita antara musisi dan penikmat musik, serta menghadirkan sesi request lagu dan kolaborasi spontan di akhir acara. Sangat cocok untuk melepas penat dan menambah teman baru di komunitas pecinta musik akustik.",
    highlights: ["3 musisi lokal", "Repertoar jazz & folk", "Suasana intimate"],
    gallery: [
      "/assets/gallery/event/event3.jpg",
      "/assets/gallery/event/event5.jpg",
      "/assets/gallery/event/event2.jpg",
      "/assets/gallery/event/event6.jpg",
    ],
    schedule: [
      { time: "19:00", activity: "Open Gate" },
      { time: "19:30", activity: "Penampilan: The Folks" },
      { time: "20:15", activity: "Penampilan: Jazzify" },
      { time: "21:00", activity: "Penampilan: Mellow Vibes" },
    ],
    guests: [
      {
        name: "The Folks",
        bio: "Band lokal bergenre folk.",
        photo: "/placeholder-user.jpg",
      },
      {
        name: "Jazzify",
        bio: "Band jazz akustik.",
        photo: "/placeholder-user.jpg",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Gratis dengan minimum pembelian 1 menu",
    faq: [
      {
        question: "Boleh request lagu?",
        answer: "Bisa, selama waktu dan genre memungkinkan.",
      },
      {
        question: "Apakah ada makanan dan minuman spesial saat event?",
        answer: "Tersedia menu spesial dan promo minuman selama acara.",
      },
      {
        question: "Apakah boleh membawa alat musik sendiri?",
        answer: "Boleh, bahkan ada sesi open mic untuk pengunjung.",
      },
      {
        question: "Apakah ada fasilitas parkir?",
        answer: "Tersedia area parkir khusus event di belakang coffee shop.",
      },
    ],
  },
  {
    id: 4,
    title: "Coffee & Book Club",
    date: "12 Januari 2024",
    time: "15:00 - 17:00",
    location: "Reading Corner",
    image: "/assets/gallery/event/event4.jpg",
    description:
      "Diskusi buku bulanan yang kali ini mengangkat tema 'Coffee Culture Around the World'. Peserta dapat berbagi insight tentang buku favorit bertema kopi sambil menikmati aneka kopi spesial dari berbagai negara. Acara ini mendorong diskusi interaktif, pertukaran pengalaman membaca, serta mencicipi kopi dari single origin yang jarang ditemui. Selain itu, peserta juga mendapat kesempatan untuk mengulas buku secara singkat dan berdiskusi dengan penulis tamu.",
    highlights: ["Buku tema kopi", "Degustasi kopi dunia", "Diskusi mendalam"],
    gallery: [
      "/assets/gallery/event/event4.jpg",
      "/assets/gallery/event/event2.jpg",
      "/assets/gallery/event/event5.jpg",
      "/assets/gallery/event/event6.jpg",
    ],
    schedule: [
      { time: "15:00", activity: "Pembukaan & perkenalan" },
      { time: "15:15", activity: "Diskusi buku" },
      { time: "16:15", activity: "Coffee tasting" },
    ],
    guests: [
      {
        name: "Dimas Purnama",
        bio: "Penulis & penikmat kopi.",
        photo: "/placeholder-user.jpg",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Rp 35.000 (include kopi & snack)",
    faq: [
      {
        question: "Bolehkah membawa buku sendiri?",
        answer: "Boleh, bahkan sangat dianjurkan!",
      },
      {
        question: "Apakah diskusi dilakukan dalam bahasa Indonesia?",
        answer:
          "Mayoritas diskusi dalam bahasa Indonesia, namun dipersilakan menggunakan bahasa Inggris.",
      },
      {
        question: "Apakah kopi dan snack sudah termasuk biaya pendaftaran?",
        answer: "Ya, kopi dan snack tersedia untuk semua peserta.",
      },
      {
        question: "Apakah ada doorprize untuk peserta?",
        answer: "Tersedia doorprize menarik untuk reviewer terbaik.",
      },
    ],
  },
  {
    id: 5,
    title: "Barista Training Workshop",
    date: "20 Januari 2024",
    time: "09:00 - 15:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event5.jpg",
    description:
      "Pelatihan intensif teknik dasar barista yang mencakup seluruh aspek dari grinding, brewing, hingga latte art. Peserta akan mendapat pengalaman langsung menggunakan equipment profesional dan belajar dari barista berpengalaman. Materi pelatihan juga meliputi pengetahuan tentang jenis kopi, teknik penyajian, manajemen kebersihan, hingga tips menangani pelanggan di coffee shop. Di akhir sesi, peserta akan diuji melalui simulasi pelayanan pelanggan dan mendapatkan sertifikat kelulusan.",
    highlights: ["Teknik brewing", "Latte art basic", "Equipment training"],
    gallery: [
      "/assets/gallery/event/event5.jpg",
      "/assets/gallery/event/event3.jpg",
      "/assets/gallery/event/event6.jpg",
      "/assets/gallery/event/event4.jpg",
    ],
    schedule: [
      { time: "09:00", activity: "Registrasi & briefing" },
      { time: "09:30", activity: "Sesi brewing" },
      { time: "12:00", activity: "Latte art basic" },
      { time: "14:00", activity: "Praktik dan evaluasi" },
    ],
    guests: [
      {
        name: "Agus Saputra",
        bio: "Barista trainer berpengalaman.",
        photo: "/placeholder-user.jpg",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Rp 120.000 (termasuk sertifikat & lunch)",
    faq: [
      {
        question: "Apakah peserta dapat sertifikat?",
        answer: "Ya, peserta mendapat sertifikat fisik.",
      },
      {
        question: "Apakah makan siang disediakan?",
        answer: "Tersedia makan siang dan coffee break untuk semua peserta.",
      },
      {
        question: "Apakah pelatihan ini hanya untuk pemula?",
        answer: "Pelatihan cocok untuk pemula maupun barista tingkat lanjut.",
      },
      {
        question: "Adakah materi tentang mesin espresso?",
        answer:
          "Ya, peserta akan belajar pengenalan mesin espresso dan perawatan dasarnya.",
      },
    ],
  },
  {
    id: 6,
    title: "Grand Opening Celebration",
    date: "1 Desember 2023",
    time: "10:00 - 22:00",
    location: "Coffee Shop",
    image: "/assets/gallery/event/event6.jpg",
    description:
      "Perayaan grand opening coffee shop yang meriah dengan beragam aktivitas menarik. Acara ini dimeriahkan oleh pertunjukan live music lokal, games berhadiah, promo spesial, serta kesempatan mengenal lebih dekat tim barista. Pengunjung dapat menikmati pengalaman baru dalam suasana coffee shop yang modern dan nyaman, sekaligus mendapatkan penawaran khusus selama event berlangsung. Terdapat sesi meet & greet dengan pemilik coffee shop dan berbagai doorprize menarik untuk seluruh tamu yang hadir.",
    highlights: ["Live music", "Promo opening", "Meet & greet"],
    gallery: [
      "/assets/gallery/event/event6.jpg",
      "/assets/gallery/event/event4.jpg",
      "/assets/gallery/event/event.jpg",
      "/assets/gallery/event/event2.jpg",
    ],
    schedule: [
      { time: "10:00", activity: "Pembukaan & promo spesial" },
      { time: "15:00", activity: "Games & doorprize" },
      { time: "19:00", activity: "Live music" },
    ],
    guests: [
      {
        name: "Band Lokal",
        bio: "Pengisi acara live music.",
        photo: "/placeholder-user.jpg",
      },
    ],
    mapUrl:
      "https://www.google.com/maps?q=Eiffel+Tower,Paris,France&output=embed",
    price: "Gratis",
    faq: [
      {
        question: "Apakah ada promo khusus hari itu?",
        answer: "Ya, diskon 20% untuk semua menu.",
      },
      {
        question: "Apakah wajib reservasi sebelum datang?",
        answer:
          "Tidak wajib, namun disarankan agar mendapat tempat duduk terbaik.",
      },
      {
        question: "Apakah ada hiburan untuk anak-anak?",
        answer: "Tersedia mini games dan area bermain untuk anak-anak.",
      },
      {
        question: "Apakah tersedia merchandise spesial opening?",
        answer:
          "Ada! Merchandise edisi terbatas tersedia untuk pengunjung pertama.",
      },
    ],
  },
];
