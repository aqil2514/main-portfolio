import { projects } from "./data";
import { ProjectsList } from "../components";
import { useEffect, useRef } from "react";
import { applyTransition, styles } from "@/utils/utils-animation";

export default function WriterProjects() {
  const wrRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (wrRef.current) return applyTransition(wrRef.current);
  }, []);

  return (
    <div style={styles} className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={wrRef}>
      <ProjectsList projects={projects} />
    </div>
  );
}
