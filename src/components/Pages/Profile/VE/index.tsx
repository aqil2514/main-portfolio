import { AnimatedIcons } from "../components";
import Greetings from "./Greetings";
import { icons } from "./misc";

export default function VideoEditorProfession() {
  return (
    <div>
      <div className="grid grid-cols-[30%_auto] p-4 min-h-screen">
        <AnimatedIcons icons={icons} />
        <Greetings />
      </div>
    </div>
  );
}
