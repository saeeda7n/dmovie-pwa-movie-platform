"use client";
import React from "react";
import MovieCard from "@/components/cards/movieCard";
import { discoverMovies } from "@/server/actions/movieDB";

const MoviesClientPage = ({
 movies,
}: {
 movies: Awaited<ReturnType<typeof discoverMovies>>;
}) => {
 return (
  <div className="container grid grid-cols-2 items-start gap-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:gap-5">
   {movies?.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
  </div>
 );
};

export default MoviesClientPage;
