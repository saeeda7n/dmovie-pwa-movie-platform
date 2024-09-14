"use client";
import React, { useRef } from "react";
import {
 motion,
 useMotionTemplate,
 useScroll,
 useTransform,
} from "framer-motion";
import { SearchIcon, UserIcon } from "lucide-react";

export function Header() {
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
    <h1 className="text-lg font-bold">DMovie</h1>

    <ul className="contents text-xs font-medium">
     <li>Home</li>
     <li>Movies</li>
     <li>TV Shows</li>
    </ul>

    <div className="ms-auto flex items-center gap-3">
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
