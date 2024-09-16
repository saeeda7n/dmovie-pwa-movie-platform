"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import TrailerDialog from "@/components/trailerDialog";
import Lenis from "@/app/lenis";
import ClientContext from "@/components/clientContext";

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   refetchOnMount: false,
   refetchOnWindowFocus: false,
  },
 },
});

export function ClientProviders({ children }: PropsWithChildren) {
 return (
  <QueryClientProvider client={queryClient}>
   <TrailerDialog>
    <Lenis>{children}</Lenis>
   </TrailerDialog>
  </QueryClientProvider>
 );
}

declare global {
 interface String {
  toSlug(): string;
 }
}

String.prototype.toSlug = function (this: string) {
 return this.toLowerCase().replaceAll(" ", "-");
};
