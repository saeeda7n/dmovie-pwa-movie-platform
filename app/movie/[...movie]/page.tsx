import React, { PropsWithChildren } from "react";
import { getMovie } from "@/server/actions/movieDB";
import { CarouselBackground } from "@/components/carousel/carouselBackground";
import DbImage from "@/components/DbImage";
import AClient from "@/app/movie/[...movie]/aClient";
import Link from "next/link";

function Genre({ genres }: { genres: Genre[] }) {
 return (
  <div className="">
   <ul className="flex gap-1 text-xs font-medium">
    {genres.map((genre) => (
     <Chip tag="li" key={genre.id}>
      <a href="#">{genre.name}</a>
     </Chip>
    ))}
   </ul>
  </div>
 );
}

const SingleMoviePage = async ({
 params: { movie },
}: {
 params: { movie: [string, string] };
}) => {
 const [id] = movie;
 const {
  poster_path,
  backdrop_path,
  genres,
  title,
  overview,
  release_date,
  keywords,
  credits,
  tagline,
  ...rest
 } = await getMovie<WithGenre & WithKeywords & WithCredits>(id, [
  "similar",
  "recommendations",
  "credits",
  "videos",
  "keywords",
 ]);

 const markedCrew = credits.crew
  .filter((value) =>
   ["Screenplay", "Director", "Novel", "Writer"].includes(value.job),
  )
  .sort((a, b) => (a.job > b.job ? 1 : -1));

 return (
  <div>
   <AClient
    t={{
     poster_path,
     backdrop_path,
     genres,
     title,
     overview,
     release_date,
     keywords,
     credits,
     ...rest,
    }}
   />
   <div className="relative min-h-[calc(max(100vh,48rem))] overflow-hidden bg-zinc-950">
    <div className="absolute inset-0 overflow-hidden">
     <CarouselBackground background={`${backdrop_path}`} />
     <div className="absolute inset-0 flex bg-gradient-to-b from-black/20 via-black/70 to-black pb-16">
      <div className="container z-10 flex items-end gap-5">
       <DbImage
        draggable="false"
        width={440}
        height={680}
        src={`${poster_path}`}
        alt={title}
        className="aspect-[9/13] w-80 shrink-0 select-none rounded-lg bg-zinc-800 object-cover object-center xl:w-96"
       />

       <div className="flex flex-col gap-5 py-5">
        <h2 className="line-clamp-3 font-schibsted-grotesk-font text-5xl font-bold xl:text-6xl">
         {title}
         <span className="ms-1 text-3xl font-light text-zinc-500 xl:text-5xl">
          ({new Date(release_date).getFullYear()})
         </span>
        </h2>
        <p className="-mt-4 text-xs font-medium text-gray-400">{tagline}</p>
        <p className="line-clamp-5 max-w-5xl text-sm text-gray-100/50 xl:text-base">
         {overview}
        </p>

        <div className="grid grid-cols-3 gap-5">
         {markedCrew.map((value) => (
          <div key={value.id + value.job} className="flex flex-col">
           <Link href={"/"} className="text-gray-50">
            <strong>{value.name}</strong>
           </Link>
           <span className="text-sm font-medium text-zinc-500">
            {value.job}
           </span>
          </div>
         ))}
        </div>

        <Genre genres={genres} />
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="min-h-screen">
    <div className="container">Hello World</div>
   </div>
  </div>
 );
};

export default SingleMoviePage;

function Chip({ tag, children }: { tag: string } & PropsWithChildren) {
 const As = tag as keyof JSX.IntrinsicElements;
 return (
  <As className="rounded-md bg-gray-50 px-2 py-0.5 text-gray-900 transition duration-300 hover:opacity-50">
   {children}
  </As>
 );
}
