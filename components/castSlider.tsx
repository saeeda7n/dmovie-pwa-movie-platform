"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import React from "react";
import DbImage from "@/components/DbImage";
import { DramaIcon, UserRoundIcon } from "lucide-react";

export function CastSlider({ casts }: { casts: Cast[] }) {
 casts = casts.slice(0, 16);
 return (
  <div className="w-full">
   <div className="relative flex items-center gap-3">
    <DramaIcon className="size-10 shrink-0" />
    <div>
     <h2 className="text-lg font-bold">Top Billed Cast</h2>
    </div>
   </div>
   <div className="mt-5 w-full">
    <Swiper
     slidesPerView="auto"
     freeMode={true}
     pagination={{
      clickable: true,
     }}
     modules={[FreeMode]}
     className="!overflow-visible"
    >
     {casts.map((value) => (
      <SwiperSlide
       key={value.id}
       className="ms-3 !w-32 first:ms-0 xl:ms-5 xl:!w-44"
      >
       <PersonCard cast={value} />
      </SwiperSlide>
     ))}
    </Swiper>
   </div>
  </div>
 );
}

function PersonCard({ cast }: { cast: Cast }) {
 return (
  <div className="w-full select-none rounded-lg bg-zinc-950">
   <div className="flex aspect-[9/12] w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
    {cast.profile_path ? (
     <DbImage
      className="object-cover object-center"
      src={cast.profile_path}
      alt={cast.name}
      width={176}
      height={176}
     />
    ) : (
     <UserRoundIcon className="size-40" />
    )}
   </div>
   <div className="flex flex-col overflow-hidden px-2 py-2 xl:gap-1">
    <h4 className="truncate text-sm font-semibold">{cast.name}</h4>
    <p className="truncate text-xs font-medium">{cast.character}</p>
   </div>
  </div>
 );
}
