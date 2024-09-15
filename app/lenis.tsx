"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Lenis({ children }: React.PropsWithChildren) {
 return (
  <ReactLenis options={{ duration: 1 }} root>
   {children}
  </ReactLenis>
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
