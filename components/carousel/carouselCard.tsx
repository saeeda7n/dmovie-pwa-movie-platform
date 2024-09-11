import React from "react";
import { CarouselBackground } from "@/components/carousel/carouselBackground";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

export function CarouselCard({
 item: { backdrop_path, poster_path, title, id, overview, release_date },
}: {
 item: Movie;
}) {
 return (
  <React.Fragment>
   <CarouselBackground
    background={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${backdrop_path}`}
   />
   <div className="absolute inset-0 flex bg-gradient-to-b from-black/20 via-black/70 to-black pb-16">
    <div className="container z-10 flex items-end gap-5">
     <div className="group relative flex aspect-[9/13] w-80 shrink-0 select-none items-center justify-center xl:w-96">
      <Image
       draggable="false"
       width={440}
       height={680}
       src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${poster_path}`}
       alt={title}
       className="h-full w-full rounded-lg bg-zinc-800 object-cover object-center"
      />
      <button className="absolute flex size-20 items-center justify-center rounded-[45%] bg-gray-50/70 text-gray-950 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
       <PlayIcon className="size-8 fill-gray-950" />
      </button>
     </div>

     <div className="flex flex-col gap-5 py-5">
      <h2 className="line-clamp-3 font-schibsted-grotesk-font text-5xl font-bold xl:text-6xl">
       <Link href={`/movie/${id}/${title.toLowerCase().replaceAll(" ", "-")}`}>
        {title}
       </Link>
       <span className="ms-1 text-3xl font-light text-zinc-500 xl:text-5xl">
        ({new Date(release_date).getFullYear()})
       </span>
      </h2>
      <p className="line-clamp-5 max-w-5xl text-sm text-gray-100/50 xl:text-base">
       {overview}
      </p>
     </div>
    </div>
   </div>
  </React.Fragment>
 );
}
