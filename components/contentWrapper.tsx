import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const ContentWrapper = ({
 children,
 className,
 ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
 return (
  <div
   className={cn("min-h-screen space-y-12 overflow-x-hidden py-16", className)}
   {...props}
  >
   {children}
  </div>
 );
};

export default ContentWrapper;
