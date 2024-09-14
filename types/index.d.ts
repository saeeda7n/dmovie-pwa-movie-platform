declare type PaginatedResult<T> = {
 results: T[];
 page: number;
 total_pages: number;
 total_results: number;
};

type Entity = {
 backdrop_path: string;
 id: number;
 overview: string;
 poster_path: string;
 media_type: MediaType;
 adult: boolean;
 original_language: string;
 genre_ids: Array<number>;
 popularity: number;
 vote_average: number;
 vote_count: number;
};

declare type Movie = Entity & {
 original_title: string;
 release_date: string;
 title: string;
 media_type: "movie";
};

type TvShow = Entity & {
 name: string;
 original_name: string;
 media_type: "tv";
 adult: boolean;
 first_air_date: string;
 origin_country: Array<string>;
};

type MediaType = "tv" | "movie";

type Genre = {
 id: number;
 name: string;
};

type WithName = {
 name: string;
};

type WithGenre = {
 genres: Array<Genre>;
};

type WithMediaType = {
 media_type: MediaType;
};
