import React from "react";
import Greetings from "./Greetings";
import { AnimatedIcons, Certificates } from "../components";
import { certificates, icons } from "./misc";
import { useProfileData } from "../ProfileProvider";

export default function WriterProfession() {
  const { certifRef } = useProfileData();

  return (
    <div>
      <div className="grid grid-cols-[30%_auto] p-4 min-h-screen">
        <AnimatedIcons icons={icons} />
        <Greetings />
      </div>
      <div className="min-h-screen py-4" ref={certifRef}>
        <Certificates certificates={certificates} />
      </div>
    </div>
  );
}
