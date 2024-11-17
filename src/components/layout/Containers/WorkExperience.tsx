import clsx from "clsx";
import React from "react";

export default function WorkExperienceContainer({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
      return(
  
    <div className={clsx("border-t-8 border-double border-white md:border-none p-8", className)}>
      {children}
    </div>
      )
  }
  