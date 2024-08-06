import ParticlesAnimation from "@/components/HeroSection/Particles";
import InfoSection from "@/components/HeroSection/Section_Info";
import MainContainer from "@/components/layout/container";

export default function Home() {
  return (
    <MainContainer>
      <ParticlesAnimation />
        <InfoSection />
    </MainContainer>
  );
}
