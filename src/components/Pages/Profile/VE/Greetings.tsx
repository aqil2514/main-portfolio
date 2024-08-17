import React from "react";
import { useProfileData } from "../ProfileProvider";
import { useAnimatedButton } from "../utils";
import { AnimatedSpan, CTA_Buttons } from "../components";

export default function Greetings() {
  const { content } = useProfileData();
  const greetingsWords = content.profile["video-editor"].greetings;
  const { showButtons } = useAnimatedButton(greetingsWords);

  return (
    <div>
      <div>
        {greetingsWords.split(" ").map((word, index) => (
          <AnimatedSpan key={index} delay={index * 0.1}>
            {word + "\u00A0"}
          </AnimatedSpan>
        ))}
      </div>
      {showButtons && <CTA_Buttons projectLink="/projects?category=ve"/>}
    </div>
  );
}
