"use client";
import React, {
 createContext,
 HTMLAttributes,
 PropsWithChildren,
 useContext,
 useEffect,
 useState,
} from "react";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { useQuery } from "@tanstack/react-query";
import { getMovieVideos, getTvShowVideos } from "@/server/actions/movieDB";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";

type TrailerDialogProps = {
 mediaId: number;
 mediaType: MediaType;
};

type TrailerContextProps =
 | {
    open: (props: TrailerDialogProps) => void;
    state: false;
   }
 | {
    close: () => void;
    state: true;
    props: TrailerDialogProps | null;
   };

const trailerDialogContext = createContext<null | TrailerContextProps>(null);

export const useTrailerContext = () => useContext(trailerDialogContext)!;
const TrailerDialog = ({ children }: PropsWithChildren) => {
 const lenis = useLenis();
 const [state, setState] = useState<null | TrailerDialogProps>(null);
 const { data, isLoading } = useQuery({
  enabled: !!state,
  queryKey: [state?.mediaId, state?.mediaType],
  queryFn: () =>
   state?.mediaType === "movie"
    ? getMovieVideos(state?.mediaId!)
    : getTvShowVideos(state?.mediaId!),
 });

 useEffect(() => {
  if (state) lenis?.stop();
  else lenis?.start();
 }, [state]);

 return (
  <trailerDialogContext.Provider
   value={{
    close: () => setState(null),
    open: (props: TrailerDialogProps) => setState(props),
    state: !!state?.mediaId,
    props: null,
   }}
  >
   {children}

   <AnimatePresence>
    {!!state && (
     <Dialog
      static
      open={!!state}
      onClose={() => setState(null)}
      className="relative z-50"
     >
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       className="fixed inset-0 bg-black/80 backdrop-blur"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
       <DialogPanel
        as={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="w-full max-w-5xl space-y-4 rounded-lg border border-zinc-950 bg-black p-5 lg:p-12"
       >
        <DialogTitle className="flex items-center text-lg font-bold">
         {!isLoading && data?.results?.length ? (
          data?.results[0].name
         ) : (
          <div className="h-6 w-72 animate-pulse rounded-md bg-zinc-950" />
         )}
         <button className="ms-auto" onClick={() => setState(null)}>
          <CloseIcon />
         </button>
        </DialogTitle>
        <DialogBody>
         {isLoading || !data || data.results.length <= 0 ? (
          <div
           className={cn(
            "flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-950 text-2xl font-medium",
            {
             "animate-pulse": isLoading,
            },
           )}
          >
           {!isLoading && "No Video"}
          </div>
         ) : (
          <iframe
           className="aspect-video w-full rounded-lg bg-zinc-950"
           src={`https://www.youtube.com/embed/${data?.results[0].key}`}
          />
         )}
        </DialogBody>
       </DialogPanel>
      </div>
     </Dialog>
    )}
   </AnimatePresence>
  </trailerDialogContext.Provider>
 );
};

export default TrailerDialog;

export function PlayTrailerButton({
 mediaType,
 mediaId,
 children,
 ...props
}: TrailerDialogProps & PropsWithChildren & HTMLAttributes<HTMLButtonElement>) {
 const trailerContext = useTrailerContext();

 function handleOnClick() {
  if (!trailerContext.state) {
   trailerContext.open({ mediaType, mediaId });
  }
 }

 return (
  <button {...props} onClick={handleOnClick}>
   {children}
  </button>
 );
}
