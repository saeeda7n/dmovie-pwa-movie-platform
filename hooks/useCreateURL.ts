import { usePathname, useSearchParams } from "next/navigation";

export function useCreateURL(key: string): (value: any) => string {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 const params = new URLSearchParams(searchParams);

 return (value: any) => {
  if (value) params.set(key, String(value));
  else params.delete(key);
  return `${pathname}?${params.toString()}` as string;
 };
}
