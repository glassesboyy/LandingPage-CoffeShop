"use client";

import { motion } from "motion/react";

interface HoverFloatProps {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  className?: string;
}

export function HoverFloat({
  children,
  y = -5,
  duration = 0.3,
  className = "",
}: HoverFloatProps) {
  const variants = {
    hover: {
      y,
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
