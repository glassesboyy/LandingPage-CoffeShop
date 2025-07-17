"use client";

import { HoverScale } from "@/components/animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <HoverScale scale={1.02} className={className}>
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-md">
          <CardContent className="p-0 h-full flex flex-col">
            {children}
          </CardContent>
        </Card>
      </HoverScale>
    </motion.div>
  );
}

interface AnimatedBadgeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  icon?: React.ReactNode;
}

export function AnimatedBadge({
  children,
  delay = 0,
  className = "",
  icon,
}: AnimatedBadgeProps) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <Badge
        className={`mb-1 pl-1 pr-2.5 bg-amber-200 text-amber-900 border-amber-900 ${className}`}
        icon={icon}
      >
        {children}
      </Badge>
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  asChild?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function AnimatedButton({
  children,
  delay = 0,
  className = "",
  asChild = false,
  variant = "default",
  size = "default",
}: AnimatedButtonProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <HoverScale scale={1.02}>
        <Button
          asChild={asChild}
          variant={variant}
          size={size}
          className={className}
        >
          {children}
        </Button>
      </HoverScale>
    </motion.div>
  );
}
