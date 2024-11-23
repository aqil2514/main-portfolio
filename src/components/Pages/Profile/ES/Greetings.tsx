import { useAnimatedButton } from "../utils";
import { useProfileData } from "../ProfileProvider";
import { AnimatedSpan, CTA_Buttons } from "../_components";
import GreetingsContainer from "@/components/layout/Containers/Greetings";

export default function Greetings() {
  const { content } = useProfileData();
  const greetingsWords = content.profile["excel-specialist"].greetings;
  const { showButtons } = useAnimatedButton(greetingsWords);

  return (
    <GreetingsContainer>
      <div>
        {greetingsWords.split(" ").map((word, index) => (
          <AnimatedSpan key={index} delay={index * 0.01}>
            {word + "\u00A0"}
          </AnimatedSpan>
        ))}
      </div>
      {showButtons && <CTA_Buttons projectLink="/projects?field=excel-specialist"/>}
    </GreetingsContainer>
  );
}
