import React from "react";
import ContentWrapper from "@/components/contentWrapper";
import { discoverMovies } from "@/server/actions/movieDB";
import MoviesClientPage from "@/app/movie/(root)/moviesClientPage";
import { Filters } from "@/app/movie/(root)/filters";
import {
 DiscoverMoviesQueryProps,
 discoverMoviesQuerySchema,
} from "@/schemas/discoverMoviesQuerySchema";
import { ClientPagination } from "@/app/movie/(root)/clientPagination";

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
   <ClientPagination total={result.total_pages} current={result.page} />
  </ContentWrapper>
 );
};

export default MoviesPage;
