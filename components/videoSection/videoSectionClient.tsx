"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { PlayIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";

export const VideoSectionClient = ({ list }: { list: Movie[] }) => {
 return (
  <Swiper
   slidesPerView="auto"
   freeMode={true}
   pagination={{
    clickable: true,
   }}
   modules={[FreeMode]}
   className="!overflow-visible"
  >
   {list.map((l: any) => (
    <SwiperSlide key={l.id} className="ms-5 !w-56 first:ms-0">
     <div className="group relative flex shrink-0 select-none flex-col items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
       <Image
        draggable="false"
        alt={l.title}
        width={460}
        height={680}
        src={`https://image.tmdb.org/t/p/original/${l.poster_path}`}
        className="aspect-[9/13] !w-56 rounded-lg bg-zinc-900 object-cover object-center"
       />
       <Link
        href="/public"
        className="absolute flex size-16 items-center justify-center rounded-[45%] bg-gray-50/70 text-gray-950 opacity-0 backdrop-blur transition-all duration-300 hover:size-full hover:rounded-md group-hover:opacity-100"
       >
        <PlayIcon className="size-7 fill-gray-950" />
       </Link>
      </div>
      <div className="flex w-full flex-col">
       <Link href={"/"} className="font-semibold">
        {l.title}
       </Link>
       <span className="text-xs text-zinc-500">
        {new Date(l.release_date).getFullYear()}
       </span>
      </div>
     </div>
    </SwiperSlide>
   ))}
  </Swiper>
 );
};
