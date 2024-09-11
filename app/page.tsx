import React, { Suspense } from "react";
import { Header } from "@/components/header";
import { Carousel } from "@/components/carousel";
import {
 getPopular,
 getRecentMovies,
 getThisWeekTrending,
 getTopRated,
} from "@/server/actions/movieDB";
import { LoadingState, VideoSection } from "@/components/videoSection";

export default async function Home() {
 return (
  <main className="min-h-screen selection:bg-gray-50 selection:text-gray-900">
   <Carousel />
   <section className="min-h-screen space-y-12 py-16">
    <Suspense fallback={<LoadingState />}>
     <VideoSection
      title="Now Playing"
      desc="A list of movies that are currently in theatres."
      query={getRecentMovies}
     />
    </Suspense>
    <Suspense fallback={<LoadingState />}>
     <VideoSection
      title="Trending"
      desc="A list of trending movies on TMDB."
      query={getThisWeekTrending}
     />
    </Suspense>

    <Suspense fallback={<LoadingState />}>
     <VideoSection
      title="Popular"
      desc="A list of movies ordered by popularity."
      query={getPopular}
     />
    </Suspense>

    <Suspense fallback={<LoadingState />}>
     <VideoSection
      title="Top Rated"
      desc="A list of movies ordered by rating."
      query={getTopRated}
     />
    </Suspense>
   </section>
  </main>
 );
}
