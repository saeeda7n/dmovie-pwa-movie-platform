import React, { Suspense } from "react";
import {
 getMovie,
 getMovieRecommendations,
 getMovieSimilar,
} from "@/server/actions/movieDB";
import { CarouselBackground } from "@/components/carousel/carouselBackground";
import DbImage from "@/components/DbImage";
import Link from "next/link";
import { DotIcon } from "lucide-react";
import { formatDuration, intervalToDuration } from "date-fns";
import { CastSlider } from "@/components/castSlider";
import ContentWrapper from "@/components/contentWrapper";
import { SliderLoader, SlidingSection } from "@/components/slidingSection";
import { SliderClient } from "@/components/slidingSection/sliderClient";

function Genre({ genres }: { genres: Genre[] }) {
 return (
  <div className="">
   <ul className="flex">
    {genres.map((genre, index, array) => (
     <li>
      {index > 0 && index < array.length && `, `}
      <Link href="#">{genre.name}</Link>
     </li>
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
  runtime,
  poster_path,
  backdrop_path,
  genres,
  title,
  overview,
  release_date,
  keywords,
  credits,
  tagline,
  ...props
 } = await getMovie<WithGenre & WithKeywords & WithCredits>(id, [
  "similar",
  "recommendations",
  "credits",
  "videos",
  "keywords",
 ]);

 const markedCrew = credits.crew
  .filter((value) =>
   [
    "Screenplay",
    "Director",
    "Novel",
    "Writer",
    "Characters",
    "Story",
   ].includes(value.job),
  )
  .sort((a, b) => (a.job > b.job ? 1 : -1));

 const duration = intervalToDuration(
  { start: 0, end: runtime * 1000 * 60 },
  {},
 );
 const formatted = formatDuration(duration, { format: ["hours", "minutes"] });
 return (
  <div>
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
        <p className="-mb-5 text-xs font-medium text-gray-400">{tagline}</p>

        <h2 className="line-clamp-3 font-schibsted-grotesk-font text-5xl font-bold xl:text-6xl">
         {title}
        </h2>

        <div className="flex flex-wrap items-center">
         <span>{release_date}</span>
         <DotIcon />
         <Genre genres={genres} />
         <DotIcon />
         <span>{formatted}</span>
        </div>
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
       </div>
      </div>
     </div>
    </div>
   </div>

   <ContentWrapper>
    <section>
     <div className={"container flex gap-5"}>
      <CastSlider casts={credits.cast} />
     </div>
    </section>

    <section>
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Recommendations"
        desc="A list of recommendations movies."
        query={() => getMovieRecommendations(+id)}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>

    <section>
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Similar"
        desc="A list of similar movies."
        query={() => getMovieSimilar(+id)}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>
   </ContentWrapper>
  </div>
 );
};

export default SingleMoviePage;
