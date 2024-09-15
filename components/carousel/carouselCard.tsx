import React from "react";
import { CarouselBackground } from "@/components/carousel/carouselBackground";
import { PlayIcon } from "lucide-react";
import Link from "next/link";
import DbImage from "@/components/DbImage";
import { PlayTrailerButton } from "@/components/trailerDialog";

export function CarouselCard({ item }: { item: Movie | TvShow }) {
 const { id, overview, backdrop_path, poster_path } = item;
 const Title = () =>
  item.media_type === "tv" ? (
   <>
    <Link href={`/tv/${id}/${item.name.toSlug()}`}>{item.name}</Link>
    <span className="ms-1 text-3xl font-light text-zinc-500 xl:text-5xl">
     ({new Date(item.first_air_date).getFullYear()})
    </span>
   </>
  ) : (
   <>
    <Link href={`/movie/${id}/${item.title.toSlug()}`}>{item.title}</Link>
    <span className="ms-1 text-3xl font-light text-zinc-500 xl:text-5xl">
     ({new Date(item.release_date).getFullYear()})
    </span>
   </>
  );

 const alt = item.media_type === "tv" ? item.name : item.title;

 return (
  <React.Fragment>
   <CarouselBackground background={`${backdrop_path}`} />
   <div className="absolute inset-0 flex bg-gradient-to-b from-black/20 via-black/70 to-black pb-16">
    <div className="container z-10 flex items-end gap-5">
     <div className="group relative flex aspect-[9/13] w-80 shrink-0 select-none items-center justify-center xl:w-96">
      <DbImage
       draggable="false"
       width={440}
       height={680}
       src={`${poster_path}`}
       alt={alt}
       className="h-full w-full rounded-lg bg-zinc-800 object-cover object-center"
      />
      <PlayTrailerButton
       mediaId={id}
       mediaType={item.media_type}
       className="absolute flex size-20 items-center justify-center rounded-[45%] bg-gray-50/70 text-gray-950 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100"
      >
       <PlayIcon className="size-8 fill-gray-950" />
      </PlayTrailerButton>
     </div>

     <div className="flex flex-col gap-5 py-5">
      <h2 className="line-clamp-3 font-schibsted-grotesk-font text-5xl font-bold xl:text-6xl">
       <Title />
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
