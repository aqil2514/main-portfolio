import React from "react";
import Greetings from "./Greetings";
import { AnimatedIcons } from "../components";
import { icons } from "./misc";

export default function WriterProfession() {
  return (
    <div>
      <div className="grid grid-cols-[30%_auto] p-4 min-h-screen">
        <AnimatedIcons icons={icons} />
        <Greetings />
      </div>
    </div>
  );
}
