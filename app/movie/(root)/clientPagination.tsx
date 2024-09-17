"use client";
import { Pagination } from "@nextui-org/react";
import React from "react";
import { useCreateURL } from "@/hooks/useCreateURL";
import { useRouter } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

export function ClientPagination({
 total,
 current,
}: {
 current: number;
 total: number;
}) {
 const createURL = useCreateURL("page");
 const router = useRouter();
 const lenis = useLenis();

 return (
  <div className="container flex justify-center">
   <Pagination
    showControls
    total={total > 500 ? 500 : total}
    initialPage={current}
    onChange={(page) => {
     router.replace(createURL(page));
     lenis?.scrollTo(0);
    }}
   />
  </div>
 );
}
