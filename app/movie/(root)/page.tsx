import React from "react";
import ContentWrapper from "@/components/contentWrapper";
import { discoverMovies } from "@/server/actions/movieDB";
import MoviesClientPage from "@/app/movie/(root)/moviesClientPage";
import { Pagination } from "@/app/movie/(root)/pagination";
import { Filters } from "@/app/movie/(root)/filters";
import {
 DiscoverMoviesQueryProps,
 discoverMoviesQuerySchema,
} from "@/schemas/discoverMoviesQuerySchema";

const MoviesPage = async ({
 searchParams,
}: {
 searchParams: DiscoverMoviesQueryProps;
}) => {
 const query = await discoverMoviesQuerySchema.parseAsync(searchParams);
 const result = await discoverMovies(query);

 return (
  <ContentWrapper>
   <Filters />
   <MoviesClientPage movies={result} />
   <Pagination
    currentPage={query.page}
    totalPages={result.total_pages}
    hasNext={result.total_pages > result.page}
    hasPrev={result.page > 1}
    last={result.total_pages}
   />
  </ContentWrapper>
 );
};

export default MoviesPage;
