import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

declare global {
 interface String {
  toSlug(): string;
 }
}

String.prototype.toSlug = function (this: string) {
 return this.toLowerCase().replaceAll(" ", "-");
};

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export function Sleep(duration: number = 1000) {
 return new Promise((resolve) => setTimeout(resolve, duration));
}
