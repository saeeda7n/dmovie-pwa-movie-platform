"use client";
import React, { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import { useCarousel } from "@/components/carousel/carouselContext";

const variants: Variants = {
 active: () => ({
  opacity: 1,
  transition: { duration: 1 },
 }),
 deActive: () => ({
  opacity: 0,
  transition: { duration: 1 },
 }),
};

export function CarouselItem({
 children,
 index,
}: { index: number } & PropsWithChildren) {
 const { active } = useCarousel();
 return (
  <motion.div
   initial={false}
   variants={variants}
   animate={active === index ? "active" : "deActive"}
   style={{ zIndex: active === index ? 10 : "auto" }}
   className="absolute inset-0 isolate bg-zinc-900"
  >
   {children}
  </motion.div>
 );
}
