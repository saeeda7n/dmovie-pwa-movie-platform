"use client";
import {
 motion,
 useMotionTemplate,
 useScroll,
 useTransform,
} from "framer-motion";
import React from "react";
import DbImage from "@/components/DbImage";

export function CarouselBackground({ background }: { background?: string }) {
 const { scrollY } = useScroll();
 const y = useTransform(scrollY, [0, 700], [0, 400]);
 const blur = useTransform(scrollY, [400, 700], [0, 16]);
 const filter = useMotionTemplate`blur(${blur}px)`;
 return (
  <motion.div className="absolute inset-0 select-none" style={{ y, filter }}>
   {background && (
    <DbImage
     draggable="false"
     className="h-full w-full object-cover object-center"
     fill
     src={background}
     alt={"Background"}
    />
   )}
   <div
    className="absolute inset-0 z-20"
    style={{ backgroundImage: "url('/assets/images/noise.png')" }}
   />
  </motion.div>
 );
}
