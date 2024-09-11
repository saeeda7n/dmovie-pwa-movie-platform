"use server";
import { cache } from "react";
import { movieDbClient } from "@/lib/movieDbClient";

export const getPopular = cache(async () => {
 const response = await movieDbClient.get<PaginatedResult<Movie>>(
  "movie/popular",
  {
   params: { language: "en-US", page: 1 },
  },
 );

 return response.data;
});

export const getTopRated = cache(async () => {
 const response = await movieDbClient.get<PaginatedResult<Movie>>(
  "movie/top_rated",
  {
   params: { language: "en-US", page: 1 },
  },
 );

 return response.data;
});

export const getThisWeekTrending = cache(async () => {
 const response = await movieDbClient.get<PaginatedResult<Movie>>(
  "trending/movie/week",
  {
   params: { language: "en-US" },
  },
 );

 return response.data;
});
export const getTrending = cache(async (time: "day" | "week") => {
 const response = await movieDbClient.get<PaginatedResult<Movie>>(
  `trending/all/${time}`,
  {
   params: { language: "en-US" },
  },
 );

 return response.data;
});
export const getRecentMovies = cache(async () => {
 const response = await movieDbClient.get<PaginatedResult<Movie>>(
  `movie/now_playing`,
  {
   params: { language: "en-US" },
  },
 );

 return response.data;
});

export const getMovie = cache(
 async (
  id: string | number,
  appends: Array<"videos" | "images" | "recommendations" | "similar">,
 ) => {
  const response = await movieDbClient.get<Movie & WithGenre>(`movie/${id}`, {
   params: { language: "en-US", append_to_response: appends?.join(",") },
  });

  return response.data;
 },
);
