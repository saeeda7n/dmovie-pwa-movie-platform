import React from "react";
import { CarouselBackground } from "@/components/carousel/carouselBackground";

const loading = () => {
 return (
  <div className="">
   <div className="relative min-h-screen overflow-hidden bg-zinc-950">
    <CarouselBackground />
    <div className="absolute inset-0 overflow-hidden">
     <div className="absolute inset-0 flex bg-gradient-to-b from-black/20 via-black/70 to-black pb-16">
      <div className="container z-10 flex items-end gap-5">
       <div className="aspect-[9/13] w-80 shrink-0 select-none rounded-lg bg-zinc-800 object-cover object-center xl:w-96" />

       <div className="flex animate-pulse flex-col gap-5 py-5">
        <div className="h-11 w-72 rounded-md bg-zinc-900"></div>
        <div className="-mt-4 h-3 w-40 rounded-md bg-zinc-900"></div>
        <div className="flex flex-wrap gap-2">
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-32 rounded-md bg-zinc-900" />
         <div className="h-5 w-44 rounded-md bg-zinc-900" />
         <div className="h-5 w-36 rounded-md bg-zinc-900" />
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-28 rounded-md bg-zinc-900" />
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-28 rounded-md bg-zinc-900" />
         <div className="h-5 w-28 rounded-md bg-zinc-900" />
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-36 rounded-md bg-zinc-900" />
         <div className="h-5 w-36 rounded-md bg-zinc-900" />
         <div className="h-5 w-16 rounded-md bg-zinc-900" />
         <div className="h-5 w-44 rounded-md bg-zinc-900" />
         <div className="h-5 w-36 rounded-md bg-zinc-900" />
        </div>
        <div className="flex flex-wrap gap-2">
         <div className="h-4 w-16 rounded-md bg-zinc-900" />
         <div className="h-4 w-8 rounded-md bg-zinc-900" />
         <div className="h-4 w-12 rounded-md bg-zinc-900" />
         <div className="h-4 w-24 rounded-md bg-zinc-900" />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default loading;
