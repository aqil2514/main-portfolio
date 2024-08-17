"use client";

import DialogComponent from "@/components/General/Dialog";
import { applyTransition, styles } from "@/lib/utils-animation";
import { useEffect, useRef } from "react";

export default function Projects() {
  const projectsRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (projectsRef.current) return applyTransition(projectsRef.current);
  }, []);
  return (
    <div style={styles} ref={projectsRef}>
      <div className="flex gap-4 mb-4">
        <h1>Project Saya sebagai seorang</h1>
        <DialogComponent />
      </div>
    </div>
  );
}
