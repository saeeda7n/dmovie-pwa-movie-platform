import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}
export function Sleep(duration: number = 1000) {
 return new Promise((resolve) => setTimeout(resolve, duration));
}
