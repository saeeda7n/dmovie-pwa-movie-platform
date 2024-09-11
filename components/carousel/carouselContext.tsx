"use client";
import React, {
 createContext,
 PropsWithChildren,
 useContext,
 useEffect,
 useState,
} from "react";

export type ContextProps = {
 total: number;
 active: number;
 next: () => void;
 previous: () => void;
 setActive: (index: number) => void;
};

const carouselContext = createContext<ContextProps | null>(null);
export const useCarousel = () => useContext(carouselContext)!;

type CarouselContextProps = {
 items: any;
 duration?: number;
} & PropsWithChildren;

export function CarouselContext({
 items,
 children,
 duration,
}: CarouselContextProps) {
 const { length } = items;
 const [active, setActive] = useState(0);
 duration = duration || 8000;

 const next = () => setActive((p) => (p + 1) % length);
 const previous = () => setActive((p) => (p - 1) % length);

 const autoCarousel = () => {
  return setTimeout(() => next(), duration);
 };

 useEffect(() => {
  const clear = autoCarousel();
  return () => clearTimeout(clear);
 }, [active]);

 return (
  <carouselContext.Provider
   value={{
    next,
    previous,
    active,
    setActive: (index) => setActive(index % length),
    total: length,
   }}
  >
   {children}
  </carouselContext.Provider>
 );
}
