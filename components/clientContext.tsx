"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { getGenres } from "@/server/actions/movieDB";

type ClientContextProps = {
 genres: Awaited<ReturnType<typeof getGenres>>;
};
const context = createContext<null | ClientContextProps>(null);

export const useClientContext = () => useContext(context)!;

const ClientContext = ({
 children,
 genres,
}: ClientContextProps & PropsWithChildren) => {
 return (
  <context.Provider
   value={{
    genres,
   }}
  >
   {children}
  </context.Provider>
 );
};

export default ClientContext;
