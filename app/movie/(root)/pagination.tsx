"use client";
import {
 ChevronLeftIcon,
 ChevronRightIcon,
 ChevronsLeft,
 ChevronsRightIcon,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
 totalPages: number;
 hasNext: boolean;
 hasPrev: boolean;
 currentPage: number;
 last: number;
};

export function Pagination({
 hasNext,
 hasPrev,
 totalPages,
 currentPage,
 last,
}: Props) {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 last = last > 500 ? 500 : last;

 function createURL(page: number): URL {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));
  return `${pathname}?${params.toString()}` as any;
 }

 return (
  <div className="mt-12 flex items-center justify-center">
   <nav
    className="isolate inline-flex gap-1 rounded-md shadow-sm"
    aria-label="Pagination"
   >
    <Link
     prefetch={false}
     href={createURL(1)}
     className={cn(
      "relative inline-flex items-center rounded-md rounded-r-md px-2 py-2 text-gray-50 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0",
      { "pointer-events-none opacity-50": !hasPrev },
     )}
    >
     <span className="sr-only">first</span>
     <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
    </Link>
    <Link
     prefetch={false}
     href={createURL(currentPage - 1)}
     className={cn(
      "relative inline-flex items-center rounded-md rounded-r-md px-2 py-2 text-gray-50 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0",
      { "pointer-events-none opacity-50": !hasPrev },
     )}
    >
     <span className="sr-only">Previous</span>
     <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    </Link>
    {[...new Array(totalPages > 10 ? 10 : totalPages)].map((_, index) => (
     <Link
      key={index}
      href={createURL(index + 1)}
      prefetch={false}
      aria-current="page"
      className={cn(
       "relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0",
       {
        "pointer-events-none bg-emerald-500 text-gray-50 hover:bg-emerald-600 hover:text-gray-50":
         currentPage === index + 1,
       },
      )}
     >
      {index + 1}
     </Link>
    ))}

    <Link
     prefetch={false}
     href={createURL(currentPage + 1)}
     className={cn(
      "relative inline-flex items-center rounded-md rounded-r-md px-2 py-2 text-gray-50 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0",
      { "pointer-events-none opacity-50": !hasNext },
     )}
    >
     <span className="sr-only">Next</span>
     <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    </Link>

    <Link
     prefetch={false}
     href={createURL(last)}
     className={cn(
      "relative inline-flex items-center rounded-md rounded-r-md px-2 py-2 text-gray-50 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0",
      { "pointer-events-none opacity-50": !hasNext },
     )}
    >
     <span className="sr-only">last</span>
     <ChevronsRightIcon className="h-5 w-5" aria-hidden="true" />
    </Link>
   </nav>
  </div>
 );
}
