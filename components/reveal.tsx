"use client";

import { motion } from "framer-motion";

import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Verzögerung in Sekunden (für gestaffelte Reihen). */
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header";
};

/**
 * Blendet den Inhalt beim Scrollen sanft von unten ein – einmalig.
 * Nutzung: <Reveal delay={0.1}> … </Reveal>
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
