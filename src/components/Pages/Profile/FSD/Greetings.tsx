import React from "react";
import Button from "@/components/ui/shadcn-button";
import { useProfileData } from "../ProfileProvider";
import styles from "../profile.module.css"; // Ganti dengan CSS Module jika digunakan
import { useRouter } from "next/navigation";
import { certifHandler, useAnimatedButton } from "../utils";
import { AnimatedSpan, CTA_Buttons } from "../components";

export default function Greetings() {
  const { content, certifRef } = useProfileData();
  const greetingsWords = content.profile["full-stack-developer"].greetings;
  const router = useRouter();
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
      {showButtons && <CTA_Buttons projectLink="/projects?category=fsd"/>}
    </div>
  );
}
