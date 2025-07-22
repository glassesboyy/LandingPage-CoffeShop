export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Coffee Enthusiast",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Tempat favorit saya untuk bekerja dan menikmati kopi berkualitas. Suasananya sangat nyaman dan barista-nya ramah sekali! Cold brew mereka adalah yang terbaik di kota.",
    date: "2 minggu yang lalu",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    role: "Freelancer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Cold brew mereka adalah yang terbaik di kota! Selalu jadi pilihan utama saat butuh caffeine boost untuk kerja. WiFi cepat dan tempat duduk nyaman, sangat cocok untuk freelancer seperti saya.",
    date: "1 bulan yang lalu",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Mahasiswa",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Perfect place untuk study session! Kopinya enak, suasananya tenang, dan harganya student-friendly. Latte art-nya juga cantik banget!",
    date: "3 minggu yang lalu",
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Business Owner",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Sering meeting klien di sini karena suasananya profesional tapi tetap hangat. Pelayanannya excellent dan menu makanannya juga enak.",
    date: "1 minggu yang lalu",
  },
  {
    id: 5,
    name: "Rina Putri",
    role: "Designer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Interior design-nya aesthetic banget! Instagram-worthy dan kopinya juga top quality. Signature latte mereka must try!",
    date: "2 minggu yang lalu",
  },
  {
    id: 6,
    name: "Doni Pratama",
    role: "Software Developer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Coding sambil ngopi di sini adalah kombinasi sempurna. Americano-nya strong, WiFi stabil, dan ada colokan di setiap meja. Recommended!",
    date: "4 hari yang lalu",
  },
  {
    id: 7,
    name: "Lisa Anggraini",
    role: "Marketing Manager",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Event coffee cupping workshop-nya sangat edukatif! Jadi lebih paham tentang kopi berkualitas. Staff-nya knowledgeable dan friendly.",
    date: "1 bulan yang lalu",
  },
  {
    id: 8,
    name: "Eko Wijaya",
    role: "Photographer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Lighting-nya perfect untuk foto, kopinya photogenic, dan rasanya juga amazing. Sering jadiin ini sebagai lokasi photo session dengan klien.",
    date: "3 hari yang lalu",
  },
  {
    id: 9,
    name: "Sinta Dewi",
    role: "Teacher",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Tempat yang tepat untuk me-time setelah mengajar. Cappuccino-nya creamy dan croissant-nya fresh. Suasananya bikin stress hilang.",
    date: "1 minggu yang lalu",
  },
];
