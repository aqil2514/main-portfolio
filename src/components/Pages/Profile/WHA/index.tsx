import React from "react";
import Greetings from "./Greetings";
import { AnimatedIcons, Certificates } from "../_components";
import { certificates, icons } from "./data";
import { useProfileData } from "../ProfileProvider";
import ProfessionContainer from "@/components/layout/Containers/Profession";

export default function WareHouseAdminProfession() {
  const { certifRef } = useProfileData();

  return (
    <div>
      <ProfessionContainer>
        <AnimatedIcons icons={icons} />
        <Greetings />
      </ProfessionContainer>
      <div className="min-h-screen py-4" ref={certifRef}>
        <Certificates certificates={certificates} />
      </div>
    </div>
  );
}
