import { z } from "zod";

export const discoverMoviesQuerySchema = z.object({
 page: z.coerce.number().min(1).max(500).default(1),
 with_genres: z.string().or(z.undefined()),
 with_original_language: z.string().or(z.undefined()),
 with_origin_country: z.string().or(z.undefined()),
 "primary_release_date.gte": z.string().or(z.undefined()),
 "primary_release_date.lte": z.string().or(z.undefined()),
});

export type DiscoverMoviesQueryProps = z.infer<
 typeof discoverMoviesQuerySchema
>;
