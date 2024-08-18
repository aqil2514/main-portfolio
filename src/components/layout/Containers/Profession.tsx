import clsx from "clsx";
import React from "react";

export default function ProfessionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
    return(

  <div className={clsx("grid grid-rows-2 gap-4 md:grid-cols-[30%_auto] p-4 min-h-screen", className)}>
    {children}
  </div>
    )
}
