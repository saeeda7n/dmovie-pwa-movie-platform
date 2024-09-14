"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { useCarousel } from "@/components/carousel/carouselContext";

export function CarouselNavigator() {
 const { total, setActive, active } = useCarousel();
 const { scrollY } = useScroll();
 const opacity = useTransform(scrollY, [500, 600], [1, 0]);
 return (
  <motion.div
   style={{ opacity }}
   className="absolute bottom-0 z-30 flex w-full justify-center"
  >
   <div className="flex h-16 w-full max-w-xl items-center justify-center gap-2 px-5">
    {[...new Array(total)].map((_, idx) => (
     <button
      key={idx}
      onClick={() => setActive(idx)}
      className={cn(
       "relative h-1 w-16 rounded-md bg-gray-50 opacity-30 transition duration-300 after:absolute after:-inset-x-1 after:-inset-y-4 hover:opacity-80",
       {
        "h-1.5 opacity-100": idx === active,
       },
      )}
     />
    ))}
   </div>
  </motion.div>
 );
}
