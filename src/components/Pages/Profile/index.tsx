"use client";
import React, { useEffect, useRef } from "react";
import DialogComponent from "../../General/Dialog";
import Profession from "./Profession";
import { applyTransition, styles } from "@/utils/utils-animation";
import useStore from "@/lib/store";
import { useSearchParams } from "next/navigation";

export default function Profile() {
  const profileRef = useRef<null | HTMLDivElement>(null);
  const { setField } = useStore();
  const searchParam = useSearchParams();

  useEffect(() => {
    const field = searchParam.get("field") as GenType.FieldType | null;

    if (!field) {
      setField("unselected");
    } else {
      setField(field);
    }

    if (profileRef.current) return applyTransition(profileRef.current);
  }, [setField, searchParam]);
  return (
    <div style={styles} ref={profileRef}>
      <div className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden">
        <h1>Profile Saya sebagai seorang</h1>
        <DialogComponent />
      </div>
      <Profession />
    </div>
  );
}
