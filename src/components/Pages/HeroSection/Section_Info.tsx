import Button_CTA from "./Button_CTA";
import SocialMedia from "./SocialMedia";
import TypingAnimation from "./TypingAnimation";

export default function InfoSection() {
  return (
    <div className="w-full min-h-screen z-30 relative pt-48 px-4 text-center">
      <p>Halo! Saya</p>
      <p className="text-white text-2xl md:text-5xl font-young-serif">Muhamad Aqil Maulana</p>
      <TypingAnimation />
      <Button_CTA />
      <SocialMedia />
    </div>
  );
}
