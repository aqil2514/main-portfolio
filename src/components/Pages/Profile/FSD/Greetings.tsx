import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { useProfileData } from "../ProfileProvider";
import styles from "../profile.module.css"; // Ganti dengan CSS Module jika digunakan
import { useRouter } from "next/navigation";
import { certifHandler, useAnimatedButton } from "./utils";

// Komponen Span
const AnimatedSpan: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => (
  <span
    className={`${styles.fadeIn} inline-block cursor-default`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </span>
);

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
      {showButtons && (
        <div className="flex gap-4 justify-center mt-12">
          <Button
            styleNumber={7}
            styleTemplate="yuhomyan"
            className={`!font-young-serif !font-bold ${styles.fadeIn}`}
            onClick={() => certifHandler(certifRef)}
          >
            Sertifikat
          </Button>
          <Button
            styleNumber={7}
            styleTemplate="yuhomyan"
            className={`!font-young-serif !font-bold ${styles.fadeIn}`}
            onClick={() => router.replace("/projects?category=fsd")}
          >
            Proyek
          </Button>
        </div>
      )}
    </div>
  );
}
