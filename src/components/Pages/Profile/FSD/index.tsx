import { useRef } from "react";
import Certificate from "./Certif";
import Greetings from "./Greetings";
import Icons from "./Icons";

export default function FullStackDeveloperProfession() {
  const certifRef = useRef<null | HTMLDivElement>(null);
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
