import Greetings from "./Greetings";
import { useProfileData } from "../ProfileProvider";
import { AnimatedIcons, Certificates } from "../components";
import { certificates, icons } from "./data";
import ProfessionContainer from "@/components/layout/Containers/Profession";

export default function FullStackDeveloperProfession() {
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
