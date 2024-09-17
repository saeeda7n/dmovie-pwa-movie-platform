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

declare type MovieDetail = Movie & {
 budget: number;
 homepage: string;
 imdb_id: string;
 origin_country: string[];
 production_companies: ProductionCompany[];
 production_countries: ProductionCountry[];
 revenue: number;
 runtime: number;
 spoken_languages: SpokenLanguage[];
 status: string;
 tagline: string;
 video: boolean;
};

declare type TvShow = Entity & {
 name: string;
 original_name: string;
 media_type: "tv";
 adult: boolean;
 first_air_date: string;
 origin_country: Array<string>;
};

declare type MediaType = "tv" | "movie";

declare type Genre = {
 id: number;
 name: string;
};

declare type WithName = {
 name: string;
};

declare type WithSimilar = {
 similar: PaginatedResult<Movie>;
};

declare type WithRecommendations = {
 recommendations: PaginatedResult<Movie>;
};

declare type WithCredits = {
 credits: Credits;
};

declare type WithKeywords = {
 keywords: Keywords;
};

declare type WithVideos = {
 videos: Videos;
};

declare type WithGenre = {
 genres: Array<Genre>;
};

declare type WithMediaType = {
 media_type: MediaType;
};

declare interface ProductionCompany {
 id: number;
 logo_path?: string;
 name: string;
 origin_country: string;
}

declare interface ProductionCountry {
 iso_3166_1: string;
 name: string;
}

declare interface SpokenLanguage {
 english_name: string;
 iso_639_1: string;
 name: string;
}

declare interface Credits {
 cast: Cast[];
 crew: Crew[];
}

declare interface Cast {
 adult: boolean;
 gender: number;
 id: number;
 known_for_department: string;
 name: string;
 original_name: string;
 popularity: number;
 profile_path?: string;
 cast_id: number;
 character: string;
 credit_id: string;
 order: number;
}

declare interface Crew {
 adult: boolean;
 gender: number;
 id: number;
 known_for_department: string;
 name: string;
 original_name: string;
 popularity: number;
 profile_path?: string;
 credit_id: string;
 department: string;
 job: string;
}

declare interface Videos {
 results: Result3[];
}

declare interface Result3 {
 iso_639_1: string;
 iso_3166_1: string;
 name: string;
 key: string;
 site: string;
 size: number;
 type: string;
 official: boolean;
 published_at: string;
 id: string;
}

declare interface Keywords {
 keywords: Keyword[];
}

declare interface Keyword {
 id: number;
 name: string;
}

declare type MovieVideos = {
 id: number;
 results: Array<{
  name: string;
  key: string;
  site: "YouTube";
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
 }>;
};

declare type Country = {
 iso_3166_1: string;
 english_name: string;
 native_name: string;
};
