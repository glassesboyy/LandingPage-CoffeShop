"use client";

import { motion } from "motion/react";

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export function HoverScale({
  children,
  scale = 1.05,
  duration = 0.3,
  className = "",
}: HoverScaleProps) {
  const variants = {
    hover: {
      scale,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div whileHover="hover" variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
