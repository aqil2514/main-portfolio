import Button from "@/components/ui/button";
import { useProfileData } from "../ProfileProvider";
import styles from "../profile.module.css"; // Ganti dengan CSS Module jika digunakan

// Komponen Span
const AnimatedSpan: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => (
  <span
    className={`${styles.animationText} inline-block cursor-default`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </span>
);

export default function Greetings() {
  const { content } = useProfileData();
  const greetingsWords = content.profile["full-stack-developer"].greetings;

  return (
    <div>
      <div>
        {greetingsWords.split(" ").map((word, index) => (
          <AnimatedSpan key={index} delay={index * 0.1}>
            {word + "\u00A0"}
          </AnimatedSpan>
        ))}
      </div>
      <div>
        <Button styleTemplate="yuhomyan" />
      </div>
    </div>
  );
}
