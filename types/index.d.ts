declare type PaginatedResult<T> = {
 results: T[];
 page: number;
 total_pages: number;
 total_results: number;
};

declare type Movie = {
 adult: boolean;
 backdrop_path: string;
 genre_ids: number[];
 id: number;
 original_language: string;
 original_title: string;
 overview: string;
 popularity: number;
 poster_path: string;
 release_date: string;
 title: string;
 video: boolean;
 vote_average: number;
 vote_count: number;
};

type WithGenre = {
 genres: Array<Genre>;
};

type Genre = {
 id: number;
 name: string;
};
