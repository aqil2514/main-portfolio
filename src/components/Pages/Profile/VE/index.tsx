import ProfessionContainer from "@/components/layout/Containers/Profession";
import { AnimatedIcons } from "../components";
import Greetings from "./Greetings";
import { icons } from "./data";

export default function VideoEditorProfession() {
  return (
    <div>
      <ProfessionContainer>
        <AnimatedIcons icons={icons} />
        <Greetings />
      </ProfessionContainer>
    </div>
  );
}
