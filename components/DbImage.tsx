import React from "react";
import Image, { ImageProps } from "next/image";

const DbImage = ({ src, ...props }: ImageProps) => {
 return (
  <Image
   draggable="false"
   src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/original/${src}`}
   {...props}
  />
 );
};

export default DbImage;
