"use client";
import React, { PropsWithChildren, useState } from "react";
import { useClientContext } from "@/components/clientContext";
import {
 Combobox,
 ComboboxButton,
 ComboboxInput,
 ComboboxOption,
 ComboboxOptions,
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useCreateURL } from "@/hooks/useCreateURL";
import { useRouter } from "next/navigation";

export function Filters() {
 return (
  <div className="container mt-16 grid grid-cols-12 rounded-lg bg-zinc-900 py-5">
   <InputWrapper name="Genre">
    <SelectGenres />
   </InputWrapper>
  </div>
 );
}

function InputWrapper({
 children,
 name,
}: PropsWithChildren & { name: string }) {
 return (
  <div className="col-span-3 flex flex-col gap-1">
   <span className="text-xs font-medium">{name}</span>
   {children}
  </div>
 );
}

function SelectGenres() {
 const router = useRouter();
 const createURL = useCreateURL("with_genres");
 const { genres } = useClientContext();
 const [query, setQuery] = useState("");
 const [selected, setSelected] = useState<Genre>(genres.movieGenres.genres[0]);
 const filteredItems =
  query === ""
   ? genres.movieGenres.genres
   : genres.movieGenres.genres.filter((genre) => {
      return genre.name.toLowerCase().includes(query.toLowerCase());
     });

 return (
  <Combobox
   value={selected}
   onChange={(value) => {
    setSelected(value);
    router.replace(createURL(value.id));
   }}
   onClose={() => setQuery("")}
  >
   <div className="relative">
    <ComboboxInput
     className={cn(
      "w-full rounded-lg border-none bg-zinc-950 py-1.5 pl-3 pr-8 text-sm/6 text-gray-50",
      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
     )}
     displayValue={(person: any) => person.name}
     onChange={(event) => setQuery(event.target.value)}
    />
    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
     <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
    </ComboboxButton>
   </div>

   <ComboboxOptions
    anchor="bottom"
    transition
    className={cn(
     "!max-h-96 w-[var(--input-width)] rounded-xl border border-white/5 bg-zinc-950 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
     "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
    )}
   >
    {filteredItems.map((genre) => (
     <ComboboxOption
      key={genre.id}
      value={genre}
      className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
     >
      <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
      <div className="text-sm/6 text-white">{genre.name}</div>
     </ComboboxOption>
    ))}
   </ComboboxOptions>
  </Combobox>
 );
}
