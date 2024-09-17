"use client";
import React, { Key, useState } from "react";
import { useClientContext } from "@/components/clientContext";
import {
 Autocomplete,
 AutocompleteItem,
 Select,
 SelectItem,
} from "@nextui-org/react";
import { EarthIcon } from "lucide-react";
import { useCreateURL } from "@/hooks/useCreateURL";
import { useRouter } from "next/navigation";

export function Filters() {
 return (
  <div className="container mt-16 grid grid-cols-12 gap-5 rounded-lg bg-zinc-900 py-5">
   <SelectLanguage />
  </div>
 );
}

function SelectLanguage() {
 const router = useRouter();
 const createURL = useCreateURL("with_original_language");
 const { languages } = useClientContext();
 function handleValueChange(value: Key | null) {
  const url = createURL(value);
  router.replace(url);
 }
 return (
  <Autocomplete
   onSelectionChange={handleValueChange}
   label="Languages"
   variant="bordered"
   defaultItems={languages}
   className="col-span-4"
   size="md"
  >
   {(item) => (
    <AutocompleteItem
     data-lenis-prevent
     data-lenis-prevent-wheel
     data-lenis-prevent-touch
     key={item.iso_639_1}
    >
     {item.english_name}
    </AutocompleteItem>
   )}
  </Autocomplete>
 );
}
