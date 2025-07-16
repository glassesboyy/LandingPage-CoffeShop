import type { LucideIcon } from "lucide-react";
import { Instagram, Twitter } from "lucide-react";

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  socials: {
    instagram?: {
      url: string;
      icon: LucideIcon;
      colorClass?: string;
    };
    twitter?: {
      url: string;
      icon: LucideIcon;
      colorClass?: string;
    };
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner & Head Barista",
    image: "/assets/person/barista2.jpg",
    description: "Passionate coffee enthusiast dengan 8 tahun pengalaman",
    socials: {
      instagram: {
        url: "https://instagram.com/budi.santoso",
        icon: Instagram,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
      twitter: {
        url: "https://twitter.com/budisantoso",
        icon: Twitter,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
    },
  },
  {
    id: 2,
    name: "Maya Sari",
    role: "Senior Barista",
    image: "/assets/person/barista.jpg",
    description: "Spesialis latte art dan coffee brewing techniques",
    socials: {
      instagram: {
        url: "https://instagram.com/maya.sari",
        icon: Instagram,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
      twitter: {
        url: "https://twitter.com/mayasari",
        icon: Twitter,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
    },
  },
  {
    id: 3,
    name: "Rizki Pratama",
    role: "Barista",
    image: "/assets/person/barista3.jpg",
    description: "Expert dalam cold brew dan specialty coffee",
    socials: {
      instagram: {
        url: "https://instagram.com/rizki.pratama",
        icon: Instagram,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
      twitter: {
        url: "https://twitter.com/rizkipratama",
        icon: Twitter,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
    },
  },
  {
    id: 4,
    name: "Sinta Dewi",
    role: "Store Manager",
    image: "/assets/person/barista4.jpg",
    description: "Memastikan pelayanan terbaik untuk setiap pelanggan",
    socials: {
      instagram: {
        url: "https://instagram.com/sinta.dewi",
        icon: Instagram,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
      twitter: {
        url: "https://twitter.com/sintadewi",
        icon: Twitter,
        colorClass: "text-amber-600 hover:text-amber-900",
      },
    },
  },
];
