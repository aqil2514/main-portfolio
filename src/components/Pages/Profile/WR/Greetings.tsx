import { useAnimatedButton } from "../utils";
import { useProfileData } from "../ProfileProvider";
import { AnimatedSpan, CTA_Buttons } from "../components";

export default function Greetings() {
  const { content } = useProfileData();
  const greetingsWords = content.profile.writer.greetings;
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
      {showButtons && <CTA_Buttons projectLink="/projects?category=wr"/>}
    </div>
  );
}
