import clsx from "clsx";
import React from "react";

export default function MainContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
    return(

  <div className={clsx("bg-gray-900 w-full min-h-screen text-white py-20 px-4", className)}>
    {children}
  </div>
    )
}