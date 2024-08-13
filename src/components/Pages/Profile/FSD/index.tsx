import Certificate from "./Certif";
import Greetings from "./Greetings";
import Icons from "./Icons";
import { useProfileData } from "../ProfileProvider";

export default function FullStackDeveloperProfession() {
  const { certifRef } = useProfileData();
  return (
    <div>
      <div className="grid grid-cols-[30%_auto] p-4 min-h-screen">
        <Icons />
        <Greetings />
      </div>
      <div className="min-h-screen py-4" ref={certifRef}>
        <Certificate />
      </div>
    </div>
  );
}
