"use client";
import React, { useRef, useState } from "react";
import {
 AnimatePresence,
 motion,
 useMotionTemplate,
 useScroll,
 useTransform,
} from "framer-motion";
import { SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { getGenres } from "@/server/actions/movieDB";

function Menu({ genres }: { genres: Awaited<ReturnType<typeof getGenres>> }) {
 const [selected, setSelected] = useState<null | {
  name: string;
  genres: Genre[] | null;
 }>(null);
 const menu = [
  { name: "Home", sub: null, href: "/" },
  {
   href: "/movie",
   name: "Movies",
   sub: genres.movieGenres.genres,
  },
  {
   href: "/tv",
   name: "Tv Shows",
   sub: genres.tvShowGenres.genres,
  },
 ];

 return (
  <div className="relative" onMouseLeave={() => setSelected(null)}>
   <ul className="flex gap-5 text-xs font-medium">
    {menu.map((value, index) => (
     <li
      onMouseOver={() => setSelected({ genres: value.sub, name: value.name })}
      key={value.name}
      className="cursor-pointer py-3"
     >
      {value.href ? <Link href={value.href}>{value.name}</Link> : value.name}
     </li>
    ))}
   </ul>
   <AnimatePresence initial={false}>
    {selected?.genres && (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-full w-[36rem] max-w-2xl overflow-hidden rounded-md bg-zinc-900 px-5 py-6 text-sm font-medium"
     >
      <AnimatePresence initial={false} mode="popLayout">
       <motion.ul
        key={selected.name}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="grid grid-cols-3 gap-3"
       >
        {selected.genres?.map((genre) => (
         <li key={genre.id} className="group flex items-center gap-2">
          <span className="size-1 bg-emerald-500 transition duration-300 group-hover:scale-150" />
          <Link href="">{genre.name}</Link>
         </li>
        ))}
       </motion.ul>
      </AnimatePresence>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 );
}

export function Header({
 genres,
}: {
 genres: Awaited<ReturnType<typeof getGenres>>;
}) {
 const target = useRef<HTMLHeadElement | null>(null);
 const { scrollY } = useScroll();
 const height = useTransform(scrollY, [0, 200], ["4.5rem", "3rem"]);
 const backgroundColor = useTransform(
  scrollY,
  [200, 600],
  ["#00000000", "#000000aa"],
 );
 const blur = useTransform(scrollY, [200, 600], [0, 16]);
 const backdropFilter = useMotionTemplate`blur(${blur}px)`;
 return (
  <motion.header
   ref={target}
   style={{ height, backgroundColor, backdropFilter }}
   className="fixed inset-x-0 top-0 z-50 flex h-16 items-center selection:bg-gray-50 selection:text-gray-800"
  >
   <div className="container flex items-center gap-10">
    <h1 className="text-lg font-bold">
     <Link href="/">DMovie</Link>
    </h1>

    <Menu genres={genres} />

    <div className="ms-auto flex items-center gap-5">
     <button>
      <SearchIcon className="size-5" />
     </button>
     <button>
      <UserIcon className="size-5" />
     </button>
    </div>
   </div>
  </motion.header>
 );
}
