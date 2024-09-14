import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "lucide-react";

const TvShowCard = ({ show }: { show: TvShow }) => {
 return (
  <div className="group relative flex shrink-0 select-none flex-col items-center justify-center gap-2">
   <div className="relative flex items-center justify-center">
    <Image
     draggable="false"
     alt={show.name}
     width={460}
     height={680}
     src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
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
    <Link
     href={`/tv/${show.id}/${show.name.toSlug()}`}
     className="font-semibold"
    >
     {show.name}
    </Link>
    <span className="text-xs text-zinc-500">
     {new Date(show.first_air_date).getFullYear()}
    </span>
   </div>
  </div>
 );
};

export default TvShowCard;
