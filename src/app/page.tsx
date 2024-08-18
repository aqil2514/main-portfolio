import MainContainer from "@/components/layout/Containers/Main";
import ParticlesAnimation from "@/components/Pages/HeroSection/Particles";
import InfoSection from "@/components/Pages/HeroSection/Section_Info";

export default function Home() {
  return (
    <MainContainer>
      <ParticlesAnimation />
        <InfoSection />
    </MainContainer>
  );
}
