import React, { Suspense } from "react";
import { Carousel } from "@/components/carousel";
import {
 getPopular,
 getRecentMovies,
 getThisWeekTrending,
 getTopRated,
 getTvShowsAiringToday,
} from "@/server/actions/movieDB";
import { SliderLoader, SlidingSection } from "@/components/slidingSection";
import { SliderClient } from "@/components/slidingSection/sliderClient";
import { TvIcon } from "lucide-react";
import { MovieBackground } from "@/components/movieBackground";
import ContentWrapper from "@/components/contentWrapper";

export const revalidate = 10800;

export default async function Home() {
 return (
  <main className="min-h-screen overflow-x-hidden">
   <Carousel />
   <ContentWrapper>
    <section>
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Now Playing"
        desc="A list of movies that are currently in theatres."
        query={getRecentMovies}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>

    <section className="relative bg-violet-950/5 py-8">
     <MovieBackground imageIndex={0} />
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Trending"
        desc="A list of trending movies on TMDB."
        query={getThisWeekTrending}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>

    {/*/!*<Suspense fallback="Loading for now...."></Suspense>*!/*/}

    <section>
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Popular"
        desc="A list of movies ordered by popularity."
        query={getPopular}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>

    <section className="relative bg-violet-950/5 py-8">
     <MovieBackground imageIndex={1} />
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<TvShow>
        icon={<TvIcon className="size-10 shrink-0" />}
        title="Updated Tv Shows"
        desc="A list of TV shows airing today."
        query={getTvShowsAiringToday}
       >
        {(items) => <SliderClient items={items} type="tv" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>

    <section>
     <div className="container flex gap-5">
      <Suspense fallback={<SliderLoader />}>
       <SlidingSection<Movie>
        title="Top Rated"
        desc="A list of movies ordered by rating."
        query={getTopRated}
       >
        {(items) => <SliderClient items={items} type="movie" />}
       </SlidingSection>
      </Suspense>
     </div>
    </section>
   </ContentWrapper>
  </main>
 );
}
