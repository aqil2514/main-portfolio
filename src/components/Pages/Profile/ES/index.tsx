import React from "react";
import Greetings from "./Greetings";
import { AnimatedIcons } from "../components";
import { icons } from "./data";
import { useProfileData } from "../ProfileProvider";
import ProfessionContainer from "@/components/layout/Containers/Profession";

export default function ExcelSpecialistProfession() {
  const { certifRef } = useProfileData();

  return (
    <div>
      <ProfessionContainer>
        <AnimatedIcons icons={icons} />
        <Greetings />
      </ProfessionContainer>
    </div>
  );
}
