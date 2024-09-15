"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import MovieCard from "@/components/cards/movieCard";
import TvShowCard from "@/components/cards/tvShowCard";

export function SliderClient({
 items,
 type,
}: {
 items: Array<Movie | TvShow>;
 type: MediaType;
}) {
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
   {items.map((value) => (
    <SwiperSlide key={value.id} className="ms-5 !w-48 first:ms-0 xl:!w-56">
     {(value.media_type = type) === "movie" ? (
      <MovieCard movie={value} />
     ) : (
      <TvShowCard show={value} />
     )}
    </SwiperSlide>
   ))}
  </Swiper>
 );
}
