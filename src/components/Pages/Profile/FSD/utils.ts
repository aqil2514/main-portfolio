import { useEffect, useState } from "react";

export const certifHandler = (certifRef:React.MutableRefObject<HTMLDivElement | null>) => {
    if (certifRef.current) {
      const target = certifRef.current;
      const scrollY = target.offsetTop - 50;

      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
      return;
    }

    return;
  };

export const useAnimatedButton = (greetingsWords: string) => {
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

  return { showButtons };
};
