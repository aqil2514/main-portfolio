import React from "react";
import Greetings from "./Greetings";
import { AnimatedIcons } from "../_components";
import { icons } from "./data";
import { useProfileData } from "../ProfileProvider";
import ProfessionContainer from "@/components/layout/Containers/Profession";
import WorkExperience from "./WorkExperience";

export default function WareHouseAdminProfession() {
  const { certifRef } = useProfileData();

  // Next lanjutin agar responsive

  return (
    <div>
      <ProfessionContainer>
        <AnimatedIcons icons={icons} />
        <Greetings />
      </ProfessionContainer>
        <WorkExperience />
      {/* <div className="min-h-screen py-4" ref={certifRef}>
        <Certificates certificates={certificates} />
      </div> */}
    </div>
  );
}
