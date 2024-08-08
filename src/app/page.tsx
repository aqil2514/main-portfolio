import ParticlesAnimation from "@/components/Pages/HeroSection/Particles";
import InfoSection from "@/components/Pages/HeroSection/Section_Info";
import MainContainer from "@/components/layout/container";

export default function Home() {
  return (
    <MainContainer>
      <ParticlesAnimation />
        <InfoSection />
    </MainContainer>
  );
}
