"use client";

import { applyTransition, styles } from "@/lib/utils-animation";
import { useEffect, useRef } from "react";

export default function Projects() {
  const projectsRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (projectsRef.current) return applyTransition(projectsRef.current);
  }, []);
  return (
    <div style={styles} ref={projectsRef}>
      Projects Page
    </div>
  );
}
