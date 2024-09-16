import React from "react";
import ContentWrapper from "@/components/contentWrapper";
import { discoverMovies } from "@/server/actions/movieDB";
import MoviesClientPage from "@/app/movie/(root)/moviesClientPage";
import { Pagination } from "@/app/movie/(root)/pagination";
import { Filters } from "@/app/movie/(root)/filters";

const MoviesPage = async ({ searchParams: { page } }: any) => {
 page = page || 1;
 const result = await discoverMovies({ page });
 return (
  <ContentWrapper>
   <Filters />
   <MoviesClientPage movies={result} />
   <Pagination
    currentPage={+page}
    totalPages={result.total_pages}
    hasNext={result.total_pages > result.page}
    hasPrev={result.page > 1}
    last={result.total_pages}
   />
  </ContentWrapper>
 );
};

export default MoviesPage;
