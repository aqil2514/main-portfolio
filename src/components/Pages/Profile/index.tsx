"use client";
import React, { useEffect, useRef } from "react";
import DialogComponent from "../../General/Dialog";
import Profession from "./Profession";
import { applyTransition, styles } from "@/lib/utils-animation";
import useStore from "@/lib/store";

export default function Profile() {
  const profileRef = useRef<null | HTMLDivElement>(null);
  const { setField } = useStore();

  useEffect(() => {
    setField("unselected");
    if (profileRef.current) return applyTransition(profileRef.current);
  }, [setField]);
  return (
    <div style={styles} ref={profileRef}>
      <div className="flex gap-4 mb-4">
        <h1>Profile Saya sebagai seorang</h1>
        <DialogComponent />
      </div>
      <Profession />
    </div>
  );
}
