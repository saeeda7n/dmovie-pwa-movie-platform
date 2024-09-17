import React from "react";
import { CarouselItem } from "@/components/carousel/carouselItem";
import { CarouselNavigator } from "@/components/carousel/carouselNavigator";
import { CarouselContext } from "@/components/carousel/carouselContext";
import { CarouselCard } from "@/components/carousel/carouselCard";
import { getTrending } from "@/server/actions/movieDB";

export async function Carousel() {
 const trending = await getTrending("day");
 const items = trending.results;

 return (
  <CarouselContext items={items}>
   <div className="relative flex min-h-[max(100vh,48rem)] flex-col overflow-hidden">
    {items
     .filter(({ media_type }) => ["tv", "movie"].includes(media_type))
     .map((value, index) => (
      <CarouselItem key={value.id} index={index}>
       <CarouselCard item={value} />
      </CarouselItem>
     ))}
    <CarouselNavigator />
   </div>
  </CarouselContext>
 );
}
