import { ProjectsList } from "../components";
import { useEffect, useRef } from "react";
import { applyTransition, styles } from "@/lib/utils-animation";
import { projects } from "./data";

export default function VideoEditorProjects() {
  const ve = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (ve.current) return applyTransition(ve.current);
  }, []);

  return (
    <div style={styles} className="grid grid-cols-2 gap-4" ref={ve}>
      <ProjectsList projects={projects} />
    </div>
  );
}