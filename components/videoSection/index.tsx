import React from "react";
import { VideoSectionClient } from "@/components/videoSection/videoSectionClient";
import { Clapperboard } from "lucide-react";

type VideoSectionProps = {
 query: () => Promise<PaginatedResult<Movie>>;
 title: string;
 desc?: string;
};

export const VideoSection = async ({
 query,
 desc,
 title,
}: VideoSectionProps) => {
 const { results } = await query();
 return (
  <div className="container flex gap-5">
   <div className="w-full">
    <div className="flex items-center gap-3">
     <Clapperboard className="size-10 shrink-0" />
     <div>
      <h2 className="text-lg font-bold">{title}</h2>
      {desc && <p className="text-sm font-medium text-zinc-500">{desc}</p>}
     </div>
    </div>
    <div className="mt-5 w-full">
     <VideoSectionClient list={results} />
    </div>
   </div>
  </div>
 );
};

export function LoadingState() {
 return (
  <div className="container flex gap-5">
   <div className="w-full">
    <div className="flex items-center gap-3">
     <Clapperboard className="size-10 shrink-0" />
     <div className="animate-pulse space-y-1">
      <div className="h-6 w-28 rounded-md bg-zinc-900" />
      <div className="h-4 w-44 rounded-md bg-zinc-900" />
     </div>
    </div>

    <div className="flex gap-5">
     {[...new Array(8)].map((_, index) => (
      <div key={index}>
       <div className="mt-5 w-full flex-shrink-0">
        <div className="aspect-[9/13] w-56 shrink-0 animate-pulse rounded-md bg-zinc-900"></div>
       </div>
       <div className="mt-2 h-6 w-44 animate-pulse rounded-md bg-zinc-900"></div>
       <div className="mt-1 h-3 w-16 animate-pulse rounded-md bg-zinc-900"></div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}
