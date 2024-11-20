import { ProjectsList } from "../components";
import { useEffect, useRef } from "react";
import { applyTransition, styles } from "@/lib/utils-animation";
import { projects } from "./data";

export default function WareHouseAdminProjects() {
  const es = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (es.current) return applyTransition(es.current);
  }, []);

  return (
    <div style={styles} className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={es}>
      <ProjectsList projects={projects} />
    </div>
  );
}
