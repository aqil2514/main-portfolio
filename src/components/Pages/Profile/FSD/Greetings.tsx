import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { useProfileData } from "../ProfileProvider";
import styles from "../profile.module.css"; // Ganti dengan CSS Module jika digunakan

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
  const { content } = useProfileData();
  const greetingsWords = content.profile["full-stack-developer"].greetings;
  
  // State untuk mengatur visibilitas tombol
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Set timer sesuai dengan durasi animasi
    const animationDuration = greetingsWords.split(" ").length * 0.1 + 0.1;
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, animationDuration * 1000);

    return () => clearTimeout(timer); // Cleanup timer pada unmount
  }, [greetingsWords]);

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
          >
            Sertifikat
          </Button>
          <Button
            styleNumber={7}
            styleTemplate="yuhomyan"
            className={`!font-young-serif !font-bold ${styles.fadeIn}`}
          >
            Proyek
          </Button>
        </div>
      )}
    </div>
  );
}
