import React from "react";
import Link from "next/link";
import { PlayIcon } from "lucide-react";
import DbImage from "@/components/DbImage";
import { PlayTrailerButton } from "@/components/trailerDialog";

const MovieCard = ({ movie }: { movie: Movie }) => {
 return (
  <div className="group relative flex shrink-0 select-none flex-col items-center justify-center gap-2">
   <div className="relative flex items-center justify-center">
    <DbImage
     draggable="false"
     alt={movie.title}
     width={460}
     height={680}
     src={`${movie.poster_path}`}
     className="aspect-[9/13] !w-56 rounded-lg bg-zinc-900 object-cover object-center"
    />
    <PlayTrailerButton
     mediaId={movie.id}
     mediaType="movie"
     className="absolute flex size-16 items-center justify-center rounded-[45%] bg-gray-50/70 text-gray-950 opacity-0 backdrop-blur transition-all duration-300 hover:size-full hover:rounded-md group-hover:opacity-100"
    >
     <PlayIcon className="size-7 fill-gray-950" />
    </PlayTrailerButton>
   </div>
   <div className="flex w-full flex-col">
    <Link
     href={`/movie/${movie.id}/${movie.title.toSlug()}`}
     className="font-semibold"
    >
     {movie.title}
    </Link>
    <span className="text-xs text-zinc-500">
     {new Date(movie.release_date).getFullYear()}
    </span>
   </div>
  </div>
 );
};

export default MovieCard;
