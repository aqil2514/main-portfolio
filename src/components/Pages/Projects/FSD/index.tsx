import { projects } from "./data";
import { ProjectsList } from "../components";
import { useEffect, useRef } from "react";
import { applyTransition, styles } from "@/lib/utils-animation";

export default function FullStackDeveloperProjects() {
  const fsdRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (fsdRef.current) return applyTransition(fsdRef.current);
  }, []);

  return (
    <div style={styles} className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={fsdRef}>
      <ProjectsList projects={projects} />
    </div>
  );
}
