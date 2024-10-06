"use client";

import DialogComponent from "@/components/General/Dialog";
import useStore from "@/lib/store";
import { applyTransition, styles } from "@/lib/utils-animation";
import { useEffect, useRef } from "react";
import Profession from "./Profession";
import { useSearchParams } from "next/navigation";

export default function Projects() {
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const { setField } = useStore();
  const searchParam = useSearchParams();

  useEffect(() => {

    const field = searchParam.get("field") as GenType.FieldType | null;

    if (!field) {
      setField("unselected");
    } else {
      setField(field);
    }

    if (projectsRef.current) return applyTransition(projectsRef.current);
  }, [setField, searchParam]);
  return (
    <div style={styles} ref={projectsRef}>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
      <h1>Project Saya sebagai seorang</h1>
        <DialogComponent />
      </div>
      <Profession />
    </div>
  );
}
