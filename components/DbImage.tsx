import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const DbImage = ({ src, className, ...props }: ImageProps) => {
 return (
  <Image
   draggable="false"
   src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/original/${src}`}
   className={cn("object-cover object-center", className)}
   {...props}
  />
 );
};

export default DbImage;
