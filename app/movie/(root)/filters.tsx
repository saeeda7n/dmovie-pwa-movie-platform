"use client";
import React, { Key, useState } from "react";
import { useClientContext } from "@/components/clientContext";
import {
 Autocomplete,
 AutocompleteItem,
 Select,
 SelectItem,
 Slider,
} from "@nextui-org/react";
import { EarthIcon } from "lucide-react";
import { useCreateURL } from "@/hooks/useCreateURL";
import { useRouter } from "next/navigation";

export function Filters() {
 return (
  <div className="container mt-16 grid grid-cols-12 gap-5 rounded-lg bg-zinc-900 py-5">
   <ReleaseYearRange />
   <SelectLanguage />
   <SelectGenres />
   <SelectCountry />
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
   className="col-span-3"
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

function SelectGenres() {
 const router = useRouter();
 const createURL = useCreateURL("with_genres");
 const { genres } = useClientContext();
 function handleValueChange(value: Key | null) {
  const url = createURL(value);
  router.replace(url);
 }
 return (
  <Autocomplete
   onSelectionChange={handleValueChange}
   label="Genres"
   variant="bordered"
   defaultItems={genres.movieGenres.genres}
   className="col-span-3"
   size="md"
  >
   {(item) => (
    <AutocompleteItem
     data-lenis-prevent
     data-lenis-prevent-wheel
     data-lenis-prevent-touch
     key={item.id}
    >
     {item.name}
    </AutocompleteItem>
   )}
  </Autocomplete>
 );
}
function SelectCountry() {
 const router = useRouter();
 const createURL = useCreateURL("with_origin_country");
 const { countries } = useClientContext();
 function handleValueChange(value: Key | null) {
  const url = createURL(value);
  router.replace(url);
 }
 return (
  <Autocomplete
   onSelectionChange={handleValueChange}
   label="Country"
   variant="bordered"
   defaultItems={countries}
   className="col-span-3"
   size="md"
  >
   {(item) => (
    <AutocompleteItem
     data-lenis-prevent
     data-lenis-prevent-wheel
     data-lenis-prevent-touch
     key={item.iso_3166_1}
    >
     {item.english_name}
    </AutocompleteItem>
   )}
  </Autocomplete>
 );
}
function ReleaseYearRange() {
 const gtUrl = useCreateURL("primary_release_date.gte");
 const ltUrl = useCreateURL("primary_release_date.lte");
 const [value, setValue] = useState<[number, number]>([
  1888,
  new Date().getFullYear(),
 ]);
 return (
  <Slider
   label="Release Year"
   size="sm"
   step={1}
   minValue={1888}
   maxValue={new Date().getFullYear()}
   defaultValue={[1888, new Date().getFullYear()]}
   className="col-span-3"
   renderValue={(props) => value.join(" - ")}
   onChange={(v) => setValue(v as [number, number])}
  />
 );
}
