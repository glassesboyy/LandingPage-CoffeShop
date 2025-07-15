import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type SocialMedia = {
  id: number;
  name: string;
  icon: LucideIcon;
  url: string;
  colorClass?: string; // opsional, untuk button color
};

export const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: "Instagram",
    icon: Instagram,
    url: "#",
    colorClass: "bg-pink-600 hover:bg-pink-700",
  },
  {
    id: 2,
    name: "Facebook",
    icon: Facebook,
    url: "#",
    colorClass: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 3,
    name: "Twitter",
    icon: Twitter,
    url: "#",
    colorClass: "bg-black hover:bg-neutral-800",
  },
  {
    id: 4,
    name: "YouTube",
    icon: Youtube,
    url: "#",
    colorClass: "bg-red-600 hover:bg-red-700",
  },
];
