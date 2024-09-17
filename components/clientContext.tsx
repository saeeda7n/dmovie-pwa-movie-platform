"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import {
 getCountries,
 getGenres,
 getLanguages,
} from "@/server/actions/movieDB";

type ClientContextProps = {
 genres: Awaited<ReturnType<typeof getGenres>>;
 languages: Awaited<ReturnType<typeof getLanguages>>;
 countries: Awaited<ReturnType<typeof getCountries>>;
};
const context = createContext<null | ClientContextProps>(null);

export const useClientContext = () => useContext(context)!;

const ClientContext = ({
 children,
 genres,
 languages,
 countries,
}: ClientContextProps & PropsWithChildren) => {
 return (
  <context.Provider
   value={{
    genres,
    languages,
    countries,
   }}
  >
   {children}
  </context.Provider>
 );
};

export default ClientContext;
