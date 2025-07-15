export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner & Head Barista",
    image: "/assets/person/barista2.jpg",
    description: "Passionate coffee enthusiast dengan 8 tahun pengalaman",
  },
  {
    id: 2,
    name: "Maya Sari",
    role: "Senior Barista",
    image: "/assets/person/barista.jpg",
    description: "Spesialis latte art dan coffee brewing techniques",
  },
  {
    id: 3,
    name: "Rizki Pratama",
    role: "Barista",
    image: "/assets/person/barista3.jpg",
    description: "Expert dalam cold brew dan specialty coffee",
  },
  {
    id: 4,
    name: "Sinta Dewi",
    role: "Store Manager",
    image: "/assets/person/barista4.jpg",
    description: "Memastikan pelayanan terbaik untuk setiap pelanggan",
  },
];
