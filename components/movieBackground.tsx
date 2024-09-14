import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const images = [
 "/assets/images/section-background.webp",
 "/assets/images/section-background-2.webp",
];

export function MovieBackground({
 imageIndex,
 className,
 style,
 ...props
}: HTMLAttributes<HTMLDivElement> & { imageIndex?: 0 | 1 }) {
 return (
  <div
   style={{
    ...style,
    backgroundImage: `url("${images[imageIndex || 0]}")`,
   }}
   className={cn("absolute inset-0 opacity-10", className)}
   {...props}
  />
 );
}
